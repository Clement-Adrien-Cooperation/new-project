import { RouterProvider } from 'react-aria-components'
import { useNavigate } from 'react-router'

import { Router } from '@/application/router'
import { ErrorBoundary, Fallback } from '@/presentation/components'
import { I18nProvider, ThemeProvider } from '@/presentation/providers'

import '@/presentation/styles/base.sass'

export const App = () => {
  const navigate = useNavigate()

  return (
    <RouterProvider navigate={navigate}>
      <I18nProvider>
        <ThemeProvider>
          <ErrorBoundary fallback={<Fallback />}>

            <header />

            <main>
              <Router />
            </main>

            <footer />

          </ErrorBoundary>
        </ThemeProvider>
      </I18nProvider>
    </RouterProvider>
  )
}
