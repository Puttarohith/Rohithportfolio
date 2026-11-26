import * as React from "react";

export const ESP32 = ({
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
    {/* Chip */}
    <rect
      x="48"
      y="48"
      width="160"
      height="160"
      rx="16"
      fill="#E7352C"
    />

    {/* ESP32 */}
    <text
      x="128"
      y="142"
      textAnchor="middle"
      fontSize="38"
      fontWeight="bold"
      fill="white"
      fontFamily="Arial, Helvetica, sans-serif"
    >
      ESP32
    </text>

    {/* Pins */}
    {[64, 96, 128, 160, 192].map((y) => (
      <React.Fragment key={y}>
        <rect x="24" y={y} width="16" height="6" fill="#666" />
        <rect x="216" y={y} width="16" height="6" fill="#666" />
      </React.Fragment>
    ))}

    {[64, 96, 128, 160, 192].map((x) => (
      <React.Fragment key={x}>
        <rect x={x} y="24" width="6" height="16" fill="#666" />
        <rect x={x} y="216" width="6" height="16" fill="#666" />
      </React.Fragment>
    ))}
  </svg>
);