import { Amiri, Great_Vibes } from "next/font/google";

/** Font khusus template crimson-rose; dipasang lewat className di root template. */
export const arabicFont = Amiri({
  variable: "--font-crimson-arabic",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const scriptFont = Great_Vibes({
  variable: "--font-crimson-script",
  subsets: ["latin"],
  weight: "400",
});
