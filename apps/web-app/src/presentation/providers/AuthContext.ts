import { createContext } from 'react'

import type { AuthUserDTO } from '@shared-types/dto'

import type { AuthState } from '@/domain/auth'

export type AuthStateWithLoading =
  | AuthState
  | { status: 'loading' }

type AuthContextValue = {
  auth: AuthStateWithLoading
  setAuthenticatedUser: (user: AuthUserDTO) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextValue | null>(null)
