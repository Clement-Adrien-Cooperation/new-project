export const ROUTES = {
  home: '/',
  settings: '/settings',

  login: '/login',
  logout: '/logout',
  profile: '/profile',
  register: '/register',

  notFound: '/404'
} as const

export const ROUTE_DEFAULT = ROUTES.home
