import type { FC } from 'react'

import { useI18n } from '@/application/hooks'
import { LocaleSwitcher, Select, TextField, ThemeSwitcher } from '@/presentation/components'

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

          <Select
            label='test test test test test test test test test test test test test test test test test test test test test test test test test test '
            placeholder='test test test test test test test test test test test test test test test test test test test test test test test test test test '
          />

          <TextField
            description='je suis une description tres long pour tester une fois de plus voir si lellipsis fonctionne bien correctement'
            label='je suis un label tres long pour tester une fois de plus voir si lellipsis fonctionne bien correctement'
            placeholder='je suis un placeholder tres long pour tester une fois de plus voir si lellipsis fonctionne bien correctement'
          />
        </div>
      </div>
    </>
  )
}

export default SettingsPage
