export const USER_PROFILE_ROUTE_PARAM = 'userName'

export const ROUTES = {
  home: '/',
  settings: '/settings',

  account: '/profile',
  login: '/login',
  logout: '/logout',
  register: '/register',

  userProfile: `/profile/:${USER_PROFILE_ROUTE_PARAM}`,

  notFound: '/404'
} as const

export const ROUTE_DEFAULT = ROUTES.home

const replaceParam = (route: string, param: string, value: string) => {
  return route.replace(`:${param}`, value)
}

export const getUserProfileRoute = (userName: string) => {
  return replaceParam(ROUTES.userProfile, USER_PROFILE_ROUTE_PARAM, userName)
}
