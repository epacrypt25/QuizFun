'use client'

export default function StudentDashboard() {
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

                    {/* Form Konten */}
                    <form className="w-full flex flex-col gap-4 text-left" onSubmit={(e) => e.preventDefault()}>
                        {/* Input Judul Kuis */}
                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                                Judul Kuis
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
                                Kategori
                            </label>
                            <select className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-black outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10">
                                <option>Web3 / Crypto</option>
                                <option>Programming</option>
                                <option>Sains / Matematika</option>
                                <option>Umum</option>
                            </select>
                        </div>

                        {/* Input Jumlah Soal & Reward Token (Berjejer) */}
                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                                Deskripsi Kuis
                            </label>
                            <textarea
                                placeholder="Masukkan deskripsi kuis..."
                                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-black outline-none transition-all placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                            />
                        </div>

                        {/* Tombol Submit Buat Kuis */}
                        <button
                            type="submit"
                            className="w-full mt-2 rounded-xl bg-blue-600 hover:bg-blue-700 px-5 py-3 text-sm font-bold text-white transition-all shadow-md shadow-blue-600/10 hover:-translate-y-0.5 active:translate-y-0 text-center"
                        >
                            Simpan Kuis Baru
                        </button>
                    </form>
                </div>


                {/* 2. BAGIAN TABEL: DAFTAR KUIS (Sisa Lebar 65% di Desktop) */}
                <div className="w-full lg:w-[65%] flex flex-col items-start border border-gray-200 rounded-2xl shadow-sm">
                    {/* Pembungkus Tabel Berbentuk Card Modern */}
                    <div className="w-full overflow-hidden border border-gray-200 rounded-xl">
                        <div className="w-full overflow-x-auto">
                            <table className="w-full min-w-[550px] border-collapse text-left text-black">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-200 text-xs font-bold text-gray-700 uppercase tracking-wider">
                                        <th className="py-3.5 px-4">Kuis</th>
                                        <th className="py-3.5 px-4 w-32">Kategori</th>
                                        <th className="py-3.5 px-4 text-center w-24">Soal</th>
                                        <th className="py-3.5 px-4 text-right w-28">Reward</th>
                                        <th className="py-3.5 px-4 text-center w-24">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 text-sm font-medium text-black">

                                    {/* Baris Kuis 1 */}
                                    <tr className="group hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-4">
                                            <div className="flex flex-col items-start">
                                                <span className="font-bold text-gray-900">Smart Contract Dasar</span>
                                                <span className="text-xs text-gray-500 mt-0.5">Dibuat oleh: Admin</span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-4 text-gray-700">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                                                Web3 / Crypto
                                            </span>
                                        </td>
                                        <td className="py-4 px-4 text-center text-gray-600">15 Soal</td>
                                        <td className="py-4 px-4 text-right font-black text-blue-600">100 QW3</td>
                                        <td className="py-4 px-4 text-center">
                                            <a href="/quiz/1" className="inline-block text-xs font-bold bg-blue-100 hover:bg-blue-200 text-blue-600 px-3 py-1.5 rounded-lg transition-colors">
                                                Buat Soal
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


            </div>
        </div>


    )
}