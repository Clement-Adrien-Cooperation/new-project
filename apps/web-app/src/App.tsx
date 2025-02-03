import { LocaleSwitcher } from '@/presentation/components'
import { ThemeSwitcher } from '@/presentation/components'
import { I18nProvider, ThemeProvider } from '@/presentation/providers'

import '@/presentation/styles/base.sass'

export const App = () => (
  <I18nProvider>
    <ThemeProvider>
      <LocaleSwitcher />
      <ThemeSwitcher />
    </ThemeProvider>
  </I18nProvider>
)
