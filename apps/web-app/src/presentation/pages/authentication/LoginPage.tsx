import type { FC } from 'react'

import { useI18n } from '@/application/hooks'
import { LoginForm, PageTitle } from '@/presentation/components'

const LoginPage: FC = () => {
  const { translate } = useI18n()

  return (
    <>
      <PageTitle>
        {translate('pages.authentication.login.title')}
      </PageTitle>

      <LoginForm />
    </>
  )
}

export default LoginPage
