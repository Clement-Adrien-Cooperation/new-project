import type { FC } from 'react'

import { useI18n } from '@/application/hooks'
import { PasswordField, TextField } from '@/presentation/components'

import './LoginPage.styles.sass'

const LoginPage: FC = () => {
  const { translate } = useI18n()

  return (
    <div className='login-page'>
      <TextField
        description='Username Field Description'
        label='Username'
        minLength={3}
      />

      <PasswordField
      />
    </div>
  )
}

export default LoginPage
