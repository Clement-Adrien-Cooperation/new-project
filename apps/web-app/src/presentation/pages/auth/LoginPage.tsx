import type { FC } from 'react'

import { useI18n } from '@/application/hooks'
import { ROUTES } from '@/domain/navigation'
import { Link, LoginForm, PageTitle } from '@/presentation/components'
import { Main } from '@/presentation/layouts'

import { LoginPageMetadata } from './LoginPage.metadata.tsx'

import './LoginPage.styles.sass'

const LoginPage: FC = () => {
  const { translate } = useI18n()

  return (
    <>
      <LoginPageMetadata />

      <Main>
        <PageTitle>{translate('pages.auth.login.title')}</PageTitle>

        <LoginForm />

        <div className='login-page__register'>
          {translate('pages.auth.login.register.message')}

          <Link
            href={ROUTES.register}
            variant='underlined'
          >
            {translate('pages.auth.login.register.link')}
          </Link>
        </div>
      </Main>
    </>
  )
}

export default LoginPage
