import type { FC } from 'react'

import { useI18n } from '@/application/hooks'
import { LocaleSwitcher, ThemeSwitcher } from '@/presentation/components'

import { SettingsPageMetadata } from './SettingsPage.metadata.tsx'

import './SettingsPage.styles.sass'

const SettingsPage: FC = () => {
  const { translate } = useI18n()

  return (
    <>
      <SettingsPageMetadata />

      <div className='settings-page'>
        <h1>{translate('pages.settings.title')}</h1>

        <div className='settings-page__content'>
          <LocaleSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </>
  )
}

export default SettingsPage
