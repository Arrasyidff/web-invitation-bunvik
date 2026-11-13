"use client";

import { motion } from "motion/react";
import { BOUNCY_SPRING, SOFT_SPRING } from "./storyMotion";

interface PhotoFrameProps {
  /** Teks pengganti untuk pembaca layar, mis. "Foto kenangan: Awal Pertemuan". */
  label: string;
  /** Tulisan tangan di bawah foto. */
  caption?: string;
  /** Kemiringan bingkai seperti polaroid yang ditempel; lurus saat disentuh/di-hover. */
  tiltDegrees?: number;
  className?: string;
}

function CameraIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.4} className="h-7 w-7">
      <path d="M4 8.5A1.5 1.5 0 015.5 7h2.2l1.5-2h5.6l1.5 2h2.2A1.5 1.5 0 0120 8.5v9a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 014 17.5z" />
      <circle cx="12" cy="13" r="3.4" />
    </svg>
  );
}

/** Bingkai foto kosong (placeholder) bertanda kamera; nanti diganti foto asli tanpa mengubah layout.
 * Saat muncul bingkai "jatuh" ke posisinya; saat disentuh ia diluruskan dan sedikit membesar. */
export function PhotoFrame({ label, caption, tiltDegrees = 0, className = "" }: PhotoFrameProps) {
  return (
    <motion.figure
      role="img"
      aria-label={`${label} (belum tersedia)`}
      className={`cursor-pointer ${className}`}
      initial={{ opacity: 0, y: 30, rotate: tiltDegrees * 4 }}
      whileInView={{ opacity: 1, y: 0, rotate: tiltDegrees, transition: SOFT_SPRING }}
      whileHover={{ rotate: 0, scale: 1.04, transition: BOUNCY_SPRING }}
      whileTap={{ rotate: 0, scale: 1.04, transition: BOUNCY_SPRING }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="flex aspect-4/3 w-full flex-col items-center justify-center gap-2 rounded-2xl bg-neutral-100 text-antique/80">
        <CameraIcon />
        <span className="text-[0.75rem] uppercase tracking-[0.3em]!">Foto</span>
      </div>
      {caption && (
        <figcaption className="mt-2 text-center font-(family-name:--font-story-script) text-[1.375rem] leading-none text-ink/75">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
}
