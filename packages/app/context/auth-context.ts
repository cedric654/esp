import { createContext } from 'react'

import type { AuthenticationStatus, UserInfo } from 'app/types'

type AuthContextType = {
  authenticationStatus: AuthenticationStatus
  accessToken?: string

  setAuthenticationStatus: (status: AuthenticationStatus) => void

  login: (endpoint: string, payload: object) => Promise<UserInfo>
  logout: () => Promise<void>
}

export const AuthContext = createContext<AuthContextType | null>(null)
