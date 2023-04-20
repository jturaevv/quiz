import { defineStore } from 'pinia'
import type { IUserStore } from '@/services/user/user.interface'
import { userService } from '@/services'
import { User } from '@/services/user/user.service'

export const useUserStore = defineStore('user', {
  state: (): IUserStore => ({
    user: null,
  }),
  actions: {
    async getUser() {
      try {
        const response = await userService.me()
        
        this.user = new User(response.data)

        return response
      } catch (error) {
        return Promise.reject(error)
      }
    },
  }
})
