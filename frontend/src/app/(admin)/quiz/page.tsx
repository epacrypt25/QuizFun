'use client'

import { useQuizContext } from '@/context/QuizContext'
import { FormEvent, useState } from 'react'

export default function QuizPage() {
    const { quizzes, loading, createQuiz } = useQuizContext()

    // State manajemen komponen untuk form & modal
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [title, setTitle] = useState<string>('')
    const [typeQuiz, setTypeQuiz] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [submitting, setSubmitting] = useState<boolean>(false)

    // FUNGSI INSERT: Menyimpan data kuis baru menggunakan context
    async function handleCreateQuiz(e: FormEvent) {
        e.preventDefault()
        if (!title.trim()) return

        setSubmitting(true)
        try {
            await createQuiz({
                title_quiz: title,
                desc_quiz: description,
                type_quiz: typeQuiz || 'Umum'
            })
            // Reset Form & Tutup Modal
            setTitle('')
            setDescription('')
            setTypeQuiz('')
            setIsModalOpen(false)
        } catch (err: any) {
            alert(err.message)
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <div className="max-w-7xl mx-auto space-y-10 animate-fade-in-up text-black">
            <div className="flex flex-col gap-6 w-full">
                <div className="flex justify-end">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-blue-900 hover:bg-blue-700 text-white text-xs font-bold py-2 px-4 rounded transition-colors"
                    >
                        Buat Kuis Baru
                    </button>
                </div>

                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
                        <div className="relative w-full max-w-lg bg-white border border-gray-200 rounded-2xl p-6 shadow-xl">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl font-bold p-1"
                            >
                                &times;
                            </button>

                            <div className="text-left mb-6 w-full pr-6">
                                <h2 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
                                    Buat Kuis Baru
                                </h2>
                                <p className="text-xs text-gray-500 mt-1">
                                    Buat kuis baru dan tentukan total reward token untuk siswa.
                                </p>
                            </div>

                            <form className="w-full flex flex-col gap-4 text-left" onSubmit={handleCreateQuiz}>
                                <div className="flex flex-col gap-1 w-full">
                                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                                        Judul Kuis
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        placeholder="Contoh: Pengenalan Blockchain Dasar"
                                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-black outline-none transition-all placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                    />
                                </div>

                                <div className="flex flex-col gap-1 w-full">
                                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                                        Kategori
                                    </label>
                                    <select
                                        value={typeQuiz || ''}
                                        required
                                        onChange={(e) => setTypeQuiz(e.target.value)}
                                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-black outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                    >
                                        <option value="" disabled>-- Pilih Kategori Kuis --</option>
                                        <option value="Web3 / Crypto">Web3 / Crypto</option>
                                        <option value="Programming">Programming</option>
                                        <option value="Sains / Matematika">Sains / Matematika</option>
                                        <option value="Umum">Umum</option>
                                    </select>
                                </div>

                                <div className="flex flex-col gap-1 w-full">
                                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                                        Deskripsi Kuis
                                    </label>
                                    <textarea
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        placeholder="Masukkan deskripsi kuis..."
                                        rows={3}
                                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-black outline-none transition-all placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                    />
                                </div>

                                <div className="flex items-center gap-3 mt-2">
                                    <button
                                        type="button"
                                        onClick={() => setIsModalOpen(false)}
                                        className="w-1/2 rounded-xl border border-gray-300 bg-white hover:bg-gray-50 px-5 py-3 text-sm font-bold text-gray-700 transition-all text-center"
                                    >
                                        Batal
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={submitting}
                                        className="w-1/2 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 px-5 py-3 text-sm font-bold text-white transition-all shadow-md shadow-blue-600/10 text-center"
                                    >
                                        {submitting ? 'Menyimpan...' : 'Simpan Kuis Baru'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                <div className="flex flex-col lg:flex-row gap-10 items-start w-full">
                    <div className="w-full flex flex-col items-start border border-gray-200 rounded-2xl shadow-sm bg-white overflow-hidden">
                        <div className="w-full overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-2xl">
                                <thead>
                                    <tr className="border-b border-gray-200 text-xs font-semibold text-gray-500 bg-gray-50">
                                        <th className="py-3 px-4 w-12 text-center">No</th>
                                        <th className="py-3 px-4 w-1/2">Kuis</th>
                                        <th className="py-3 px-4 w-32 text-center">Kategori</th>
                                        <th className="py-3 px-4 w-24 text-center">Soal</th>
                                        <th className="py-3 px-4 w-28 text-center">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 text-sm">
                                    {loading ? (
                                        <tr>
                                            <td colSpan={5} className="py-6 text-center text-gray-400">
                                                Memuat data kuis...
                                            </td>
                                        </tr>
                                    ) : quizzes.length === 0 ? (
                                        <tr>
                                                <td colSpan={5} className="py-6 text-center text-gray-400">
                                                    Belum ada kuis tersedia.
                                                </td>
                                            </tr>
                                        ) : (
                                                quizzes.map((quiz, index) => (
                                                    <tr key={quiz.id} className="hover:bg-gray-50/55 transition-colors">
                                                        <td className="py-3.5 px-4 text-center text-gray-500">{index + 1}</td>
                                                        <td className="py-3.5 px-4">
                                                            <div className="font-medium text-gray-900">{quiz.title_quiz}</div>
                                                            <div className="text-xs text-gray-400 mt-0.5 line-clamp-1">
                                                                {quiz.desc_quiz || 'Tidak ada deskripsi.'}
                                                            </div>
                                                        </td>
                                                        <td className="py-3.5 px-4 text-center text-gray-600">
                                                            <span className="inline-block px-2.5 py-1 text-xs font-bold bg-green-600 text-white rounded-full whitespace-nowrap">
                                                                {quiz.type_quiz}
                                                            </span>
                                                        </td>
                                                        <td className="py-3.5 px-4 text-center text-gray-600">15</td>
                                                        <td className="py-3.5 px-4 text-center">
                                                            <a
                                                                href={`/quiz/${quiz.id}`}
                                                                className="inline-block text-xs font-medium text-white bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded transition-colors whitespace-nowrap"
                                                            >
                                                                Buat Soal
                                                            </a>
                                                        </td>
                                                    </tr>
                                                ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}