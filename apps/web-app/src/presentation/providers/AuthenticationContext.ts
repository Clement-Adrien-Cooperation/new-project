import { createContext } from 'react'

import type { AuthenticationState as BaseAuthenticationState } from '@/domain/authentication'

export type AuthenticationState =
  | BaseAuthenticationState
  | { status: 'loading' }

type AuthenticationContextValue = {
  authentication: AuthenticationState
  login: (username: string, password: string) => void
  logout: () => void
}

export const AuthenticationContext = createContext<AuthenticationContextValue | null>(null)
