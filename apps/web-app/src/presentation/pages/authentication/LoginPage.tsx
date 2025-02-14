import type { FC } from 'react'

import { useI18n } from '@/application/hooks'
import { LoginForm } from '@/presentation/components'

import './LoginPage.styles.sass'

const LoginPage: FC = () => {
  const { translate } = useI18n()

  return (
    <>
      <h1 className='login-page__title'>
        Se connecter
      </h1>

      <LoginForm className='login-page__form' />
    </>
  )
}

export default LoginPage
