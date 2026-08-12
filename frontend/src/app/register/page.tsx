'use client'

export default function RegisterSiswa() {

  return (
    <div className="min-h-screen bg-cyan-950 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Kontainer Utama Form */}
      <div className="w-full max-w-md bg-cyan-900/40 border border-cyan-500/20 rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-2xl shadow-cyan-950/50">

        {/* Header Form */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-black tracking-tight text-white mb-2">
            Daftar Akun <span className="text-cyan-400">Siswa</span>
          </h1>
          <p className="text-xs md:text-sm text-cyan-200/60">
            Isi data diri Anda untuk memulai petualangan belajar kuis.
          </p>
        </div>

        {/* Form Input */}
        <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>

          {/* Input Nama Lengkap */}
          <div className="flex flex-col items-start gap-1.5 w-full">
            <label className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
              Nama Lengkap
            </label>
            <input
              type="text"
              required
              placeholder="Masukkan nama lengkap..."
              className="w-full rounded-xl border border-cyan-800 bg-cyan-950/50 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-cyan-700 focus:border-cyan-500 focus:bg-cyan-950 focus:ring-4 focus:ring-cyan-500/10"
            />
          </div>

          {/* Input NISN / Nomor Induk */}
          <div className="flex flex-col items-start gap-1.5 w-full">
            <label className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
              NISN (Nomor Induk Siswa)
            </label>
            <input
              type="number"
              required
              placeholder="Contoh: 0041234567"
              className="w-full rounded-xl border border-cyan-800 bg-cyan-950/50 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-cyan-700 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-cyan-500 focus:bg-cyan-950 focus:ring-4 focus:ring-cyan-500/10"
            />
          </div>

          {/* Input Email */}
          <div className="flex flex-col items-start gap-1.5 w-full">
            <label className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
              Email Siswa
            </label>
            <input
              type="email"
              required
              placeholder="nama@sekolah.sch.id"
              className="w-full rounded-xl border border-cyan-800 bg-cyan-950/50 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-cyan-700 focus:border-cyan-500 focus:bg-cyan-950 focus:ring-4 focus:ring-cyan-500/10"
            />
          </div>

          {/* Input Password */}
          <div className="flex flex-col items-start gap-1.5 w-full">
            <label className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
              Kata Sandi
            </label>
            <input
              type="password"
              required
              placeholder="Minimal 8 karakter..."
              className="w-full rounded-xl border border-cyan-800 bg-cyan-950/50 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-cyan-700 focus:border-cyan-500 focus:bg-cyan-950 focus:ring-4 focus:ring-cyan-500/10"
            />
          </div>

          {/* Tombol Submit Register */}
          <button
            type="submit"
            className="w-full mt-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 px-6 py-3.5 text-sm font-bold text-cyan-950 transition-all shadow-lg shadow-cyan-500/10 hover:-translate-y-0.5 active:translate-y-0 text-center"
          >
            Daftar Sekarang
          </button>
        </form>
      </div>
    </div>
  )
}
