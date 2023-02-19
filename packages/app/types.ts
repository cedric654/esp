export interface Profile {
  profile_id: number
  name: string
  email: string
  notifications_last_opened: Date
  bio?: string
  profile_img_url?: string
}

export type Camera = {
  camera_id: number
  name: string
  location?: string
  is_active: boolean
  created_at: Date
  updated_at: Date
}

export type AuthenticationStatus =
  | 'IDLE'
  | 'REFRESHING'
  | 'AUTHENTICATING'
  | 'AUTHENTICATED'
  | 'UNAUTHENTICATED'

export type UserInfo = {
  data: {
    profile: Profile
    cameras: Camera[]
    notifications_last_opened: string | null
  }
}
