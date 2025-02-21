import type { FC } from 'react'

import { useI18n } from '@/application/hooks'
import { DEFAULT_METADATA, mergeTitle, mergeUrl, type Metadata } from '@/domain/metadata'
import { ROUTES } from '@/domain/navigation'
import { PageMetadata } from '@/presentation/components'

export const ProfilePageMetadata: FC = () => {
  const { translate } = useI18n()

  const appName = translate('appName')

  const profilePageMetadata: Metadata = {
    ...DEFAULT_METADATA,
    applicationName: appName,
    category: translate('pages.auth.profile.metadata.category'),
    classification: translate('pages.auth.profile.metadata.classification'),
    description: translate('pages.auth.profile.metadata.description'),
    keywords: translate('pages.auth.profile.metadata.keywords'),
    title: mergeTitle(translate('pages.auth.profile.metadata.title'), appName),
    url: mergeUrl(ROUTES.login)
  }

  return <PageMetadata {...profilePageMetadata} />
}
