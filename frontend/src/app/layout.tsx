import type { Metadata } from "next";
import { Cormorant_Garamond, Pinyon_Script } from "next/font/google";
import "./globals.css";
import backgroundImage from "@/app/assets/background.webp";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
});

const pinyonScript = Pinyon_Script({
  variable: "--font-pinyon",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Undangan Pernikahan Hendra & Vika",
  description: "Undangan pernikahan Sadiyono Mahendra Putra & Reyvika Nurhayati, 24 Mei 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${pinyonScript.variable} h-full antialiased overflow-x-hidden`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-cover bg-center bg-no-repeat bg-fixed overflow-x-hidden"
        style={{ backgroundImage: `url(${backgroundImage.src})` }}
      >
        {children}
      </body>
    </html>
  );
}
