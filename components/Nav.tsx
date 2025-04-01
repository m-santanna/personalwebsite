import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

export default function Nav() {
  return (
    <header className="sticky top-0 z-10">
      <nav className="bg-navbar flex w-full justify-between items-center p-4 h-20 border border-x-0 border-t-0 border-stone-800 dark:border-gray-400">
        <Link
          href={"#HomePage"}
          className="text-super-weak first-letter:text-gray-800 dark:first-letter:text-stone-200 text-2xl"
        >
          MSS.
        </Link>
        <div className="flex gap-4">
          <Link href={"#About"} className="text-super-weak">
            About
          </Link>
          <Link href={"#Projects"} className="text-super-weak">
            Projects
          </Link>
          <Link href={"#Contacts"} className="text-super-weak">
            Contacts
          </Link>
          <DarkModeToggle className="text-super-weak" />
        </div>
      </nav>
    </header>
  );
}
