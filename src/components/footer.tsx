import { GITHUB_PROFILE_URL, LINKEDIN_PROFILE_URL, INSTAGRAM_PROFILE_URL } from "@/lib/constants";
import { Github, Instagram, LinkedIn } from "@/components/logos";
import Link from "next/link";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-10 mt-20 relative overflow-hidden">
      <div className="mx-3 sm:mx-30 flex flex-col items-center gap-8 relative">
        <div className="flex gap-8 items-center">
          <Link
            href={GITHUB_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-110 hover:drop-shadow-[0_0_8px_var(--accent)]"
            aria-label="GitHub"
          >
            <Github className="size-6 bg-black rounded-full" />
          </Link>
          <Link
            href={LINKEDIN_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-110 hover:drop-shadow-[0_0_8px_var(--accent)]"
            aria-label="LinkedIn"
          >
            <LinkedIn className="size-6" />
          </Link>
          <Link
            href={INSTAGRAM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-110 hover:drop-shadow-[0_0_8px_var(--accent)]"
            aria-label="Instagram"
          >
            <Instagram className="size-6" />
          </Link>
        </div>

        <p className="flex gap-2 text-sm font-mono">
          [<span>git commit -m &quot;feat: added footer&quot;</span>]
        </p>

        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-mono text-foreground/50 flex-wrap justify-center">
          <span>© {currentYear}</span>
          <span className="size-1 bg-accent/30 rounded-full" />
          <span className="text-foreground/60">Matheus S. Sant&apos;Anna</span>
          <span className="size-1 bg-accent/30 rounded-full" />
          <div className="flex gap-4">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Resume</a>
            <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
