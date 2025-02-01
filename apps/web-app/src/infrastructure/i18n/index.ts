import Polyglot from './polyglot'
import { type Dictionary, en, fr } from './dictionaries'

export const dictionaries: Record<string, Dictionary> = { en, fr }

export const getPolyglot = (locale: string) => new Polyglot({ phrases: dictionaries[locale] })
