/**
 * Preset animasi (motion) bersama untuk template crimson-story,
 * supaya rasa gerak di semua bab seragam.
 */

import type { Transition, Variants } from "motion/react";

/** Pegas lembut untuk elemen yang muncul saat di-scroll. */
export const SOFT_SPRING: Transition = { type: "spring", stiffness: 80, damping: 18, mass: 0.9 };

/** Pegas memantul untuk elemen kecil yang "meletup" (titik lini masa, segel &). */
export const BOUNCY_SPRING: Transition = { type: "spring", stiffness: 260, damping: 15 };

/** Pegas cepat untuk respons tombol saat disentuh. */
export const PRESS_SPRING: Transition = { type: "spring", stiffness: 420, damping: 24 };

/** Kurva halus untuk animasi berbasis durasi. */
export const STORY_EASE: [number, number, number, number] = [0.65, 0, 0.35, 1];

/** Props siap pakai untuk tombol/link: sedikit membesar saat hover, mengecil saat ditekan. */
export const PRESS_INTERACTION = {
  whileHover: { scale: 1.04 },
  whileTap: { scale: 0.95 },
  transition: PRESS_SPRING,
} as const;

/**
 * Tulisan script tampak "ditulis tangan" dari kiri ke kanan.
 * Inset negatif memberi ruang untuk ekor huruf Great Vibes yang keluar dari kotak teks.
 * PENTING: jangan pasang `whileInView` di elemen yang memakai varian ini; pasang di
 * pembungkusnya. Elemen yang ter-clip selebar 0 tidak pernah dianggap terlihat, jadi tak pernah muncul.
 */
export const HANDWRITING_VARIANTS: Variants = {
  hidden: { clipPath: "inset(-40% 100% -40% -20%)" },
  visible: {
    clipPath: "inset(-40% -20% -40% -20%)",
    transition: { duration: 1.4, ease: STORY_EASE },
  },
};

/** Naik pelan sambil muncul; dipakai sebagai anak dari container yang ber-stagger. */
export const RISE_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: SOFT_SPRING },
};

/** Container yang memunculkan anak-anaknya bergiliran. */
export function createStaggerVariants(staggerSeconds: number, delaySeconds = 0): Variants {
  return {
    hidden: {},
    visible: { transition: { staggerChildren: staggerSeconds, delayChildren: delaySeconds } },
  };
}
