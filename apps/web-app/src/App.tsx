import { LocaleSwitcher } from '@/presentation/components'
import { ThemeSwitcher } from '@/presentation/components'
import { I18nProvider, ThemeProvider } from '@/presentation/providers'

import '@/presentation/styles/base.sass'

export const App = () => (
  <I18nProvider>
    <ThemeProvider>
      <main className='temp-wrapper'>
        <LocaleSwitcher />
        <ThemeSwitcher />
      </main>
    </ThemeProvider>
  </I18nProvider>
)
