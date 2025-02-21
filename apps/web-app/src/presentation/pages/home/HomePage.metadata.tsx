import type { FC } from 'react'

import { useI18n } from '@/application/hooks'
import { DEFAULT_METADATA, mergeTitle, mergeUrl, type Metadata } from '@/domain/metadata'
import { ROUTES } from '@/domain/navigation'
import { PageMetadata } from '@/presentation/components'

export const HomePageMetadata: FC = () => {
  const { translate } = useI18n()

  const appName = translate('appName')

  const homePageMetadata: Metadata = {
    ...DEFAULT_METADATA,
    applicationName: appName,
    category: translate('pages.home.metadata.category'),
    classification: translate('pages.home.metadata.classification'),
    description: translate('pages.home.metadata.description'),
    keywords: translate('pages.home.metadata.keywords'),
    title: mergeTitle(appName, translate('pages.home.metadata.title')),
    url: mergeUrl(ROUTES.home)
  }

  return <PageMetadata {...homePageMetadata} />
}
