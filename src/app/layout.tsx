import type { Metadata } from "next";
import { Cascadia_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const cascadia = Cascadia_Mono({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: "MSS",
  description: "Matheus's portfolio website, with all the quirks and visual candy he likes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="mocha" data-accent="sapphire" className={cascadia.variable}>
      <body
        className="min-h-screen flex flex-col justify-between antialiased"
      >
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
