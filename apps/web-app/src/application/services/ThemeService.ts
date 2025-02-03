import { type ColorScheme, DEFAULT_THEME, SUPPORTED_THEMES, type Theme } from '@/domain/theme'

import { getStoredItem, storeItem } from '@/infrastructure/storage'

const PREFERS_DARK_COLOR_SCHEME = '(prefers-color-scheme: dark)'

const applyTheme = (colorScheme: ColorScheme) => {
  document.documentElement.setAttribute('data-color-scheme', colorScheme)
}

export const ThemeService = {
  changeTheme(theme: Theme) {
    if (theme === 'system') {
      const isSystemColorSchemeDark = window.matchMedia(PREFERS_DARK_COLOR_SCHEME).matches
      applyTheme(isSystemColorSchemeDark ? 'dark' : 'light')
      return
    }

    applyTheme(theme)
  },

  getInitialTheme(): Theme {
    const storedTheme = getStoredItem('theme')

    if (storedTheme != null && SUPPORTED_THEMES.includes(storedTheme)) {
      return storedTheme
    }

    return DEFAULT_THEME
  },

  saveFavoriteTheme(theme: Theme) {
    storeItem('theme', theme)
  }
}
