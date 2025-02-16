import type { FC } from 'react'

import { useI18n } from '@/application/hooks'
import { DEFAULT_METADATA, mergeTitle, mergeUrl, type Metadata } from '@/domain/metadata'
import { ROUTES } from '@/domain/navigation'
import { PageMetadata } from '@/presentation/components'

export const NotFoundPageMetadata: FC = () => {
  const { translate } = useI18n()

  const appName = translate('appName')

  const notFoundPageMetadata: Metadata = {
    ...DEFAULT_METADATA,
    applicationName: appName,
    title: mergeTitle(translate('pages.notFound.metadata.title'), appName),
    description: translate('pages.notFound.metadata.description'),
    keywords: translate('pages.notFound.metadata.keywords'),
    category: translate('pages.notFound.metadata.category'),
    classification: translate('pages.notFound.metadata.classification'),
    url: mergeUrl(ROUTES.notFound)
  }

  return <PageMetadata {...notFoundPageMetadata} />
}
