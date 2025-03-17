import { Geist, Geist_Mono } from "next/font/google";
import "../styles/app.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nitin Sharma Portfolio",
  description: "Website created using Next.js",
};

import { Pacifico, Caveat, Poiret_One, Manrope, Poppins } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400", variable: "--font-pacifico" });
const caveat = Caveat({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-caveat" });
const poiretOne = Poiret_One({ subsets: ["latin"], weight: "400", variable: "--font-poiret-one" });
const manrope = Manrope({ subsets: ["latin"], weight: ["200", "800"], variable: "--font-manrope" });
const poppins = Poppins({ subsets: ["latin"], weight: ["100", "900"], variable: "--font-poppins" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} ${caveat.variable} ${poiretOne.variable} ${manrope.variable} ${poppins.variable} antialiased`}
      >
        {children}
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aos@2.3.1/dist/aos.css" />
        <script async src="https://cdn.jsdelivr.net/npm/aos@2.3.1/dist/aos.js"></script>
      </body>
    </html>
  );
}
