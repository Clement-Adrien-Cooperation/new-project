import type { AuthUserDTO } from '@shared-types/dto'

export type AuthState =
  | { status: 'authenticated', user: AuthUserDTO }
  | { status: 'unauthenticated' }

export const AUTH_FORM_FIELDS = {
  email: 'email',
  username: 'username',
  usernameOrEmail: 'usernameOrEmail',
  password: 'password',
  confirmPassword: 'confirmPassword',
  shouldRemember: 'shouldRemember'
} as const

export type AuthFormFields = keyof typeof AUTH_FORM_FIELDS
