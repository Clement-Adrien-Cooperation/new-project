import type { Locale } from '@/domain/i18n'
import { getStoredItem, storeItem } from '@/infrastructure/storage'

const LOCALE_KEY = 'locale' as const

export const I18nRepository = {
  getLocale: (): Locale | undefined => getStoredItem(LOCALE_KEY),

  saveLocale: (locale: Locale) => storeItem(LOCALE_KEY, locale)
}
