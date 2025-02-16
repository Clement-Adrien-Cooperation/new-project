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
    title: mergeTitle(translate('pages.settings.metadata.title'), appName),
    description: translate('pages.settings.metadata.description'),
    keywords: translate('pages.settings.metadata.keywords'),
    category: translate('pages.settings.metadata.category'),
    classification: translate('pages.settings.metadata.classification'),
    url: mergeUrl(ROUTES.settings)
  }

  return <PageMetadata {...settingsPageMetadata} />
}
