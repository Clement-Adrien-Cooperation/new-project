import type { FC } from 'react'

import { useI18n } from '@/application/hooks'
import { DEFAULT_METADATA, mergeTitle, mergeUrl, type Metadata } from '@/domain/metadata'
import { ROUTES } from '@/domain/navigation'
import { PageMetadata } from '@/presentation/components'

export const LogoutPageMetadata: FC = () => {
  const { translate } = useI18n()

  const appName = translate('appName')

  const logoutPageMetadata: Metadata = {
    ...DEFAULT_METADATA,
    applicationName: appName,
    title: mergeTitle(translate('pages.auth.logout.metadata.title'), appName),
    description: translate('pages.auth.logout.metadata.description'),
    keywords: translate('pages.auth.logout.metadata.keywords'),
    category: translate('pages.auth.logout.metadata.category'),
    classification: translate('pages.auth.logout.metadata.classification'),
    url: mergeUrl(ROUTES.logout)
  }

  return <PageMetadata {...logoutPageMetadata} />
}
