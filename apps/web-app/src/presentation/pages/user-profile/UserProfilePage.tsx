import type { FC } from 'react'
import { type Params, useParams } from 'react-router'

import { useI18n } from '@/application/hooks'
import type { USER_PROFILE_ROUTE_PARAM } from '@/domain/navigation'
import { PageTitle } from '@/presentation/components'
import { Main } from '@/presentation/layouts'

import { UserProfilePageMetadata } from './UserProfilePage.metadata.tsx'

const UserProfilePage: FC = () => {
  const { translate } = useI18n()
  const { userName } = useParams<Params<typeof USER_PROFILE_ROUTE_PARAM>>()

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
