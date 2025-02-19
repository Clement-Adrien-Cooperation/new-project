import { createContext } from 'react'

import type { AuthUser } from '@shared-types/dto'

import type { Auth } from '@/domain/auth'

export type AuthWithLoading = | Auth | { status: 'loading' }

type AuthContextValue = {
  auth: AuthWithLoading
  setAuthenticatedUser: (user: AuthUser) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextValue | null>(null)
