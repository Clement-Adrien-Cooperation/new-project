import { Router } from '@/application/router'

import { ErrorBoundary } from '@/presentation/components'
import { AppLayout } from '@/presentation/layouts'
import { Providers } from '@/presentation/providers'

import '@/presentation/styles/base.sass'

export const App = () => (
  <Providers>
    <ErrorBoundary>
      <AppLayout>
        <Router />
      </AppLayout>
    </ErrorBoundary>
  </Providers>
)
