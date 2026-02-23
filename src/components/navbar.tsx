"use client"

import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import ThemePicker from "./theme-picker"

function DynamicPathname({ path }: { path: string }) {
  const segments = path.split('/').filter((s) => s !== "");

  return (
    <div className="flex items-center gap-0.5 font-semibold text-base sm:text-lg">
      <Link href={'/'} className="hover:opacity-50 transition-all duration-500">
        <span className="text-accent">$HOME</span>
      </Link>
      <span>/</span>
      {segments.map((segment, index) => {
        const url = `/${segments.slice(0, index + 1).join('/')}`;
        const isLast = index === segments.length - 1;

        return (
          <div key={url} className="flex gap-0.5">
            {isLast ? (
              <span>{segment}</span>
            ) : (
              <>
                <Link
                  href={url}
                  className="hover:text-accent transition-all duration-500"
                >
                  {segment}
                </Link>
                <span>/</span>
              </>
            )}
          </div>
        );
      })}
      <span className="animate-pulse text-accent font-extrabold">_</span>
    </div>
  )
}

function Sidebar({ isOpen, toggleSidebar }: { isOpen: boolean, toggleSidebar: () => void }) {
  return (
    <>
      <div
        className={`fixed inset-0 min-h-screen min-w-screen bg-black/60 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleSidebar}
      />
      <div className={`fixed top-0 right-0 h-screen w-72 bg-background z-50 border-l border-white/5 animate-in fade-in transition-all duration-500 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col">
          <div className="flex justify-between p-6 border-b border-foreground/40">
            <h1 className="text-accent font-bold text-lg">Stuff...</h1>
            <button onClick={toggleSidebar} className="hover:text-red transition-all duration-300 cursor-pointer">
              <X className="size-4" />
            </button>
          </div>
          <nav className="p-6 flex sm:hidden flex-col gap-6 font-medium text-base border-b border-foreground/40">
            <Link href={'/about'} onClick={toggleSidebar} className="hover:text-accent transition-all duration-500">About</Link >
            <Link href={'/projects'} onClick={toggleSidebar} className="hover:text-accent transition-all duration-500">Projects</Link>
            <Link href={'/blog'} onClick={toggleSidebar} className="hover:text-accent transition-all duration-500">Blog</Link>
          </nav>
          <nav className="p-6 flex flex-col gap-6 font-medium text-base">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" onClick={toggleSidebar} className="hover:text-accent transition-all duration-500">Resume</a>
            <Link href={'/contact'} onClick={toggleSidebar} className="hover:text-accent transition-all duration-500">Contact</Link>
            <Link href={'/technologies'} onClick={toggleSidebar} className="hover:text-accent transition-all duration-500">Technologies</Link>
          </nav>
          <div className="mx-auto">
            <ThemePicker />
          </div>
        </div>
      </div>
    </>
  )
}

function UsefulLinks({ toggleSidebar }: { toggleSidebar: () => void }) {
  return (
    <>
      <div className="flex items-center sm:hidden gap-10 font-semibold text-base">
        <button onClick={toggleSidebar} className="hover:text-accent transition-all duration-500 cursor-pointer">
          <Menu className="size-5" />
        </button>
      </div>
      <div className="hidden sm:flex gap-10 font-semibold text-sm items-center">
        <Link href={'/about'} className="hover:text-accent transition-all duration-500">About</Link >
        <Link href={'/projects'} className="hover:text-accent transition-all duration-500">Projects</Link>
        <Link href={'/blog'} className="hover:text-accent transition-all duration-500">Blog</Link>
        <button onClick={toggleSidebar} className="hover:text-accent transition-all duration-500 cursor-pointer">
          Etc..
        </button>
      </div>
    </>
  )
}

function Navbar() {
  const path = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => setIsOpen(!isOpen)

  return (
    <header className="z-30 sticky top-0 bg-background/70 backdrop-blur-sm">
      <nav className="h-20 flex justify-between items-center px-8 sm:px-20">
        <DynamicPathname path={path} />
        <UsefulLinks toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      </nav>
    </header>
  )
}

export default Navbar
