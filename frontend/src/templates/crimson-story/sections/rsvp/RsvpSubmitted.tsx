"use client";

import { motion } from "motion/react";
import { OrnamentDivider } from "@/templates/crimson-story/components/OrnamentDivider";
import { HANDWRITING_VARIANTS, SOFT_SPRING } from "@/templates/crimson-story/components/storyMotion";

interface RsvpSubmittedProps {
  guestName: string;
}

/** Jumlah bintang kecil yang memercik dari tengah kartu saat konfirmasi diterima. */
const SPARKLE_COUNT = 10;
const SPARKLE_DISTANCE_PX = 120;

/** Percikan bintang kecil ke segala arah; murni hiasan, sekali jalan. */
function SparkleBurst() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-16">
      {Array.from({ length: SPARKLE_COUNT }, (_, i) => {
        const angle = (i / SPARKLE_COUNT) * Math.PI * 2;
        return (
          <motion.span
            key={i}
            className={`absolute text-[0.875rem] ${i % 2 === 0 ? "text-maroon" : "text-antique"}`}
            initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
            animate={{
              x: Math.cos(angle) * SPARKLE_DISTANCE_PX,
              y: Math.sin(angle) * SPARKLE_DISTANCE_PX * 0.6,
              scale: [0, 1.2, 0.6],
              opacity: [1, 1, 0],
            }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
          >
            ✦
          </motion.span>
        );
      })}
    </div>
  );
}

/** Tampilan setelah RSVP terkirim: nama tamu "tertulis" di cerita, diiringi percikan bintang. */
export function RsvpSubmitted({ guestName }: RsvpSubmittedProps) {
  return (
    <motion.div
      role="status"
      className="relative rounded-3xl bg-white px-6 py-10 text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={SOFT_SPRING}
    >
      <SparkleBurst />
      <p className="text-[0.75rem] uppercase tracking-[0.35em]! text-antique">Konfirmasi Diterima</p>
      <motion.p
        variants={HANDWRITING_VARIANTS}
        initial="hidden"
        animate="visible"
        className="mt-3 font-(family-name:--font-story-script) text-[2.5rem] leading-tight! text-maroon"
      >
        Terima kasih, {guestName}
      </motion.p>
      <OrnamentDivider className="my-5 w-40" />
      <motion.p
        className="text-[1rem] leading-normal! text-ink/75"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        Namamu kini tertulis di cerita kami.
      </motion.p>
    </motion.div>
  );
}
