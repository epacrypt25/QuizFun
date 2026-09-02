'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function MintPage() {
    const [amount, setAmount] = useState<string>('')
    const [minting, setMinting] = useState<boolean>(false)
    const [successHash, setSuccessHash] = useState<string | null>(null)

    // Simulasi fungsi mint token ke smart contract
    async function handleMint(e: React.FormEvent) {
        e.preventDefault()
        if (!amount || Number(amount) <= 0) return

        setMinting(true)
        setSuccessHash(null)

        try {
            // Simulasi delay transaksi blockchain
            await new Promise((resolve) => setTimeout(resolve, 2000))

            // Simulasi hash transaksi berhasil (misal ERC-20 / ERC-8004 standard)
            setSuccessHash('0x8f9c2...4e1a')
            setAmount('')
        } catch (err: any) {
            alert(err.message)
        } finally {
            setMinting(false)
        }
    }

    return (
        <div className="max-w-7xl mx-auto space-y-8 animate-fade-in-up text-black">
            {/* Grid Konten Utama */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Form Mint Token */}
                <div className="md:col-span-2 bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
                    <form onSubmit={handleMint} className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                                Jumlah Token yang Ingin Diminting
                            </label>
                            <div className="relative">
                                <input
                                    type="number"
                                    min="1"
                                    required
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    placeholder="Contoh: 100"
                                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-black outline-none transition-all placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                />
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400">
                                    QW3
                                </span>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={minting}
                            className="w-full mt-2 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 px-5 py-3 text-sm font-bold text-white transition-all shadow-md shadow-blue-600/10 text-center cursor-pointer"
                        >
                            {minting ? 'Memproses Transaksi...' : 'Mint Token Sekarang'}
                        </button>
                    </form>

                    {/* Notifikasi Sukses / Hasil Hash */}
                    {successHash && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex flex-col gap-1"
                        >
                            <span className="font-bold">Minting Berhasil!</span>
                            <span>Hash Transaksi:</span>
                            <a
                                href="https://etherscan.io"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-mono text-indigo-600 hover:underline font-semibold"
                            >
                                {successHash}
                            </a>
                        </motion.div>
                    )}
                </div>

            </div>
        </div>
    )
}