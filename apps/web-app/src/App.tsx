import { ListBox, LocaleSwitcher } from '@/presentation/components'
import { ThemeSwitcher } from '@/presentation/components'
import { I18nProvider, ThemeProvider } from '@/presentation/providers'

import '@/presentation/styles/base.sass'

const items = [
  { id: '1', label: 'Item 1' },
  { id: '2', label: 'Item 2' },
  { id: '3', label: 'Item 3', hasSeparatorBefore: true },
  { id: '4', label: 'Item 4' },
  { id: '5', label: 'Item 5' }
]

export const App = () => (
  <I18nProvider>
    <ThemeProvider>
      <LocaleSwitcher />
      <ThemeSwitcher />

      <ListBox aria-label='List of items' items={items} onAction={(item) => console.log('item : ', item)} />
    </ThemeProvider>
  </I18nProvider>
)
