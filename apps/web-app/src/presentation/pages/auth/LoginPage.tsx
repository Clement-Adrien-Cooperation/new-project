import type { FC } from 'react'

import { useI18n } from '@/application/hooks'
import { LoginForm, PageTitle } from '@/presentation/components'
import { Main } from '@/presentation/layouts'

const LoginPage: FC = () => {
  const { translate } = useI18n()

  return (
    <Main>
      <PageTitle>
        {translate('pages.auth.login.title')}
      </PageTitle>

      <LoginForm />
    </Main>
  )
}

export default LoginPage
