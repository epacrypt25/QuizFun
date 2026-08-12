"use client";

import { ChevronDown, ExternalLink, LogOut, Wallet } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";

export function ConnectButton() {
  const { address, isConnected } = useAccount();
  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Menutup dropdown saat klik di luar area
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Format alamat dompet (contoh: 0x1234...5678)
  const formattedAddress = address
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : "";

  // Tampilan ketika Wallet sudah TERHUBUNG (Connected)
  if (isConnected) {
    return (
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex items-center gap-2 overflow-hidden rounded-full border border-purple-500/30 bg-purple-950/30 px-4 py-2 text-xs font-medium text-purple-200 transition-all duration-300 hover:border-purple-500/60 hover:bg-purple-900/40"
        >
          {/* Indikator status aktif */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono tracking-wide">{formattedAddress}</span>
          <ChevronDown
            className={`h-3.5 w-3.5 text-purple-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {/* Dropdown Menu Saat Terhubung */}
        {isOpen && (
          <div className="absolute right-0 mt-3 w-48 origin-top-right overflow-hidden rounded-2xl border border-white/10 bg-slate-950/90 p-2 shadow-2xl backdrop-blur-2xl z-50">
            <button
              onClick={() => {
                disconnect();
                setIsOpen(false);
              }}
              className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left text-xs font-semibold text-rose-400 transition-all hover:bg-rose-500/10 hover:text-rose-300"
            >
              <LogOut className="h-4 w-4" />
              Disconnect Wallet
            </button>
          </div>
        )}
      </div>
    );
  }

  // Tampilan ketika Wallet BELUM TERHUBUNG (Disconnected)
  return (
    <div className="relative font-sans" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 rounded-full bg-red-400 px-5 py-2 text-xs font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/30 active:translate-y-0"
      >
        <Wallet className="h-4 w-4 text-white transition-transform group-hover:rotate-12 duration-300" />
        <span className="tracking-wide">Connect Wallet</span>
      </button>


      {/* Dropdown Pilihan Wallet */}
      {isOpen && (
        <div className="absolute right-0 mt-3 w-72 origin-top-right overflow-hidden rounded-3xl border border-white/10 bg-slate-950/90 p-3 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.6)] backdrop-blur-2xl z-50">
          {/* Header Dropdown */}
          <div className="flex items-center justify-between px-2 pt-1 pb-3 border-b border-white/5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Select Wallet
            </span>
            <span className="text-[10px] text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">
              Web3 Secure
            </span>
          </div>

          {/* List Connectors */}
          <div className="mt-2 space-y-1.5">
            {connectors.map((connector) => (
              <button
                key={connector.uid}
                onClick={() => {
                  connect({ connector });
                  setIsOpen(false);
                }}
                className="group flex w-full items-center justify-between rounded-2xl px-3 py-3 text-left transition-all duration-200 hover:bg-white/[0.04] focus:bg-blue-500/10 focus:outline-none"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/[0.03] border border-white/5 group-hover:scale-110 group-hover:border-blue-500/30 transition-all">
                    <Wallet className="h-3.5 w-3.5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">
                      {connector.name}
                    </div>
                    <div className="text-[10px] text-slate-500 flex items-center gap-1.5">
                      <span className="inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                      Ready to connect
                    </div>
                  </div>
                </div>

                <ExternalLink className="h-3.5 w-3.5 text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
