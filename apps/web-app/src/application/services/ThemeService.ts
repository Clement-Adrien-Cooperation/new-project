import { DEFAULT_THEME, PREFERS_DARK_COLOR_SCHEME_MATCHER, SUPPORTED_THEMES, type Theme } from '@/domain/theme'
import { ThemeRepository } from '@/infrastructure/repositories'

type ColorScheme = Extract<Theme, 'dark' | 'light'>

const applyColorScheme = (colorScheme: ColorScheme) => {
  document.documentElement.setAttribute('data-color-scheme', colorScheme)
}

export const ThemeService = {
  changeTheme: (theme: Theme) => {
    if (theme === 'system') {
      const isSystemColorSchemeDark = PREFERS_DARK_COLOR_SCHEME_MATCHER.matches
      applyColorScheme(isSystemColorSchemeDark ? 'dark' : 'light')
      return
    }

    applyColorScheme(theme)
  },

  getInitialTheme: (): Theme => {
    const storedTheme = ThemeRepository.getTheme()

    if (storedTheme != null && SUPPORTED_THEMES.includes(storedTheme)) {
      return storedTheme
    }

    return DEFAULT_THEME
  },

  saveFavoriteTheme: (theme: Theme) => {
    ThemeRepository.saveTheme(theme)
  },

  subscribeToSystemThemeChanges: () => {
    const onSystemThemeChange = (event: MediaQueryListEvent) => {
      const isSystemColorSchemeDark = event.matches
      applyColorScheme(isSystemColorSchemeDark ? 'dark' : 'light')
    }

    PREFERS_DARK_COLOR_SCHEME_MATCHER.addEventListener('change', onSystemThemeChange)

    return () => {
      PREFERS_DARK_COLOR_SCHEME_MATCHER.removeEventListener('change', onSystemThemeChange)
    }
  }
}
