import { en, fr } from './dictionaries'
import Polyglot from './polyglot'

export const dictionaries = { en, fr } as const
export type Locale = keyof typeof dictionaries

export { Polyglot }
