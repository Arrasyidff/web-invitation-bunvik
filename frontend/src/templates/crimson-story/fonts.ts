import { Amiri, DM_Sans, Great_Vibes } from "next/font/google";

/**
 * Font khusus template crimson-story; dipasang lewat className di root template.
 * Aturan: DM Sans untuk semua teks isi, Great Vibes hanya untuk header, tanpa italic.
 */

/** Teks isi; menggantikan Cormorant Garamond (font global) di template ini. */
export const sansFont = DM_Sans({
  variable: "--font-story-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

/** Header: judul bab, nama mempelai, salam, judul acara. */
export const scriptFont = Great_Vibes({
  variable: "--font-story-script",
  subsets: ["latin"],
  weight: "400",
});

/** Teks ayat Arab. */
export const arabicFont = Amiri({
  variable: "--font-story-arabic",
  subsets: ["arabic"],
  weight: ["400", "700"],
});
