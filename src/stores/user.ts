import { defineStore } from 'pinia'
import type { IUserStore } from '@/services/user/user.interface'
import { userService } from '@/services'
import { User } from '@/services/user/user.service'
import { useAuthStore } from '@/stores/auth'

export const useUserStore = defineStore('user', {
  state: (): IUserStore => ({
    user: null,
  }),
  actions: {
    async getUser() {
      const authStore = useAuthStore()

      try {
        const response = await userService.me()
        
        this.user = new User(response.data)

        return response
      } catch (error) {
        authStore.logout()
        return Promise.reject(error)
      }
    },

    async updateUser(payload: { id: number, formData: FormData }) {
      try {
        await userService.update(payload)
        
        return await this.getUser()
      } catch (error) {
        return Promise.reject(error)
      }
    },
  }
})
