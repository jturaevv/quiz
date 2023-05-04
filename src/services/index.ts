import { apiClient } from '@/plugins/apiClient'
import AuthService from '@/services/auth/auth.service'
import UserService from '@/services/user/user.service'
import TutorialService from './tutorial/tutorial.service'

export const authService = new AuthService(apiClient)
export const userService = new UserService(apiClient)
export const tutorialService = new TutorialService(apiClient)
