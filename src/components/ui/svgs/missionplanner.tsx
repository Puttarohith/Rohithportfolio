import * as React from "react";

export const MissionPlanner = ({
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
    {/* Map */}
    <path
      d="M10 14L22 10L42 18L54 14V50L42 54L22 46L10 50V14Z"
      fill="#4F46E5"
      opacity="0.15"
      stroke="#4F46E5"
      strokeWidth="2"
    />

    {/* Route */}
    <path
      d="M18 42C24 36 26 24 36 22C42 20 46 28 48 34"
      stroke="#4F46E5"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeDasharray="4 4"
    />

    {/* Waypoints */}
    <circle cx="18" cy="42" r="3.5" fill="#4F46E5" />
    <circle cx="36" cy="22" r="3.5" fill="#4F46E5" />
    <circle cx="48" cy="34" r="3.5" fill="#4F46E5" />

    {/* Drone */}
    <circle cx="48" cy="34" r="6" fill="#4F46E5" opacity="0.2" />
  </svg>
);