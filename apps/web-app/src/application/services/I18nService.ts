import { DEFAULT_LOCALE, type Locale } from '@/domain/i18n'

import { dictionaries } from '@/infrastructure/i18n'
import { getStoredItem, storeItem } from '@/infrastructure/storage'

export const I18nService = {
  getDictionary(locale: Locale) {
    return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE]
  },

  getLocale(): Locale | undefined {
    return getStoredItem('locale')
  },

  getSupportedNavigatorLocale(): Locale | null {
    const primaryNavigatorLocale = navigator.language.slice(0, 2)

    if (I18nService.isSupportedLocale(primaryNavigatorLocale)) {
      return primaryNavigatorLocale
    }

    const matchingLocale = navigator.languages
      .map((language) => language.slice(0, 2))
      .find((language) => I18nService.isSupportedLocale(language))

    return matchingLocale ?? null
  },

  isSupportedLocale(locale: string): locale is Locale {
    return Object.keys(dictionaries).includes(locale)
  },

  setLocale(locale: Locale) {
    storeItem('locale', locale)
  },

  updateDocumentLanguage(locale: Locale) {
    document.documentElement.setAttribute('lang', locale)
  }
}
