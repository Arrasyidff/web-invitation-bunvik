import { Amiri, Cormorant_Garamond, DM_Sans, Great_Vibes } from "next/font/google";

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

/**
 * Tanggal: serif tegak yang anggun dengan angka lining (bukan script),
 * jadi tetap mudah dibaca. Selalu pakai bersama `lining-nums`, tanpa italic.
 */
export const dateFont = Cormorant_Garamond({
  variable: "--font-story-date",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: "normal",
});
