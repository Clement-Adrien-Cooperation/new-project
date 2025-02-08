import { RouterProvider } from 'react-aria-components'
import { useNavigate } from 'react-router'

import { Router } from '@/application/router'
import { I18nProvider, ThemeProvider } from '@/presentation/providers'

import '@/presentation/styles/base.sass'

export const App = () => {
  const navigate = useNavigate()

  return (
    <RouterProvider navigate={navigate}>
      <I18nProvider>
        <ThemeProvider>

          <header />

          <main>
            <Router />
          </main>

          <footer />

        </ThemeProvider>
      </I18nProvider>
    </RouterProvider>
  )
}
