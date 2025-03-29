"use client";
import Sun from "./icons/Sun";
import Moon from "./icons/Moon";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
interface DarkModeToggleProps {
  className?: string;
}

function DarkModeToggle(props: DarkModeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      className={props.className}
      onClick={() => {
        resolvedTheme === "dark" ? setTheme("light") : setTheme("dark");
      }}
    >
      {resolvedTheme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
}

export default DarkModeToggle;
