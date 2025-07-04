import SpotlightCard from "@/src/blocks/Components/SpotlightCard/SpotlightCard";
import Image from "next/image";
import React from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface DevCardProps {
  imageName: StaticImport;
  devName: string;
  hoverContentHeading: string;
  hoverContentBody: string;
}
function DevCard({
  imageName,
  devName,
  hoverContentHeading,
  hoverContentBody,
}: DevCardProps) {
  const hoverContent: React.ReactNode = (
    <div className="inset-0 h-full w-full flex flex-col text-center justify-center items-center text-sm font-semibold">
      {hoverContentHeading}
      <p className="text-sm text-gray-500 pt-2 font-normal">{hoverContentBody}</p>
    </div>
  );
  return (
    <SpotlightCard hoverText={hoverContent}>
      <div className="absolute inset-x-0 top-2 h-full w-full flex flex-col text-center justify-center items-center">
        <Image
          src={imageName}
          alt={imageName.toString()}
          className="h-30 w-30 relative rounded-xl"
        />
        <h4 className="scroll-m-20 text-sm font-semibold tracking-tight p-1">
          {devName}
        </h4>
      </div>
    </SpotlightCard>
  );
}

export default DevCard;
