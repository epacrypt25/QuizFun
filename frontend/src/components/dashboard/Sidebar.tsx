'use client'

import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import { useDisconnect } from 'wagmi'

/* ==========================================
   Sidebar — Dashboard Navigation
   Matches screenshot: Logo, user info, nav links
   ========================================== */

interface SidebarProps {
  isCollapsed?: boolean
  onToggle?: () => void
}

export function Sidebar({ isCollapsed = false, onToggle }: SidebarProps) {
  const { user } = useAuth()
  const { disconnect } = useDisconnect()
  const router = useRouter()

  const isAdmin = user?.role === 'admin'

  const studentLinks = [
    { href: '/dashboard', icon: '🏠', label: 'Dashboard' },
    { href: '/dashboard/course', icon: '📚', label: 'Course' },
    { href: '/dashboard/quiz', icon: '🎯', label: 'Quiz' },
    { href: '/dashboard/profile', icon: '👤', label: 'Profile' },
  ]

  const adminLinks = [
    { href: '/admin', icon: '🏠', label: 'Dashboard' },
    { href: '/admin/students', icon: '👥', label: 'Siswa' },
    { href: '/admin/quiz', icon: '📝', label: 'Kelola Kuis' },
    { href: '/admin/scores', icon: '📊', label: 'Input Nilai' },
  ]

  const links = isAdmin ? adminLinks : studentLinks

  const handleLogout = () => {
    disconnect()
    router.push('/')
  }

  return (
    <aside
      className={`fixed left-0 top-0 z-30 flex h-screen flex-col border-r border-[var(--color-border-light)] bg-white transition-all duration-300 ${
        isCollapsed ? 'w-[80px]' : 'w-[260px]'
      }`}
    >
      {/* Logo */}
      <div className="flex h-16 items-center justify-between border-b border-[var(--color-border-light)] px-5">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-primary)] text-white font-bold text-sm">
            E
          </div>
          {!isCollapsed && (
            <span className="text-lg font-extrabold tracking-tight text-[var(--color-text-primary)]">
              Edu<span className="text-[var(--color-primary)]">Fun</span>
            </span>
          )}
        </Link>
        {onToggle && (
          <button
            onClick={onToggle}
            className="flex h-7 w-7 items-center justify-center rounded-md text-[var(--color-text-muted)] hover:bg-[var(--color-bg)] hover:text-[var(--color-text-primary)] transition-colors text-sm"
          >
            {isCollapsed ? '→' : '←'}
          </button>
        )}
      </div>

      {/* User Info */}
      <div className="border-b border-[var(--color-border-light)] px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="avatar">
            {user?.avatar || user?.name?.charAt(0) || '?'}
          </div>
          {!isCollapsed && (
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-[var(--color-text-primary)]">
                {user?.name || 'User'}
              </p>
              <p className="truncate text-xs text-[var(--color-text-muted)]">
                {isAdmin ? 'Administrator' : `Level ${user?.level || 1}`}
              </p>
            </div>
          )}
          {!isCollapsed && (
            <button className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors text-xs">
              ›
            </button>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <div className="flex flex-col gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="sidebar-link"
              title={isCollapsed ? link.label : undefined}
            >
              <span className="text-lg">{link.icon}</span>
              {!isCollapsed && <span>{link.label}</span>}
            </Link>
          ))}
        </div>
      </nav>

      {/* Logout */}
      <div className="border-t border-[var(--color-border-light)] px-3 py-4">
        <button
          onClick={handleLogout}
          className="sidebar-link w-full text-red-500 hover:bg-red-50 hover:text-red-600"
        >
          <span className="text-lg">🚪</span>
          {!isCollapsed && <span>Disconnect</span>}
        </button>
      </div>
    </aside>
  )
}
