import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

export default function Nav() {
  return (
    <nav className="flex justify-between items-center p-4 bg-super-strong border border-x-0 border-t-0 border-stone-800">
      <Link
        href={"#HomePage"}
        className="text-super-weak first-letter:text-gray-800 dark:first-letter:text-stone-200 text-2xl"
      >
        Matheus.
      </Link>
      <div className="flex">
        <Link href={"#About"} className="pr-4 text-super-weak">
          About
        </Link>
        <Link href={"#Projects"} className="pr-4 text-super-weak">
          Projects
        </Link>
        <Link href={"#Contacts"} className="pr-4 text-super-weak">
          Contacts
        </Link>
        <DarkModeToggle className="pr-4 text-super-weak" />
      </div>
    </nav>
  );
}
