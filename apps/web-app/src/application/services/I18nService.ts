import { DEFAULT_LOCALE, type Locale } from '@/domain/i18n'

import { dictionaries, Polyglot } from '@/infrastructure/i18n'
import { I18nRepository } from '@/infrastructure/repositories'

const isSupportedLocale = (locale: string): locale is Locale => {
  return Object.keys(dictionaries).includes(locale)
}

export const I18nService = {
  changeLocale: (locale: Locale) => {
    document.documentElement.setAttribute('lang', locale)
  },

  getInitialLocale: (): Locale => {
    const storedLocale = I18nRepository.getLocale()

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

  getPolyglot: (locale: Locale) => {
    return new Polyglot({ locale, phrases: dictionaries[locale] })
  },

  saveFavoriteLocale: (locale: Locale) => {
    I18nRepository.saveLocale(locale)
  }
}
