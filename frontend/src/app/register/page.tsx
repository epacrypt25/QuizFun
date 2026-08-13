"use client";

import { motion } from "framer-motion";

export default function RegisterSiswa() {
  return (
    <div className="relative min-h-screen bg-[#0B1120] flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-hidden">
      
      {/* Background Animated Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-600/20 blur-[120px] pointer-events-none" />

      {/* Kontainer Utama Form */}
      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 backdrop-blur-2xl shadow-2xl shadow-black/50">
          
          {/* Header Form */}
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-black tracking-tight text-white mb-2 lilita-one-regular">
              Complete Your Profile
            </h1>
            <p className="text-sm text-gray-400">
              Please fill in your valid NIK and details to start the quiz.
            </p>
          </div>

          {/* Form Input */}
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            
            {/* Input Nama Lengkap */}
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider pl-1">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="John Doe"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-purple-500 focus:bg-white/10 focus:ring-4 focus:ring-purple-500/20"
              />
            </div>

            {/* Input NIK */}
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider pl-1">
                National ID (NIK)
              </label>
              <input
                type="number"
                required
                placeholder="16-digit valid NIK..."
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-gray-600 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-purple-500 focus:bg-white/10 focus:ring-4 focus:ring-purple-500/20"
              />
            </div>

            {/* Input Email */}
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider pl-1">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-purple-500 focus:bg-white/10 focus:ring-4 focus:ring-purple-500/20"
              />
            </div>

            {/* Tombol Submit Register */}
            <button
              type="submit"
              className="w-full mt-4 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 px-6 py-3.5 text-sm font-bold text-white transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              Complete Registration
            </button>
            
          </form>
          
          <p className="mt-8 text-center text-xs text-gray-500">
            By registering, you agree to our <a href="#" className="text-purple-400 hover:text-purple-300 underline underline-offset-2">Terms of Service</a> & <a href="#" className="text-purple-400 hover:text-purple-300 underline underline-offset-2">Privacy Policy</a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
