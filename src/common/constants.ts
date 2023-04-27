import { ROUTE } from '@/common/routes'

export const API_URL = import.meta.env.VITE_API_URL || ''
export const BASE_API_URL = API_URL + '/api'

export const NAVIGATION_LINKS = [
  {
    name: 'routes.home',
    path: ROUTE.home
  },
  {
    name: 'routes.lessons',
    path: ROUTE.about
  },
  {
    name: 'routes.about',
    path: ROUTE.about
  }
]

export const PROFILE_LINKS = [
  {
    name: 'routes.dashboard',
    path: ROUTE.dashboard,
    icon: 'dashboard-icon',
  },
  {
    name: 'routes.settings',
    path: ROUTE.settings,
    icon: 'settings-icon',
  },
  // {
  //   name: 'routes.support',
  //   path: ROUTE.about,
  //   icon: 'support-icon',
  // },
]

export enum AVAILABLE_LOCALE {
  ru = 'ru',
  uz = 'uz',
  en = 'en',
}

export const DEFAULT_LOCALE = AVAILABLE_LOCALE.ru

// export const DEFAULT_AVATAR = 'src/assets/images/avatar.png'
export const DEFAULT_AVATAR = await import('@/assets/images/avatar.png')

export const CARD_IMAGES = [
  await import('@/assets/images/subject/subject-1.png'),
  await import('@/assets/images/subject/subject-2.png'),
  await import('@/assets/images/subject/subject-3.png'),
  await import('@/assets/images/subject/subject-4.png'),
  await import('@/assets/images/subject/subject-5.png'),
  await import('@/assets/images/subject/subject-6.png'),
  await import('@/assets/images/subject/subject-7.png'),
  await import('@/assets/images/subject/subject-8.png'),
  await import('@/assets/images/subject/subject-9.png'),
  await import('@/assets/images/subject/subject-10.png'),
]

export enum STORAGE {
  ACCESS_TOKEN = 'access_token',
  REFRESH_TOKEN = 'refresh_token',
  LOCALE = 'locale',
}

export const SPRITE = await import('@/assets/icons/sprite.svg')

export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/