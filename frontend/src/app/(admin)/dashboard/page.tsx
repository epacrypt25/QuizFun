'use client'

import { motion } from 'framer-motion'
import { Coins } from 'lucide-react'

export default function DashboardPage() {
  // Data riwayat perolehan token kuis (bisa diganti dengan data dari state / database)
  const tokenHistories = [
    {
      id: 1,
      quizTitle: 'Pengenalan Smart Contract & ERC-20',
      date: 'Hari ini, 14:20 WIB',
      tokens: '+50 QW3',
      txHash: '0x71c...3a93',
      status: 'Sukses',
    },
    {
      id: 2,
      quizTitle: 'Dasar-Dasar Keamanan Web3',
      date: 'Kemarin, 09:15 WIB',
      tokens: '+30 QW3',
      txHash: '0x42a...8e21',
      status: 'Sukses',
    },
    {
      id: 3,
      quizTitle: 'Pengantar Jaringan Blockchain',
      date: '24 Agu 2026, 17:00 WIB',
      tokens: '+25 QW3',
      txHash: '0x3f8...9b12',
      status: 'Sukses',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in-up">
      {/* Ringkasan Token Sederhana */}
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 w-full text-white">
        <motion.div
          whileHover={{ y: -3, scale: 1.01 }}
          className="relative overflow-hidden flex flex-col justify-between p-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl shadow-xl shadow-orange-500/20 border border-orange-300/40"
        >
          <div className="absolute top-4 -right-4 p-4 opacity-20">
            <Coins className="w-28 h-28" />
          </div>
          <div className="relative z-10 flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-orange-100 uppercase tracking-widest">
              Total Token Diklaim
            </span>
            <div className="p-2.5 rounded-2xl bg-white/20 backdrop-blur-md text-white shadow-inner">
              <Coins className="w-5 h-5" />
            </div>
          </div>
          <div className="relative z-10">
            <h3 className="text-4xl font-black text-white leading-none tracking-tight">
              350 QW3
            </h3>
            <p className="text-xs text-orange-50 mt-3 font-semibold">
              <span className="bg-white/20 px-2 py-0.5 rounded-full">Berhasil masuk dompet</span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Tabel Riwayat Token Kuis */}
      <div className="w-full pt-4">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-gray-900">Riwayat Token Kuis</h3>
          <p className="text-xs text-gray-500">Catatan token yang didapat dari penyelesaian kuis.</p>
        </div>

        <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-left table-auto">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100 text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                  <th className="py-3 px-4">Kuis</th>
                  <th className="py-3 px-4">Waktu</th>
                  <th className="py-3 px-4 text-center">Token</th>
                  <th className="py-3 px-4">Blockchain TX</th>
                  <th className="py-3 px-4 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {tokenHistories.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-4 font-medium text-gray-900">
                      {item.quizTitle}
                    </td>
                    <td className="py-4 px-4 text-xs text-gray-500">
                      {item.date}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full text-xs">
                        {item.tokens}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <a
                        href="https://etherscan.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs text-indigo-600 hover:underline bg-gray-50 border border-gray-200 px-2 py-1 rounded"
                      >
                        <span>{item.txHash}</span>
                      </a>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <span className="inline-flex items-center text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}