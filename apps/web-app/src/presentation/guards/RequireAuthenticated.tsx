import type { FC } from 'react'
import { Navigate, Outlet } from 'react-router'

import { useAuth } from '@/application/hooks'
import { ROUTES } from '@/domain/navigation'
import { Fallback, Loader } from '@/presentation/components'

export const RequireAuthenticated: FC = () => {
  const { auth } = useAuth()

  switch (auth.status) {
    case 'authenticated':
      return <Outlet />
    case 'loading':
      return <Loader />
    case 'unauthenticated':
      return <Navigate to={ROUTES.login} />
    default:
      console.error('Unexpected auth status:', { auth })
      return <Fallback />
  }
}
