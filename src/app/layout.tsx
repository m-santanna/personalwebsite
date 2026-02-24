import type { Metadata } from "next";
import { Cascadia_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { DEFAULT_ACCENT, DEFAULT_THEME } from "@/lib/constants";

const cascadia = Cascadia_Mono({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: "MSS",
  description: "Matheus's portfolio website, with all the quirks and visual candy we like.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme={DEFAULT_THEME} data-accent={DEFAULT_ACCENT} className={cascadia.variable}>
      <body
        className="min-h-screen flex flex-col justify-between antialiased"
      >
        <Navbar />
        <main className="flex-1 w-full max-w-5xl mx-auto px-8 sm:px-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
