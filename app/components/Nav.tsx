import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

export default function Nav() {
  return (
    <nav className="flex w-full justify-between items-center p-4 h-20 bg-strong border border-x-0 border-t-0 border-stone-800 dark:border-gray-400">
      <Link
        href={"#HomePage"}
        className="text-super-weak first-letter:text-gray-800 dark:first-letter:text-stone-200 text-2xl"
      >
        Matheus.
      </Link>
      <div className="flex">
        <div className="hidden sm:block">
          <Link href={"#About"} className="pr-4 text-super-weak">
            About
          </Link>
          <Link href={"#Projects"} className="pr-4 text-super-weak">
            Projects
          </Link>
          <Link href={"#Contacts"} className="pr-4 text-super-weak">
            Contacts
          </Link>
        </div>
        <DarkModeToggle className="pr-4 text-super-weak" />
      </div>
    </nav>
  );
}
