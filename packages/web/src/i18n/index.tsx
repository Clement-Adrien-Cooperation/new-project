import React from 'react'

import { useProvidedContext } from '../lib/react'

import Polyglot from './polyglot'

import { type Dictionary, en } from './dictionaries/en.ts'
import { fr } from './dictionaries/fr.ts'

type DotPrefix<T extends string> = T extends '' ? '' : `.${T}`

type DotNestedKeys<T> = (
  T extends object ? {
    [K in Exclude<keyof T, symbol>]: `${K}${DotPrefix<DotNestedKeys<T[K]>>}`
  }[Exclude<keyof T, symbol>] : ''
) extends infer D
  ? Extract<D, string>
  : never

export type TranslateKey = DotNestedKeys<Dictionary>
export type TranslateOptions = Record<string, React.ReactNode>
type Translate = (key: TranslateKey, options?: TranslateOptions) => string

type I18n = {
  changeLocale: (newLocale: Locale) => void
  selectedLocale: Locale
  translate: Translate
}

const SUPPORTED_LOCALES = ['en', 'fr'] as const
export type Locale = typeof SUPPORTED_LOCALES[number]
export const DEFAULT_LOCALE: Locale = 'en'

const dictionaries: Record<Locale, Dictionary> = { en, fr }

export const isSupportedLocale = (locale: string): locale is Locale => SUPPORTED_LOCALES.includes(locale as Locale)

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE]

export const I18nContext = React.createContext<I18n | null>(null)

export const useI18n = () => useProvidedContext(I18nContext, 'I18n')

export const getSupportedNavigatorLocale = (): Locale | null => {
  const primaryNavigatorLocale = navigator.language.slice(0, 2)

  if (isSupportedLocale(primaryNavigatorLocale)) {
    return primaryNavigatorLocale
  }

  const secondaryNavigatorLocale = navigator.languages
    .map((language) => language.slice(0, 2))
    .find((language) => isSupportedLocale(language))

  if (secondaryNavigatorLocale != null) {
    return secondaryNavigatorLocale
  }

  return null
}

export const getPolyglot = (locale: Locale) => new Polyglot({ phrases: getDictionary(locale) })
