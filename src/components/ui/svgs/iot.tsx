import * as React from "react";

export const IoT = ({
  className,
}: {
  className?: string;
}) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    fill="none"
  >
    {/* Center Hub */}
    <circle cx="128" cy="128" r="22" fill="#2563EB" />

    {/* Connected Devices */}
    <circle cx="64" cy="64" r="18" fill="#3B82F6" />
    <circle cx="192" cy="64" r="18" fill="#3B82F6" />
    <circle cx="64" cy="192" r="18" fill="#3B82F6" />
    <circle cx="192" cy="192" r="18" fill="#3B82F6" />

    {/* Connection Lines */}
    <line x1="80" y1="80" x2="112" y2="112" stroke="#2563EB" strokeWidth="8" />
    <line x1="176" y1="80" x2="144" y2="112" stroke="#2563EB" strokeWidth="8" />
    <line x1="80" y1="176" x2="112" y2="144" stroke="#2563EB" strokeWidth="8" />
    <line x1="176" y1="176" x2="144" y2="144" stroke="#2563EB" strokeWidth="8" />

    {/* WiFi Signal */}
    <path
      d="M112 48a24 24 0 0 1 32 0"
      stroke="#2563EB"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <path
      d="M104 38a40 40 0 0 1 48 0"
      stroke="#2563EB"
      strokeWidth="6"
      strokeLinecap="round"
    />
  </svg>
);