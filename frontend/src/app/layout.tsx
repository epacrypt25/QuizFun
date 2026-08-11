import { Providers } from "@/components/Providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EduFun Web3 | Learn & Earn",
  description:
    "Belajar jadi menyenangkan! Selesaikan kuis sekolah dan menangkan hadiah crypto.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts Preconnect & Stylesheet */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.className} min-h-screen antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
