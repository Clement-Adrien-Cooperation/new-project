import type { FC, PropsWithChildren } from 'react'

import { DEFAULT_METADATA } from '@/domain/metadata'

import { PageMetadata } from '@/presentation/components'
import { Footer, Header } from '@/presentation/layouts'

import './AppLayout.styles.sass'

export const AppLayout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <PageMetadata {...DEFAULT_METADATA} />

    <Header />

    <main>
      {children}
    </main>

    <Footer />
  </>
)
