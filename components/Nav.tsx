import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

export default function Nav() {
  return (
    <header className="sticky top-0 z-10">
      <nav className="bg-navbar flex w-full justify-between items-center p-4 h-20 border border-x-0 border-t-0 border-stone-800 dark:border-gray-400">
        <Link
          href={"#HomePage"}
          className="text-super-weak text-2xl font-semibold hover:text-transparent bg-gradient-to-r from-amber-500 to-amber-800 bg-clip-text"
        >
          MSS.
        </Link>
        <div className="flex items-center gap-4 text-super-weak font-extralight text-base sm:text-lg">
          <Link href={"#About"} className="underline-animation">
            About
          </Link>
          <Link href={"#Projects"} className="underline-animation">
            Projects
          </Link>
          <DarkModeToggle className="hover:animate-spin" />
        </div>
      </nav>
    </header>
  );
}
