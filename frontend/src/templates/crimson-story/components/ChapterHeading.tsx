import type { StoryChapter } from "@/templates/crimson-story/content";

interface ChapterHeadingProps {
  chapter: StoryChapter;
  /** "light" untuk dipakai di atas latar merah marun. */
  tone?: "dark" | "light";
  /** false bila kalimat pembuka bab ditampilkan sendiri oleh section. */
  isLeadVisible?: boolean;
}

/** Pembuka bab: penanda bab, judul naratif, nama section, dan satu kalimat pembuka. */
export function ChapterHeading({ chapter, tone = "dark", isLeadVisible = true }: ChapterHeadingProps) {
  const isLight = tone === "light";

  return (
    <header className="text-center">
      <p
        className={`flex items-center justify-center gap-3 text-[0.75rem] font-semibold uppercase tracking-[0.4em]! ${
          isLight ? "text-petal" : "text-antique"
        }`}
      >
        <span aria-hidden="true" className="h-px w-8 bg-current opacity-70" />
        {chapter.label}
        <span aria-hidden="true" className="h-px w-8 bg-current opacity-70" />
      </p>

      <h2
        className={`mt-4 font-(family-name:--font-story-display) text-[2.5rem] italic leading-[1.1]! text-balance ${
          isLight ? "text-ivory" : "text-maroon"
        }`}
      >
        {chapter.title}
      </h2>

      <p
        className={`mt-3 text-[0.75rem] uppercase tracking-[0.3em]! ${isLight ? "text-ivory/60" : "text-ink/55"}`}
      >
        {chapter.caption}
      </p>

      {isLeadVisible && (
        <p
          className={`mx-auto mt-6 max-w-80 text-[1.0625rem] italic leading-relaxed! text-balance ${
            isLight ? "text-ivory/85" : "text-ink/80"
          }`}
        >
          {chapter.lead}
        </p>
      )}
    </header>
  );
}
