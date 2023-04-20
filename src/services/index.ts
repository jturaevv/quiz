import { apiClient } from '@/plugins/apiClient'
import AuthService from '@/services/auth/auth.service'
import UserService from '@/services/user/user.service'

export const authService = new AuthService(apiClient)
export const userService = new UserService(apiClient)
