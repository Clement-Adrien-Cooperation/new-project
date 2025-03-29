import type { FC } from 'react'

import { useI18n, useParams } from '@/application/hooks'
import { PageTitle } from '@/presentation/components'
import { Main } from '@/presentation/layouts'

import { UserProfilePageMetadata } from './UserProfilePage.metadata.tsx'

const UserProfilePage: FC = () => {
  const { translate } = useI18n()
  const { userName } = useParams()

  const currentUserName = userName ?? translate('pages.userProfile.userNameFallback')

  return (
    <>
      <UserProfilePageMetadata userName={currentUserName} />

      <Main>
        <PageTitle>{translate('pages.userProfile.title', { userName: currentUserName })}</PageTitle>
      </Main>
    </>
  )
}

export default UserProfilePage
