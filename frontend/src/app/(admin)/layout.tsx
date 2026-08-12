'use client'

import { Sidebar, TopBar } from '@/components/dashboard'
import { useState } from 'react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 text-gray-950">
      {/* Bungkus Sidebar dengan div tinggi penuh agar tidak melayang berantakan */}
      <div className="fixed inset-y-0 left-0 h-full z-40">
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        />
      </div>

      {/* Konten Utama di sebelah kanan Sidebar */}
      <div
        className="flex flex-col min-h-screen transition-all duration-300"
        style={{ paddingLeft: isSidebarCollapsed ? '80px' : '256px' }} // Mengubah 260px ke 256px agar pas dengan w-64 (256px) milik sidebar
      >
        <TopBar />
        <main className="flex-1 p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
