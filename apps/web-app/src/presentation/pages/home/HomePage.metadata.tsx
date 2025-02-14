import type { FC } from 'react'

import { useI18n } from '@/application/hooks'
import { DEFAULT_METADATA, mergeTitle, type Metadata } from '@/domain/metadata'
import { PageMetadata } from '@/presentation/components'

export const HomePageMetadata: FC = () => {
  const { translate } = useI18n()

  const homePageMetadata: Metadata = {
    ...DEFAULT_METADATA,
    title: mergeTitle(translate('pages.home.metadata.title')),
    description: ''
  }

  return <PageMetadata {...homePageMetadata} />
}
