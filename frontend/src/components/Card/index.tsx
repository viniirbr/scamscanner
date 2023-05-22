import { Scam } from "@/interfaces/Scam";
import Image from "next/image";
import { useState } from "react";

interface Props {
  scam: Scam;
}

export function Card({ scam }: Props) {
  return (
    <div className="w-full border-gray-200 rounded-md border-solid border-2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/3 hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-200 hover:shadow-lg">
      <Image
        src={scam.imageSrc}
        width={150}
        height={150}
        alt=""
        className="w-full"
      />
      <div className="p-4">
        <h1 className="text-center text-lg font-bold mb-2">{scam.name}</h1>
        <h3 className="text-justify">{scam.description}</h3>
      </div>
    </div>
  );
}
