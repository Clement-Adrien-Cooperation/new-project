import type { FC } from 'react'

import { useI18n } from '@/application/hooks'
import { Main, PageTitle } from '@/presentation/components'

import { AccountPageMetadata } from './AccountPage.metadata.tsx'

const AccountPage: FC = () => {
  const { translate } = useI18n()

  return (
    <>
      <AccountPageMetadata />

      <Main>
        <PageTitle>{translate('pages.auth.account.title')}</PageTitle>
      </Main>
    </>
  )
}

export default AccountPage
