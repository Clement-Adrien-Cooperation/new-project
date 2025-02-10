import type { FC } from 'react'

import { DEFAULT_METADATA, type Metadata } from '@/domain/metadata'

export const PageMetadata: FC<Metadata> = (metadata) => (
  <>
    <title>{metadata.title || DEFAULT_METADATA.title}</title>

    <meta name='description' content={metadata.description || DEFAULT_METADATA.description} />

    <meta name='application-name' content={metadata.applicationName || DEFAULT_METADATA.applicationName} />

    <meta name='author' content={metadata.author || DEFAULT_METADATA.author} />
    <link rel='author' href={metadata.authorUrl || DEFAULT_METADATA.authorUrl} />

    <meta name='keywords' content={metadata.keywords || DEFAULT_METADATA.keywords} />

    <meta name='referrer' content={metadata.referrer || DEFAULT_METADATA.referrer} />

    <link rel='canonical' href={metadata.url || DEFAULT_METADATA.url} />

    <meta name='category' content={metadata.category || DEFAULT_METADATA.category} />
    <meta name='classification' content={metadata.classification || DEFAULT_METADATA.classification} />
  </>
)

//opengraph
//twitter
