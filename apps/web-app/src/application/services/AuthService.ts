import { type LoginCredentials, LoginCredentialsSchema, type LoginErrorKey } from '@shared-types/auth'
import type { AuthUserDTO } from '@shared-types/dto'
import { failure, type Result, success } from '@shared-types/result'

import type { AuthState } from '@/domain/auth'
import { authApi } from '@/infrastructure/api'
import { AuthRepository } from '@/infrastructure/repositories'

type AuthServiceLoginResponse = Result<LoginErrorKey, AuthUserDTO>

export const AuthService = {
  getInitialAuthState: async (): Promise<AuthState> => {
    const authToken = AuthRepository.getAuthToken()

    if (!authToken) {
      return { status: 'unauthenticated' }
    }

    const loginResponse = await authApi.getAuthUserByToken(authToken)

    if (loginResponse.status === 'error') {
      //! handle errors
      return { status: 'unauthenticated' }
    }

    return { status: 'authenticated', user: loginResponse.data.user }
  },

  login: async (credentials: LoginCredentials, shouldRemember?: boolean): Promise<AuthServiceLoginResponse> => {
    const credentialsValidationResult = LoginCredentialsSchema.safeParse(credentials)

    if (!credentialsValidationResult.success) {
      //! handle errors
      return failure('invalid-credentials')
    }

    const loginResponse = await authApi.getAuthUserByCredentials(credentials)

    if (loginResponse.status === 'error') {
      //! handle errors
      return failure(loginResponse.errors)
    }

    if (shouldRemember) {
      AuthRepository.saveAuthToken(loginResponse.data.token)
    }

    return success(loginResponse.data.user)
  },

  test: (): Result => {
    return failure()
    return success()
  },

  logout: () => {
    AuthRepository.removeAuthToken()
  }
}
