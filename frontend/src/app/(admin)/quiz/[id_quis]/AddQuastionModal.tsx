'use client'

import { HelpCircle, Plus, X } from 'lucide-react'
import { useState } from 'react'

interface Option {
    label: string
    text: string
}

interface NewQuestionData {
    question: string
    options: Option[]
    correctOption: string
}

interface AddQuestionModalProps {
    isOpen: boolean
    onClose: () => void
    onSave: (question: NewQuestionData) => void
}

export default function AddQuestionModal({ isOpen, onClose, onSave }: AddQuestionModalProps) {
    const [soal, setSoal] = useState('')
    const [opsiA, setOpsiA] = useState('')
    const [opsiB, setOpsiB] = useState('')
    const [opsiC, setOpsiC] = useState('')
    const [opsiD, setOpsiD] = useState('')
    const [jawabanBenar, setJawabanBenar] = useState('A')

    if (!isOpen) return null

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const newQuestion: NewQuestionData = {
            question: soal,
            options: [
                { label: 'A', text: opsiA },
                { label: 'B', text: opsiB },
                { label: 'C', text: opsiC },
                { label: 'D', text: opsiD },
            ],
            correctOption: jawabanBenar,
        }
        onSave(newQuestion)
        setSoal('')
        setOpsiA('')
        setOpsiB('')
        setOpsiC('')
        setOpsiD('')
        setJawabanBenar('A')
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden text-black animate-scale-up">

                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-gray-50/50">
                    <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
                            <HelpCircle className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="text-base font-bold text-gray-900">Tambah Pertanyaan Kuis</h3>
                            <p className="text-xs text-gray-500">Masukkan detail soal dan pilihan ganda (A, B, C, D) ke database.</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-xl text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all cursor-pointer"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6 max-h-[80vh] overflow-y-auto">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className="flex flex-col gap-1.5 w-full text-left">
                            <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                                Isi Pertanyaan / Soal
                            </label>
                            <textarea
                                required
                                rows={3}
                                value={soal}
                                onChange={(e) => setSoal(e.target.value)}
                                placeholder="Tuliskan pertanyaan kuis di sini..."
                                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-black outline-none transition-all placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 resize-none shadow-sm"
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full text-left">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-bold text-gray-700">Choice A</label>
                                <input
                                    type="text"
                                    required
                                    value={opsiA}
                                    onChange={(e) => setOpsiA(e.target.value)}
                                    placeholder="Isi pilihan A..."
                                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-black outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-bold text-gray-700">Choice B</label>
                                <input
                                    type="text"
                                    required
                                    value={opsiB}
                                    onChange={(e) => setOpsiB(e.target.value)}
                                    placeholder="Isi pilihan B..."
                                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-black outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-bold text-gray-700">Choice C</label>
                                <input
                                    type="text"
                                    required
                                    value={opsiC}
                                    onChange={(e) => setOpsiC(e.target.value)}
                                    placeholder="Isi pilihan C..."
                                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-black outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-bold text-gray-700">Choice D</label>
                                <input
                                    type="text"
                                    required
                                    value={opsiD}
                                    onChange={(e) => setOpsiD(e.target.value)}
                                    placeholder="Isi pilihan D..."
                                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-black outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5 w-full text-left">
                            <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                                Kunci Jawaban Benar
                            </label>
                            <div className="flex gap-3 w-full">
                                {['A', 'B', 'C', 'D'].map((opsi) => (
                                    <button
                                        key={opsi}
                                        type="button"
                                        onClick={() => setJawabanBenar(opsi)}
                                        className={`flex-1 py-2.5 text-sm font-bold rounded-xl border transition-all cursor-pointer ${jawabanBenar === opsi
                                                ? 'bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-600/20'
                                                : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                                            }`}
                                    >
                                        Opsi {opsi}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-3 pt-4 border-t border-gray-100 mt-2">
                            <button
                                type="button"
                                onClick={onClose}
                                className="w-1/3 rounded-xl bg-gray-100 hover:bg-gray-200 py-3 text-sm font-bold text-gray-700 transition-all cursor-pointer"
                            >
                                Batal
                            </button>
                            <button
                                type="submit"
                                className="w-2/3 flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 py-3 text-sm font-bold text-white transition-all shadow-md shadow-blue-600/20 cursor-pointer"
                            >
                                <Plus className="h-4 w-4" /> Simpan ke Supabase
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}