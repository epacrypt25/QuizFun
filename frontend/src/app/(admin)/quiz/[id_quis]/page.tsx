'use client'

import { Edit2, Plus, Trash2 } from 'lucide-react'
import { useState } from 'react'
import AddQuestionModal from './AddQuastionModal'

export default function QuizManagementPage() {
    const [questions, setQuestions] = useState([
        {
            id: 1,
            question: 'Apa fungsi utama dari sebuah Smart Contract di blockchain Ethereum?',
            options: [
                { label: 'A', text: 'Mengeksekusi kode otomatis' },
                { label: 'B', text: 'Menambang bitcoin' },
                { label: 'C', text: 'Menyimpan gambar NFT' },
                { label: 'D', text: 'Mengirim email otomatis' },
            ],
            correctOption: 'A',
        },
        {
            id: 2,
            question: 'Pustaka ReactJS digunakan secara khusus oleh developer untuk mengolah apa?',
            options: [
                { label: 'A', text: 'Basis Data NoSQL' },
                { label: 'B', text: 'User Interface (UI)' },
                { label: 'C', text: 'Keamanan Jaringan' },
                { label: 'D', text: 'Server Basis Data' },
            ],
            correctOption: 'B',
        },
    ])

    // State untuk mengontrol buka/tutup modal
    const [isModalOpen, setIsModalOpen] = useState(false)

    // Fungsi untuk menangani penyimpanan soal baru dari modal
    const handleSaveNewQuestion = (newQuestionData) => {
        const newEntry = {
            id: questions.length + 1,
            ...newQuestionData,
        }
        setQuestions([...questions, newEntry])
    }

    // Fungsi untuk menghapus soal (opsional)
    const handleDeleteQuestion = (id) => {
        setQuestions(questions.filter((item) => item.id !== id))
    }

    return (
        <div className="max-w-7xl mx-auto space-y-2 animate-fade-in-up text-black p-2 sm:p-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-100 pb-6">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-indigo-600/20 transition-all cursor-pointer"
                >
                    <Plus className="w-4 h-4" />
                    <span>Tambah Soal Baru</span>
                </button>
            </div>

            {/* Kontainer Tabel Card Modern */}
            <div className="w-full overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-b from-white to-gray-50/50 shadow-xl shadow-gray-200/40">
                <div className="w-full overflow-x-auto">
                    <table className="w-full min-w-[750px] border-collapse text-left">
                        <thead>
                            <tr className="bg-gray-50/80 border-b border-gray-200 text-[11px] font-black text-gray-500 uppercase tracking-widest">
                                <th className="py-4 px-5 w-16 text-center">No</th>
                                <th className="py-4 px-6">Pertanyaan & Pilihan Ganda</th>
                                <th className="py-4 px-6 w-32 text-center">Kunci Jawaban</th>
                                <th className="py-4 px-6 w-32 text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-sm font-medium">
                            {questions.map((item, index) => (
                                <tr
                                    key={item.id}
                                    className="group hover:bg-indigo-50/30 transition-all duration-200"
                                >
                                    <td className="py-5 px-5 font-black text-gray-400 text-center align-top">
                                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-gray-100 text-gray-600 text-xs shadow-inner">
                                            {index + 1}
                                        </span>
                                    </td>
                                    <td className="py-5 px-6 align-top">
                                        <div className="flex flex-col items-start gap-2.5 w-full">
                                            <span className="font-bold text-gray-900 text-sm sm:text-base leading-snug">
                                                {item.question}
                                            </span>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600 font-normal w-full pt-1">
                                                {item.options.map((opt) => (
                                                    <div
                                                        key={opt.label}
                                                        className={`flex items-center gap-2 p-2 rounded-xl border transition-colors ${opt.label === item.correctOption
                                                            ? 'bg-emerald-50/60 border-emerald-200/80 text-emerald-900 font-medium'
                                                            : 'bg-white/60 border-gray-200/60'
                                                            }`}
                                                    >
                                                        <strong className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] ${opt.label === item.correctOption
                                                            ? 'bg-emerald-600 text-white'
                                                            : 'bg-gray-100 text-gray-700'
                                                            }`}>
                                                            {opt.label}
                                                        </strong>
                                                        <span className="truncate">{opt.text}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-5 px-6 text-center align-top">
                                        <span className="inline-flex items-center justify-center px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-100/80 border border-emerald-300 text-emerald-800 shadow-sm whitespace-nowrap mt-1">
                                            Opsi {item.correctOption}
                                        </span>
                                    </td>
                                    <td className="py-5 px-6 text-center align-top">
                                        <div className="flex items-center justify-center gap-1.5 mt-1">
                                            <button
                                                title="Edit Soal"
                                                className="p-2 rounded-xl bg-gray-50 border border-gray-200 text-gray-500 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 transition-all shadow-sm cursor-pointer"
                                            >
                                                <Edit2 className="h-4 w-4" />
                                            </button>
                                            <button
                                                onClick={() => handleDeleteQuestion(item.id)}
                                                title="Hapus Soal"
                                                className="p-2 rounded-xl bg-gray-50 border border-gray-200 text-gray-500 hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-all shadow-sm cursor-pointer"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Pemanggilan Komponen Modal Tambah Soal */}
            <AddQuestionModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSaveNewQuestion}
            />
        </div>
    )
}