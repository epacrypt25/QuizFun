'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { useAccount } from 'wagmi'
import { User } from '@/types/auth'
import { useRouter, usePathname } from 'next/navigation'

/* ==========================================
   Auth Context — Web3 Wallet Based Auth
   ========================================== */

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  registerUser: (name: string, avatar: string) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Tambahkan address wallet admin di sini (gunakan huruf kecil semua)
const ADMIN_ADDRESSES = [
  '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266'
]

export function AuthProvider({ children }: { children: ReactNode }) {
  const { address, isConnected, isConnecting, isReconnecting } = useAccount()
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()
  const pathname = usePathname()
  
  const isLoading = isConnecting || isReconnecting

  useEffect(() => {
    if (isConnected && address) {
      const lowerAddress = address.toLowerCase()
      const isAdmin = ADMIN_ADDRESSES.includes(lowerAddress)

      // Cek apakah data user sudah ada di localStorage (Mock Database)
      const storedDataStr = localStorage.getItem(`user_${lowerAddress}`)
      let storedData = null
      
      if (storedDataStr) {
        try {
          storedData = JSON.parse(storedDataStr)
        } catch (e) {
          // ignore
        }
      }

      if (isAdmin) {
        setUser({
          id: lowerAddress,
          walletAddress: lowerAddress,
          name: 'Bapak/Ibu Guru',
          role: 'admin',
          isRegistered: true,
          avatar: '👨‍🏫',
          xp: 0,
          level: 0,
        })
      } else {
        // Jika siswa, cek apakah sudah registrasi
        setUser({
          id: lowerAddress,
          walletAddress: lowerAddress,
          name: storedData?.name || `Siswa ${address.slice(0, 6)}`,
          role: 'siswa',
          isRegistered: !!storedData?.isRegistered,
          avatar: storedData?.avatar || '🎓',
          xp: storedData?.xp || 0,
          level: storedData?.level || 1,
        })
      }
      
      // Auto-redirect jika sedang di halaman awal atau login
      if (pathname === '/' || pathname === '/login') {
        if (isAdmin) {
          router.push('/admin')
        } else {
          router.push('/dashboard')
        }
      }

    } else {
      setUser(null)
    }
  }, [address, isConnected, pathname, router])

  // Fungsi untuk menyimpan data profil siswa
  const registerUser = (name: string, avatar: string) => {
    if (!user || !address) return
    
    const lowerAddress = address.toLowerCase()
    const updatedUser = {
      ...user,
      name,
      avatar,
      isRegistered: true,
      xp: 0,
      level: 1
    }
    
    // Simpan ke "Database"
    localStorage.setItem(`user_${lowerAddress}`, JSON.stringify(updatedUser))
    setUser(updatedUser)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        registerUser
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
