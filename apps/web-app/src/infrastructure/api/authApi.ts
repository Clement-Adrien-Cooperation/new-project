import type { AuthUser, LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from '@shared-types/dto'
import { failure, success } from '@shared-types/result'

const sleep = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms))

const fakeAuthUser: AuthUser = {
  id: '1',
  username: 'user',
  email: 'user@gmail.com',
  permissions: []
}

const fakeLoginResponse = {
  token: 'token',
  user: fakeAuthUser
}

export const authApi = {
  getAuthUserByCredentials: async (loginRequest: LoginRequest): Promise<LoginResponse>  => {
    try {
      console.log(loginRequest)

      await sleep()

      return success(fakeLoginResponse)
    } catch (error) {
      console.error(error)
      return failure('unexpected-error')
    }
  },

  getAuthUserByToken: async (authToken: string): Promise<LoginResponse>  => {
    try {
      console.log(authToken)

      await sleep()

      return success(fakeLoginResponse)
    } catch (error) {
      console.error(error)
      return failure('unexpected-error')
    }
  },

  createUser: async (registerRequest: RegisterRequest): Promise<RegisterResponse>  => {
    try {
      console.log(registerRequest)

      await sleep()

      return success(fakeLoginResponse)
    } catch (error) {
      console.error(error)
      return failure(['unexpected-error'])
    }
  }
}
