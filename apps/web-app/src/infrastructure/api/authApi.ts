import type { LoginCredentials, LoginResponse } from '@shared-types/auth'
import type { AuthUserDTO } from '@shared-types/dto'
import { success } from '@shared-types/result'

const sleep = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms))

const fakeAuthUser: AuthUserDTO = {
  id: '1',
  username: 'user',
  email: 'user@gmail.com',
  permissions: []
}

export const authApi = {
  getAuthUserByCredentials: async (credentials: LoginCredentials): Promise<LoginResponse>  => {
    await sleep()

    console.log(credentials)

    const loginResponse = {
      token: 'token',
      user: fakeAuthUser
    }

    return success(loginResponse)
  },

  getAuthUserByToken: async (authToken: string): Promise<LoginResponse>  => {
    await sleep()

    console.info(authToken)

    const loginResponse = {
      token: 'token',
      user: fakeAuthUser
    }

    return success(loginResponse)
  }
}
