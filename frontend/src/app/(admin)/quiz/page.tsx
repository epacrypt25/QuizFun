'use client'

export default function StudentDashboard() {
    return (
        <div className="max-w-7xl mx-auto space-y-10 animate-fade-in-up text-black">

            {/* Bagian Kontainer Utama: Membagi Form (Kiri) dan Tabel (Kanan) */}
            <div className="flex flex-col lg:flex-row gap-10 items-start w-full">

                {/* 1. BAGIAN FORM: TAMBAH KUIS BARU (Lebar 35% di Desktop) */}
                <div className="w-full lg:w-[35%] flex flex-col items-start">
                    <div className="text-left mb-6">
                        <h2 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
                            Add New Quiz
                        </h2>
                        <p className="text-xs text-gray-500 mt-1">
                            Buat kuis baru dan tentukan total reward token untuk siswa.
                        </p>
                    </div>

                    <form className="w-full flex flex-col gap-4 text-left" onSubmit={(e) => e.preventDefault()}>
                        {/* Input Judul Kuis */}
                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                                Quiz Title
                            </label>
                            <input
                                type="text"
                                required
                                placeholder="Contoh: Pengenalan Blockchain Dasar"
                                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-black outline-none transition-all placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                            />
                        </div>

                        {/* Input Kategori */}
                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                                Category
                            </label>
                            <select className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-black outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10">
                                <option>Web3 / Crypto</option>
                                <option>Programming</option>
                                <option>Sains / Matematika</option>
                                <option>Umum</option>
                            </select>
                        </div>

                        {/* Input Jumlah Soal & Reward Token (Berjejer) */}
                        <div className="flex gap-4 w-full">
                            <div className="flex flex-col gap-1 flex-1">
                                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                                    Questions
                                </label>
                                <input
                                    type="number"
                                    required
                                    placeholder="10"
                                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-black outline-none transition-all placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                />
                            </div>
                            <div className="flex flex-col gap-1 flex-1">
                                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                                    Reward (QW3)
                                </label>
                                <input
                                    type="number"
                                    required
                                    placeholder="50"
                                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-black outline-none transition-all placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                />
                            </div>
                        </div>

                        {/* Tombol Submit Buat Kuis */}
                        <button
                            type="submit"
                            className="w-full mt-2 rounded-xl bg-blue-600 hover:bg-blue-700 px-5 py-3 text-sm font-bold text-white transition-all shadow-md shadow-blue-600/10 hover:-translate-y-0.5 active:translate-y-0 text-center"
                        >
                            Create Quiz
                        </button>
                    </form>
                </div>

                {/* 2. BAGIAN TABEL: DAFTAR KUIS (Sisa Lebar 65% di Desktop) */}
                <div className="w-full lg:w-[65%] flex flex-col items-start pt-1 lg:pt-0">
                    <div className="text-left mb-6">
                        <h2 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
                            Active Quizzes
                        </h2>
                        <p className="text-xs text-gray-500 mt-1">
                            Daftar seluruh kuis aktif yang dapat diakses dan dikerjakan oleh siswa.
                        </p>
                    </div>

                    {/* Tabel Kuis Konten Murni */}
                    <div className="w-full overflow-x-auto">
                        <table className="w-full min-w-[550px] border-collapse text-left text-black">
                            <thead>
                                <tr className="border-b border-gray-200 text-xs font-bold text-gray-900 uppercase tracking-wider">
                                    <th className="py-3 px-4">Kuis</th>
                                    <th className="py-3 px-4 w-32">Kategori</th>
                                    <th className="py-3 px-4 text-center w-24">Soal</th>
                                    <th className="py-3 px-4 text-right w-28">Reward</th>
                                    <th className="py-3 px-4 text-center w-24">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-sm font-medium text-black">

                                {/* Baris Kuis 1 */}
                                <tr className="group hover:bg-gray-50 transition-colors">
                                    <td className="py-4 px-4">
                                        <div className="flex flex-col items-start">
                                            <span className="font-bold text-gray-900">Smart Contract Dasar</span>
                                            <span className="text-xs text-gray-500">Dibuat oleh: Admin</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4 text-gray-700">Web3 / Crypto</td>
                                    <td className="py-4 px-4 text-center text-gray-600">15 Soal</td>
                                    <td className="py-4 px-4 text-right font-black text-blue-600">100 QW3</td>
                                    <td className="py-4 px-4 text-center">
                                        <a href="/quiz/1" className="text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline">
                                            Mulai
                                        </a>
                                    </td>
                                </tr>

                                {/* Baris Kuis 2 */}
                                <tr className="group hover:bg-gray-50 transition-colors">
                                    <td className="py-4 px-4">
                                        <div className="flex flex-col items-start">
                                            <span className="font-bold text-gray-900">Dasar Pemrograman React</span>
                                            <span className="text-xs text-gray-500">Dibuat oleh: Pak Budi</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4 text-gray-700">Programming</td>
                                    <td className="py-4 px-4 text-center text-gray-600">10 Soal</td>
                                    <td className="py-4 px-4 text-right font-black text-blue-600">50 QW3</td>
                                    <td className="py-4 px-4 text-center">
                                        <a href="/quiz/2" className="text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline">
                                            Mulai
                                        </a>
                                    </td>
                                </tr>

                                {/* Baris Kuis 3 */}
                                <tr className="group hover:bg-gray-50 transition-colors">
                                    <td className="py-4 px-4">
                                        <div className="flex flex-col items-start">
                                            <span className="font-bold text-gray-900">Aljabar Linear Esensial</span>
                                            <span className="text-xs text-gray-500">Dibuat oleh: Ibu Siti</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4 text-gray-700">Sains / Mat</td>
                                    <td className="py-4 px-4 text-center text-gray-600">20 Soal</td>
                                    <td className="py-4 px-4 text-right font-black text-blue-600">75 QW3</td>
                                    <td className="py-4 px-4 text-center">
                                        <a href="/quiz/3" className="text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline">
                                            Mulai
                                        </a>
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