import axios, { type AxiosRequestConfig } from 'axios'
import { BASE_API_URL } from '@/common/constants'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import { ROUTE } from '@/common/routes'
import { ENDPOINT } from '@/common/endpoints'

const instance = axios.create({
  baseURL: BASE_API_URL,
})

instance.interceptors.request.use((config) => {
  const authStore = useAuthStore()
  if (authStore.accessToken) {
    config.headers.Authorization = `Bearer ${authStore.accessToken}`
  }
  
  return config
})

instance.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const authStore = useAuthStore()
    const router = useRouter()
    const config: AxiosRequestConfig & { _retry?: boolean } = error?.config
    
    if (error?.response?.status === 401 && !config?._retry) {
      switch (config.url) {
        case ENDPOINT.login():
        case ENDPOINT.register():
        case ENDPOINT.verification():
          return Promise.reject(error)
      }

      config._retry = true

      try {
        await authStore.refresh()

        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${authStore.accessToken}`,
        }

        return instance(config)
      } catch (error) {
        authStore.logout()
        router.push(ROUTE.authIndex)

        return Promise.reject(error)
      }
    }

    return Promise.reject(error)
  }
)

export const apiClient = instance
