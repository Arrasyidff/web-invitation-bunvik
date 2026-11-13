import { STORY_CHAPTERS, type ChapterId } from "@/templates/crimson-story/content";

interface ChapterListProps {
  activeChapterId: ChapterId | null;
  onSelectChapter: (chapterId: ChapterId) => void;
  /** "light" untuk latar merah marun (panel desktop). */
  tone?: "dark" | "light";
}

/** Daftar isi undangan; bab yang sedang dibaca ditandai. */
export function ChapterList({ activeChapterId, onSelectChapter, tone = "dark" }: ChapterListProps) {
  const isLight = tone === "light";

  return (
    <ol className="flex flex-col">
      {STORY_CHAPTERS.map((chapter) => {
        const isActive = chapter.id === activeChapterId;
        const activeClassName = isLight ? "text-ivory" : "text-maroon";
        const idleClassName = isLight ? "text-ivory/55 hover:text-ivory/85" : "text-ink/60 hover:text-ink";

        return (
          <li key={chapter.id}>
            <button
              type="button"
              onClick={() => onSelectChapter(chapter.id)}
              aria-current={isActive ? "true" : undefined}
              className={`flex w-full items-baseline gap-3 py-2 text-left transition-colors ${
                isActive ? activeClassName : idleClassName
              }`}
            >
              <span
                className={`w-24 shrink-0 text-[0.75rem] uppercase tracking-[0.2em] ${
                  isActive ? (isLight ? "text-petal" : "text-antique") : ""
                }`}
              >
                {chapter.label}
              </span>
              <span className="font-(family-name:--font-story-display) text-[1.0625rem] italic">{chapter.title}</span>
            </button>
          </li>
        );
      })}
    </ol>
  );
}
