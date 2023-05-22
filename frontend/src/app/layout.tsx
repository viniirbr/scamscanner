import "./globals.css";
import { Inter, Comfortaa } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const comfortaa = Comfortaa({ subsets: ["latin"], weight: "700" });

export const metadata = {
  title: "ScamScanner",
  description: "Get rid of scammers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} sm:px-3 md:px-6 xl:px-20`}>
        <header className="flex justify-center  items-center h-24 md:justify-start">
          <h1 className={`${comfortaa.className} font-bold text-3xl`}>
            ScamScanner
          </h1>
        </header>
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
