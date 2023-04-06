import ROUTES from '@/common/routes'

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