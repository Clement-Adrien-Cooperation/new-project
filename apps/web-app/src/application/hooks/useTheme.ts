import { useRequiredContext } from '@/application/utils'
import { ThemeContext } from '@/presentation/components'

export const useTheme = () => useRequiredContext(ThemeContext, 'Theme')
