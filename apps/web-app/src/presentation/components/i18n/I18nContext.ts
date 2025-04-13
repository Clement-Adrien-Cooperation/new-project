import type { Locale, Translate } from '@/domain/i18n'
import { createContext } from 'react'

type I18nContextValue = {
  changeLocale: (newLocale: Locale) => void
  selectedLocale: Locale
  translate: Translate
}

export const I18nContext = createContext<I18nContextValue | null>(null)
