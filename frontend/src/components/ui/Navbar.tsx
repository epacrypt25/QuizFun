'use client'

import { ConnectButton } from './ConnectButton'
import Link from 'next/link'
import { useState } from 'react'

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-blue-800 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12">
        
        {/* Brand / Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-emerald-500 font-bold text-white shadow-lg transition-transform group-hover:rotate-12 group-hover:scale-110">
            E
          </div>
          <span className="text-xl font-extrabold tracking-tight text-white md:text-2xl">
            EduFun<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Web3</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-semibold text-slate-300 hover:text-emerald-400 transition-colors">
            Beranda
          </Link>
          <Link href="/teacher" className="text-sm font-semibold text-purple-300 hover:text-purple-100 transition-colors rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 hover:bg-purple-500/20">
            👨‍🏫 Portal Guru
          </Link>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <ConnectButton />
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white md:hidden transition-colors hover:bg-white/20"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#0c0a1f]/95 backdrop-blur-xl px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            <Link 
              href="/" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-xl bg-white/5 px-4 py-3 text-sm font-semibold text-slate-300 hover:text-emerald-400 transition-colors"
            >
              🏠 Beranda
            </Link>
            <Link 
              href="/teacher" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-xl bg-purple-500/10 border border-purple-500/20 px-4 py-3 text-sm font-semibold text-purple-300 hover:text-purple-100 transition-colors"
            >
              👨‍🏫 Portal Guru
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
