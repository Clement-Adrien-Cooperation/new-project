import type { FC } from 'react'

import { useI18n } from '@/application/hooks'
import { DEFAULT_METADATA, mergeTitle, mergeUrl, type Metadata } from '@/domain/metadata'
import { ROUTES } from '@/domain/navigation'
import { PageMetadata } from '@/presentation/components'

export const SettingsPageMetadata: FC = () => {
  const { translate } = useI18n()

  const appName = translate('appName')

  const settingsPageMetadata: Metadata = {
    ...DEFAULT_METADATA,
    applicationName: appName,
    category: translate('pages.settings.metadata.category'),
    classification: translate('pages.settings.metadata.classification'),
    description: translate('pages.settings.metadata.description'),
    keywords: translate('pages.settings.metadata.keywords'),
    title: mergeTitle(translate('pages.settings.metadata.title'), appName),
    url: mergeUrl(ROUTES.settings)
  }

  return <PageMetadata {...settingsPageMetadata} />
}
