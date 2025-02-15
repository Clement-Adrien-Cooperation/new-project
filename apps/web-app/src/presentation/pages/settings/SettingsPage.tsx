import type { FC } from 'react'

import { useI18n } from '@/application/hooks'
import { LocaleSwitcher, PageTitle, ThemeSwitcher } from '@/presentation/components'

import { SettingsPageMetadata } from './SettingsPage.metadata.tsx'

import './SettingsPage.styles.sass'

const SettingsPage: FC = () => {
  const { translate } = useI18n()

  return (
    <>
      <SettingsPageMetadata />

      <div className='settings-page'>
        <PageTitle>{translate('pages.settings.title')}</PageTitle>

        <div className='settings-page__content'>
          <LocaleSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </>
  )
}

export default SettingsPage
