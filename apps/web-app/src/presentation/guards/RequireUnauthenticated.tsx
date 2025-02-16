import type { FC } from 'react'
import { Navigate, Outlet } from 'react-router'

import { useAuth } from '@/application/hooks'
import { ROUTE_DEFAULT } from '@/domain/navigation'
import { Fallback, Loader } from '@/presentation/components'

export const RequireUnauthenticated: FC = () => {
  const { auth } = useAuth()

  switch (auth.status) {
    case 'authenticated':
      return <Navigate to={ROUTE_DEFAULT} />
    case 'unauthenticated':
      return <Outlet />
    case 'loading':
      return <Loader />
    default:
      console.error('Unexpected auth status:', { auth })
      return <Fallback />
  }
}
