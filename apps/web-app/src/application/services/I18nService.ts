import { DEFAULT_LOCALE, type Locale } from '@/domain/i18n'

import { dictionaries, Polyglot } from '@/infrastructure/i18n'
import { I18nRepository } from '@/infrastructure/repositories'

const getLocaleFromLanguage = (language: string) => language.slice(0, 2)

const isSupportedLocale = (locale: string): locale is Locale => {
  return Object.keys(dictionaries).includes(locale)
}

export const I18nService = {
  changeLang: (locale: Locale) => {
    document.documentElement.setAttribute('lang', locale)
  },

  getInitialLocale: (): Locale => {
    const storedLocale = I18nRepository.getLocale()

    if (storedLocale && isSupportedLocale(storedLocale)) {
      return storedLocale
    }

    const primaryNavigatorLocale = getLocaleFromLanguage(navigator.language)

    if (isSupportedLocale(primaryNavigatorLocale)) {
      return primaryNavigatorLocale
    }

    const matchingNavigatorLocale = navigator.languages
      .map(getLocaleFromLanguage)
      .find(isSupportedLocale)

    if (matchingNavigatorLocale) {
      return matchingNavigatorLocale
    }

    return DEFAULT_LOCALE
  },

  getPolyglot: (locale: Locale) => {
    const selectedDictionary = dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE]
    return new Polyglot({ locale, phrases: selectedDictionary })
  },

  saveFavoriteLocale: (locale: Locale) => {
    I18nRepository.saveLocale(locale)
  }
}
