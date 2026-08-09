export function Footer() {
  return (
    <footer className="relative z-10 mt-auto border-t border-white/10 bg-slate-950/80 py-8 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-12">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-bold tracking-tight text-slate-300">
            EduFun<span className="text-emerald-500">Web3</span>
          </span>
          <p className="text-sm text-slate-500">
            © 2026 EduFun. Learn and Earn securely on the blockchain.
          </p>
        </div>
        
        <div className="flex gap-6 text-sm font-medium text-slate-400">
          <a href="#" className="transition-colors hover:text-emerald-400">Smart Contracts</a>
          <a href="#" className="transition-colors hover:text-purple-400">Terms of Service</a>
          <a href="#" className="transition-colors hover:text-white">Support</a>
        </div>
      </div>
    </footer>
  )
}
