import type { FC } from 'react'

import { useI18n } from '@/application/hooks'
import { PageTitle } from '@/presentation/components'
import { Main } from '@/presentation/layouts'

import { ProfilePageMetadata } from './ProfilePage.metadata.tsx'

const ProfilePage: FC = () => {
  const { translate } = useI18n()

  return (
    <>
      <ProfilePageMetadata />

      <Main>
        <PageTitle>{translate('pages.auth.profile.title')}</PageTitle>
      </Main>
    </>
  )
}

export default ProfilePage
