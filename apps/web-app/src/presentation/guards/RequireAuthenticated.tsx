import type { FC } from 'react'
import { Navigate, Outlet } from 'react-router'

import { useAuth } from '@/application/hooks'
import { ROUTE_DEFAULT } from '@/domain/navigation'
import { Fallback, Loader } from '@/presentation/components'

export const RequireAuthenticated: FC = () => {
  const { auth } = useAuth()

  switch (auth.status) {
    case 'authenticated':
      return <Outlet />
    case 'loading':
      return <Loader />
    case 'unauthenticated':
      return <Navigate to={ROUTE_DEFAULT} />
    default:
      console.error('Unexpected auth status:', { auth })
      return <Fallback />
  }
}
