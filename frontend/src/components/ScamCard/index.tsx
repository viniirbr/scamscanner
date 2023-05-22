import { Scam } from "@/interfaces/Scam";
import { Card } from "../UI/Card";
import Image from "next/image";

interface Props {
  scam: Scam;
  className?: string;
}

export function ScamCard({ scam, className }: Props) {
  return (
    <Card className={className}>
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
    </Card>
  );
}
