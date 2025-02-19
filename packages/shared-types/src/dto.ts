import type { Result } from './result'

export type DefaultErrorKey = 'unexpected-error'

export type BadRequestKey = 'bad-request'
export type ForbiddenKey = 'forbidden'
export type NotFoundKey = 'not-found'
export type UnauthorizedKey = 'unauthorized'

export type AuthUser = {
  id: string
  username: string
  email: string
  permissions: string[]
}

export type LoginRequest = {
  userNameOrEmail: string
  password: string
}

export type LoginErrorKey =
  | BadRequestKey
  | DefaultErrorKey
  | 'invalid-credentials'

export type LoginResponseData = {
  token: string
  user: AuthUser
}

export type LoginResponse = Result<LoginErrorKey, LoginResponseData>

export type RegisterRequest = {
  username: string
  email: string
  password: string
}

export type EmailErrorKey =
  | 'email-already-exists'
  | 'email-invalid'

export type PasswordErrorKey =
  | 'password-require-number'
  | 'password-require-special-char'
  | 'password-too-long'
  | 'password-too-short'

export type UsernameErrorKey =
  | 'username-already-exists'
  | 'username-invalid-characters'
  | 'username-no-spaces'
  | 'username-too-long'
  | 'username-too-short'

export type RegisterErrorKey =
  | BadRequestKey
  | DefaultErrorKey
  | EmailErrorKey
  | PasswordErrorKey
  | UsernameErrorKey

export type RegisterResponse = Result<RegisterErrorKey[], LoginResponseData>
