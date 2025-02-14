export type User = {
  id: string
  email: string
  name: string
}
export type AuthenticationState =
  | { status: 'authenticated', user: User }
  | { status: 'unauthenticated' }

export const AUTHENTICATION_FORM_FIELDS = {
  username: 'username',
  password: 'password',
  rememberMe: 'rememberMe'
} as const

export type AuthenticationFormFields = keyof typeof AUTHENTICATION_FORM_FIELDS
