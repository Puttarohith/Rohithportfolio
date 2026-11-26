import * as React from "react";

export const OpenCV = ({
  className,
}: {
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    fill="none"
    className={className}
  >
    <circle cx="92" cy="72" r="44" fill="#E53935" opacity="0.9" />
    <circle cx="164" cy="72" r="44" fill="#43A047" opacity="0.9" />
    <circle cx="128" cy="156" r="44" fill="#1E88E5" opacity="0.9" />

    <path
      d="M92 72L164 72L128 156Z"
      fill="white"
    />
  </svg>
);