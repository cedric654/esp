import { createContext } from 'react'

import type { KeyedMutator } from 'swr'

import type { UserInfo } from '../types'

type UserContextType = {
  user?: UserInfo
  error?: Error
  isLoading: boolean
  isAuthenticated: boolean
  mutate: KeyedMutator<UserInfo>
  isIncompletedProfile: boolean | undefined
}

export const UserContext = createContext<UserContextType | null>(null)
