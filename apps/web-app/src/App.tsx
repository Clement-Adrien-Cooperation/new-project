import { LocaleSwitcher } from './presentation/components/LocaleSwitcher'
import { I18nProvider } from './presentation/providers/I18nProvider'

import './styles/base.sass'

export const App = () => (
  <I18nProvider>
    <LocaleSwitcher />
  </I18nProvider>
)
