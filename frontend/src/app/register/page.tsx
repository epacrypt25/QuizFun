'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'

const AVATARS = ['🦊', '🐶', '🐱', '🐼', '🦁', '🐸', '🦄', '🐲']

export default function RegisterPage() {
  const { user, isAuthenticated, isLoading, registerUser } = useAuth()
  const router = useRouter()
  
  const [name, setName] = useState('')
  const [selectedAvatar, setSelectedAvatar] = useState(AVATARS[0])
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    // Jika belum login, ke halaman login
    if (!isLoading && !isAuthenticated) {
      router.push('/login')
    }
    // Jika sudah teregistrasi, langsung ke dashboard
    if (!isLoading && user?.isRegistered) {
      router.push(user.role === 'admin' ? '/admin' : '/dashboard')
    }
  }, [isAuthenticated, isLoading, user, router])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulasikan delay jaringan
    setTimeout(() => {
      registerUser(name, selectedAvatar)
      router.push('/dashboard')
    }, 1000)
  }

  if (isLoading || !isAuthenticated || user?.isRegistered) {
    return <div className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center">Memuat...</div>
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex flex-col items-center justify-center p-6">
      <div className="card max-w-md w-full p-8 animate-scale-in">
        <div className="text-center mb-8">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-primary-50)] text-3xl mb-4">
            🎒
          </div>
          <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">
            Lengkapi Profil Anda
          </h1>
          <p className="text-sm text-[var(--color-text-muted)] mt-2">
            Pilih avatar dan masukkan nama panggilan Anda untuk memulai petualangan!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Avatar Selection */}
          <div>
            <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-3 text-center">
              Pilih Karakter Favoritmu
            </label>
            <div className="grid grid-cols-4 gap-3">
              {AVATARS.map((avatar) => (
                <button
                  key={avatar}
                  type="button"
                  onClick={() => setSelectedAvatar(avatar)}
                  className={`h-14 w-14 rounded-2xl text-2xl flex items-center justify-center transition-all ${
                    selectedAvatar === avatar
                      ? 'bg-[var(--color-primary)] text-white scale-110 shadow-lg shadow-blue-500/30'
                      : 'bg-[var(--color-bg)] border border-[var(--color-border-light)] hover:bg-[var(--color-primary-50)] hover:scale-105'
                  }`}
                >
                  {avatar}
                </button>
              ))}
            </div>
          </div>

          {/* Name Input */}
          <div>
            <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">
              Nama Panggilan
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input text-center text-lg font-bold"
              placeholder="Cth: Budi"
              maxLength={15}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !name.trim()}
            className="btn-primary w-full py-3 text-lg mt-4 disabled:opacity-50"
          >
            {isSubmitting ? 'Menyimpan...' : 'Mulai Bermain! 🚀'}
          </button>
        </form>
      </div>
    </div>
  )
}
