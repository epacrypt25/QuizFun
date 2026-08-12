'use client'

export default function StudentDashboard() {

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in-up">
      {/* Kontainer Grid Responsif */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-black">

        {/* Kartu 1: Total Kuis Diikuti (Warna Merah Lembut) */}
        <div className="flex flex-col justify-between p-6 bg-red-100 border border-red-200 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-400 group">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-red-700 uppercase tracking-wider">
              Kuis Diikuti
            </span>
            <div className="p-2 rounded-xl bg-red-200 text-red-800 transition-colors group-hover:bg-red-600 group-hover:text-white">
              <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-3-12h.008v.008H13.5V6zm0 3h.008v.008H13.5V9zm0 3h.008v.008H13.5v-.008zm0 3h.008v.008H13.5v-.008zM5.625 21h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9 9 9 0 00-9 9v8.625c0 .621.504 1.125 1.125 1.125z" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-black text-black leading-none">
              24
            </h3>
            <p className="text-xs text-red-800/80 mt-2 font-medium">
              +3 kuis baru minggu ini
            </p>
          </div>
        </div>

        {/* Kartu 2: Rata-rata Skor (Warna Biru Lembut) */}
        <div className="flex flex-col justify-between p-6 bg-blue-100 border border-blue-200 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 group">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
              Rata-Rata Skor
            </span>
            <div className="p-2 rounded-xl bg-blue-200 text-blue-800 transition-colors group-hover:bg-blue-600 group-hover:text-white">
              <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-black text-black leading-none">
              85.4%
            </h3>
            <p className="text-xs text-green-700 font-bold mt-2 flex items-center gap-1">
              <span>▲ 2.1%</span> <span className="text-blue-800/80 font-normal">dari bulan lalu</span>
            </p>
          </div>
        </div>

        {/* Kartu 3: Total Reward Token (Warna Kuning Lembut) */}
        <div className="flex flex-col justify-between p-6 bg-amber-100 border border-amber-200 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 group">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">
              Token Didapatkan
            </span>
            <div className="p-2 rounded-xl bg-amber-200 text-amber-900 transition-colors group-hover:bg-amber-500 group-hover:text-white">
              <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
              </svg>
            </div>
          </div>
          <div>
            {/* Diubah menjadi warna hitam pekat solid tanpa efek teks gradasi */}
            <h3 className="text-3xl font-black text-black leading-none">
              350 QW3
            </h3>
            <p className="text-xs text-amber-800/80 mt-2 font-medium">
              Siap diklaim ke wallet
            </p>
          </div>
        </div>

      </div>


      <div className="w-full pt-4 text-black">
        {/* Judul & Deskripsi Papan Peringkat */}
        <div className="flex flex-col items-start mb-6 text-left">
          <h2 className="text-xl font-extrabold tracking-tight text-black sm:text-2xl">
            Top Global Leaderboard
          </h2>
          <p className="text-xs text-gray-700 mt-1">
            Peringkat siswa terbaik berdasarkan akumulasi skor kuis tertinggi bulan ini.
          </p>
        </div>

        {/* Struktur Tabel Konten Murni */}
        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[500px] border-collapse text-left text-black">

            {/* Kepala Tabel */}
            <thead>
              <tr className="border-b border-cyan-500/20 text-xs font-bold text-gray-900 uppercase tracking-wider">
                <th className="py-3 px-4 w-20">Rank</th>
                <th className="py-3 px-4">Siswa</th>
                <th className="py-3 px-4 text-center w-32">Kuis Diikuti</th>
                <th className="py-3 px-4 text-right w-40">Total Skor</th>
              </tr>
            </thead>

            {/* Isi Tabel */}
            <tbody className="divide-y divide-gray-200 text-sm font-medium text-black">

              {/* Baris Juara 1 */}
              <tr className="group hover:bg-gray-100 transition-colors">
                <td className="py-4 px-4 font-bold text-lg text-amber-600">
                  🥇 1
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://unsplash.com"
                      alt="Avatar"
                      className="h-8 w-8 rounded-full object-cover border border-gray-300"
                    />
                    <div className="flex flex-col items-start">
                      <span className="font-bold text-black">Alex Rivera</span>
                      <span className="text-xs text-gray-600">Kelas XIIA</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 text-center text-gray-800">42 Kuis</td>
                <td className="py-4 px-4 text-right font-black text-black">98.5%</td>
              </tr>

              {/* Baris Juara 2 */}
              <tr className="group hover:bg-gray-100 transition-colors">
                <td className="py-4 px-4 font-bold text-lg text-gray-500">
                  🥈 2
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://unsplash.com"
                      alt="Avatar"
                      className="h-8 w-8 rounded-full object-cover border border-gray-300"
                    />
                    <div className="flex flex-col items-start">
                      <span className="font-bold text-black">Budi Santoso</span>
                      <span className="text-xs text-gray-600">Kelas XIIC</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 text-center text-gray-800">39 Kuis</td>
                <td className="py-4 px-4 text-right font-black text-black">95.2%</td>
              </tr>

              {/* Baris Juara 3 */}
              <tr className="group hover:bg-gray-100 transition-colors">
                <td className="py-4 px-4 font-bold text-lg text-amber-800">
                  🥉 3
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://unsplash.com"
                      alt="Avatar"
                      className="h-8 w-8 rounded-full object-cover border border-gray-300"
                    />
                    <div className="flex flex-col items-start">
                      <span className="font-bold text-black">Siti Aminah</span>
                      <span className="text-xs text-gray-600">Kelas XIIB</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 text-center text-gray-800">45 Kuis</td>
                <td className="py-4 px-4 text-right font-black text-black">92.8%</td>
              </tr>

              {/* Baris Peringkat Biasa (Peringkat 4) */}
              <tr className="group hover:bg-gray-100 transition-colors">
                <td className="py-4 px-4 font-bold text-gray-700 pl-7">
                  4
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://unsplash.com"
                      alt="Avatar"
                      className="h-8 w-8 rounded-full object-cover border border-gray-300"
                    />
                    <div className="flex flex-col items-start">
                      <span className="font-bold text-black">Dimas Wijaya</span>
                      <span className="text-xs text-gray-600">Kelas XIA</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 text-center text-gray-800">35 Kuis</td>
                <td className="py-4 px-4 text-right font-black text-black">89.0%</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}
