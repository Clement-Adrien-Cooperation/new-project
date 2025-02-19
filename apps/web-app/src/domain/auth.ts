import type { AuthUser } from '@shared-types/dto'

export type Auth =
  | { status: 'authenticated', user: AuthUser }
  | { status: 'unauthenticated' }

export const AUTH_FORM_FIELDS = {
  email: 'email',
  username: 'username',
  usernameOrEmail: 'usernameOrEmail',
  password: 'password',
  confirmPassword: 'confirmPassword',
  shouldRemember: 'shouldRemember'
} as const

export type AuthFormField = keyof typeof AUTH_FORM_FIELDS
