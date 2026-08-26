'use client'

import { motion } from 'framer-motion'
import { Coins, Target, TrendingUp, Trophy } from 'lucide-react'

export default function StudentDashboard() {

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in-up">
      
      {/* Kontainer Grid Responsif untuk Metrik */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-white">

        {/* Kartu 1: Total Kuis Diikuti */}
        <motion.div 
          whileHover={{ y: -5, scale: 1.02 }}
          className="relative overflow-hidden flex flex-col justify-between p-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl shadow-xl shadow-purple-500/20 group border border-purple-400/30"
        >
          <div className="absolute top-0 right-0 p-4 opacity-20 transform group-hover:scale-110 transition-transform duration-500">
            <Target className="w-24 h-24" />
          </div>
          <div className="relative z-10 flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-indigo-100 uppercase tracking-widest drop-shadow-sm">
              Quizzes Taken
            </span>
            <div className="p-2.5 rounded-2xl bg-white/20 backdrop-blur-md text-white shadow-inner">
              <Target className="w-5 h-5" />
            </div>
          </div>
          <div className="relative z-10">
            <h3 className="text-4xl font-black text-white leading-none tracking-tight">
              24
            </h3>
            <p className="text-xs text-indigo-100 mt-3 font-semibold flex items-center gap-1.5">
              <span className="bg-white/20 px-2 py-0.5 rounded-full">+3 this week</span>
            </p>
          </div>
        </motion.div>

        {/* Kartu 2: Rata-rata Skor */}
        <motion.div 
          whileHover={{ y: -5, scale: 1.02 }}
          className="relative overflow-hidden flex flex-col justify-between p-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl shadow-xl shadow-cyan-500/20 group border border-cyan-400/30"
        >
          <div className="absolute -bottom-4 -right-4 p-4 opacity-20 transform group-hover:rotate-12 transition-transform duration-500">
            <TrendingUp className="w-28 h-28" />
          </div>
          <div className="relative z-10 flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-blue-100 uppercase tracking-widest drop-shadow-sm">
              Average Score
            </span>
            <div className="p-2.5 rounded-2xl bg-white/20 backdrop-blur-md text-white shadow-inner">
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>
          <div className="relative z-10">
            <h3 className="text-4xl font-black text-white leading-none tracking-tight">
              85.4%
            </h3>
            <p className="text-xs text-blue-50 mt-3 font-semibold flex items-center gap-1.5">
              <span className="bg-white/20 px-2 py-0.5 rounded-full text-emerald-300">▲ 2.1%</span> 
              <span>from last month</span>
            </p>
          </div>
        </motion.div>

        {/* Kartu 3: Total Reward Token */}
        <motion.div 
          whileHover={{ y: -5, scale: 1.02 }}
          className="relative overflow-hidden flex flex-col justify-between p-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl shadow-xl shadow-orange-500/20 group border border-orange-300/40"
        >
          <div className="absolute top-4 -right-4 p-4 opacity-20 transform group-hover:-translate-x-2 transition-transform duration-500">
            <Coins className="w-28 h-28" />
          </div>
          <div className="relative z-10 flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-orange-100 uppercase tracking-widest drop-shadow-sm">
              Tokens Earned
            </span>
            <div className="p-2.5 rounded-2xl bg-white/20 backdrop-blur-md text-white shadow-inner">
              <Coins className="w-5 h-5" />
            </div>
          </div>
          <div className="relative z-10">
            <h3 className="text-4xl font-black text-white leading-none tracking-tight drop-shadow-sm">
              350 QW3
            </h3>
            <p className="text-xs text-orange-50 mt-3 font-semibold flex items-center gap-1.5">
              <span className="bg-white/20 px-2 py-0.5 rounded-full">Ready to claim!</span>
            </p>
          </div>
        </motion.div>

      </div>


      {/* Papan Peringkat (Leaderboard) */}
      <div className="w-full pt-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
          <div className="flex flex-col items-start text-left">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl flex items-center gap-3">
              <Trophy className="w-7 h-7 text-amber-500" /> Top Global Leaderboard
            </h2>
            <p className="text-sm text-gray-500 mt-1 font-medium">
              Highest accumulating scores from our most dedicated learners this month.
            </p>
          </div>
          <button className="px-5 py-2.5 bg-gray-900 text-white text-xs font-bold rounded-xl hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/20">
            View Full Rankings
          </button>
        </div>

        {/* Struktur Tabel Mewah */}
        <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl shadow-gray-200/50 sm:rounded-3xl">
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[500px] border-collapse text-left table-auto">
              <thead>
                <tr className="bg-gray-50/80 border-b border-gray-100 text-[10px] font-black text-gray-500 uppercase tracking-widest sm:text-xs">
                  <th className="py-3 px-3 w-28 sm:py-5 sm:px-6 sm:w-36">Waktu</th>
                  <th className="py-3 px-3 sm:py-5 sm:px-6">User</th>
                  <th className="py-3 px-3 text-center w-24 sm:py-5 sm:px-6 sm:w-28">Skor</th>
                  <th className="py-3 px-3 w-32 sm:py-5 sm:px-6 sm:w-44">Blockchain TX</th>
                  <th className="py-3 px-3 text-right w-28 sm:py-5 sm:px-6 sm:w-36">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs font-medium sm:text-sm">

                {/* Riwayat 1 */}
                <tr className="group hover:bg-gray-50/50 transition-colors">
                  <td className="py-3 px-3 text-gray-400 sm:py-5 sm:px-6">
                    <div className="flex flex-col">
                      <span className="font-bold text-gray-700 sm:text-sm text-xs">Hari ini</span>
                      <span className="text-[10px] text-gray-400 mt-0.5 sm:text-xs">14:20 WIB</span>
                    </div>
                  </td>
                  <td className="py-3 px-3 sm:py-5 sm:px-6">
                    <div className="flex flex-col items-start min-w-0">
                      <span className="text-xs font-bold text-gray-900 truncate w-full sm:text-base">Alex Rivera</span>
                    </div>
                  </td>
                  <td className="py-3 px-3 text-center sm:py-5 sm:px-6">
                    <span className="font-black text-sm text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded sm:text-base sm:px-3 sm:py-1">100</span>
                  </td>
                  <td className="py-3 px-3 sm:py-5 sm:px-6">
                    {/* Tautan bukti blockchain dengan hash yang dipendekkan */}
                    <a
                      href="https://etherscan.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-[11px] text-indigo-600 hover:text-indigo-800 hover:underline bg-gray-50 border border-gray-100 px-1.5 py-0.5 rounded transition-all sm:text-xs sm:px-2"
                    >
                      <span>0x71c...3a93</span>
                      <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </td>
                  <td className="py-3 px-3 text-right sm:py-5 sm:px-6">
                    <span className="inline-flex items-center text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full sm:text-xs sm:px-3 sm:py-1">
                      Sukses
                    </span>
                  </td>
                </tr>

                {/* Riwayat 2 */}
                <tr className="group hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-3 text-gray-400 sm:py-5 sm:px-6">
                    <div className="flex flex-col">
                      <span className="font-bold text-gray-700 sm:text-sm text-xs">Kemarin</span>
                      <span className="text-[10px] text-gray-400 mt-0.5 sm:text-xs">09:15 WIB</span>
                    </div>
                  </td>
                  <td className="py-3 px-3 sm:py-5 sm:px-6">
                    <div className="flex flex-col items-start min-w-0">
                      <span className="text-xs font-bold text-gray-900 truncate w-full sm:text-base">Budi Santoso</span>
                    </div>
                  </td>
                  <td className="py-3 px-3 text-center sm:py-5 sm:px-6">
                    <span className="font-black text-sm text-gray-700 bg-gray-100 px-2 py-0.5 rounded sm:text-base sm:px-3 sm:py-1">90</span>
                  </td>
                  <td className="py-3 px-3 sm:py-5 sm:px-6">
                    <span className="font-mono text-[11px] text-gray-400 sm:text-xs italic">
                      Generating...
                    </span>
                  </td>
                  <td className="py-3 px-3 text-right sm:py-5 sm:px-6">
                    <span className="inline-flex items-center text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full sm:text-xs sm:px-3 sm:py-1">
                      Proses
                    </span>
                  </td>
                </tr>

                {/* Riwayat 3 */}
                <tr className="group hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-3 text-gray-400 sm:py-5 sm:px-6">
                    <div className="flex flex-col">
                      <span className="font-bold text-gray-700 sm:text-sm text-xs">24 Agu 2026</span>
                      <span className="text-[10px] text-gray-400 mt-0.5 sm:text-xs">17:00 WIB</span>
                    </div>
                  </td>
                  <td className="py-3 px-3 sm:py-5 sm:px-6">
                    <div className="flex flex-col items-start min-w-0">
                      <span className="text-xs font-bold text-gray-900 truncate w-full sm:text-base">Siti Aminah</span>
                    </div>
                  </td>
                  <td className="py-3 px-3 text-center sm:py-5 sm:px-6">
                    <span className="font-black text-sm text-gray-700 bg-gray-100 px-2 py-0.5 rounded sm:text-base sm:px-3 sm:py-1">85</span>
                  </td>
                  <td className="py-3 px-3 sm:py-5 sm:px-6">
                    <a
                      href="https://etherscan.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-[11px] text-indigo-600 hover:text-indigo-800 hover:underline bg-gray-50 border border-gray-100 px-1.5 py-0.5 rounded transition-all sm:text-xs sm:px-2"
                    >
                      <span>0x3f8...9b12</span>
                      <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </td>
                  <td className="py-3 px-3 text-right sm:py-5 sm:px-6">
                    <span className="inline-flex items-center text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full sm:text-xs sm:px-3 sm:py-1">
                      Sukses
                    </span>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  )
}
