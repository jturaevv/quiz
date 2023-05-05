enum PATTERN {
  id = ':id'
}

export const ROUTE = {
  defaultIndex: '/',
  home: '/',
  about: '/about',
  login: '/auth/login',
  register: '/auth/register',
  authIndex: '/auth',
  profileIndex: '/profile',
  dashboard: '/profile/dashboard',
  settings: '/profile/settings',
  tutorialIndex: '/tutorial',
  subject: (subjectId: number | string = PATTERN.id,) => `/tutorial/subject-${subjectId}`,
  lesson: (subjectId: number | string = PATTERN.id, lessonId: number | string = PATTERN.id) => `/tutorial/subject-${subjectId}/lesson-${lessonId}`,
}