"use client";

import { useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { STORY_CHAPTERS, type ChapterId } from "@/templates/crimson-story/content";
import { ChapterList } from "./ChapterList";
import { STORY_EASE } from "./storyMotion";

interface ChapterProgressBarProps {
  activeChapterId: ChapterId | null;
  onSelectChapter: (chapterId: ChapterId) => void;
}

/** Bilah atas (mobile), fixed karena `sticky` tidak jalan akibat overflow-x-hidden di body: bab yang sedang dibaca, progres baca, dan daftar isi. */
export function ChapterProgressBar({ activeChapterId, onSelectChapter }: ChapterProgressBarProps) {
  const [isTableOfContentsOpen, setIsTableOfContentsOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const smoothReadingProgress = useSpring(scrollYProgress, { stiffness: 140, damping: 26, restDelta: 0.001 });

  const activeChapter = STORY_CHAPTERS.find((chapter) => chapter.id === activeChapterId) ?? STORY_CHAPTERS[0];

  function handleChapterSelect(chapterId: ChapterId) {
    setIsTableOfContentsOpen(false);
    onSelectChapter(chapterId);
  }

  return (
    <motion.nav
      aria-label="Daftar isi"
      className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-107.5 lg:hidden"
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      // Tunggu sampul selesai dibalik (±0.9 dtk) sebelum bilah turun.
      transition={{ duration: 0.6, ease: STORY_EASE, delay: 1.1 }}
    >
      <div className="bg-white/90 backdrop-blur-md">
        <button
          type="button"
          onClick={() => setIsTableOfContentsOpen((isOpen) => !isOpen)}
          aria-expanded={isTableOfContentsOpen}
          className="flex w-full items-center justify-between gap-3 overflow-hidden px-5 py-3 text-left"
        >
          {/* Nama bab bergeser naik setiap kali pembaca pindah bab. */}
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={activeChapter.id}
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -18, opacity: 0 }}
              transition={{ duration: 0.3, ease: STORY_EASE }}
              className="flex min-w-0 items-baseline gap-2"
            >
              <span className="shrink-0 text-[0.75rem] uppercase tracking-[0.2em] text-antique">
                {activeChapter.label}
              </span>
              <span className="truncate text-[0.9375rem] font-medium text-maroon">{activeChapter.title}</span>
            </motion.span>
          </AnimatePresence>
          <span className="flex shrink-0 items-center gap-1.5 text-[0.75rem] uppercase tracking-[0.2em] text-ink/60">
            Daftar Isi
            <motion.svg
              viewBox="0 0 12 12"
              aria-hidden="true"
              className="h-3 w-3"
              animate={{ rotate: isTableOfContentsOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: STORY_EASE }}
            >
              <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth={1.5} />
            </motion.svg>
          </span>
        </button>

        <div className="h-0.5 bg-antique/15">
          <motion.div className="h-full origin-left bg-maroon" style={{ scaleX: smoothReadingProgress }} />
        </div>
      </div>

      <AnimatePresence>
        {isTableOfContentsOpen && (
          <motion.div
            className="absolute inset-x-0 top-full overflow-hidden bg-white px-5"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: STORY_EASE }}
          >
            <div className="py-3">
              <ChapterList activeChapterId={activeChapterId} onSelectChapter={handleChapterSelect} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
