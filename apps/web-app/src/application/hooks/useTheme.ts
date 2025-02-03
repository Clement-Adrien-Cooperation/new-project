import { useCallback, useEffect, useState } from 'react'

import { DEFAULT_THEME, type Theme } from '@/domain/theme'
import { ThemeService } from '../services'

export const useTheme = () => {
  const [selectedTheme, setSelectedTheme] = useState<Theme>(DEFAULT_THEME)

  const selectTheme = useCallback((newTheme: Theme) => {
    setSelectedTheme(newTheme)
    ThemeService.changeTheme(newTheme)
  }, [])

  const changeTheme = useCallback((newTheme: Theme) => {
    ThemeService.saveFavoriteTheme(newTheme)
    selectTheme(newTheme)
  }, [selectTheme])

  useEffect(() => {
    const initialTheme = ThemeService.getInitialTheme()
    selectTheme(initialTheme)
  }, [selectTheme])

  return { changeTheme, selectedTheme }
}
