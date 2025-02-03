import { type FC, type PropsWithChildren, useCallback, useEffect, useState } from 'react'

import { ThemeService } from '@/application/services'
import { DEFAULT_THEME, PREFERS_DARK_COLOR_SCHEME_MATCHER, type Theme } from '@/domain/theme'
import { ThemeContext } from '@/presentation/providers/ThemeContext'

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState<Theme>(DEFAULT_THEME)

  const selectTheme = useCallback((newTheme: Theme) => {
    ThemeService.changeTheme(newTheme)
    setSelectedTheme(newTheme)
  }, [])

  const changeTheme = useCallback((newTheme: Theme) => {
    ThemeService.saveFavoriteTheme(newTheme)
    selectTheme(newTheme)
  }, [selectTheme])

  useEffect(() => {
    if (selectedTheme === 'system') {
      const onSystemThemeChange = (event: MediaQueryListEvent) => {
        ThemeService.applyColorScheme(event.matches ? 'dark' : 'light')
      }

      PREFERS_DARK_COLOR_SCHEME_MATCHER.addEventListener('change', onSystemThemeChange)

      return () => PREFERS_DARK_COLOR_SCHEME_MATCHER.removeEventListener('change', onSystemThemeChange)
    }
  }, [selectedTheme, selectTheme])

  useEffect(() => {
    const initialTheme = ThemeService.getInitialTheme()
    selectTheme(initialTheme)
  }, [selectTheme])

  return (
    <ThemeContext value={{ changeTheme, selectedTheme }}>
      {children}
    </ThemeContext>
  )
}
