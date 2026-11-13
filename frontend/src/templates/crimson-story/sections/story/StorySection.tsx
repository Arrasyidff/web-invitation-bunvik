import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ChapterHeading } from "@/templates/crimson-story/components/ChapterHeading";
import Image from "next/image";
import { SectionWaves } from "@/templates/crimson-story/components/SectionWaves";
import { LOVE_STORY, getStoryChapter } from "@/templates/crimson-story/content";
import branchBerryLong from "@/templates/crimson-story/assets/branch-berry-long.webp";
import { StoryTimelineEntry } from "./StoryTimelineEntry";

/** Bab II · Perjalanan: lini masa kisah cinta, ditutup penanda "bersambung". */
export function StorySection() {
  return (
    <section id="story" className="relative scroll-mt-12 overflow-hidden bg-white px-6 pb-36 pt-36">
      <SectionWaves>
        <Image src={branchBerryLong} alt="" className="absolute -left-6 top-10 h-auto w-40 opacity-80" />
      </SectionWaves>

      <div className="relative">
        <ScrollReveal direction="bottom">
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
      </div>
    </section>
  );
}
