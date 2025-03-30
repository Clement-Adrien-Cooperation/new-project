import { type FC, type PropsWithChildren, useCallback, useEffect, useState } from 'react'

import { ThemeService } from '@/application/services'
import type { Theme } from '@/domain/theme'
import { ThemeContext } from '@/presentation/providers'

const initialTheme = ThemeService.getInitialTheme()
ThemeService.changeTheme(initialTheme)

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState<Theme>(initialTheme)

  const changeTheme = useCallback((newTheme: Theme) => {
    ThemeService.saveFavoriteTheme(newTheme)
    ThemeService.changeTheme(newTheme)
    setSelectedTheme(newTheme)
  }, [])

  useEffect(() => {
    if (selectedTheme === 'system') {
      const unsubscribeToSystemThemeChanges = ThemeService.subscribeToSystemThemeChanges()
      return () => unsubscribeToSystemThemeChanges()
    }
  }, [selectedTheme])

  return (
    <ThemeContext value={{ changeTheme, selectedTheme }}>
      {children}
    </ThemeContext>
  )
}
