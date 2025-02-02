import type { FC } from 'react'

import { useI18n } from '@/application/hooks'
import { Button } from '@/presentation/components'

import './LocaleSwitcher.styles.sass'

export const LocaleSwitcher: FC = () => {
  const { changeLocale, i18n, selectedLocale } = useI18n()

  return (
    <div className='locale-switcher'>
      {i18n('helloWorld')}
      <br />
      selected locale: {selectedLocale}
      <br />
      <Button onPress={() => changeLocale('en')}>English</Button>
      <Button onPress={() => changeLocale('fr')}>French</Button>
    </div>
  )
}
