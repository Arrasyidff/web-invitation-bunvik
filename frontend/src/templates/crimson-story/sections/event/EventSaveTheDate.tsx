"use client";

import { motion } from "motion/react";
import { PRESS_INTERACTION } from "@/templates/crimson-story/components/storyMotion";
import { StoryReveal } from "@/templates/crimson-story/components/StoryReveal";
import { ChapterHeading } from "@/templates/crimson-story/components/ChapterHeading";
import { ArchFrame } from "@/templates/crimson-story/components/ArchFrame";
import { FloatingPetal } from "@/templates/crimson-story/components/FloatingPetal";
import {
  ADD_TO_CALENDAR_URL,
  COUNTDOWN_TARGET,
  WEDDING_DATE_PARTS,
  getStoryChapter,
} from "@/templates/crimson-story/content";
import petalBlush1 from "@/templates/crimson-story/assets/petal-blush-1.webp";
import petalBlush6 from "@/templates/crimson-story/assets/petal-blush-6.webp";
import { EventCountdown } from "./EventCountdown";

/**
 * Blok merah marun berbentuk lengkungan yang tumbuh dari halaman putih Bab II:
 * tanggal besar seperti halaman kalender, hitung mundur, dan simpan ke kalender.
 */
export function EventSaveTheDate() {
  return (
    <ArchFrame className="px-5 pb-24 pt-32 text-ivory">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <FloatingPetal src={petalBlush1} className="left-[7%] top-[14%] w-7" rotateDegrees={-25} />
        <FloatingPetal src={petalBlush6} className="right-[6%] top-[72%] w-8" rotateDegrees={40} delaySeconds={2} />
      </div>

      <div className="relative">
        <ChapterHeading chapter={getStoryChapter("event")} tone="light" />

        <StoryReveal direction="zoom" delay={100} className="mt-8 flex items-center justify-center gap-4">
          <p className="flex-1 text-right font-(family-name:--font-story-date) text-[1rem] font-medium uppercase tracking-[0.25em]! text-ivory/80">
            {WEDDING_DATE_PARTS.weekday}
          </p>
          <p className="border-x border-ivory/30 px-5 font-(family-name:--font-story-date) text-[6rem] font-light leading-[0.85]! lining-nums">
            {WEDDING_DATE_PARTS.day}
          </p>
          <p className="flex-1 text-left font-(family-name:--font-story-date) text-[1rem] font-medium uppercase leading-snug! tracking-[0.15em]! lining-nums text-ivory/80">
            {WEDDING_DATE_PARTS.monthYear}
          </p>
        </StoryReveal>

        <EventCountdown targetIsoDate={COUNTDOWN_TARGET} />

        <div className="mt-9 text-center">
          <motion.a
            {...PRESS_INTERACTION}
            href={ADD_TO_CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-ivory/15 px-6 py-2.5 text-[0.8125rem] uppercase tracking-[0.2em] text-ivory transition-colors hover:bg-white hover:text-maroon"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-4.5 w-4.5">
              <rect x="3.5" y="5" width="17" height="15" rx="2" />
              <path d="M3.5 10h17M8 3v4M16 3v4" />
            </svg>
            Simpan ke Kalender
          </motion.a>
        </div>
      </div>
    </ArchFrame>
  );
}
