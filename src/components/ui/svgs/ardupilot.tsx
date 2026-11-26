import Image from "next/image";
import ArduPilotLogo from "@/public/logos/ardupilot.png";

export const ArduPilot = () => (
  <Image
    src={ArduPilotLogo}
    alt="ArduPilot"
    width={24}
    height={24}
  />
);