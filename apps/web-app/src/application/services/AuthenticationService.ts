import type { AuthenticationState } from '@/domain/authentication'
import { getStoredItem, removeStoredItem, storeItem } from '@/infrastructure/storage'

export const AuthenticationService = {
  getInitialAuthenticationState: async (): Promise<AuthenticationState> => {
    const authenticationToken = getStoredItem('authToken')

    if (!authenticationToken) {
      return { status: 'unauthenticated' }
    }

    return { status: 'unauthenticated' }
  },

  login: async (username: string, password: string, shouldRemember: boolean) => {
    console.log(username, password, shouldRemember)
  },

  logout: () => {
    removeStoredItem('authToken')
  },

  saveToken: (token: string) => {
    storeItem('authToken', token)
  }
}
