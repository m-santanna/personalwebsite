import React from "react";

function ScrollDown(props: React.HTMLProps<SVGSVGElement>) {
  return (
    <div className="flex items-center justify-center text-stone-200 animate-bounce">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
        />
      </svg>
    </div>
  );
}

export default ScrollDown;
