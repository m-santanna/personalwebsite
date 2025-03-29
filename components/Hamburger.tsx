"use client";
import { useState } from "react";
import Close from "./icons/Close";
import Menu from "./icons/Menu";

interface HamburgerProps {
  className?: string;
  MenuClass?: string;
  CloseClass?: string;
}

function Hamburger(props: HamburgerProps) {
  const [state, setState] = useState("menu");
  return (
    <div className={props.className}>
      {state === "menu" ? (
        <Menu
          className={props.MenuClass}
          onClick={() => {
            setState("close");
          }}
        />
      ) : (
        <Close
          className={props.CloseClass}
          onClick={() => {
            setState("menu");
          }}
        />
      )}
    </div>
  );
}

export default Hamburger;
