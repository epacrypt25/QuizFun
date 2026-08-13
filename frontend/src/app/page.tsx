"use client";

import { ConnectButton } from "@/components/ui/ConnectButton";
import Image from "next/image";
import Logo from "../../public/gamar_02.png";
import Logo2 from "../../public/gamar_03.png";
import Logo3 from "../../public/gamar_04.png";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="w-full bg-cyan-950 px-6 sticky top-0 z-50 shadow-md">
        <div className="flex items-center justify-between py-4 max-w-6xl mx-auto gap-4">
          <div className="flex items-center">
            <div className="text-2xl md:text-3xl lilita-one-regular shadow-2xl hover:shadow-olive-300 font-extrabold tracking-tight">
              <span className="text-white">QuizWeb3</span>
            </div>
          </div>

          <div className="hidden md:flex items-center text-white justify-center gap-6">
            <a 
              href="#home"
              onClick={(e) => { e.preventDefault(); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="text-md font-medium transition-colors hover:text-purple-400 cursor-pointer"
            >
              Home
            </a>
            <a
              href="#categories"
              onClick={(e) => { e.preventDefault(); document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="text-md font-medium transition-colors hover:text-purple-400 cursor-pointer"
            >
              Categories
            </a>
            <a 
              href="#milestones"
              onClick={(e) => { e.preventDefault(); document.getElementById('milestones')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="text-md font-medium transition-colors hover:text-purple-400 cursor-pointer"
            >
              Milestones
            </a>
            <a
              href="#subscribe"
              onClick={(e) => { e.preventDefault(); document.getElementById('subscribe')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="text-md font-medium transition-colors hover:text-purple-400 cursor-pointer"
            >
              Subscribe
            </a>
          </div>

          <div className="flex items-center justify-end">
            <ConnectButton />
          </div>
        </div>
      </nav>

      <main id="home" className="flex-1 flex bg-cyan-950 flex-col items-center px-6 py-1 text-gray-900 scroll-mt-24">
        <div className="max-w-5xl w-full flex flex-col md:flex-row gap-8 items-center rounded-3xl p-8">
          {/* Bagian Kiri: Teks & Tombol */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:w-[55%] pr-0 md:pr-4 items-center md:items-start text-center md:text-left mt-6 md:mt-0">
            <h1 className="text-4xl lilita-one-regular md:text-5xl font-extrabold tracking-tight text-gray-100 mb-4 leading-tight">
              Get Ready for a Fun Quiz!
            </h1>
            <p className="text-sm md:text-base text-gray-200 mb-8 leading-relaxed px-2 md:px-0">
              Explore the Web3 world through interactive quizzes that are both educational and fun. Prove your knowledge and earn crypto asset rewards directly!
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4 sm:px-0">
              <a
                href="/quiz"
                className="w-full sm:w-auto bg-purple-600 text-sm text-white px-8 py-3.5 rounded-2xl font-bold hover:bg-purple-700 shadow-lg shadow-purple-600/30 transition-all text-center inline-block"
              >
                Get Started
              </a>
              <a
                href="/quiz"
                className="w-full sm:w-auto bg-yellow-400 text-sm shadow-lg shadow-yellow-600/30 text-gray-900 px-8 py-3.5 rounded-2xl font-bold hover:bg-yellow-300 transition-all text-center inline-block border-2 border-yellow-300"
              >
                View Leaderboard
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-[45%] w-full flex flex-col justify-center items-center p-8 relative group">
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
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="relative z-10"
            >
              <Image
                src={Logo}
                alt="Logo Interaktif"
                priority
                width={500}
                height={500}
                className="w-[300px] h-[300px] md:w-[480px] md:h-[480px] object-contain drop-shadow-[0_20px_50px_rgba(79,70,229,0.5)] transition-all duration-700 hover:scale-105 hover:-translate-y-2"
              />
            </motion.div>
          </motion.div>
        </div>

        <div id="categories" className="w-full max-w-5xl flex justify-center md:justify-start mt-24 scroll-mt-24">
          <h1 className="text-3xl font-extrabold tracking-tight lilita-one-regular text-white text-center md:text-left px-4">
            Explore Our Quiz Categories
          </h1>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl w-full flex flex-col md:flex-row bg-yellow-300 rounded-[2.5rem] mt-8 p-8 md:p-12 items-center gap-6 md:gap-8 shadow-xl shadow-purple-900/10 mx-4 md:mx-0">
          <div className="flex flex-col md:w-[40%] w-full items-center md:items-start text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lilita-one-regular font-extrabold tracking-tight leading-tight">
              Start Your Quiz Adventure
            </h1>
          </div>
          <div className="md:w-[60%] w-full flex flex-col items-center md:items-start text-center md:text-left mt-2 md:mt-0">
            <p className="text-sm md:text-base mb-6 leading-relaxed font-medium text-yellow-950/80">
              We provide a wide range of topics from blockchain basics, crypto investments, to Web3 development. Choose your favorite category and earn amazing rewards after completing the quizzes!
            </p>
            <a
              href="/quiz"
              className="w-full sm:w-fit bg-purple-600 text-sm rounded-2xl text-white px-8 py-3.5 font-bold hover:bg-purple-700 shadow-lg shadow-purple-600/30 transition-all text-center"
            >
              Start Quiz Now
            </a>
          </div>
        </motion.div>

        <div id="milestones" className="w-full max-w-5xl flex flex-col items-center md:items-start justify-start mt-24 gap-3 scroll-mt-24 px-4 text-center md:text-left">
          <h1 className="text-3xl font-extrabold lilita-one-regular tracking-tight text-white">
            Our Milestones
          </h1>
          <p className="text-sm md:text-base text-cyan-200/80 leading-relaxed max-w-3xl">
            Since its launch, QuizWeb3 has become the top-choice blockchain education platform. We are dedicated to continuously sharing Web3 knowledge while providing real appreciation in the form of crypto assets to our enthusiastic community.
          </p>
        </div>


        <div className="max-w-5xl w-full flex flex-row mt-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } } }}
              whileHover={{ scale: 1.05, y: -8, boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.1)" }}
              className="flex flex-col bg-white border border-gray-100 p-6 shadow-sm rounded-2xl transition-all duration-300">
              <span className="text-gray-500 font-medium text-xs uppercase tracking-wider mb-2">
                Total Users
              </span>
              <span className="text-3xl font-extrabold text-blue-600">
                150,000+
              </span>
            </motion.div>

            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-col bg-white border border-gray-100 p-6 shadow-sm rounded-2xl transition-all hover:shadow-md hover:-translate-y-1">
              <span className="text-gray-500 font-medium text-xs uppercase tracking-wider mb-2">
                Quizzes Finished
              </span>
              <span className="text-3xl font-extrabold text-purple-600">
                480,000+
              </span>
            </motion.div>

            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-col bg-white border border-gray-100 p-6 shadow-sm rounded-2xl transition-all hover:shadow-md hover:-translate-y-1">
              <span className="text-gray-500 font-medium text-xs uppercase tracking-wider mb-2">
                Prizes Awarded
              </span>
              <span className="text-3xl font-extrabold text-green-600">
                Rp 500M+
              </span>
            </motion.div>

            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-col bg-white border border-gray-100 p-6 shadow-sm rounded-2xl transition-all hover:shadow-md hover:-translate-y-1">
              <span className="text-gray-500 font-medium text-xs uppercase tracking-wider mb-2">
                Total Funding
              </span>
              <span className="text-3xl font-extrabold text-indigo-600">
                $2.5M+
              </span>
            </motion.div>
          </motion.div>
        </div>

        <div className="w-full max-w-5xl flex justify-center md:justify-start mt-28 md:mt-36">
          <h1 className="text-3xl font-extrabold tracking-tight lilita-one-regular text-white px-4 text-center md:text-left">
            Prove Your Skills!
          </h1>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl w-full flex flex-col md:flex-row text-gray-900 items-center gap-10 mt-10 px-4 group">
          {/* Bagian Kiri: Gambar/Logo Minimalis */}
          <div className="flex flex-col md:w-[40%] w-full items-center justify-center">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            >
              <Image
                src={Logo2}
                alt="Token Rewards"
                priority
                width={380}
                height={380}
                className="w-full max-w-[260px] md:max-w-full h-auto object-contain transition-transform duration-700 hover:scale-110 hover:rotate-2"
              />
            </motion.div>
          </div>

          {/* Bagian Kanan: Konten Teks & Tombol Aksi */}
          <div className="md:w-[60%] w-full flex flex-col items-center md:items-start text-center md:text-left">

            <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight mb-4 text-white">
              Prove Your Skills, <br className="hidden md:block" />
              Claim Crypto Assets
            </h2>

            <p className="text-sm md:text-base text-gray-300 mb-8 leading-relaxed font-medium">
              Showcase your expertise in the Web3 space! Complete our interactive quizzes with excellent results. Every user who successfully achieves a minimum score of <span className="text-yellow-400 font-bold">80% or more</span> is entitled to receive an Asset Token distribution directly to their digital wallet as a reward for their knowledge.
            </p>

            <a
              href="/quiz"
              className="group/btn flex items-center justify-center gap-2 w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-sm rounded-2xl text-white px-8 py-3.5 font-bold transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-purple-600/30 active:translate-y-0 text-center"
            >
              <span>Start Quiz Adventure</span>
              <svg xmlns="http://w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </motion.div>


        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl w-full flex flex-col md:flex-row text-white items-center gap-10 mt-24 px-4 group">
          {/* Bagian Kiri: Konten Teks & Tombol Aksi */}
          <div className="md:w-[60%] w-full flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1 mt-6 md:mt-0">

            <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight mb-4 lilita-one-regular">
              Finish the Quiz, <br className="hidden md:block" />
              Get a Surprise Reward
            </h2>

            <p className="text-sm md:text-base text-gray-300 mb-8 leading-relaxed font-medium">
              Test your knowledge now! Once you successfully complete the quiz, our smart system will select a <span className="text-purple-400 font-bold">Random Reward</span> transparently. The surprise token or digital asset reward will be automatically transferred to your connected digital wallet.
            </p>

            <a
              href="/quiz"
              className="group/btn flex items-center justify-center gap-2 w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-sm rounded-2xl text-white px-8 py-3.5 font-bold transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-purple-600/30 active:translate-y-0 text-center"
            >
              <span>Go for started quiz</span>
              <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Bagian Kanan: Gambar/Logo Tanpa Card */}
          <div className="flex flex-col md:w-[40%] w-full items-center justify-center order-1 md:order-2">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            >
              <Image
                src={Logo3}
                alt="Interactive Rewards"
                priority
                width={500}
                height={500}
                className="w-full max-w-[280px] md:max-w-full h-auto object-contain z-10 drop-shadow-[0_20px_50px_rgba(147,51,234,0.4)] transition-all duration-700 hover:scale-110 hover:-translate-y-2 hover:-rotate-2"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          id="subscribe"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8 mt-28 px-4 py-12 border-t border-b border-gray-800/50 scroll-mt-24">

          {/* Sisi Kiri: Teks Ajakan */}
          <div className="flex flex-col items-start text-left max-w-md">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white lilita-one-regular mb-2">
              Never Miss an Airdrop
            </h2>
            <p className="text-sm text-gray-200 leading-relaxed">
              Subscribe to our newsletter to get updates on new quizzes, new token reward launches, and weekly tournaments.
            </p>
          </div>

          {/* Sisi Kanan: Input Form */}
          <form className="w-full md:w-auto flex-1 max-w-md flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder="Enter your email..."
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
        </motion.div>
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
