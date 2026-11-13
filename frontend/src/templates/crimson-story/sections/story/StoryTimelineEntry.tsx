"use client";

import { motion } from "motion/react";
import { BOUNCY_SPRING } from "@/templates/crimson-story/components/storyMotion";
import { StoryReveal } from "@/templates/crimson-story/components/StoryReveal";
import { PhotoFrame } from "@/templates/crimson-story/components/PhotoFrame";
import type { LoveStoryChapter } from "@/templates/crimson-story/content";

interface StoryTimelineEntryProps {
  loveStoryChapter: LoveStoryChapter;
  /** Nomor urut mulai dari 1, ditampilkan sebagai angka Romawi. */
  chapterNumber: number;
}

const ROMAN_NUMERALS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

/** Satu titik di lini masa: nomor bagian, judul, cerita, dan (opsional) bingkai foto. */
export function StoryTimelineEntry({ loveStoryChapter, chapterNumber }: StoryTimelineEntryProps) {
  const romanNumeral = ROMAN_NUMERALS[chapterNumber - 1] ?? String(chapterNumber);
  const isEven = chapterNumber % 2 === 0;

  return (
    <li className="relative pb-12 pl-14">
      <motion.span
        aria-hidden="true"
        className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-petal text-[0.8125rem] font-medium text-maroon"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 1, margin: "0px 0px -20% 0px" }}
        transition={BOUNCY_SPRING}
      >
        {romanNumeral}
      </motion.span>

      <StoryReveal direction="right">
        <p className="text-[0.75rem] uppercase tracking-[0.3em]! text-antique">Bagian {romanNumeral}</p>
        <h3 className="mt-1 font-(family-name:--font-story-script) text-[2.125rem] leading-tight! text-maroon">
          {loveStoryChapter.title}
        </h3>

        {loveStoryChapter.hasPhotoFrame && (
          <PhotoFrame
            label={`Foto kenangan: ${loveStoryChapter.title}`}
            caption={loveStoryChapter.title}
            tiltDegrees={isEven ? 2 : -2}
            className={`mt-4 w-[86%] ${isEven ? "ml-auto" : ""}`}
          />
        )}

        <p className="mt-4 text-[1rem] leading-normal! text-ink/85">{loveStoryChapter.story}</p>
      </StoryReveal>
    </li>
  );
}
