'use client'

import {
  Banknote,
  ChevronLeft,
  FileText,
  LayoutDashboard,
  LogOut,
  Menu,
  UserShield
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useDisconnect } from 'wagmi';
import Profile from '../../../public/profile.jpg';


interface SidebarProps {
  isCollapsed?: boolean
  onToggle?: () => void
}

export function Sidebar({ isCollapsed = false, onToggle }: SidebarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const { disconnect } = useDisconnect()

  const menuItems = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Quizzes', href: '/quiz', icon: FileText },
    { name: 'Mint Token', href: '/mint', icon: Banknote },
    { name: 'Profile', href: '/profile', icon: UserShield },
  ]

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 flex flex-col justify-between border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 transition-transform duration-300 w-64 md:transition-all ${
        isCollapsed ? '-translate-x-full md:translate-x-0 md:w-20' : 'translate-x-0'
      }`}
    >
      {/* Bagian Atas: Logo & Tombol Toggle */}
      <div className="flex-1 flex flex-col">
        <div className={`flex items-center mb-4 ${isCollapsed ? 'justify-center' : 'justify-between px-2'}`}>
          {!isCollapsed && (
            <span className="text-xl font-black tracking-tight text-black">
              QuizFun
            </span>
          )}

          <button
            onClick={onToggle}
            className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isCollapsed ? <Menu className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
          </button>
        </div>

        <div className={`flex flex-col border-gray-100 dark:border-gray-800 pb-4 ${isCollapsed ? 'items-center' : ''}`}>
          <div className="relative">
            <div className="bg-gray-200 dark:bg-gray-800 w-full rounded-2xl overflow-hidden">
              <div className="flex flex-row items-center h-full m-2">
                <Image
                  src={Profile}
                  alt="User Avatar"
                  width={40}
                  height={20}
                  unoptimized // Ditambahkan untuk melewati proses optimasi server Next.js
                  className="rounded-full object-cover border-2 border-gray-100 dark:border-gray-700 shadow-sm"
                />

                <p className={`ml-3 text-sm font-medium text-gray-900 dark:text-white ${isCollapsed ? 'hidden' : ''}`}>
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
                  ? 'bg-gray-200 dark:bg-gray-800 text-blue-600 dark:text-blue-500'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                  }`}
              >
                <Icon className={`h-5 w-5  ${isActive ? 'text-blue-600 dark:text-blue-500' : 'text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300'}`} />
                <span className={`transition-opacity duration-200 ${isCollapsed ? 'opacity-0 md:hidden' : 'opacity-100'}`}>
                  {item.name}
                </span>
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Bagian Bawah: Logout */}
      <div className="mt-auto pt-4">
        <button
          onClick={() => {
            disconnect()
            router.push('/')
          }}
          className="group flex w-full items-center gap-3 rounded-xl p-3 text-sm font-semibold text-red-600 dark:text-red-500 transition-all hover:bg-red-50 dark:hover:bg-red-900/20"
        >
          <LogOut className="h-5 w-5" />
          <span className={`transition-opacity duration-200 ${isCollapsed ? 'opacity-0 md:hidden' : 'opacity-100'}`}>
            Logout
          </span>
        </button>
      </div>
    </aside>
  )
}
