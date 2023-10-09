interface CloseProps {
  className?: string;
  classNameImg?: string;
  onClick?: () => void;
}

function Close(props: CloseProps) {
  return (
    <button className={props.className} onClick={props.onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={"w-7 h-7" + props.classNameImg}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
}

export default Close;
