import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ChapterHeading } from "@/templates/crimson-story/components/ChapterHeading";
import { LOVE_STORY, getStoryChapter } from "@/templates/crimson-story/content";
import branchBerryLong from "@/templates/crimson-story/assets/branch-berry-long.webp";
import { StoryTimelineEntry } from "./StoryTimelineEntry";

/** Bab II · Perjalanan: lini masa kisah cinta, ditutup penanda "bersambung". */
export function StorySection() {
  return (
    <section id="story" className="relative border-t border-antique/20 scroll-mt-12 overflow-hidden bg-white px-6 pb-24 pt-24">
      <Image
        src={branchBerryLong}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 top-6 h-auto w-44 -scale-x-100 opacity-80"
      />

      <ScrollReveal direction="bottom" className="relative">
        <ChapterHeading chapter={getStoryChapter("story")} />
      </ScrollReveal>

      <ol className="relative mt-14">
        {/* Garis lini masa */}
        <span aria-hidden="true" className="absolute bottom-6 left-4.5 top-2 w-px bg-linear-to-b from-antique/60 via-maroon/30 to-transparent" />
        {LOVE_STORY.map((loveStoryChapter, i) => (
          <StoryTimelineEntry
            key={loveStoryChapter.title}
            loveStoryChapter={loveStoryChapter}
            chapterNumber={i + 1}
          />
        ))}
      </ol>

      <ScrollReveal direction="bottom" className="mt-4 text-center">
        <p className="text-[0.9375rem] tracking-wide text-ink/60">
          — bersambung di Bab III —
        </p>
      </ScrollReveal>
    </section>
  );
}
