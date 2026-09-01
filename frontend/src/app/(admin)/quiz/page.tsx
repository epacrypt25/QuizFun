'use client'

import { FormEvent, useState } from 'react'
import { useQuizContext } from '@/context/QuizContext'

export default function StudentDashboard() {
    const { quizzes, loading, createQuiz } = useQuizContext()

    // State manajemen komponen untuk form
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
            // Reset Form
            setTitle('')
            setDescription('')
            setTypeQuiz('')
        } catch (err: any) {
            alert(err.message)
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <div className="max-w-7xl mx-auto space-y-10 animate-fade-in-up text-black ">

            {/* Bagian Kontainer Utama: Membagi Form (Kiri) dan Tabel (Kanan) */}
            <div className="flex flex-col lg:flex-row gap-10 items-start w-full">

                {/* 1. BAGIAN FORM: TAMBAH KUIS BARU (Lebar 35% di Desktop) */}
                <div className="w-full lg:w-[35%] flex flex-col items-start bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                    {/* Header Card */}
                    <div className="text-left mb-6 w-full">
                        <h2 className="text-xl lilita-one-regular font-extrabold tracking-tight text-gray-900 sm:text-2xl">
                            Buat Kuis Baru
                        </h2>
                        <p className="text-xs text-gray-500 mt-1">
                            Buat kuis baru dan tentukan total reward token untuk siswa.
                        </p>
                    </div>

                    <form className="w-full flex flex-col gap-4 text-left" onSubmit={handleCreateQuiz}>
                        {/* Input Judul Kuis */}
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

                        {/* Input Kategori / Type Quiz (Kini Sudah Dinamis Terhubung ke Database) */}
                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                                Kategori
                            </label>
                            <select
                                value={typeQuiz || ''} // Handle jika nilainya null agar tidak error di HTML
                                required // Wajib diisi sebelum tombol submit bisa diklik
                                onChange={(e) => setTypeQuiz(e.target.value)}
                                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-black outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                            >
                                {/* Pilihan default kosong saat pertama kali halaman dimuat */}
                                <option value="" disabled>-- Pilih Kategori Kuis --</option>
                                <option value="Web3 / Crypto">Web3 / Crypto</option>
                                <option value="Programming">Programming</option>
                                <option value="Sains / Matematika">Sains / Matematika</option>
                                <option value="Umum">Umum</option>
                            </select>
                        </div>

                        {/* Input Deskripsi Kuis */}
                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                                Deskripsi Kuis
                            </label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Masukkan deskripsi kuis..."
                                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-black outline-none transition-all placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                            />
                        </div>

                        {/* Tombol Submit Buat Kuis */}
                        <button
                            type="submit"
                            disabled={submitting}
                            className="w-full mt-2 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 px-5 py-3 text-sm font-bold text-white transition-all shadow-md shadow-blue-600/10 hover:-translate-y-0.5 active:translate-y-0 text-center"
                        >
                            {submitting ? 'Menyimpan ke Supabase...' : 'Simpan Kuis Baru'}
                        </button>
                    </form>

                </div>


                {/* 2. BAGIAN TABEL: DAFTAR KUIS (Sisa Lebar 65% di Desktop) */}
                <div className="w-full lg:w-[65%] flex flex-col items-start border border-gray-200 rounded-2xl shadow-sm bg-white">
                    {/* Pembungkus Tabel Berbentuk Card Modern */}
                    <div className="w-full overflow-hidden border border-gray-200 rounded-xl">
                        <div className="w-full overflow-x-auto">
                            <table className="w-full min-w-[550px] border-collapse text-left text-black">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-200 text-xs font-bold text-gray-700 uppercase tracking-wider">
                                        <th className="py-3.5 px-4">Kuis</th>
                                        <th className="py-3.5 px-4 w-32">Kategori</th>
                                        <th className="py-3.5 px-4 text-center w-24">Soal</th>
                                        <th className="py-3.5 px-4 text-center w-24">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 text-sm font-medium text-black">
                                    {/* A. Kondisi saat data sedang dimuat dari Supabase */}
                                    {loading ? (
                                        <tr>
                                            <td colSpan={4} className="py-8 text-center text-gray-500 font-normal">
                                                Memuat data kuis dari Supabase...
                                            </td>
                                        </tr>
                                    ) : /* B. Kondisi jika data di database masih kosong */
                                        quizzes.length === 0 ? (
                                            <tr>
                                                <td colSpan={4} className="py-8 text-center text-gray-500 font-normal">
                                                    Belum ada kuis tersedia. Buat kuis pertama Anda!
                                                </td>
                                            </tr>
                                        ) : (
                                            /* C. Kondisi saat data berhasil diambil (Looping data) */
                                            quizzes.map((quiz) => (
                                                <tr key={quiz.id} className="group hover:bg-gray-50 transition-colors">
                                                    <td className="py-4 px-4">
                                                        <div className="flex flex-col items-start">
                                                            {/* Menampilkan Judul Kuis secara dinamis */}
                                                            <span className="font-bold text-gray-900">{quiz.title_quiz}</span>
                                                            {/* Menampilkan Deskripsi Kuis secara dinamis */}
                                                            <span className="text-xs text-gray-500 mt-0.5 line-clamp-1 max-w-xs font-normal">
                                                                {quiz.desc_quiz || 'Tidak ada deskripsi.'}
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="py-4 px-4 text-gray-700">
                                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                                                            {quiz.type_quiz}
                                                        </span>
                                                    </td>
                                                    <td className="py-4 px-4 text-center text-gray-600 font-normal">15 Soal</td>
                                                    <td className="py-4 px-4 text-center">
                                                        {/* Mengarahkan tombol aksi secara dinamis berdasarkan ID kuis */}
                                                        <a href={`/quiz/${quiz.id}`} className="inline-block text-xs font-bold bg-blue-100 hover:bg-blue-200 text-blue-600 px-3 py-1.5 rounded-lg transition-colors">
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