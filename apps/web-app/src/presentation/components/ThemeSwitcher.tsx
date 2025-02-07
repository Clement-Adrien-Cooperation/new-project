import { MonitorCogIcon, MoonIcon, SunIcon } from 'lucide-react'
import type { FC } from 'react'

import { useI18n, useTheme } from '@/application/hooks'
import type { Theme } from '@/domain/theme'
import { type PickerItems, Select } from '@/presentation/components'

import './ThemeSwitcher.styles.sass'

export const ThemeSwitcher: FC = () => {
  const { translate } = useI18n()
  const { changeTheme, selectedTheme } = useTheme()

  const items: PickerItems<Theme> = [
    { id: 'system', textValue: translate('features.theme.system'), Icon: <MonitorCogIcon /> },
    { id: 'dark', textValue: translate('features.theme.dark'), Icon: <MoonIcon />, hasSeparatorBefore: true },
    { id: 'light', textValue: translate('features.theme.light'), Icon: <SunIcon /> }
  ]

  return (
    <Select
      items={items}
      label={translate('features.theme.label')}
      onSelectionChange={selectedTheme => changeTheme(selectedTheme.id)}
      selectedKey={selectedTheme}
    />
  )
}
