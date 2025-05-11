import { DEFAULT_LOCALE, type Locale } from '@/domain/i18n'

import { dictionaries, Polyglot } from '@/infrastructure/i18n'
import { I18nRepository } from '@/infrastructure/repositories'

const getLocaleFromLanguage = (language: string) => language.slice(0, 2)

const isSupportedLocale = (locale: string): locale is Locale => {
  return Object.keys(dictionaries).includes(locale)
}

const changeLang = (locale: Locale) => {
  document.documentElement.setAttribute('lang', locale)
}

export const I18nService = {
  changeLocale: (locale: Locale) => {
    changeLang(locale)
    I18nRepository.saveLocale(locale)
  },

  getInitialLocale: (): Locale => {
    const storedLocale = I18nRepository.getLocale()

    if (storedLocale && isSupportedLocale(storedLocale)) {
      changeLang(storedLocale)
      return storedLocale
    }

    const primaryNavigatorLocale = getLocaleFromLanguage(navigator.language)

    if (isSupportedLocale(primaryNavigatorLocale)) {
      changeLang(primaryNavigatorLocale)
      return primaryNavigatorLocale
    }

    const matchingNavigatorLocale = navigator.languages
      .map(getLocaleFromLanguage)
      .find(isSupportedLocale)

    const locale = matchingNavigatorLocale ?? DEFAULT_LOCALE
    changeLang(locale)

    return locale
  },

  getPolyglot: (locale: Locale) => {
    const selectedDictionary = dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE]
    return new Polyglot({ locale, phrases: selectedDictionary })
  }
}
