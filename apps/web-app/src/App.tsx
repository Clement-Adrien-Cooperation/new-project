import { RouterProvider } from 'react-aria-components'
import { useNavigate } from 'react-router'

import { Router } from '@/application/router'
import { ErrorBoundary } from '@/presentation/components'
import { AppLayout } from '@/presentation/layouts'
import { I18nProvider, ThemeProvider } from '@/presentation/providers'

import '@/presentation/styles/base.sass'

export const App = () => {
  const navigate = useNavigate()

  return (
    <RouterProvider navigate={navigate}>
      <I18nProvider>
        <ThemeProvider>
          <ErrorBoundary>
            <AppLayout>
              <Router />
            </AppLayout>
          </ErrorBoundary>
        </ThemeProvider>
      </I18nProvider>
    </RouterProvider>
  )
}
