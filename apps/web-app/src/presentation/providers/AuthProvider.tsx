import { type FC, type PropsWithChildren, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

import type { AuthUser } from '@shared-types/dto'

import { AuthService } from '@/application/services'
import { ROUTE_DEFAULT } from '@/domain/navigation'
import { AuthContext, type AuthWithLoading } from '@/presentation/providers'

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [auth, setAuth] = useState<AuthWithLoading>({ status: 'loading' })

  const navigate = useNavigate()

  const setAuthenticatedUser = useCallback((user: AuthUser) => {
    setAuth({ status: 'authenticated', user })
  }, [])

  const logout = useCallback(() => {
    AuthService.logout()
    setAuth({ status: 'unauthenticated' })
    navigate(ROUTE_DEFAULT)
  }, [navigate])

  useEffect(() => {
    AuthService.getInitialAuth()
      .then(setAuth)
      .catch(console.error)
  }, [])

  return (
    <AuthContext value={{ auth, logout, setAuthenticatedUser }}>
      {children}
    </AuthContext>
  )
}
