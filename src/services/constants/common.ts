import ROUTES from '@/services/constants/routes'

export const NAVIGATION_LINKS = [
  {
    name: 'routes.home',
    path: ROUTES.home
  },
  {
    name: 'routes.lessons',
    path: ROUTES.about
  },
  {
    name: 'routes.about',
    path: ROUTES.about
  }
]

export enum AVAILABLE_LOCALE {
  ru = 'ru',
  uz = 'uz',
  en = 'en',
}

// export const DEFAULT_AVATAR = 'src/assets/images/avatar.png'
export const DEFAULT_AVATAR = await import('@/assets/images/avatar.png')