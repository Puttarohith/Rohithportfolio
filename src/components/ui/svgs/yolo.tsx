import * as React from "react";

export const Yolo = ({
  className,
}: {
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    className={className}
  >
    <circle cx="32" cy="32" r="28" fill="#111827" />
    <circle cx="24" cy="24" r="6" fill="#8B5CF6" />
    <circle cx="40" cy="24" r="6" fill="#06B6D4" />
    <circle cx="24" cy="40" r="6" fill="#22C55E" />
    <circle cx="40" cy="40" r="6" fill="#F97316" />

    <path
      d="M24 24L40 24M24 24L24 40M24 40L40 40M40 24L40 40"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);