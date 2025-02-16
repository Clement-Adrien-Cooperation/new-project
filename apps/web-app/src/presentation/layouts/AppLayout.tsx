import type { FC, PropsWithChildren } from 'react'

import { DEFAULT_METADATA } from '@/domain/metadata'

import { PageMetadata } from '@/presentation/components'
import { Footer, Header } from '@/presentation/layouts'

export const AppLayout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <PageMetadata {...DEFAULT_METADATA} />

    <Header />

    {children}

    <Footer />
  </>
)
