"use client";
import Sun from "../icons/Sun";
import Moon from "../icons/Moon";
import { useState } from "react";

interface DarkModeToggleProps {
  className?: string;
}

function DarkModeToggle(props: DarkModeToggleProps) {
  const [theme, setTheme] = useState("Sun");
  return (
    <button
      className={props.className}
      onClick={() => {
        theme === "Sun" ? setTheme("Moon") : setTheme("Sun");
      }}
    >
      {theme === "Sun" ? <Sun /> : <Moon />}
    </button>
  );
}

export default DarkModeToggle;
