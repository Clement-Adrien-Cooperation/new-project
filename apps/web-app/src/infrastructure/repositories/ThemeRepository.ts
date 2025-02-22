import type { Theme } from '@/domain/theme'
import { getStoredItem, type LocaleStorageKey, storeItem } from '@/infrastructure/storage'

const THEME_KEY: LocaleStorageKey = 'theme' as const

export const ThemeRepository = {
  getTheme: (): Theme | undefined => getStoredItem(THEME_KEY),

  saveTheme: (locale: Theme) => storeItem(THEME_KEY, locale)
}
