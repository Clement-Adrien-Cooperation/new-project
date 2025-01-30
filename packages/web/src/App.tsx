import { LocaleSwitcher } from './i18n/LocaleSwitcher'
import { I18nProvider } from './i18n/I18nProvider'

export const App = () => (
  <I18nProvider>
    <LocaleSwitcher />
  </I18nProvider>
)
