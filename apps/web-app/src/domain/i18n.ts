import { dictionaries } from '@/infrastructure/i18n'
import { getObjectKeys } from '@/infrastructure/utils'

export const SUPPORTED_LOCALES = getObjectKeys(dictionaries)

export type Locale = typeof SUPPORTED_LOCALES[number]

export type Dictionary = typeof dictionaries[Locale]

export const DEFAULT_LOCALE: Locale = 'en'
