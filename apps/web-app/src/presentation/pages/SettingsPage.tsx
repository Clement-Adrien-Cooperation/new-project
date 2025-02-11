import type { FC } from 'react'

import { useI18n } from '@/application/hooks'
import { Button, LocaleSwitcher, Select, ThemeSwitcher } from '@/presentation/components'

import { SettingsPageMetadata } from './SettingsPage.metadata.tsx'

import './SettingsPage.styles.sass'
import { SettingsIcon } from 'lucide-react'

const items = [
  { id: 1, textValue: 'label tres long pour voir ce que donne lellipsis venez on va essayer beaucoup plus long pour voir un peu jajoute', Icon: <SettingsIcon /> },
  { id: 2, textValue: 'label tres long pour voir ce que donne lellipsis venez on va essayer beaucoup plus long pour voir un peu jajoute' }
]

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

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingBlock: '1rem', maxWidth: '100%', outline: '1px solid red' }}>
            <Select
              items={items}
              placeholder='Select an item mais avec un placeholder vachement long quand même pour voir lellipsis encore une fois'
            />

            <Button variant='filled' Icon={<SettingsIcon />} />
          </div>
        </div>
      </div>
    </>
  )
}

export default SettingsPage
