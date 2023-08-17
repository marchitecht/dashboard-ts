import React from "react";

function Sun() {
  return (
    <svg width="24" height="24" className="sun-and-moon" viewBox="0 0 24 24">
      <circle
        cx="12"
        cy="12"
        r="6"
        fill="white"
        className="sun"
        mask="url(#moon-mask)"></circle>
      <g stroke="white" className="sun-beams">
        <path d="M12 1L12 3"></path>
        <path d="M12 21L12 23"></path>
        <path d="M4.22 4.22L5.64 5.64"></path>
        <path d="M18.36 18.36L19.78 19.78"></path>
        <path d="M1 12L3 12"></path>
        <path d="M21 12L23 12"></path>
        <path d="M4.22 19.78L5.64 18.36"></path>
        <path d="M18.36 5.64L19.78 4.22"></path>
      </g>
    </svg>
  );
}

export default Sun;
