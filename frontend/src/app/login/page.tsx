'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import { useConnect, useAccount } from 'wagmi'
import Link from 'next/link'

export default function LoginPage() {
  const { user, isAuthenticated, isLoading } = useAuth()
  const { connectors, connect } = useConnect()
  const { isConnecting } = useAccount()
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated && user) {
      if (user.role === 'admin') {
        router.push('/admin')
      } else {
        router.push('/dashboard')
      }
    }
  }, [isAuthenticated, user, router])

  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center p-6">
      <div className="card max-w-md w-full p-8 animate-scale-in">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2.5 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)] text-white font-bold text-xl">
              E
            </div>
          </Link>
          <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">
            Masuk dengan Web3
          </h1>
          <p className="text-sm text-[var(--color-text-muted)] mt-2">
            Hubungkan dompet kripto Anda untuk melanjutkan
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {isLoading || isConnecting ? (
            <div className="text-center py-4 text-sm font-semibold text-[var(--color-text-muted)]">
              Mengecek wallet...
            </div>
          ) : (
            connectors.map((connector) => (
              <button
                key={connector.uid}
                onClick={() => connect({ connector })}
                className="flex items-center justify-between w-full p-4 rounded-xl border-2 border-[var(--color-border-light)] hover:border-[var(--color-primary)] bg-[var(--color-bg)] hover:bg-white transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-primary-50)] flex items-center justify-center text-[var(--color-primary)] group-hover:scale-110 transition-transform">
                    🦊
                  </div>
                  <span className="font-semibold text-[var(--color-text-primary)]">
                    {connector.name}
                  </span>
                </div>
                <span className="text-[var(--color-text-muted)] text-sm font-medium">
                  Hubungkan
                </span>
              </button>
            ))
          )}
        </div>

        <div className="mt-8 p-4 bg-[var(--color-bg)] rounded-xl border border-[var(--color-border-light)] text-center">
          <p className="text-xs font-bold text-[var(--color-text-secondary)] mb-2 uppercase tracking-wider">
            Info Role Admin:
          </p>
          <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
            Role admin otomatis diberikan jika wallet address Anda terdaftar di sistem. Silakan sesuaikan address admin di file <span className="font-mono bg-white px-1 py-0.5 rounded text-[var(--color-primary)]">src/context/AuthContext.tsx</span>
          </p>
        </div>
      </div>
    </div>
  )
}
