import { type FC, type PropsWithChildren, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

import type { AuthUserDTO } from '@shared-types/dto'

import { AuthService } from '@/application/services'
import { ROUTE_DEFAULT } from '@/domain/navigation'
import { AuthContext, type AuthStateWithLoading } from '@/presentation/providers'

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [auth, setAuth] = useState<AuthStateWithLoading>({ status: 'loading' })

  const navigate = useNavigate()

  const setAuthenticatedUser = (user: AuthUserDTO) => setAuth({ status: 'authenticated', user })

  const logout = () => {
    AuthService.logout()
    setAuth({ status: 'unauthenticated' })
    navigate(ROUTE_DEFAULT)
  }

  useEffect(() => {
    AuthService.getInitialAuthState().then(setAuth)
  }, [])

  return (
    <AuthContext value={{ auth, logout, setAuthenticatedUser }}>
      {children}
    </AuthContext>
  )
}
