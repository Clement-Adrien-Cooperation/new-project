import type { FC } from 'react'

import { useI18n } from '@/application/hooks'
import { DEFAULT_METADATA, mergeTitle, mergeUrl, type Metadata } from '@/domain/metadata'
import { ROUTES } from '@/domain/navigation'
import { PageMetadata } from '@/presentation/components'

export const RegisterPageMetadata: FC = () => {
  const { translate } = useI18n()

  const appName = translate('appName')

  const registerPageMetadata: Metadata = {
    ...DEFAULT_METADATA,
    applicationName: appName,
    category: translate('pages.auth.register.metadata.category'),
    classification: translate('pages.auth.register.metadata.classification'),
    description: translate('pages.auth.register.metadata.description'),
    keywords: translate('pages.auth.register.metadata.keywords'),
    title: mergeTitle(translate('pages.auth.register.metadata.title'), appName),
    url: mergeUrl(ROUTES.register)
  }

  return <PageMetadata {...registerPageMetadata} />
}
