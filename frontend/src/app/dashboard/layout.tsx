'use client'

import { Sidebar, TopBar } from '@/components/dashboard'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isAuthenticated, isLoading, user } = useAuth()
  const router = useRouter()
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  // useEffect(() => {
  //   if (!isLoading) {
  //     if (!isAuthenticated) {
  //       router.push('/login')
  //     } else if (user && !user.isRegistered && user.role !== 'admin') {
  //       // Jika user adalah siswa dan belum melengkapi data diri
  //       router.push('/register')
  //     }
  //   }
  // }, [isAuthenticated, isLoading, user, router])

  // if (isLoading || !isAuthenticated || (user && !user.isRegistered && user.role !== 'admin')) {
  //   return <div className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center">Loading...</div>
  // }

  return (
    <div className="min-h-screen">
      <Sidebar 
        isCollapsed={isSidebarCollapsed} 
        onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)} 
      />
      
      <div 
        className="flex flex-col min-h-screen transition-all duration-300"
        style={{ paddingLeft: isSidebarCollapsed ? '80px' : '260px' }}
      >
        <TopBar />
        <main className="flex-1 p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
