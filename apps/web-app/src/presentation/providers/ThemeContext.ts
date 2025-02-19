import { createContext } from 'react'

import type { Theme } from '@/domain/theme'

type ThemeContextValue = {
  changeTheme: (newTheme: Theme) => void
  selectedTheme: Theme
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)
