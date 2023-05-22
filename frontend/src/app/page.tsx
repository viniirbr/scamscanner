import { ScamGrid } from "@/components/ScamGrid";

export default function Home() {
  return (
    <section>
      <ScamGrid
        scams={Array(10).fill({
          name: "Visa and Immigration Scams",
          description:
            "Scammers may pose as immigration officials or lawyers and offer assistance with visa applications or residency permits. They may promise faster processing or guaranteed approval for a fee. Always verify the legitimacy of individuals or agencies before providing personal information or making any payments.",
          imageSrc: "https://via.placeholder.com/150",
        })}
      />
    </section>
  );
}
