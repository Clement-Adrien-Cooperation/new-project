import type { FC } from 'react'

import { useI18n } from '@/application/hooks'
import { ROUTES } from '@/domain/navigation'
import { Link, PageTitle, RegisterForm } from '@/presentation/components'
import { Main } from '@/presentation/layouts'

import { RegisterPageMetadata } from './RegisterPage.metadata.tsx'

import './RegisterPage.styles.sass'

const RegisterPage: FC = () => {
  const { translate } = useI18n()

  return (
    <>
      <RegisterPageMetadata />

      <Main>
        <PageTitle>{translate('pages.auth.register.title')}</PageTitle>

        <RegisterForm />

        <div className='register-page__login'>
          {translate('pages.auth.register.login.message')}

          <Link
            href={ROUTES.login}
            variant='underlined'
          >
            {translate('pages.auth.register.login.link')}
          </Link>
        </div>
      </Main>
    </>
  )
}

export default RegisterPage
