import { DEFAULT_LOCALE, type Locale } from '@/domain/i18n'

import { dictionaries } from '@/infrastructure/i18n'
import { getStoredItem, storeItem } from '@/infrastructure/storage'

const isSupportedLocale = (locale: string): locale is Locale => {
  return Object.keys(dictionaries).includes(locale)
}

export const I18nService = {
  changeLocale: (locale: Locale) => {
    document.documentElement.setAttribute('lang', locale)
  },

  getInitialLocale: (): Locale => {
    const storedLocale = getStoredItem('locale')

    if (storedLocale != null && isSupportedLocale(storedLocale)) {
      return storedLocale
    }

    const primaryNavigatorLocale = navigator.language.slice(0, 2)

    if (isSupportedLocale(primaryNavigatorLocale)) {
      return primaryNavigatorLocale
    }

    const matchingNavigatorLocale = navigator.languages
      .map((language) => language.slice(0, 2))
      .find((language) => isSupportedLocale(language))

    if (matchingNavigatorLocale != null) {
      return matchingNavigatorLocale
    }

    return DEFAULT_LOCALE
  },

  saveFavoriteLocale: (locale: Locale) => {
    storeItem('locale', locale)
  }
}
