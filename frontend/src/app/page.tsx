"use client";

import { ConnectButton } from "@/components/ui/ConnectButton";
import Image from "next/image";
import Logo from "../../public/gamar_02.png";
import Logo2 from "../../public/gamar_03.png";
import Logo3 from "../../public/gamar_04.png";
export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="w-full bg-cyan-950 px-6">
        <div className="grid grid-cols-3 items-center py-4 max-w-6xl mx-auto">
          <div className="flex items-center">
            <div className="text-3xl lilita-one-regular shadow-2xl hover:shadow-olive-300 font-extrabold tracking-tight">
              <span className="text-white">QuizWeb3</span>
            </div>
          </div>

          <div className="flex items-center text-white justify-center gap-6">
            <a href="#home" className="text-md font-medium transition-colors">
              Home
            </a>
            <a
              href="#courses"
              className="text-md font-medium transition-colors"
            >
              Courses
            </a>
            <a href="#about" className="text-md font-medium transition-colors">
              About
            </a>
            <a
              href="#contact"
              className="text-md font-medium transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center justify-end">
            <ConnectButton />
          </div>
        </div>
      </nav>

      <main className="flex-1 flex bg-cyan-950 flex-col items-center px-6 py-1 text-gray-900">
        <div className="max-w-5xl w-full flex flex-col md:flex-row gap-8 items-center rounded-3xl p-8">
          {/* Bagian Kiri: Teks & Tombol (Tidak Ada Perubahan) */}
          <div className="flex flex-col md:w-[55%] pr-4">
            <h1 className="text-4xl lilita-one-regular md:text-5xl font-extrabold tracking-tight text-gray-100 mb-4 leading-tight">
              Get Ready for a Fun Quiz!
            </h1>
            <p className="text-base text-gray-200 text-justify mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
              dolorem laudantium asperiores exercitationem libero veniam
              molestias vero, offices alias eligendi natus eum architecto.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/quiz"
                className="bg-purple-600 text-sm text-white px-6 py-3.5 rounded-xl font-bold hover:bg-purple-700 shadow-lg shadow-purple-600/20 transition-all text-center inline-block"
              >
                Get Started
              </a>
              <a
                href="/quiz"
                className="bg-yellow-400 text-sm shadow-lg shadow-yellow-600/20 text-gray-800 px-6 py-3.5 rounded-xl font-bold hover:bg-gray-200 transition-all text-center inline-block border border-gray-200"
              >
                View Leaderboard
              </a>
            </div>
          </div>

          <div className="md:w-[45%] w-full flex flex-col justify-center items-center p-8 relative group">
            {/* Lapisan Latar Belakang Geometris dengan Efek Cipratan Cat */}
            <div className="absolute inset-0 flex items-center justify-center scale-125 opacity-90 transition-transform duration-500 group-hover:scale-130">
              <svg
                viewBox="0 0 250 250"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <defs>
                  {/* Glow Utama */}
                  <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                  </radialGradient>

                  {/* Gradasi untuk Cipratan Warna Kedua */}
                  <linearGradient id="paintGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#818CF8" />
                    <stop offset="100%" stopColor="#C084FC" />
                  </linearGradient>
                </defs>

                {/* Lingkaran Besar sebagai Glow */}
                <circle cx="125" cy="125" r="100" fill="url(#glow)" />

                {/* EFEK CIPRATAN CAT (Bentuk Path Abstrak) */}
                <g fill="url(#paintGrad)" fillOpacity="0.45">
                  {/* Cipratan Besar Kiri Atas */}
                  <path d="M45,55 C30,40 20,65 15,50 C10,35 35,25 50,30 C65,35 60,70 45,55 Z" />
                  {/* Cipratan Tajam Kanan Atas */}
                  <path d="M210,60 C230,45 195,30 220,25 C245,20 225,65 205,70 C185,75 190,75 210,60 Z" />
                  {/* Cipratan Besar Kanan Bawah */}
                  <path d="M195,190 C220,175 240,210 225,225 C210,240 180,215 175,195 C170,175 170,205 195,190 Z" />
                  {/* Cipratan Menetes Kiri Bawah */}
                  <path d="M55,185 C40,170 25,190 20,210 C15,230 45,225 50,205 C55,185 70,200 55,185 Z" />
                </g>

                {/* Bintik/Tetesan Cat Kecil Tersebar (Splatters) */}
                <g fill="#818CF8" fillOpacity="0.6">
                  <circle cx="25" cy="35" r="3" />
                  <circle cx="65" cy="20" r="1.5" />
                  <circle cx="235" cy="45" r="2.5" />
                  <circle cx="185" cy="25" r="2" />
                  <circle cx="230" cy="160" r="3.5" />
                  <circle cx="215" cy="235" r="2" />
                  <circle cx="75" cy="230" r="3" />
                  <circle cx="20" cy="165" r="2" />
                  <circle cx="35" cy="235" r="1.5" />
                </g>

                {/* Lingkaran Pola Geometris Asli (Dipertahankan agar tetap futuristik) */}
                <g fill="#4F46E5" fillOpacity="0.25">
                  <circle cx="50" cy="60" r="6" />
                  <circle cx="200" cy="50" r="5" />
                  <circle cx="210" cy="190" r="8" />
                  <circle cx="40" cy="200" r="6" />
                  <circle cx="125" cy="230" r="4" />
                </g>

                {/* Garis Konektor Halus */}
                <g stroke="#4F46E5" strokeWidth="1" strokeOpacity="0.3">
                  <line x1="50" y1="60" x2="125" y2="125" />
                  <line x1="200" y1="50" x2="125" y2="125" />
                  <line x1="210" y1="190" x2="125" y2="125" />
                  <line x1="40" y1="200" x2="125" y2="125" />
                </g>
              </svg>
            </div>

            {/* Komponen Image Utama */}
            <Image
              src={Logo}
              alt="Logo Interaktif"
              priority
              width={500}
              height={500}
              className="w-[480px] h-[480px]  object-contain z-10 drop-shadow-[0_10px_25px_rgba(79,70,229,0.4)] transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>

        <div className="w-full max-w-5xl flex justify-start mt-24">
          <h1 className="text-3xl font-extrabold tracking-tight lilita-one-regular text-white">
            Explore Our Quiz Categories
          </h1>
        </div>

        <div className="max-w-5xl w-full flex flex-col md:flex-row bg-yellow-300 rounded-3xl mt-8 p-8 md:p-12 items-center gap-8 shadow-xl shadow-purple-900/10">
          <div className="flex flex-col md:w-[40%] w-full">
            <h1 className="text-3xl md:text-4xl lilita-one-regular font-extrabold tracking-tight leading-tight">
              Start Your Quiz Adventure
            </h1>
          </div>
          <div className="md:w-[60%] w-full flex flex-col items-start">
            <p className="text-base mb-6 text-justify leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur, ab? Sit libero perspiciatis debitis magni natus
              minima quia quo, esse vero ex consequatur veniam.
            </p>
            <a
              href="/quiz"
              className="w-fit bg-purple-500 text-sm rounded-xl text-black px-6 py-3 font-bold hover:bg-amber-300 shadow-lg shadow-amber-400/20 transition-all text-center"
            >
              Go for started quiz
            </a>
          </div>
        </div>

        <div className="w-full max-w-5xl flex flex-col justify-start mt-24 gap-3">
          <h1 className="text-3xl font-extrabold lilita-one-regular tracking-tight text-white">
            Our Milestones
          </h1>
          <p className="text-sm text-gray-200 text-justify leading-relaxed max-w-5xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis ea omnis tempore aperiam quis consequuntur blanditiis animi obcaecati voluptatem accusantium aspernatur, repellat sunt accusamus exercitationem reiciendis dolore iste reprehenderit itaque!
          </p>
        </div>


        <div className="max-w-5xl w-full flex flex-row mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
            <div className="flex flex-col bg-white border border-gray-100 p-6 shadow-sm rounded-2xl transition-all hover:shadow-md">
              <span className="text-gray-500 font-medium text-xs uppercase tracking-wider mb-2">
                Total Users
              </span>
              <span className="text-3xl font-extrabold text-blue-600">
                150,000+
              </span>
            </div>

            <div className="flex flex-col bg-white border border-gray-100 p-6 shadow-sm rounded-2xl transition-all hover:shadow-md">
              <span className="text-gray-500 font-medium text-xs uppercase tracking-wider mb-2">
                Quizzes Finished
              </span>
              <span className="text-3xl font-extrabold text-purple-600">
                480,000+
              </span>
            </div>

            <div className="flex flex-col bg-white border border-gray-100 p-6 shadow-sm rounded-2xl transition-all hover:shadow-md">
              <span className="text-gray-500 font-medium text-xs uppercase tracking-wider mb-2">
                Prizes Awarded
              </span>
              <span className="text-3xl font-extrabold text-green-600">
                Rp 500M+
              </span>
            </div>

            <div className="flex flex-col bg-white border border-gray-100 p-6 shadow-sm rounded-2xl transition-all hover:shadow-md">
              <span className="text-gray-500 font-medium text-xs uppercase tracking-wider mb-2">
                Total Funding
              </span>
              <span className="text-3xl font-extrabold text-indigo-600">
                $2.5M+
              </span>
            </div>
          </div>
        </div>

        <div className="w-full max-w-5xl flex justify-start mt-30">
          <h1 className="text-3xl font-extrabold tracking-tight lilita-one-regular text-white">
            Explore Our Quiz Categories
          </h1>
        </div>

        <div className="max-w-5xl w-full flex flex-col md:flex-row text-gray-900 items-center gap-10 mt-10 px-4 group">
          {/* Bagian Kiri: Gambar/Logo Minimalis */}
          <div className="flex flex-col md:w-[40%] w-full items-center justify-center">
            <Image
              src={Logo2}
              alt="Token Rewards"
              priority
              width={380}
              height={380}
              className="w-full max-w-[260px] md:max-w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Bagian Kanan: Konten Teks & Tombol Aksi */}
          <div className="md:w-[60%] w-full flex flex-col items-start">

            <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight mb-4 text-white">
              Prove Your Skills, <br />
              Claim Crypto Assets
            </h2>

            <p className="text-sm md:text-base text-gray-200 mb-8 text-justify leading-relaxed font-medium">
              Tunjukkan keahlian Anda di dunia Web3! Selesaikan kuis interaktif kami dengan hasil gemilang. Setiap pengguna yang berhasil mencapai skor minimal <span className="text-yellow-300 font-bold">80% atau lebih</span> berhak mendapatkan distribusi Asset Token langsung ke dompet digital Anda sebagai bentuk penghargaan atas pengetahuan Anda.
            </p>

            <a
              href="/quiz"
              className="group/btn flex items-center justify-center gap-2 w-full sm:w-fit bg-purple-600 hover:bg-purple-700 text-sm rounded-xl text-white px-8 py-3.5 font-bold transition-all duration-300 hover:-translate-y-0.5 shadow-sm active:translate-y-0 text-center"
            >
              <span>Start Quiz Adventure</span>
              <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>


        <div className="max-w-5xl w-full flex flex-col md:flex-row text-white items-center gap-10 mt-24 px-4 group">
          {/* Bagian Kiri: Konten Teks & Tombol Aksi */}
          <div className="md:w-[60%] w-full flex flex-col items-start">

            <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight mb-4 lilita-one-regular">
              Finish the Quiz, <br />
              Get a Surprise Reward
            </h2>

            <p className="text-sm md:text-base text-gray-200 mb-8 text-justify leading-relaxed font-medium">
              Uji pengetahuan Anda sekarang! Setelah berhasil menyelesaikan kuis dengan sukses, sistem pintar kami akan memilih <span className="text-purple-400 font-bold">Reward Acak (Random Reward)</span> secara transparan. Hadiah token atau aset digital kejutan tersebut akan langsung ditransfer secara otomatis ke dalam *wallet* digital terhubung Anda.
            </p>

            <a
              href="/quiz"
              className="group/btn flex items-center justify-center gap-2 w-full sm:w-fit bg-purple-600 hover:bg-purple-700 text-sm rounded-xl text-white px-8 py-3.5 font-bold transition-all duration-300 hover:-translate-y-0.5 shadow-sm active:translate-y-0 text-center"
            >
              <span>Go for started quiz</span>
              <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Bagian Kanan: Gambar/Logo Tanpa Card */}
          <div className="flex flex-col md:w-[40%] w-full items-center justify-center">
            <Image
              src={Logo3}
              alt="Interactive Rewards"
              priority
              width={500}
              height={500}
              className="w-full max-w-[280px] md:max-w-full h-auto object-contain z-10 drop-shadow-[0_10px_25px_rgba(147,51,234,0.3)] transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8 mt-28 px-4 py-12 border-t border-b border-gray-800/50">

          {/* Sisi Kiri: Teks Ajakan */}
          <div className="flex flex-col items-start text-left max-w-md">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white lilita-one-regular mb-2">
              Never Miss an Airdrop
            </h2>
            <p className="text-sm text-gray-200 leading-relaxed">
              Berlangganan newsletter kami untuk mendapatkan info kuis terbaru, peluncuran token reward baru, dan turnamen mingguan.
            </p>
          </div>

          {/* Sisi Kanan: Input Form */}
          <form className="w-full md:w-auto flex-1 max-w-md flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder="Enter your crypto email..."
              className="flex-1 rounded-xl border border-gray-800 bg-gray-900/50 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-gray-500 focus:border-purple-500 focus:bg-gray-950 focus:ring-4 focus:ring-purple-500/10"
            />
            <button
              type="submit"
              className="group flex items-center justify-center gap-2 rounded-xl bg-purple-600 hover:bg-purple-700 px-6 py-3 text-sm font-bold text-white transition-all shadow-md shadow-purple-600/10 hover:-translate-y-0.5"
            >
              <span>Subscribe</span>
              <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </form>
        </div>
      </main>
      <div className="flex flex-col justify-between bg-cyan-950">
        <main className="flex-1 flex flex-col items-center px-6 py-20">
          {/* Semua section kuis, reward, milestones, dll ada di dalam sini */}
        </main>

        {/* Footer Otomatis Terunci di Paling Bawah */}
        <footer className="w-full max-w-5xl flex flex-col mx-auto px-4 pb-12 text-gray-400">
          {/* Bagian Atas: Navigasi */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-gray-800/40">
            {/* Kolom Brand Info */}
            <div className="col-span-2 flex flex-col items-start gap-3">
              <span className="text-2xl font-black tracking-wide text-purple-500 lilita-one-regular">
                QuizWeb3
              </span>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed max-w-xs text-left">
                Platform kuis edukasi Web3 pertama yang mendistribusikan reward aset kripto acak langsung ke dompet non-kustodian Anda.
              </p>
            </div>

            {/* Kolom Platform */}
            <div className="flex flex-col items-start gap-4">
              <span className="text-xs font-bold text-white uppercase tracking-widest">Platform</span>
              <ul className="flex flex-col gap-2.5 text-left text-xs md:text-sm">
                <li><a href="/dashboard" className="hover:text-purple-400 transition-colors">Dashboard</a></li>
                <li><a href="/quiz" className="hover:text-purple-400 transition-colors">All Quizzes</a></li>
                <li><a href="/leaderboard" className="hover:text-purple-400 transition-colors">Leaderboard</a></li>
              </ul>
            </div>

            {/* Kolom Resources */}
            <div className="flex flex-col items-start gap-4">
              <span className="text-xs font-bold text-white uppercase tracking-widest">Resources</span>
              <ul className="flex flex-col gap-2.5 text-left text-xs md:text-sm">
                <li><a href="/tokenomics" className="hover:text-purple-400 transition-colors">Tokenomics</a></li>
                <li><a href="/whitepaper" className="hover:text-purple-400 transition-colors">Whitepaper</a></li>
                <li><a href="/faq" className="hover:text-purple-400 transition-colors">FAQs</a></li>
              </ul>
            </div>
          </div>

          {/* Bagian Bawah: Hak Cipta & Legalitas */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-[11px] md:text-xs text-gray-600">
            <div className="text-center md:text-left">
              &copy; 2026 QuizWeb3. All crypto assets distribution is secured by smart contracts.
            </div>
            <div className="flex gap-6">
              <a href="/terms" className="hover:text-gray-400 transition-colors">Terms of Service</a>
              <a href="/privacy" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            </div>
          </div>
        </footer>

      </div>

    </div>
  );
}
