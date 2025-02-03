import { useRequiredContext } from '@/application/utils'
import { ThemeContext } from '@/presentation/providers'

export const useTheme = () => useRequiredContext(ThemeContext, 'Theme')
