import { useTheme } from '@/application/hooks'
import { LocaleSwitcher } from '@/presentation/components'
import { ThemeSwitcher } from '@/presentation/components/ThemeSwitcher'
import { I18nProvider } from '@/presentation/providers'

import '@/presentation/styles/base.sass'

export const App = () => {
  useTheme()

  return (
    <I18nProvider>
      <LocaleSwitcher />
      <ThemeSwitcher />
    </I18nProvider>
  )
}
