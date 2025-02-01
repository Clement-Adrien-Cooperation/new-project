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

export type I18nKey = DotNestedKeys<Dictionary>
export type I18nOptions = Record<string, ReactNode>
type I18n = (key: I18nKey, options?: I18nOptions) => string

type I18nContextValue = {
  changeLocale: (newLocale: Locale) => void
  selectedLocale: Locale
  i18n: I18n
}

export const I18nContext = createContext<I18nContextValue | null>(null)
