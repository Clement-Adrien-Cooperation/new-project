import type { FC } from 'react'

import { useI18n, useParams } from '@/application/hooks'
import { Main, PageTitle } from '@/presentation/components'

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
