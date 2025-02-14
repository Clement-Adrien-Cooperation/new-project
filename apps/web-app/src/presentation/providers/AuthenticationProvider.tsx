import { type FC, type PropsWithChildren, useEffect, useState } from 'react'

import { AuthenticationService } from '@/application/services'
import { AuthenticationContext, type AuthenticationState } from '@/presentation/providers'

export const AuthenticationProvider: FC<PropsWithChildren> = ({ children }) => {
  const [authentication, setAuthentication] = useState<AuthenticationState>({ status: 'loading' })

  const login = async (username: string, password: string, shouldRemember = false) => {
    const authenticatedUserResult = await AuthenticationService.login(username, password, shouldRemember)
    console.log(authenticatedUserResult)
  }

  const logout = () => {
    AuthenticationService.logout()
    setAuthentication({ status: 'unauthenticated' })
  }

  useEffect(() => {
    AuthenticationService.getInitialAuthenticationState().then(setAuthentication)
  }, [])

  return (
    <AuthenticationContext value={{ authentication, login, logout }}>
      {children}
    </AuthenticationContext>
  )
}
