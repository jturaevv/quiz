import type { NavigationGuard } from 'vue-router'
import { ROUTE } from '@/common/routes'
import { useAuthStore } from '@/stores/auth'
import { useUserStore } from '@/stores/user'

export const AuthController: NavigationGuard = (to, _from, next): void => {
  const authStore = useAuthStore()

  if (authStore.accessToken) return next(ROUTE.home)
  if (to.path === ROUTE.authIndex) return next(ROUTE.login)

  next()
}

export const ProfileController: NavigationGuard = (to, _from, next): void => {
  if (to.path === ROUTE.profileIndex) return next(ROUTE.dashboard)

  next()
}

export const DefaultController: NavigationGuard = async (to, _from, next): Promise<void> => {
  const authStore = useAuthStore()
  const userStore = useUserStore()

  if (!authStore.accessToken) return next()
  if (!userStore.user) {
    try {
      await userStore.getUser()
    } catch (error) {
      authStore.logout()
    }
  }

  next()
}

export const AuthGuard: NavigationGuard = async (_to, _from, next): Promise<void> => {
  const authStore = useAuthStore()
  const userStore = useUserStore()

  if (!authStore.accessToken) return next(ROUTE.authIndex)

  if (!userStore.user) {
    try {
      await userStore.getUser()
    } catch (error) {
      authStore.logout()
      return next(ROUTE.authIndex)
    }
  }

  next()
}