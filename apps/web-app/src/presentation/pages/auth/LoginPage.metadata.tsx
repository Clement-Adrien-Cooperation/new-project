import type { FC } from 'react'

import { useI18n } from '@/application/hooks'
import { DEFAULT_METADATA, mergeTitle, mergeUrl, type Metadata } from '@/domain/metadata'
import { ROUTES } from '@/domain/navigation'
import { PageMetadata } from '@/presentation/components'

export const LoginPageMetadata: FC = () => {
  const { translate } = useI18n()

  const appName = translate('appName')

  const loginPageMetadata: Metadata = {
    ...DEFAULT_METADATA,
    applicationName: appName,
    title: mergeTitle(translate('pages.auth.login.metadata.title'), appName),
    description: translate('pages.auth.login.metadata.description'),
    keywords: translate('pages.auth.login.metadata.keywords'),
    category: translate('pages.auth.login.metadata.category'),
    classification: translate('pages.auth.login.metadata.classification'),
    url: mergeUrl(ROUTES.login)
  }

  return <PageMetadata {...loginPageMetadata} />
}
