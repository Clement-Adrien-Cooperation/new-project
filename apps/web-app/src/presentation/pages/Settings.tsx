import type { FC } from 'react'

import { useI18n } from '@/application/hooks'
import { LocaleSwitcher, ThemeSwitcher } from '@/presentation/components'

const SettingsPage: FC = () => {
  const { translate } = useI18n()

  return (
    <>
      <h1>{translate('pages.settings.title')}</h1>

      <LocaleSwitcher />
      <ThemeSwitcher />
    </>
  )
}

export default SettingsPage
