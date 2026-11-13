"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { BRIDE, GROOM, WEDDING_DATE_DOTTED } from "@/templates/crimson-story/content";
import { PRESS_INTERACTION, RISE_VARIANTS, STORY_EASE, createStaggerVariants } from "@/templates/crimson-story/components/storyMotion";
import bouquetRosesWide from "@/templates/crimson-story/assets/bouquet-roses-wide.webp";
import bouquetRoseBranch from "@/templates/crimson-story/assets/bouquet-rose-branch.webp";
import { CoverGuestCard } from "./CoverGuestCard";

interface CoverSectionProps {
  guestName?: string;
  onOpen: () => void;
}

const COVER_CONTENT_VARIANTS = createStaggerVariants(0.15, 0.2);
const POINTER_SPRING = { stiffness: 60, damping: 16 };

/**
 * Sampul buku: judul kisah, tanggal, nama tamu, dan tombol untuk mulai membaca.
 * Hiasan & judul sedikit miring mengikuti jari/kursor (efek 3D), dan saat dibuka
 * sampul berputar ke kiri seperti halaman buku (animasi `exit`, dijalankan AnimatePresence di root).
 */
export function CoverSection({ guestName, onOpen }: CoverSectionProps) {
  // Posisi kursor relatif terhadap tengah sampul: -0.5 … 0.5.
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothPointerX = useSpring(pointerX, POINTER_SPRING);
  const smoothPointerY = useSpring(pointerY, POINTER_SPRING);

  const titleRotateY = useTransform(smoothPointerX, [-0.5, 0.5], [-10, 10]);
  const titleRotateX = useTransform(smoothPointerY, [-0.5, 0.5], [8, -8]);
  const bouquetX = useTransform(smoothPointerX, [-0.5, 0.5], [-16, 16]);
  const bouquetY = useTransform(smoothPointerY, [-0.5, 0.5], [-10, 10]);
  const branchX = useTransform(smoothPointerX, [-0.5, 0.5], [14, -14]);
  const branchY = useTransform(smoothPointerY, [-0.5, 0.5], [10, -10]);

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    const coverRect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - coverRect.left) / coverRect.width - 0.5);
    pointerY.set((event.clientY - coverRect.top) / coverRect.height - 0.5);
  }

  function handlePointerLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <motion.section
      id="cover"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      exit={{ rotateY: -100, opacity: 0, transition: { duration: 0.9, ease: [0.6, 0.05, 0.4, 1] } }}
      style={{ originX: 0, transformPerspective: 1800 }}
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-maroon px-8 py-16 text-center text-ivory"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-6 -left-10 w-[62%]"
        style={{ x: branchX, y: branchY }}
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 0.9, rotate: 12 }}
        transition={{ duration: 1.4, ease: STORY_EASE }}
      >
        <Image src={bouquetRoseBranch} alt="" className="h-auto w-full" />
      </motion.div>

      <motion.div
        className="relative flex flex-col items-center"
        variants={COVER_CONTENT_VARIANTS}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={RISE_VARIANTS}>
          <motion.div style={{ x: bouquetX, y: bouquetY }}>
            <Image src={bouquetRosesWide} alt="" aria-hidden="true" priority className="h-auto w-52" />
          </motion.div>
        </motion.div>

        <motion.p variants={RISE_VARIANTS} className="mt-6 text-[0.75rem] uppercase tracking-[0.45em]! text-petal">
          Sebuah Kisah Tentang
        </motion.p>
        <motion.h1
          variants={RISE_VARIANTS}
          style={{ rotateX: titleRotateX, rotateY: titleRotateY, transformPerspective: 800 }}
          className="mt-4 font-(family-name:--font-story-script) text-[4.5rem] leading-[0.95]"
        >
          {BRIDE.nickname}
          <span className="block py-1 text-[2.75rem] text-petal">&amp;</span>
          {GROOM.nickname}
        </motion.h1>
        <motion.p variants={RISE_VARIANTS} className="mt-5 font-(family-name:--font-story-date) text-[1.5rem] font-light tracking-[0.3em]! lining-nums text-ivory/90">
          {WEDDING_DATE_DOTTED}
        </motion.p>

        <motion.div variants={RISE_VARIANTS}>
          <CoverGuestCard guestName={guestName} />
        </motion.div>

        <motion.div variants={RISE_VARIANTS} className="relative mt-8">
          {/* Riak lembut yang mengundang untuk ditekan. */}
          <motion.span
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-white"
            animate={{ scale: [1, 1.35], opacity: [0.35, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.button
            type="button"
            onClick={onOpen}
            {...PRESS_INTERACTION}
            className="relative inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3 text-[0.875rem] font-semibold uppercase tracking-[0.2em] text-maroon"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-5 w-5">
              <path d="M12 6.5C9.5 4.8 6 4.5 3 5.5v13c3-1 6.5-.7 9 1 2.5-1.7 6-2 9-1v-13c-3-1-6.5-.7-9 1z" />
              <path d="M12 6.5v13" />
            </svg>
            Buka Kisah Kami
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
