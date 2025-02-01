import { createContext, type ReactNode } from 'react'

import type { Locale } from '../../domain/i18n'
import type { Dictionary } from '../../infrastructure/i18n/dictionaries'

type DotPrefix<T extends string> = T extends '' ? '' : `.${T}`

type DotNestedKeys<T> = (
  T extends object ? {
    [K in Exclude<keyof T, symbol>]: `${K}${DotPrefix<DotNestedKeys<T[K]>>}`
  }[Exclude<keyof T, symbol>] : ''
) extends infer D
  ? Extract<D, string>
  : never

export type TranslateKey = DotNestedKeys<Dictionary>
export type TranslateOptions = Record<string, ReactNode>
type Translate = (key: TranslateKey, options?: TranslateOptions) => string

type I18n = {
  changeLocale: (newLocale: Locale) => void
  selectedLocale: Locale
  translate: Translate
}

export const I18nContext = createContext<I18n | null>(null)
