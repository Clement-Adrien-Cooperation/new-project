import type { FC } from 'react'

import { useI18n } from '../../application/hooks'

import { Button } from './ui/Pressable/Button'

import './LocaleSwitcher.styles.sass'

export const LocaleSwitcher: FC = () => {
  const { changeLocale, i18n, selectedLocale } = useI18n()

  return (
    <div className='locale-switcher'>
      {i18n('helloWorld')}
      <br />
      selected locale: {selectedLocale}
      <br />
      <button onClick={() => changeLocale('en')}>English</button>
      <button onClick={() => changeLocale('fr')}>French</button>

      <Button>
        <>test</>
      </Button>
    </div>
  )
}
