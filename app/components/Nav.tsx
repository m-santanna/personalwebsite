import Menu from "../icons/Menu";
import DarkModeToggle from "./DarkModeToggle";

export default function Nav() {
  return (
    <nav className="flex justify-between items-center p-4 bg-slate-600">
      <div className="text-blue-200 first-letter:text-blue-400 text-2xl">
        Matheus.
      </div>
      <div>
        <DarkModeToggle className="pr-4" />
        <Menu className="pr-2" />
      </div>
    </nav>
  );
}
