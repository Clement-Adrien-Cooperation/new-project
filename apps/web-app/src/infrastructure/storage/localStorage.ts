import type { Locale } from '@/domain/i18n'

type LocalStorage = {
  locale: Locale
}

type LocaleStorageKey = keyof LocalStorage

export const clearStore = () => { window.localStorage.clear() }

export const getStoredItem = <K extends LocaleStorageKey> (key: K): LocalStorage[K] | undefined => {
  const value = window.localStorage.getItem(key)

  if (value !== null) {
    try {
      return value === 'undefined' ? undefined : JSON.parse(value ?? '')
    } catch {
      console.warn(`Parsing error for key "${key}"`)
      return undefined
    }
  }
}

export const removeStoredItem = (key: LocaleStorageKey) => {
  window.localStorage.removeItem(key)
}

export const storeItem = <K extends LocaleStorageKey> (key: K, value: LocalStorage[K]) => {
  window.localStorage.setItem(key, JSON.stringify(value))
}
