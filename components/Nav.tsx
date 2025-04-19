import Link from "next/link"

export default function Nav() {
  return (
    <header className="sticky top-0 z-10">
      <nav className="bg-navbar flex w-full justify-between items-center p-8 h-20 border border-x-0 border-t-0 border-stone-800 dark:border-gray-400">
        <Link
          href={"/"}
          className="text-super-weak text-2xl font-semibold hover:text-transparent bg-gradient-to-r from-amber-500 to-amber-800 bg-clip-text"
        >
          MSS.
        </Link>
        <div className="flex items-center gap-4 md:gap-8 text-super-weak font-extralight text-base sm:text-lg">
          <Link href={"/projects"} className="underline-animation">
            All Projects
          </Link>
          <Link href={"/resume"} className="underline-animation">
            Resume
          </Link>
        </div>
      </nav>
    </header>
  )
}
