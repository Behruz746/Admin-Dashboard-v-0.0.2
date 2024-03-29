import React from "react";

import { useStateContext } from "../contexts/contextProvider";

function Button({
  icon,
  bgColor,
  color,
  bgHoverColor,
  size,
  text,
  borderRadius,
  width,
}) {
  const { setIsClicked, initialState } = useStateContext();
  return (
    <button
      type="button"
      style={{
        backgroundColor: bgColor,
        color: color,
        borderRadius: borderRadius,
      }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
      onClick={() => setIsClicked(initialState)}
    >
      {icon} {text}
    </button>
  );
}

export default Button;
