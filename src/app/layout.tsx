import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-sans' })

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
    <html lang="en" data-theme="mocha" data-accent="peach" className={jetbrainsMono.variable}>
      <body
        className="antialiased"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
