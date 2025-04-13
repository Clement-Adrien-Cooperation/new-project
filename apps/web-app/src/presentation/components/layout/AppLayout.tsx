import type { FC, PropsWithChildren } from 'react'

import { DEFAULT_METADATA } from '@/domain/metadata'

import { Footer, Header } from '@/presentation/components'
import { PageMetadata } from '@/presentation/pages'

export const AppLayout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <PageMetadata {...DEFAULT_METADATA} />

    <Header />

    {children}

    <Footer />
  </>
)
