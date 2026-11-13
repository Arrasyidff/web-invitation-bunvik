"use client";

import { useEffect, useState } from "react";
import { STORY_CHAPTERS, type ChapterId } from "@/templates/crimson-story/content";
import { ChapterList } from "./ChapterList";

interface ChapterProgressBarProps {
  activeChapterId: ChapterId | null;
  onSelectChapter: (chapterId: ChapterId) => void;
}

/** Bilah atas (mobile), fixed karena `sticky` tidak jalan akibat overflow-x-hidden di body: bab yang sedang dibaca, progres baca, dan daftar isi. */
export function ChapterProgressBar({ activeChapterId, onSelectChapter }: ChapterProgressBarProps) {
  const [readingProgress, setReadingProgress] = useState(0);
  const [isTableOfContentsOpen, setIsTableOfContentsOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      setReadingProgress(scrollableHeight > 0 ? Math.min(1, window.scrollY / scrollableHeight) : 0);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeChapter = STORY_CHAPTERS.find((chapter) => chapter.id === activeChapterId) ?? STORY_CHAPTERS[0];

  function handleChapterSelect(chapterId: ChapterId) {
    setIsTableOfContentsOpen(false);
    onSelectChapter(chapterId);
  }

  return (
    <nav aria-label="Daftar isi" className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-107.5 lg:hidden">
      <div className="border-b border-antique/25 bg-white/90 backdrop-blur-md">
        <button
          type="button"
          onClick={() => setIsTableOfContentsOpen((isOpen) => !isOpen)}
          aria-expanded={isTableOfContentsOpen}
          className="flex w-full items-center justify-between gap-3 px-5 py-3 text-left"
        >
          <span className="flex min-w-0 items-baseline gap-2">
            <span className="shrink-0 text-[0.75rem] uppercase tracking-[0.2em] text-antique">
              {activeChapter.label}
            </span>
            <span className="truncate text-[0.9375rem] font-medium text-maroon">
              {activeChapter.title}
            </span>
          </span>
          <span className="flex shrink-0 items-center gap-1.5 text-[0.75rem] uppercase tracking-[0.2em] text-ink/60">
            Daftar Isi
            <svg
              viewBox="0 0 12 12"
              aria-hidden="true"
              className={`h-3 w-3 transition-transform ${isTableOfContentsOpen ? "rotate-180" : ""}`}
            >
              <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth={1.5} />
            </svg>
          </span>
        </button>

        <div className="h-0.5 bg-antique/15">
          <div className="h-full bg-maroon transition-[width] duration-150" style={{ width: `${readingProgress * 100}%` }} />
        </div>
      </div>

      {isTableOfContentsOpen && (
        <div className="absolute inset-x-0 top-full animate-fade-in border-b border-antique/25 bg-white px-5 py-3 shadow-[0_12px_24px_rgba(59,42,39,0.12)]">
          <ChapterList activeChapterId={activeChapterId} onSelectChapter={handleChapterSelect} />
        </div>
      )}
    </nav>
  );
}
