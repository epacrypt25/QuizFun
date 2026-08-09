"use client";

import Link from "next/link";
import { ConnectButton } from "@/components/ui/ConnectButton";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex flex-col">
      {/* Navbar Minimal untuk Landing Page */}
      <nav className="w-full bg-white border-b border-[var(--color-border-light)] px-6">
        {/* Pembungkus utama agar dibatasi max-w-5xl dan otomatis berada di tengah */}
        <div className="grid grid-cols-3 items-center py-4 max-w-5xl mx-auto">
          {/* 1. Bagian Kiri: Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-extrabold tracking-tight text-[var(--color-text-primary)]">
              Edu<span className="text-[var(--color-primary)]">Fun</span>
            </div>
          </div>

          {/* 2. Bagian Tengah: Link / Menu */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="#home"
              className="text-sm font-medium text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors"
            >
              Home
            </a>
            <a
              href="#courses"
              className="text-sm font-medium text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors"
            >
              Courses
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors"
            >
              Contact
            </a>
          </div>

          {/* 3. Bagian Kanan: Tombol Login */}
          <div className="flex items-center justify-end">
            <ConnectButton />
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center py-20">
        <div className="badge badge-primary mb-6 animate-fade-in-up">
          <span className="h-2 w-2 rounded-full bg-[var(--color-primary)] animate-pulse"></span>
          Platform Edukasi Web3
        </div>

        <h1
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-[var(--color-text-primary)] mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          Belajar Cerdas,
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]">
            Dapatkan Hadiah!
          </span>
        </h1>

        <p
          className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Platform edukasi pertama di Indonesia yang memberikan reward Crypto
          untuk setiap pencapaian belajarmu. Mulai petualangan belajarmu
          sekarang!
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Link href="/login" className="btn-primary text-lg px-8 py-4">
            Mulai Belajar Sekarang
          </Link>
          <Link href="#features" className="btn-secondary text-lg px-8 py-4">
            Pelajari Lebih Lanjut
          </Link>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl w-full animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="flex flex-col items-center">
            <h3 className="text-4xl font-extrabold text-[var(--color-primary)] mb-2">
              10K+
            </h3>
            <p className="text-sm font-medium text-[var(--color-text-secondary)]">
              Siswa Aktif
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-4xl font-extrabold text-[var(--color-primary)] mb-2">
              500+
            </h3>
            <p className="text-sm font-medium text-[var(--color-text-secondary)]">
              Modul Belajar
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-4xl font-extrabold text-[var(--color-primary)] mb-2">
              50K
            </h3>
            <p className="text-sm font-medium text-[var(--color-text-secondary)]">
              RWA Didistribusikan
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-4xl font-extrabold text-[var(--color-primary)] mb-2">
              100%
            </h3>
            <p className="text-sm font-medium text-[var(--color-text-secondary)]">
              Aman & Transparan
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
