import { getStoredItem, type LocaleStorageKey, removeStoredItem, storeItem } from '@/infrastructure/storage'

const AUTH_TOKEN_KEY: LocaleStorageKey = 'authToken' as const

export const AuthRepository = {
  getAuthToken: (): string | undefined => getStoredItem(AUTH_TOKEN_KEY),

  removeAuthToken: () => removeStoredItem(AUTH_TOKEN_KEY),

  saveAuthToken: (token: string) => storeItem(AUTH_TOKEN_KEY, token)
}
