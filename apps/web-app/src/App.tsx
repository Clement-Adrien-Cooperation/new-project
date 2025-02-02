import { LocaleSwitcher } from './presentation/components'
import { I18nProvider } from './presentation/providers'

import './presentation/styles/base.sass'

export const App = () => (
  <I18nProvider>
    <LocaleSwitcher />
  </I18nProvider>
)
