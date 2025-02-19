import { LoginRequestSchema, validateRegisterRequest } from '@shared-types/auth'
import type { AuthUser, LoginErrorKey, LoginRequest, RegisterErrorKey, RegisterRequest } from '@shared-types/dto'
import { failure, type Result, success } from '@shared-types/result'

import type { Auth } from '@/domain/auth'
import { authApi } from '@/infrastructure/api'
import { AuthRepository } from '@/infrastructure/repositories'

type ShouldRememberAuth = { shouldRemember?: boolean }

export type LoginCredentials = LoginRequest & ShouldRememberAuth
type LoginResult = Result<LoginErrorKey, AuthUser>

export type RegisterCredentials = RegisterRequest & ShouldRememberAuth & { confirmPassword: string }
export type AuthServiceRegisterErrorKey = RegisterErrorKey | 'passwords-don\'t-match'
type RegisterResult = Result<AuthServiceRegisterErrorKey[], AuthUser>

export const AuthService = {
  getInitialAuth: async (): Promise<Auth> => {
    const authToken = AuthRepository.getAuthToken()

    if (!authToken) {
      return { status: 'unauthenticated' }
    }

    const loginResponse = await authApi.getAuthUserByToken(authToken)

    if (loginResponse.status === 'error') {
      return { status: 'unauthenticated' }
    }

    AuthRepository.saveAuthToken(loginResponse.data.token)

    return { status: 'authenticated', user: loginResponse.data.user }
  },

  login: async (loginCredentials: LoginCredentials): Promise<LoginResult> => {
    const shouldRemember = loginCredentials.shouldRemember

    const loginRequest: LoginRequest = {
      userNameOrEmail: loginCredentials.userNameOrEmail,
      password: loginCredentials.password
    }

    const loginRequestValidationResult = LoginRequestSchema.safeParse(loginRequest)

    if (!loginRequestValidationResult.success) {
      return failure('invalid-credentials')
    }

    const loginResponse = await authApi.getAuthUserByCredentials(loginRequestValidationResult.data)

    if (loginResponse.status === 'error') {
      return failure(loginResponse.errors)
    }

    if (shouldRemember) {
      AuthRepository.saveAuthToken(loginResponse.data.token)
    }

    return success(loginResponse.data.user)
  },

  logout: () => {
    AuthRepository.removeAuthToken()
  },

  register: async (registerCredentials: RegisterCredentials): Promise<RegisterResult> => {
    if (registerCredentials.password !== registerCredentials.confirmPassword) {
      return failure(['passwords-don\'t-match'])
    }

    const shouldRemember = registerCredentials.shouldRemember

    const registerRequestValidationResult = validateRegisterRequest(registerCredentials)

    if (registerRequestValidationResult.status === 'error') {
      return failure(registerRequestValidationResult.errors)
    }

    const registerResponse = await authApi.createUser(registerRequestValidationResult.data)

    if (registerResponse.status === 'error') {
      return failure(registerResponse.errors)
    }

    if (shouldRemember) {
      AuthRepository.saveAuthToken(registerResponse.data.token)
    }

    return success(registerResponse.data.user)
  }
}
