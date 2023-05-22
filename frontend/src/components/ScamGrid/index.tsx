import { Scam } from "@/interfaces/Scam";
import { Grid } from "../UI/Grid";
import { ScamCard } from "../ScamCard";

interface Props {
  scams: Scam[];
  className?: string;
}

export function ScamGrid({ scams, className }: Props) {
  return (
    <Grid className={className}>
      {scams.length === 0 ? (
        <div className="w-full col-span-3 lg:col-span-4 flex justify-center items-center">
          <h3 className="font-bold text-lg text-center px-2 lg:px-4">
            Fortunately, people are not scamming these days
          </h3>
        </div>
      ) : (
        scams.map((scam, id) => <ScamCard key={id} scam={scam} />)
      )}
    </Grid>
  );
}
