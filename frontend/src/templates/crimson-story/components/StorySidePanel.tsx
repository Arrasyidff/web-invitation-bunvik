"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { BRIDE, GROOM, WEDDING_DATE_DOTTED, type ChapterId } from "@/templates/crimson-story/content";
import bouquetRosesWide from "@/templates/crimson-story/assets/bouquet-roses-wide.webp";
import { ChapterList } from "./ChapterList";
import { OrnamentDivider } from "./OrnamentDivider";
import { RISE_VARIANTS, STORY_EASE, createStaggerVariants } from "./storyMotion";

interface StorySidePanelProps {
  activeChapterId: ChapterId | null;
  isInvitationOpen: boolean;
  onSelectChapter: (chapterId: ChapterId) => void;
}

const PANEL_VARIANTS = createStaggerVariants(0.12, 0.1);

/** Panel kiri (desktop), fixed agar tidak ikut ter-scroll: judul buku dan daftar isi yang mengikuti bab yang dibaca. */
export function StorySidePanel({ activeChapterId, isInvitationOpen, onSelectChapter }: StorySidePanelProps) {
  return (
    <aside className="fixed inset-y-0 left-0 right-107.5 hidden items-center justify-center overflow-y-auto px-10 py-10 text-ivory lg:flex">
      <motion.div className="w-full max-w-sm" variants={PANEL_VARIANTS} initial="hidden" animate="visible">
        <motion.div variants={RISE_VARIANTS}>
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
            <Image src={bouquetRosesWide} alt="" aria-hidden="true" className="mx-auto h-auto w-56 opacity-95" />
          </motion.div>
        </motion.div>

        <motion.p variants={RISE_VARIANTS} className="mt-6 text-center text-[0.75rem] uppercase tracking-[0.4em]! text-petal">
          Sebuah Kisah Tentang
        </motion.p>
        <motion.h1
          variants={RISE_VARIANTS}
          className="mt-3 text-center font-(family-name:--font-story-script) text-[4rem] leading-[1.05]"
        >
          {BRIDE.nickname} <span className="text-[2.75rem] text-petal">&amp;</span> {GROOM.nickname}
        </motion.h1>
        <motion.p variants={RISE_VARIANTS} className="mt-3 text-center font-(family-name:--font-story-date) text-[1.5rem] font-light tracking-[0.3em]! lining-nums text-ivory/85">
          {WEDDING_DATE_DOTTED}
        </motion.p>

        <motion.div variants={RISE_VARIANTS}>
          <OrnamentDivider className="mt-8" colorClassName="text-petal/60" />
        </motion.div>

        <AnimatePresence mode="wait">
          {isInvitationOpen ? (
            <motion.nav
              key="table-of-contents"
              aria-label="Daftar isi"
              className="mt-6"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: STORY_EASE }}
            >
              <p className="mb-2 text-[0.75rem] uppercase tracking-[0.3em] text-ivory/50">Daftar Isi</p>
              <ChapterList activeChapterId={activeChapterId} onSelectChapter={onSelectChapter} tone="light" />
            </motion.nav>
          ) : (
            <motion.p
              key="open-hint"
              className="mt-6 text-center text-[1rem] text-ivory/70"
              exit={{ opacity: 0, y: -8 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
            >
              Buka sampul di samping untuk mulai membaca.
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </aside>
  );
}
