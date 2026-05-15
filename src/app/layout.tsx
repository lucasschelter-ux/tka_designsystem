import type { Metadata } from "next";
import "../styles/tokens.css";

export const metadata: Metadata = {
  title: "thekey.ACADEMY — Online-Weiterbildung mit IHK-Zertifikat",
  description: "Finde deine Online-Weiterbildung und hol dir dein IHK-Zertifikat – flexibel, digital, in deinem Tempo.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
