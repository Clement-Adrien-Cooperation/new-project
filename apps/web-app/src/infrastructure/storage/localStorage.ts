import type { Locale } from '@/domain/i18n'
import type { Theme } from '@/domain/theme'

export type LocalStorage = {
  authToken: string
  locale: Locale
  theme: Theme
}

export type LocaleStorageKey = keyof LocalStorage

export const getStoredItem = <K extends LocaleStorageKey> (key: K): LocalStorage[K] | null => {
  const value = window.localStorage.getItem(key)

  if (value == null) {
    return null
  }

  try {
    return value === 'undefined' ? null : JSON.parse(value)
  } catch {
    console.warn(`Parsing error for key "${key}"`)
    return null
  }
}

export const removeStoredItem = (key: LocaleStorageKey) => {
  window.localStorage.removeItem(key)
}

export const storeItem = <K extends LocaleStorageKey> (key: K, value: LocalStorage[K]) => {
  window.localStorage.setItem(key, JSON.stringify(value))
}
