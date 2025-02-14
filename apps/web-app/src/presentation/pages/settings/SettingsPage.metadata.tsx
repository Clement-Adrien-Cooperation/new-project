import type { FC } from 'react'

import { useI18n } from '@/application/hooks'
import { DEFAULT_METADATA, mergeTitle, mergeUrl, type Metadata } from '@/domain/metadata'
import { ROUTE_SETTINGS } from '@/domain/navigation'
import { PageMetadata } from '@/presentation/components'

export const SettingsPageMetadata: FC = () => {
  const { translate } = useI18n()

  const settingsPageMetadata: Metadata = {
    ...DEFAULT_METADATA,
    title: mergeTitle(translate('pages.settings.metadata.title')),
    description: '',
    url: mergeUrl(ROUTE_SETTINGS)
  }

  return <PageMetadata {...settingsPageMetadata} />
}
