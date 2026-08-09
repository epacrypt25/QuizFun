import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/Providers'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EduFun Web3 | Learn & Earn',
  description: 'Belajar jadi menyenangkan! Selesaikan kuis sekolah dan menangkan hadiah crypto.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)] antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
