import { type ColorScheme, DEFAULT_THEME, PREFERS_DARK_COLOR_SCHEME_MATCHER, SUPPORTED_THEMES, type Theme } from '@/domain/theme'

import { getStoredItem, storeItem } from '@/infrastructure/storage'

export const ThemeService = {
  applyColorScheme: (colorScheme: ColorScheme) => {
    document.documentElement.setAttribute('data-color-scheme', colorScheme)
  },

  changeTheme: (theme: Theme) => {
    if (theme === 'system') {
      const isSystemColorSchemeDark = PREFERS_DARK_COLOR_SCHEME_MATCHER.matches
      ThemeService.applyColorScheme(isSystemColorSchemeDark ? 'dark' : 'light')
      return
    }

    ThemeService.applyColorScheme(theme)
  },

  getInitialTheme: (): Theme => {
    const storedTheme = getStoredItem('theme')

    if (storedTheme != null && SUPPORTED_THEMES.includes(storedTheme)) {
      return storedTheme
    }

    return DEFAULT_THEME
  },

  saveFavoriteTheme: (theme: Theme) => {
    storeItem('theme', theme)
  }
}
