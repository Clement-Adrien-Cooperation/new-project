import type { DotNestedKeys } from '@/infrastructure/utils'

import type { Locale } from '.'
import type { Dictionary } from './dictionaries'

declare type IPolyglotOptions = {
  phrases: Dictionary
  locale: Locale
}

declare class Polyglot {
  constructor (options: IPolyglotOptions)
  t (key: DotNestedKeys<Dictionary>, options?: Record<string, string | number> | number): string
}

export = Polyglot
export = IPolyglotOptions
