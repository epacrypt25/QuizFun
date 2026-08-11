'use client'

import {
  BookOpen,
  ChevronLeft,
  LayoutDashboard,
  Menu,
  Settings,
  Trophy
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Profile from '../../../public/profile.jpg';


interface SidebarProps {
  isCollapsed?: boolean
  onToggle?: () => void
}

export function Sidebar({ isCollapsed = false, onToggle }: SidebarProps) {
  const pathname = usePathname()

  const menuItems = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Quizzes', href: '/quiz', icon: BookOpen },
    { name: 'Leaderboard', href: '/leaderboard', icon: Trophy },
    { name: 'Settings', href: '/settings', icon: Settings },
  ]

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 flex flex-col justify-between border-r border-gray-200 bg-white p-4 transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'
        }`}
    >
      {/* Bagian Atas: Logo & Tombol Toggle */}
      <div>
        <div className={`flex items-center mb-4 ${isCollapsed ? 'justify-center' : 'justify-between px-2'}`}>
          {!isCollapsed && (
            <span className="text-xl font-black tracking-tight text-blue-600">
              Quiz<span className="text-gray-900">Fun</span>
            </span>
          )}

          <button
            onClick={onToggle}
            className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 transition-colors"
          >
            {isCollapsed ? <Menu className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
          </button>
        </div>

        <div className={`flex flex-col  border-gray-100 pb-4 ${isCollapsed ? 'items-center' : ''}`}>
          <div className="relative">
            <div className="bg-gray-200 w-full rounded-2xl overflow-hidden">
              <div className="flex flex-row items-center h-full m-2">
                <Image
                  src={Profile}
                  alt="User Avatar"
                  width={40}
                  height={20}
                  unoptimized // Ditambahkan untuk melewati proses optimasi server Next.js
                  className="rounded-full object-cover border-2 border-gray-100 shadow-sm"
                />

                <p className={`ml-3 text-sm font-medium text-gray-900 ${isCollapsed ? 'hidden' : ''}`}>
                  John Doe
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Navigasi */}
        <nav className="flex flex-col gap-1.5">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group flex items-center gap-3 rounded-xl p-3 text-sm font-semibold transition-all ${isActive
                  ? 'bg-gray-200 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                  }`}
              >
                <Icon className={`h-5 w-5  ${isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'}`} />
                <span className={`transition-opacity duration-200 ${isCollapsed ? 'opacity-0 md:hidden' : 'opacity-100'}`}>
                  {item.name}
                </span>
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
