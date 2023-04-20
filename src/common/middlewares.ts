import type { NavigationGuard } from 'vue-router'
import { ROUTE } from '@/common/routes'
import { useAuthStore } from '@/stores/auth'

export const AuthController: NavigationGuard = (to, _from, next): void => {
  const authStore = useAuthStore()

  if (authStore.accessToken) return next(ROUTE.home)
  if (to.path === ROUTE.authIndex) return next(ROUTE.login)

  next()
}

export const AuthGuard: NavigationGuard = (_to, _from, next): void => {
  const authStore = useAuthStore()

  if (!authStore.accessToken) return next(ROUTE.authIndex)

  next()
}