import Polyglot from './polyglot'
import { en, fr } from './dictionaries'

export const dictionaries = { en, fr } as const

type Locale = keyof typeof dictionaries

export const getPolyglot = (locale: Locale) => new Polyglot({ phrases: dictionaries[locale] })
