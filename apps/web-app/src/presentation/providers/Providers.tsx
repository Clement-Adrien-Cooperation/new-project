import type { FC, PropsWithChildren } from 'react'
import { RouterProvider } from 'react-aria-components'
import { useNavigate } from 'react-router'

import { AuthProvider, I18nProvider, ThemeProvider } from '@/presentation/providers'

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate()

  return (
    <RouterProvider navigate={navigate}>
      <I18nProvider>
        <ThemeProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ThemeProvider>
      </I18nProvider>
    </RouterProvider>
  )
}
