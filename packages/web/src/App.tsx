import { LocaleSwitcher } from './i18n/locale-switcher'
import { I18nProvider } from './i18n/provider'

export const App = () => (
  <I18nProvider>
    <LocaleSwitcher />
  </I18nProvider>
)
