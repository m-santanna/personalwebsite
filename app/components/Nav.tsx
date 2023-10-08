import Link from "next/link";
import Menu from "../icons/Menu";
import DarkModeToggle from "./DarkModeToggle";

export default function Nav() {
  return (
    <nav className="flex justify-between items-center p-4 bg-super-strong border border-x-0 border-t-0 border-stone-800">
      <Link
        href={"/"}
        className="text-super-weak first-letter:text-stone-200 text-2xl"
      >
        Matheus.
      </Link>
      <div className="flex">
        <DarkModeToggle className="pr-4 text-super-weak" />
        <Menu className="pr-2 block sm:hidden text-super-weak" />
      </div>
    </nav>
  );
}
