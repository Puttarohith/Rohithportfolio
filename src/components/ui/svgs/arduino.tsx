import * as React from "react";

export const Arduino = ({
  className,
}: {
  className?: string;
}) => (
  <svg
    className={className}
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <circle cx="256" cy="256" r="256" fill="#00979D" />

    {/* Infinity */}
    <path
      d="M170 190
      C120 190 90 225 90 256
      C90 287 120 322 170 322
      C210 322 232 295 256 256
      C280 217 302 190 342 190
      C392 190 422 225 422 256
      C422 287 392 322 342 322
      C302 322 280 295 256 256
      C232 217 210 190 170 190Z"
      fill="none"
      stroke="white"
      strokeWidth="22"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Minus */}
    <rect
      x="130"
      y="248"
      width="48"
      height="16"
      rx="8"
      fill="white"
    />

    {/* Plus */}
    <rect
      x="334"
      y="248"
      width="48"
      height="16"
      rx="8"
      fill="white"
    />
    <rect
      x="350"
      y="232"
      width="16"
      height="48"
      rx="8"
      fill="white"
    />
  </svg>
);