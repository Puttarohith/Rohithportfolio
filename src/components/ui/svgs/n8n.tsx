import * as React from "react";

export const N8n = ({
  className,
}: {
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="none"
    className={className}
  >
    <g
      stroke="#EA4B71"
      strokeWidth="28"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Left horizontal */}
      <path d="M70 256H190" />

      {/* Middle horizontal */}
      <path d="M230 256H285" />

      {/* Top branch */}
      <path d="M285 256C330 240 330 150 365 140H450" />

      {/* Bottom branch */}
      <path d="M285 256C330 272 330 362 365 372H450" />
    </g>

    {/* Nodes */}
    <circle cx="70" cy="256" r="42" stroke="#EA4B71" strokeWidth="28" />
    <circle cx="190" cy="256" r="42" stroke="#EA4B71" strokeWidth="28" />
    <circle cx="450" cy="140" r="42" stroke="#EA4B71" strokeWidth="28" />
    <circle cx="450" cy="372" r="42" stroke="#EA4B71" strokeWidth="28" />
  </svg>
);