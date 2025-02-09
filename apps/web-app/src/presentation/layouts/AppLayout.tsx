import type { FC, PropsWithChildren } from 'react'

import { Footer, Header } from '@/presentation/layouts'

import './AppLayout.styles.sass'

export const AppLayout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Header />

    <main>
      {children}
    </main>

    <Footer />
  </>
)
