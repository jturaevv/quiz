import { defineStore } from 'pinia'
import { STORAGE } from '@/common/constants'
import { useLocalStorage } from '@/composables/useLocalStorage'
import { authService } from '@/services'
import type {
  IAuthStore,
  ILoginPayload,
  IRegistrationPayloadStepOne,
  IRegistrationPayloadStepTwo,
} from '@/services/auth/auth.interface'
import { useUserStore } from './user'

export const useAuthStore = defineStore('auth', {
  state: (): IAuthStore => ({
    refreshToken: useLocalStorage<string>(STORAGE.REFRESH_TOKEN, ''),
    accessToken: useLocalStorage<string>(STORAGE.ACCESS_TOKEN, ''),
  }),
  actions: {
    async login(payload: ILoginPayload) {
      try {
        const response = await authService.login(payload)

        this.accessToken = response.data.access
        this.refreshToken = response.data.refresh

        return response
      } catch (error) {
        return Promise.reject(error)
      }
    },

    async registerStepOne(payload: IRegistrationPayloadStepOne) {
      try {
        const response = await authService.register(payload)
        return response
      } catch (error) {
        return Promise.reject(error)
      }
    },

    async registerStepTwo(payload: IRegistrationPayloadStepTwo) {
      try {
        const response = await authService.verification(payload)

        this.accessToken = response.data.access
        this.refreshToken = response.data.refresh

        return response
      } catch (error) {
        return Promise.reject(error)
      }
    },

    async refresh() {
      try {
        const response = await authService.refresh({ refresh: this.refreshToken })

        this.accessToken = response.data.access

        return response
      } catch (error) {
        return Promise.reject(error)
      }
    },

    logout() {
      const userStore = useUserStore()
      const accessToken = useLocalStorage<string>(STORAGE.ACCESS_TOKEN, '')
      const refreshToken = useLocalStorage<string>(STORAGE.REFRESH_TOKEN, '')

      this.accessToken = ''
      this.refreshToken = ''
      accessToken.value = ''
      refreshToken.value = ''
      userStore.user = null

    },
  },
})
