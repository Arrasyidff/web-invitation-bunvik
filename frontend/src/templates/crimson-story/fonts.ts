import { Amiri, Great_Vibes, Jost, Playfair_Display } from "next/font/google";

/** Sans serif untuk teks isi; menggantikan Cormorant Garamond (font global) di template ini. */
export const sansFont = Jost({
  variable: "--font-story-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

/** Font khusus template crimson-story; dipasang lewat className di root template. */
export const arabicFont = Amiri({
  variable: "--font-story-arabic",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const scriptFont = Great_Vibes({
  variable: "--font-story-script",
  subsets: ["latin"],
  weight: "400",
});

/** Serif editorial untuk judul bab dan angka, seperti halaman buku. */
export const displayFont = Playfair_Display({
  variable: "--font-story-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});
