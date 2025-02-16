import type { FC } from 'react'

import { useI18n } from '@/application/hooks'
import { PageTitle } from '@/presentation/components'
import { Main } from '@/presentation/layouts'

import { RegisterPageMetadata } from './RegisterPage.metadata.tsx'

const RegisterPage: FC = () => {
  const { translate } = useI18n()

  return (
    <>
      <RegisterPageMetadata />

      <Main>
        <PageTitle>{translate('pages.auth.register.title')}</PageTitle>
      </Main>
    </>
  )
}

export default RegisterPage
