import type { FC } from 'react'

import { useI18n } from '../../application/hooks/useI18n'

export const LocaleSwitcher: FC = () => {
  const { changeLocale, selectedLocale, translate } = useI18n()

  return (
    <>
      {translate('helloWorld')}
      <br />
      selected locale: {selectedLocale}
      <br />
      <button onClick={() => changeLocale('en')}>English</button>
      <button onClick={() => changeLocale('fr')}>French</button>
    </>
  )
}
