import * as React from "react";

export const Pytorch = ({
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
    <path
      d="M128 20
         C82 20 46 56 46 102
         C46 148 82 184 128 184
         C174 184 210 148 210 102"
      stroke="#EE4C2C"
      strokeWidth="18"
      strokeLinecap="round"
      fill="none"
    />
    <circle
      cx="128"
      cy="102"
      r="24"
      fill="#EE4C2C"
    />
    <circle
      cx="128"
      cy="36"
      r="12"
      fill="#EE4C2C"
    />
  </svg>
);