'use client'

import { useState } from 'react'
import { useAccount } from 'wagmi'

export default function TeacherDashboard() {
  const { address, isConnected } = useAccount()
  const [studentAddress, setStudentAddress] = useState('')
  const [score, setScore] = useState('')
  const [quizType, setQuizType] = useState('1')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  // Riwayat submit (dummy data)
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

    // Simulasi interaksi blockchain (Write Contract ke fungsi submitQuizScore di EduFun.sol)
    setTimeout(() => {
      setIsSubmitting(false)
      setStatus({ 
        type: 'success', 
        message: `Berhasil submit nilai ${score} untuk siswa ${studentAddress.slice(0, 6)}...! Hadiah telah dikirimkan otomatis oleh Smart Contract.` 
      })
      setStudentAddress('')
      setScore('')
    }, 2000)
  }

  return (
    <div className="min-h-[calc(100vh-5rem)] px-6 py-12 md:px-12 lg:px-24">
      {/* Page Header */}
      <div className="mb-10 text-center md:text-left">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm font-semibold text-purple-400 mb-4">
          <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse"></span>
          Portal Guru
        </div>
        <h1 className="text-3xl font-extrabold text-white md:text-4xl">Dashboard Guru</h1>
        <p className="mt-2 text-indigo-200/80 max-w-lg">
          Input nilai siswa ke dalam blockchain. Siswa yang memenuhi standar akan otomatis mendapatkan hadiah token.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        
        {/* Form — Left Side */}
        <div className="lg:col-span-3">
          <div className="glass-card rounded-3xl p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/20 text-2xl">
                👨‍🏫
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Input Nilai Siswa</h2>
                <p className="text-xs text-slate-400">Kirim ke smart contract EduFun</p>
              </div>
            </div>

            {status.message && (
              <div className={`mb-6 rounded-2xl p-4 text-sm font-semibold border ${
                status.type === 'error' 
                  ? 'bg-red-500/10 text-red-400 border-red-500/30' 
                  : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
              }`}>
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                  Alamat Wallet Siswa
                </label>
                <input 
                  type="text" 
                  required
                  value={studentAddress}
                  onChange={(e) => setStudentAddress(e.target.value)}
                  placeholder="0x..."
                  className="w-full rounded-2xl border-2 border-white/10 bg-white/5 p-4 font-medium text-white placeholder-slate-500 outline-none transition-all focus:border-[#3ae0d5] focus:bg-white/10"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                  Mata Pelajaran
                </label>
                <div className="relative">
                  <select 
                    value={quizType}
                    onChange={(e) => setQuizType(e.target.value)}
                    className="w-full appearance-none rounded-2xl border-2 border-white/10 bg-white/5 p-4 pr-10 font-medium text-white outline-none transition-all focus:border-[#3ae0d5] focus:bg-white/10"
                  >
                    <option value="1" className="bg-[#1e1b4b]">📐 Matematika Seru (Hadiah RWA)</option>
                    <option value="2" className="bg-[#1e1b4b]">🔬 Sains Alam (Hadiah USDT)</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-400">
                    ▼
                  </div>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
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
                  className="w-full rounded-2xl border-2 border-white/10 bg-white/5 p-4 font-medium text-white placeholder-slate-500 outline-none transition-all focus:border-[#3ae0d5] focus:bg-white/10"
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="mt-4 w-full rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 py-4 text-lg font-bold text-white shadow-xl transition-all hover:scale-[1.01] hover:shadow-purple-500/20 active:scale-[0.98] disabled:opacity-50"
              >
                {isSubmitting ? '⏳ Mengirim ke Blockchain...' : '📝 Input Nilai'}
              </button>
            </form>
          </div>
        </div>

        {/* Stats & History — Right Side */}
        <div className="flex flex-col gap-6 lg:col-span-2">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card rounded-2xl p-5 text-center">
              <div className="text-3xl font-extrabold text-white">24</div>
              <div className="text-xs font-semibold text-slate-400 mt-1">Siswa Terdaftar</div>
            </div>
            <div className="glass-card rounded-2xl p-5 text-center">
              <div className="text-3xl font-extrabold text-emerald-400">18</div>
              <div className="text-xs font-semibold text-slate-400 mt-1">Lulus Kuis</div>
            </div>
            <div className="glass-card rounded-2xl p-5 text-center">
              <div className="text-3xl font-extrabold text-purple-400">85.2</div>
              <div className="text-xs font-semibold text-slate-400 mt-1">Rata-rata Nilai</div>
            </div>
            <div className="glass-card rounded-2xl p-5 text-center">
              <div className="text-3xl font-extrabold text-amber-400">120</div>
              <div className="text-xs font-semibold text-slate-400 mt-1">RWA Tersalur</div>
            </div>
          </div>

          {/* Recent Submissions */}
          <div className="glass-card rounded-3xl p-6">
            <h3 className="mb-4 font-bold text-white flex items-center gap-2">
              <span className="text-lg">📋</span>
              Riwayat Submit
            </h3>
            <div className="flex flex-col gap-3">
              {recentSubmissions.map((sub, i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3">
                  <div className="text-lg">{sub.status}</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-white truncate">{sub.student}</div>
                    <div className="text-xs text-slate-400">{sub.subject} • {sub.time}</div>
                  </div>
                  <div className="text-sm font-bold text-white">{sub.score}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
