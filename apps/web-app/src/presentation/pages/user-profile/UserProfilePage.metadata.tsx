import type { FC } from 'react'

import { useI18n } from '@/application/hooks'
import { DEFAULT_METADATA, mergeUrl, type Metadata } from '@/domain/metadata'
import { getUserProfileRoute } from '@/domain/navigation'
import { PageMetadata } from '@/presentation/components'

type UserProfilePageMetadataProps = {
  userName: string
}

export const UserProfilePageMetadata: FC<UserProfilePageMetadataProps> = ({ userName }) => {
  const { translate } = useI18n()

  const appName = translate('appName')

  const userProfilePageMetadata: Metadata = {
    ...DEFAULT_METADATA,
    applicationName: appName,
    category: translate('pages.auth.account.metadata.category'),
    classification: translate('pages.auth.account.metadata.classification'),
    description: translate('pages.auth.account.metadata.description'),
    keywords: translate('pages.auth.account.metadata.keywords'),
    title: userName,
    url: mergeUrl(getUserProfileRoute(userName))
  }

  return <PageMetadata {...userProfilePageMetadata} />
}
