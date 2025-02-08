import { createContext } from 'react'

import type { Dictionary, Locale } from '@/domain/i18n'
import type { DotNestedKeys } from '@/infrastructure/utils'

export type TranslateKey = DotNestedKeys<Dictionary>
export type TranslateOptions = Record<string, string | number> | number
type Translate = (key: TranslateKey, options?: TranslateOptions) => string

type I18nContextValue = {
  changeLocale: (newLocale: Locale) => void
  selectedLocale: Locale
  translate: Translate
}

export const I18nContext = createContext<I18nContextValue | null>(null)
