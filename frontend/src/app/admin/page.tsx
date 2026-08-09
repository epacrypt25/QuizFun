'use client'

import { useState } from 'react'
import { useAccount } from 'wagmi'

export default function AdminDashboard() {
  const { isConnected } = useAccount()
  const [studentAddress, setStudentAddress] = useState('')
  const [score, setScore] = useState('')
  const [quizType, setQuizType] = useState('1')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  const recentSubmissions = [
    { student: '0xAbC1...7f2E', subject: 'Matematika', score: 92, status: '✅', time: '2 menit lalu' },
    { student: '0xDeF4...1a3B', subject: 'Sains', score: 78, status: '✅', time: '15 menit lalu' },
    { student: '0x12a5...9cD0', subject: 'Matematika', score: 65, status: '⚠️', time: '1 jam lalu' },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isConnected) {
      setStatus({ type: 'error', message: 'Tolong hubungkan dompet (Connect Wallet) terlebih dahulu sebagai Guru.' })
      return
    }

    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    // Simulasi interaksi blockchain
    setTimeout(() => {
      setIsSubmitting(false)
      setStatus({ 
        type: 'success', 
        message: `Berhasil submit nilai ${score} untuk siswa ${studentAddress.slice(0, 6)}...! Hadiah telah dikirimkan.` 
      })
      setStudentAddress('')
      setScore('')
    }, 2000)
  }

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in-up">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">Dashboard Admin</h1>
        <p className="text-sm text-[var(--color-text-muted)] mt-1">
          Kelola nilai siswa dan distribusi reward kuis.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Form Input */}
        <div className="lg:col-span-3">
          <div className="card p-6">
            <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-6 flex items-center gap-2">
              <span className="text-2xl">📝</span> Input Nilai Siswa
            </h2>

            {status.message && (
              <div className={`mb-6 rounded-lg p-4 text-sm font-semibold border ${
                status.type === 'error' 
                  ? 'bg-red-50 text-red-600 border-red-100' 
                  : 'bg-green-50 text-green-600 border-green-100'
              }`}>
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">
                  Alamat Wallet Siswa
                </label>
                <input 
                  type="text" 
                  required
                  value={studentAddress}
                  onChange={(e) => setStudentAddress(e.target.value)}
                  placeholder="0x..."
                  className="input"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">
                  Mata Pelajaran
                </label>
                <select 
                  value={quizType}
                  onChange={(e) => setQuizType(e.target.value)}
                  className="input cursor-pointer"
                >
                  <option value="1">📐 Matematika Seru (Hadiah RWA)</option>
                  <option value="2">🔬 Sains Alam (Hadiah USDT)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">
                  Nilai Ujian (0 - 100)
                </label>
                <input 
                  type="number" 
                  required
                  min="0"
                  max="100"
                  value={score}
                  onChange={(e) => setScore(e.target.value)}
                  placeholder="Contoh: 85"
                  className="input"
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full mt-2"
              >
                {isSubmitting ? 'Mengirim ke Blockchain...' : 'Kirim Nilai'}
              </button>
            </form>
          </div>
        </div>

        {/* Stats & History */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="card p-4 text-center">
              <div className="text-2xl font-bold text-[var(--color-primary)]">24</div>
              <div className="text-xs font-medium text-[var(--color-text-muted)] mt-1">Total Siswa</div>
            </div>
            <div className="card p-4 text-center">
              <div className="text-2xl font-bold text-green-500">120</div>
              <div className="text-xs font-medium text-[var(--color-text-muted)] mt-1">RWA Tersalur</div>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="font-bold text-[var(--color-text-primary)] mb-4 flex items-center gap-2">
              📋 Riwayat Submit
            </h3>
            <div className="flex flex-col gap-3">
              {recentSubmissions.map((sub, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-[var(--color-bg)]">
                  <div className="text-lg">{sub.status}</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold text-[var(--color-text-primary)] truncate">{sub.student}</div>
                    <div className="text-xs text-[var(--color-text-muted)]">{sub.subject} • {sub.time}</div>
                  </div>
                  <div className="text-sm font-bold text-[var(--color-primary)]">{sub.score}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
