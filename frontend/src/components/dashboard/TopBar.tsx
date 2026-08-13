'use client'

import { Bell, Moon, Sun, Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export function TopBar({ onMenuClick }: { onMenuClick?: () => void }) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const pathname = usePathname()

  // Fungsi untuk mengubah struktur URL /quiz menjadi teks rapi "Quizzes"
  const getPageTitle = () => {
    if (pathname === '/home') return 'Dashboard'
    if (pathname === '/dashboard') return 'Dashboard'
    if (pathname === '/quiz') return 'Quizzes'
    if (pathname === '/leaderboard') return 'Leaderboard'
    if (pathname === '/settings') return 'Settings'
    return 'Dashboard' // Nama default jika tidak ada yang cocok
  }

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between px-4 md:px-6 backdrop-blur-md bg-white/50 border-b border-gray-200/50">

      {/* SISI KIRI: Nama Halaman Aktif (Dinamis & Informatif) */}
      <div className="flex items-center gap-3">
        <button 
          onClick={onMenuClick} 
          className="md:hidden rounded-xl p-2 text-gray-500 bg-white border border-gray-100 hover:bg-gray-50 shadow-sm"
        >
          <Menu className="w-5 h-5" />
        </button>
        <h1 className="text-lg font-extrabold tracking-tight text-gray-900 md:text-xl capitalize">
          {getPageTitle()}
        </h1>
      </div>

      {/* SISI KANAN: Tombol Aksi */}
      <div className="flex items-center gap-3.5">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="rounded-xl p-2.5 text-gray-500 border border-gray-100 bg-white hover:bg-gray-50 transition-all hover:text-gray-950 shadow-sm"
        >
          {isDarkMode ? <Sun className="h-4 w-4 text-amber-500" /> : <Moon className="h-4 w-4" />}
        </button>

        <button className="relative rounded-xl p-2.5 text-gray-500 border border-gray-100 bg-white hover:bg-gray-50 transition-all hover:text-gray-950 shadow-sm">
          <Bell className="h-4 w-4" />
          <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
        </button>
      </div>

    </header>
  )
}
