'use client'

import { motion } from 'framer-motion'
import { Trophy, Target, Coins, TrendingUp } from 'lucide-react'
import { Web3Status } from '@/components/dashboard/Web3Status'

export default function StudentDashboard() {

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in-up">
      <Web3Status />
      
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
        <div className="w-full overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl shadow-gray-200/50">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-left">
              <thead>
                <tr className="bg-gray-50/80 border-b border-gray-100 text-xs font-black text-gray-500 uppercase tracking-widest">
                  <th className="py-5 px-6 w-24">Rank</th>
                  <th className="py-5 px-6">Student Profil</th>
                  <th className="py-5 px-6 text-center w-40">Quizzes Taken</th>
                  <th className="py-5 px-6 text-right w-48">Accuracy Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm font-medium">
                
                {/* Baris Juara 1 */}
                <tr className="group hover:bg-amber-50/50 transition-colors bg-gradient-to-r from-amber-50/30 to-transparent">
                  <td className="py-5 px-6 font-black text-2xl text-amber-500">
                    🥇 1
                  </td>
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <img src="https://unsplash.it/100/100?image=1027" alt="Avatar" className="h-12 w-12 rounded-2xl object-cover shadow-md shadow-amber-200" />
                        <div className="absolute -bottom-1 -right-1 bg-green-500 w-3 h-3 rounded-full border-2 border-white"></div>
                      </div>
                      <div className="flex flex-col items-start">
                        <span className="text-base font-bold text-gray-900">Alex Rivera</span>
                        <span className="text-xs text-amber-600 font-semibold bg-amber-100 px-2 py-0.5 rounded-full mt-1">Class XIIA</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-center">
                    <span className="font-bold text-gray-700 bg-gray-100 px-3 py-1 rounded-lg">42</span>
                  </td>
                  <td className="py-5 px-6 text-right">
                    <span className="font-black text-lg text-emerald-600">98.5%</span>
                  </td>
                </tr>

                {/* Baris Juara 2 */}
                <tr className="group hover:bg-gray-50 transition-colors">
                  <td className="py-5 px-6 font-black text-2xl text-gray-400">
                    🥈 2
                  </td>
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <img src="https://unsplash.it/100/100?image=1025" alt="Avatar" className="h-10 w-10 rounded-2xl object-cover shadow-sm" />
                      </div>
                      <div className="flex flex-col items-start">
                        <span className="text-base font-bold text-gray-900">Budi Santoso</span>
                        <span className="text-xs text-gray-500 mt-0.5">Class XIIC</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-center">
                    <span className="font-bold text-gray-600">39</span>
                  </td>
                  <td className="py-5 px-6 text-right">
                    <span className="font-bold text-lg text-emerald-500">95.2%</span>
                  </td>
                </tr>

                {/* Baris Juara 3 */}
                <tr className="group hover:bg-gray-50 transition-colors">
                  <td className="py-5 px-6 font-black text-2xl text-amber-700">
                    🥉 3
                  </td>
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <img src="https://unsplash.it/100/100?image=1011" alt="Avatar" className="h-10 w-10 rounded-2xl object-cover shadow-sm" />
                      </div>
                      <div className="flex flex-col items-start">
                        <span className="text-base font-bold text-gray-900">Siti Aminah</span>
                        <span className="text-xs text-gray-500 mt-0.5">Class XIIB</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-center">
                    <span className="font-bold text-gray-600">45</span>
                  </td>
                  <td className="py-5 px-6 text-right">
                    <span className="font-bold text-lg text-emerald-500">92.8%</span>
                  </td>
                </tr>

                {/* Baris Peringkat Biasa (Peringkat 4) */}
                <tr className="group hover:bg-gray-50 transition-colors">
                  <td className="py-5 px-6 font-black text-gray-400 pl-8 text-xl">
                    4
                  </td>
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <img src="https://unsplash.it/100/100?image=1005" alt="Avatar" className="h-10 w-10 rounded-2xl object-cover shadow-sm opacity-90" />
                      </div>
                      <div className="flex flex-col items-start">
                        <span className="text-base font-bold text-gray-800">Dimas Wijaya</span>
                        <span className="text-xs text-gray-400 mt-0.5">Class XIA</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-center">
                    <span className="font-bold text-gray-600">35</span>
                  </td>
                  <td className="py-5 px-6 text-right">
                    <span className="font-bold text-lg text-emerald-400">89.0%</span>
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
