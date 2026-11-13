"use client";

import { motion, type Variants } from "motion/react";
import type { StoryChapter } from "@/templates/crimson-story/content";
import { HANDWRITING_VARIANTS, RISE_VARIANTS, STORY_EASE, createStaggerVariants } from "./storyMotion";

interface ChapterHeadingProps {
  chapter: StoryChapter;
  /** "light" untuk dipakai di atas latar merah marun. */
  tone?: "dark" | "light";
  /** false bila kalimat pembuka bab ditampilkan sendiri oleh section. */
  isLeadVisible?: boolean;
}

const HEADING_VARIANTS = createStaggerVariants(0.14);

/** Garis kecil di samping penanda bab, memanjang dari arah teks. */
const RULE_VARIANTS: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.8, ease: STORY_EASE } },
};

/** Pembuka bab: penanda bab, judul naratif (seperti ditulis tangan), nama section, dan satu kalimat pembuka. */
export function ChapterHeading({ chapter, tone = "dark", isLeadVisible = true }: ChapterHeadingProps) {
  const isLight = tone === "light";

  return (
    <motion.header
      className="text-center"
      variants={HEADING_VARIANTS}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.p
        variants={RISE_VARIANTS}
        className={`flex items-center justify-center gap-3 text-[0.75rem] font-semibold uppercase tracking-[0.4em]! ${
          isLight ? "text-petal" : "text-antique"
        }`}
      >
        <motion.span
          variants={RULE_VARIANTS}
          aria-hidden="true"
          className="h-px w-8 origin-right bg-current opacity-70"
        />
        {chapter.label}
        <motion.span variants={RULE_VARIANTS} aria-hidden="true" className="h-px w-8 origin-left bg-current opacity-70" />
      </motion.p>

      <motion.h2
        variants={HANDWRITING_VARIANTS}
        className={`mt-4 font-(family-name:--font-story-script) text-[3.25rem] leading-[1.1]! text-balance ${
          isLight ? "text-ivory" : "text-maroon"
        }`}
      >
        {chapter.title}
      </motion.h2>

      <motion.p
        variants={RISE_VARIANTS}
        className={`mt-3 text-[0.75rem] uppercase tracking-[0.3em]! ${isLight ? "text-ivory/60" : "text-ink/55"}`}
      >
        {chapter.caption}
      </motion.p>

      {isLeadVisible && (
        <motion.p
          variants={RISE_VARIANTS}
          className={`mx-auto mt-6 max-w-80 text-[1.0625rem] leading-normal! text-balance ${
            isLight ? "text-ivory/85" : "text-ink/80"
          }`}
        >
          {chapter.lead}
        </motion.p>
      )}
    </motion.header>
  );
}
