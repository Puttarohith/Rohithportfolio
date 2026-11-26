import * as React from "react";

export const MachineLearning = ({
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
    {/* Chip */}
    <rect
      x="16"
      y="16"
      width="32"
      height="32"
      rx="4"
      fill="#2563EB"
    />

    {/* Neural Network Nodes */}
    <circle cx="24" cy="24" r="3" fill="white" />
    <circle cx="40" cy="24" r="3" fill="white" />
    <circle cx="24" cy="40" r="3" fill="white" />
    <circle cx="40" cy="40" r="3" fill="white" />

    {/* Connections */}
    <line x1="24" y1="24" x2="40" y2="24" stroke="white" strokeWidth="2" />
    <line x1="24" y1="24" x2="24" y2="40" stroke="white" strokeWidth="2" />
    <line x1="40" y1="24" x2="40" y2="40" stroke="white" strokeWidth="2" />
    <line x1="24" y1="40" x2="40" y2="40" stroke="white" strokeWidth="2" />
    <line x1="24" y1="24" x2="40" y2="40" stroke="white" strokeWidth="2" />
    <line x1="40" y1="24" x2="24" y2="40" stroke="white" strokeWidth="2" />

    {/* Chip Pins */}
    <rect x="8" y="22" width="6" height="2" fill="#2563EB" />
    <rect x="8" y="30" width="6" height="2" fill="#2563EB" />
    <rect x="8" y="38" width="6" height="2" fill="#2563EB" />

    <rect x="50" y="22" width="6" height="2" fill="#2563EB" />
    <rect x="50" y="30" width="6" height="2" fill="#2563EB" />
    <rect x="50" y="38" width="6" height="2" fill="#2563EB" />

    <rect x="22" y="8" width="2" height="6" fill="#2563EB" />
    <rect x="30" y="8" width="2" height="6" fill="#2563EB" />
    <rect x="38" y="8" width="2" height="6" fill="#2563EB" />

    <rect x="22" y="50" width="2" height="6" fill="#2563EB" />
    <rect x="30" y="50" width="2" height="6" fill="#2563EB" />
    <rect x="38" y="50" width="2" height="6" fill="#2563EB" />
  </svg>
);