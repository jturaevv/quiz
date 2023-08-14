enum PATTERN {
  id = ':id',
  subjectId = ':subjectId',
  lessonId = ':lessonId',
}

export const ROUTE = {
  defaultIndex: '/',
  home: '/',
  about: '/about',
  premium: '/premium',
  support: '/support',
  payment: '/payment',
  login: '/auth/login',
  register: '/auth/register',
  authIndex: '/auth',
  profileIndex: '/profile',
  dashboard: '/profile/dashboard',
  settings: '/profile/settings',
  tutorialIndex: '/tutorial',
  subject: (subjectId: number | string = PATTERN.subjectId) =>
    `/tutorial/subject-${subjectId}`,
  lesson: (
    subjectId: number | string = PATTERN.subjectId,
    lessonId: number | string = PATTERN.lessonId
  ) => `/tutorial/subject-${subjectId}/lesson-${lessonId}`,
  questions: (
    subjectId: number | string = PATTERN.subjectId,
    lessonId: number | string = PATTERN.lessonId
  ) => `/tutorial/subject-${subjectId}/lesson-${lessonId}/questions`,
}
