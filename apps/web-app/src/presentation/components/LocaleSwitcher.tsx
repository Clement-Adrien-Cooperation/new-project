import type { FC } from 'react'

import { useI18n } from '@/application/hooks'
import type { Locale } from '@/domain/i18n'
import { type PickerItems, Select } from '@/presentation/components'

export const LocaleSwitcher: FC = () => {
  const { changeLocale, selectedLocale, translate } = useI18n()

  const localeSelectItems: PickerItems<Locale> = [
    { id: 'en', textValue: 'English' },
    { id: 'fr', textValue: 'Français' }
  ]

  return (
    <Select
      items={localeSelectItems}
      label={translate('components.localeSwitcher.label')}
      onSelectionChange={newLocale => changeLocale(newLocale.id)}
      selectedKey={selectedLocale}
    />
  )
}
