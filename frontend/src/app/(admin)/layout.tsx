'use client'

import { Sidebar, TopBar } from '@/components/dashboard'
import { useState, useEffect } from 'react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarCollapsed(window.innerWidth < 768)
    }
    
    // Async call to avoid synchronous setState during initial render
    setTimeout(handleResize, 0)
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 text-gray-950">
      {/* Overlay untuk mobile saat menu terbuka */}
      {!isSidebarCollapsed && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsSidebarCollapsed(true)}
        />
      )}
      
      {/* Bungkus Sidebar */}
      <div className={`fixed inset-y-0 left-0 h-full z-40 transition-transform duration-300 ${
        isSidebarCollapsed ? '-translate-x-full md:translate-x-0' : 'translate-x-0'
      }`}>
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        />
      </div>

      {/* Konten Utama di sebelah kanan Sidebar */}
      <div
        className={`flex flex-col min-h-screen transition-all duration-300 ${
          isSidebarCollapsed ? 'pl-0 md:pl-20' : 'pl-0 md:pl-64'
        }`}
      >
        <TopBar onMenuClick={() => setIsSidebarCollapsed(false)} />
        <main className="flex-1 p-4 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
