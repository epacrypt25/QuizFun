'use client'

import { CheckCircle2, Eye, HelpCircle, Plus } from 'lucide-react'
import { useState } from 'react'

export default function CreateSoalQuisId() {
    const [soal, setSoal] = useState('')
    const [opsiA, setOpsiA] = useState('')
    const [opsiB, setOpsiB] = useState('')
    const [opsiC, setOpsiC] = useState('')
    const [opsiD, setOpsiD] = useState('')
    const [jawabanBenar, setJawabanBenar] = useState('A')

    return (
        <div className="max-w-7xl mx-auto space-y-8 animate-fade-in-up text-black p-4">
            {/* Header Halaman */}
            <div className="flex flex-col items-start text-left border-b border-gray-100 pb-5 w-full">
                <h1 className="text-2xl md:text-3xl font-black tracking-tight text-gray-900">
                    Kelola Pertanyaan <span className="text-blue-600">Kuis</span>
                </h1>
                <p className="text-xs md:text-sm text-gray-500 mt-1">
                    Tambahkan pertanyaan baru, atur pilihan ganda, dan tentukan kunci jawaban kuis.
                </p>
            </div>

            {/* Kontainer Utama: Form (Kiri) & Live Preview (Kanan) */}
            <div className="flex flex-col lg:flex-row gap-10 items-start w-full">

                {/* 1. BAGIAN FORM INPUT SOAL (Lebar 55% di Desktop) */}
                <div className="w-full lg:w-[55%] flex flex-col gap-6 text-left">
                    <form className="w-full flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>

                        {/* Input Isi Soal */}
                        <div className="flex flex-col gap-1.5 w-full">
                            <label className="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
                                <HelpCircle className="h-4 w-4 text-blue-500" /> Isi Pertanyaan / Soal
                            </label>
                            <textarea
                                required
                                rows={3}
                                value={soal}
                                onChange={(e) => setSoal(e.target.value)}
                                placeholder="Tuliskan pertanyaan kuis di sini..."
                                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-black outline-none transition-all placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 resize-none"
                            />
                        </div>

                        {/* Input Pilihan Ganda (Grid 2 Kolom) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                            {/* Opsi A */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-bold text-gray-700">Pilihan A</label>
                                <input
                                    type="text"
                                    required
                                    value={opsiA}
                                    onChange={(e) => setOpsiA(e.target.value)}
                                    placeholder="Isi jawaban A..."
                                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-black outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                />
                            </div>

                            {/* Opsi B */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-bold text-gray-700">Pilihan B</label>
                                <input
                                    type="text"
                                    required
                                    value={opsiB}
                                    onChange={(e) => setOpsiB(e.target.value)}
                                    placeholder="Isi jawaban B..."
                                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-black outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                />
                            </div>

                            {/* Opsi C */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-bold text-gray-700">Pilihan C</label>
                                <input
                                    type="text"
                                    required
                                    value={opsiC}
                                    onChange={(e) => setOpsiC(e.target.value)}
                                    placeholder="Isi jawaban C..."
                                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-black outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                />
                            </div>

                            {/* Opsi D */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-bold text-gray-700">Pilihan D</label>
                                <input
                                    type="text"
                                    required
                                    value={opsiD}
                                    onChange={(e) => setOpsiD(e.target.value)}
                                    placeholder="Isi jawaban D..."
                                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-black outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                />
                            </div>
                        </div>

                        {/* Kunci Jawaban */}
                        <div className="flex flex-col gap-1.5 w-full">
                            <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                                Kunci Jawaban Benar
                            </label>
                            <div className="flex gap-3 w-full">
                                {['A', 'B', 'C', 'D'].map((opsi) => (
                                    <button
                                        key={opsi}
                                        type="button"
                                        onClick={() => setJawabanBenar(opsi)}
                                        className={`flex-1 py-2.5 text-sm font-bold rounded-xl border transition-all ${jawabanBenar === opsi
                                                ? 'bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-600/10'
                                                : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                                            }`}
                                    >
                                        Opsi {opsi}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Tombol Simpan */}
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 mt-4 rounded-xl bg-blue-600 hover:bg-blue-700 px-5 py-3.5 text-sm font-bold text-white transition-all shadow-md shadow-blue-600/10 hover:-translate-y-0.5 active:translate-y-0 text-center"
                        >
                            <Plus className="h-4 w-4" /> Simpan Pertanyaan
                        </button>
                    </form>
                </div>

                {/* 2. BAGIAN LIVE PREVIEW CARD (Lebar 45% di Desktop) */}
                <div className="w-full lg:w-[45%] flex flex-col items-start bg-gray-50 border border-gray-200 p-6 rounded-2xl sticky top-24">
                    <div className="flex items-center gap-2 mb-6 border-b border-gray-200 pb-3 w-full text-left">
                        <Eye className="h-4 w-4 text-gray-500" />
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Live Preview Card</span>
                    </div>

                    <div className="w-full flex flex-col items-start text-left bg-white border border-gray-100 p-5 rounded-xl shadow-sm min-h-[220px] justify-between">
                        <div className="w-full">
                            <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md mb-3">
                                Pertanyaan Pratinjau
                            </span>
                            <p className="text-sm font-bold text-gray-900 break-words leading-relaxed">
                                {soal || 'Pertanyaan Anda akan muncul di sini...'}
                            </p>
                        </div>

                        {/* Daftar Pilihan Jawaban di Preview */}
                        <div className="w-full flex flex-col gap-2 mt-5">
                            {[
                                { label: 'A', value: opsiA },
                                { label: 'B', value: opsiB },
                                { label: 'C', value: opsiC },
                                { label: 'D', value: opsiD },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className={`w-full flex items-center justify-between p-3 rounded-xl border text-xs font-semibold transition-all ${jawabanBenar === item.label && item.value
                                            ? 'bg-emerald-50 border-emerald-500/30 text-emerald-700'
                                            : 'bg-gray-50/50 border-gray-200 text-gray-700'
                                        }`}
                                >
                                    <span className="truncate pr-4">
                                        <span className="font-bold mr-1">{item.label}.</span> {item.value || '...'}
                                    </span>
                                    {jawabanBenar === item.label && item.value && (
                                        <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            <div className="w-full pt-6 border-t border-gray-100 text-black text-left">
                {/* Judul & Subtitle Tabel */}
                <div className="flex flex-col items-start mb-6">
                    <h2 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
                        Daftar Soal Saat Ini
                    </h2>
                    <p className="text-xs text-gray-500 mt-1">
                        Total terdapat 2 pertanyaan yang telah terdaftar di dalam kuis ini.
                    </p>
                </div>

                {/* Kontainer Tabel Full-Width */}
                <div className="w-full overflow-x-auto">
                    <table className="w-full min-w-[700px] border-collapse">
                        <thead>
                            <tr className="border-b border-gray-200 text-xs font-bold text-gray-900 uppercase tracking-wider">
                                <th className="py-3 px-4 w-12 text-center">No</th>
                                <th className="py-3 px-4">Pertanyaan & Pilihan Ganda</th>
                                <th className="py-3 px-4 w-28 text-center">Kunci</th>
                                <th className="py-3 px-4 w-28 text-center">Aksi</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-100 text-sm font-medium">

                            {/* Baris Soal 1 */}
                            <tr className="group hover:bg-gray-50/80 transition-colors">
                                <td className="py-5 px-4 font-bold text-gray-400 text-center">1</td>
                                <td className="py-5 px-4">
                                    <div className="flex flex-col items-start gap-2 w-full">
                                        <span className="font-bold text-gray-900">
                                            Apa fungsi utama dari sebuah Smart Contract di blockchain Ethereum?
                                        </span>
                                        {/* Opsi Pilihan Ganda Grid */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-xs text-gray-500 mt-1 font-normal w-full">
                                            <span><strong className="text-gray-700">A.</strong> Mengeksekusi kode otomatis</span>
                                            <span><strong className="text-gray-700">B.</strong> Menambang bitcoin</span>
                                            <span><strong className="text-gray-700">C.</strong> Menyimpan gambar NFT</span>
                                            <span><strong className="text-gray-700">D.</strong> Mengirim email otomatis</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-5 px-4 text-center">
                                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 border border-emerald-200 text-emerald-700 whitespace-nowrap">
                                        Opsi A
                                    </span>
                                </td>
                                <td className="py-5 px-4 text-center">
                                    <div className="flex items-center justify-center gap-2">
                                        <button className="p-2 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-blue-600 transition-all">
                                            <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                            </svg>
                                        </button>
                                        <button className="p-2 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-red-600 transition-all">
                                            <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            {/* Baris Soal 2 */}
                            <tr className="group hover:bg-gray-50/80 transition-colors">
                                <td className="py-5 px-4 font-bold text-gray-400 text-center">2</td>
                                <td className="py-5 px-4">
                                    <div className="flex flex-col items-start gap-2 w-full">
                                        <span className="font-bold text-gray-900">
                                            Pustaka ReactJS digunakan secara khusus oleh developer untuk mengolah apa?
                                        </span>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-xs text-gray-500 mt-1 font-normal w-full">
                                            <span><strong className="text-gray-700">A.</strong> Basis Data NoSQL</span>
                                            <span><strong className="text-gray-700">B.</strong> User Interface (UI)</span>
                                            <span><strong className="text-gray-700">C.</strong> Keamanan Jaringan</span>
                                            <span><strong className="text-gray-700">D.</strong> Server Basis Data</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-5 px-4 text-center">
                                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 border border-emerald-200 text-emerald-700 whitespace-nowrap">
                                        Opsi B
                                    </span>
                                </td>
                                <td className="py-5 px-4 text-center">
                                    <div className="flex items-center justify-center gap-2">
                                        <button className="p-2 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-blue-600 transition-all">
                                            <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                            </svg>
                                        </button>
                                        <button className="p-2 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-red-600 transition-all">
                                            <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}
