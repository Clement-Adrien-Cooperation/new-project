import { LocaleSwitcher, type PickerItems, Select } from '@/presentation/components'
import { ThemeSwitcher } from '@/presentation/components'
import { I18nProvider, ThemeProvider } from '@/presentation/providers'

import '@/presentation/styles/base.sass'
import { SettingsIcon } from 'lucide-react'

const items: PickerItems = [
  { id: '1', textValue: 'Item 1' },
  { id: '2', textValue: 'Item 2', LeftIcon: <SettingsIcon />, RightIcon: <SettingsIcon /> },
  { id: '3', textValue: 'Item 3', hasSeparatorBefore: true },
  { id: '4', textValue: 'Item 4', RightIcon: <SettingsIcon /> },
  { id: '5', textValue: 'Item 5 avec un nom un peu long', LeftIcon: <SettingsIcon /> }
]

export const App = () => (
  <I18nProvider>
    <ThemeProvider>
      <LocaleSwitcher />
      <ThemeSwitcher />

      <Select
        items={items}
        label='Select test'
        placeholder='Select an item'
      />
    </ThemeProvider>
  </I18nProvider>
)
