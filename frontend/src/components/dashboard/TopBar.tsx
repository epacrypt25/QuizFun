'use client'

import { useState } from 'react'
import { ConnectButton } from '@/components/ui/ConnectButton'

/* ==========================================
   TopBar — Dashboard Header
   Search bar, notifications, theme toggle, user avatar
   ========================================== */

export function TopBar() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-[var(--color-border-light)] bg-white/80 backdrop-blur-md px-6">
      {/* Search */}
      <div className="flex items-center gap-3 flex-1 max-w-md">
        <div className="relative flex-1">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] text-sm">
            🔍
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="input pl-9 py-2.5 text-sm bg-[var(--color-bg)] border-transparent focus:border-[var(--color-primary)] focus:bg-white"
          />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3">
        {/* Notification Bell */}
        <button className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-bg)] text-[var(--color-text-secondary)] hover:bg-[var(--color-primary-50)] hover:text-[var(--color-primary)] transition-colors">
          <span className="text-lg">🔔</span>
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white">
            3
          </span>
        </button>

        {/* Theme Toggle */}
        <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-bg)] text-[var(--color-text-secondary)] hover:bg-[var(--color-primary-50)] hover:text-[var(--color-primary)] transition-colors">
          <span className="text-lg">☀️</span>
        </button>

        {/* Wallet Connect */}
        <ConnectButton />
      </div>
    </header>
  )
}
