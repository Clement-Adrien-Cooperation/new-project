import { MonitorCogIcon, MoonIcon, SunIcon } from 'lucide-react'
import type { FC } from 'react'

import { useI18n, useTheme } from '@/application/hooks'
import type { Theme } from '@/domain/theme'
import { type PickerItems, Select } from '@/presentation/components'

export const ThemeSwitcher: FC = () => {
  const { translate } = useI18n()
  const { changeTheme, selectedTheme } = useTheme()

  const themeSelectItems: PickerItems<Theme> = [
    { id: 'system', textValue: translate('components.themeSwitcher.system'), Icon: <MonitorCogIcon /> },
    { id: 'dark', textValue: translate('components.themeSwitcher.dark'), Icon: <MoonIcon />, hasSeparatorBefore: true },
    { id: 'light', textValue: translate('components.themeSwitcher.light'), Icon: <SunIcon /> }
  ]

  return (
    <Select
      items={themeSelectItems}
      label={translate('components.themeSwitcher.label')}
      onSelectionChange={selectedTheme => changeTheme(selectedTheme.id)}
      selectedKey={selectedTheme}
    />
  )
}
