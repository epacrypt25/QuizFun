/* ==========================================
   Auth & User Type Definitions
   ========================================== */

export type UserRole = 'admin' | 'siswa'

export interface User {
  id: string
  name: string
  walletAddress: string
  role: UserRole
  isRegistered: boolean
  avatar?: string
  xp?: number
  level?: number
}
