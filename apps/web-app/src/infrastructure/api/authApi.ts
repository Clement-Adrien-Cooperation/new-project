import type { AuthUser, LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from '@shared-types/dto'
import { failure, success } from '@shared-types/result'

const sleep = (ms = 2000) => new Promise(resolve => setTimeout(resolve, ms))

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

const fakeLoad = async (log: unknown) => {
  console.log(log)
  await sleep()
  return fakeLoginResponse
}

export const authApi = {
  getAuthUserByCredentials: async (loginRequest: LoginRequest): Promise<LoginResponse>  => {
    try {
      const loginResponse = await fakeLoad(loginRequest)

      return success(loginResponse)
    } catch (error) {
      console.error(error)
      return failure()
    }
  },

  getAuthUserByToken: async (authToken: string): Promise<LoginResponse>  => {
    try {
      const loginResponse = await fakeLoad(authToken)

      return success(loginResponse)
    } catch (error) {
      console.error(error)
      return failure()
    }
  },

  createUser: async (registerRequest: RegisterRequest): Promise<RegisterResponse>  => {
    try {
      const registerResponse = await fakeLoad(registerRequest)

      return success(registerResponse)
    } catch (error) {
      console.error(error)
      return failure(['unexpected-error'])
    }
  }
}
