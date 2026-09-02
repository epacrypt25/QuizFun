'use client'

import { createClient } from '@/utils/supabase/client'
import { Edit2, FileText, HelpCircle, Plus, Trash2, X } from 'lucide-react'
import { useEffect, useState } from 'react'

interface Option {
    label: string
    text: string
}

interface QuestionItem {
    id_question: string | number
    question: string
    options: Option[]
    correctOption: string
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

function AddQuestionModal({ isOpen, onClose, onSave }: AddQuestionModalProps) {
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

export default function QuizManagementPage() {
    const supabase = createClient()
    const [questions, setQuestions] = useState<QuestionItem[]>([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [loading, setLoading] = useState(true)

    // GET: Ambil data dari tabel 'question' di Supabase
    const fetchQuestions = async () => {
        try {
            setLoading(true)
            const { data, error } = await supabase.from('question').select('*')
            if (error) throw error

            const formattedData = (data || []).map((item: any) => ({
                id_question: item.id_question,
                question: item.question,
                options: [
                    { label: 'A', text: item.choice_a },
                    { label: 'B', text: item.choice_b },
                    { label: 'C', text: item.choice_c },
                    { label: 'D', text: item.choice_d },
                ],
                correctOption: item.correct_answer || 'A'
            }))
            setQuestions(formattedData)
        } catch (error: any) {
            console.error('Gagal memuat soal:', error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchQuestions()
    }, [])

    // ADD: Simpan soal baru ke tabel 'question' di Supabase
    const handleSaveNewQuestion = async (newQuestionData: {
        question: string
        options: Option[]
        correctOption: string
    }) => {
        try {
            const choiceA = newQuestionData.options.find(o => o.label === 'A')?.text || ''
            const choiceB = newQuestionData.options.find(o => o.label === 'B')?.text || ''
            const choiceC = newQuestionData.options.find(o => o.label === 'C')?.text || ''
            const choiceD = newQuestionData.options.find(o => o.label === 'D')?.text || ''

            const { error } = await supabase
                .from('question')
                .insert([
                    {
                        question: newQuestionData.question,
                        choice_a: choiceA,
                        choice_b: choiceB,
                        choice_c: choiceC,
                        choice_d: choiceD,
                        correct_answer: newQuestionData.correctOption
                    }
                ])

            if (error) throw error

            fetchQuestions()
            setIsModalOpen(false)
        } catch (error: any) {
            console.error('Gagal menyimpan soal:', error)
            alert(`Terjadi kesalahan saat menyimpan ke database: ${error.message || ''}`)
        }
    }

    // DELETE: Hapus soal berdasarkan id_question
    const handleDeleteQuestion = async (id_question: string | number) => {
        if (!confirm('Apakah Anda yakin ingin menghapus soal ini?')) return

        try {
            const { error } = await supabase
                .from('question')
                .delete()
                .eq('id_question', id_question)

            if (error) throw error

            setQuestions(prev => prev.filter(q => q.id_question !== id_question))
        } catch (error: any) {
            console.error('Gagal menghapus soal:', error)
            alert(`Gagal menghapus soal dari database: ${error.message || ''}`)
        }
    }

    return (
        <div className="max-w-7xl mx-auto space-y-4 animate-fade-in-up text-black p-2 sm:p-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-100 pb-6">
                <div>
                    <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                        <FileText className="w-6 h-6 text-indigo-600" /> Manajemen Kuis & Pertanyaan
                    </h1>
                    <p className="text-xs text-gray-500 mt-1">Kelola bank soal ujian yang terhubung langsung dengan Supabase.</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-indigo-600/20 transition-all cursor-pointer"
                >
                    <Plus className="w-4 h-4" />
                    <span>Tambah Soal Baru</span>
                </button>
            </div>

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
                            {loading ? (
                                <tr>
                                    <td colSpan={4} className="py-10 text-center text-gray-400 text-xs">
                                        Memuat data dari database...
                                    </td>
                                </tr>
                            ) : questions.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="py-10 text-center text-gray-400 text-xs">
                                        Belum ada data pertanyaan tersedia.
                                    </td>
                                </tr>
                            ) : (
                                questions.map((item, index) => (
                                    <tr
                                        key={item.id_question}
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
                                                    onClick={() => handleDeleteQuestion(item.id_question)}
                                                    title="Hapus Soal"
                                                    className="p-2 rounded-xl bg-gray-50 border border-gray-200 text-gray-500 hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-all shadow-sm cursor-pointer"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <AddQuestionModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSaveNewQuestion}
            />
        </div>
    )
}