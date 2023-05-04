export const ENDPOINT = {
  login: () => '/token/',
  refreshToken: () => '/token/refresh/',
  register: () => '/users/registration/',
  verification: () => '/users/check_verification_code/',
  me: () => '/users/me/',
  userUpdate: (id: number) => `/users/${id}/`,
  subjects: () => '/subjects'
}