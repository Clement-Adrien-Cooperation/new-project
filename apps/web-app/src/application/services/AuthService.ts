import { type LoginCredentials, LoginCredentialsSchema, type LoginErrorKey } from '@shared-types/auth'
import type { AuthUserDTO } from '@shared-types/dto'
import { failure, type Result, success } from '@shared-types/result'

import type { AuthState } from '@/domain/auth'
import { getStoredItem, removeStoredItem, storeItem } from '@/infrastructure/storage'
import { authApi } from '@/infrastructure/api/authApi'

type AuthServiceLoginResponse = Result<LoginErrorKey, AuthUserDTO>

export const AuthService = {
  getInitialAuthState: async (): Promise<AuthState> => {
    const authToken = getStoredItem('authToken')

    if (!authToken) {
      return { status: 'unauthenticated' }
    }

    return { status: 'unauthenticated' }
  },

  login: async (credentials: LoginCredentials, shouldRemember?: boolean): Promise<AuthServiceLoginResponse> => {
    const credentialsValidationResult = LoginCredentialsSchema.safeParse(credentials)

    if (!credentialsValidationResult.success) {
      //! handle errors
      return failure()
    }

    const loginResponse = await authApi.login(credentials)

    if (loginResponse.status === 'error') {
      //! handle errors
      return failure(loginResponse.error)
    }

    if (shouldRemember) {
      storeItem('authToken', loginResponse.data.token)
    }

    return success(loginResponse.data.user)
  },

  logout: () => {
    removeStoredItem('authToken')
  }
}
