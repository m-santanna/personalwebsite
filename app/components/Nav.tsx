import Menu from "../icons/Menu";
import DarkModeToggle from "./DarkModeToggle";

export default function Nav() {
  return (
    <nav className="flex justify-between items-center p-4 bg-super-strong border border-x-0 border-t-0 border-stone-800">
      <div className="text-super-weak first-letter:text-stone-200 text-2xl">
        Matheus.
      </div>
      <div>
        <DarkModeToggle className="pr-4 text-super-weak" />
        <Menu className="pr-2 text-super-weak" />
      </div>
    </nav>
  );
}
