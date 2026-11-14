import { StoryReveal } from "@/templates/crimson-story/components/StoryReveal";
import { ChapterHeading } from "@/templates/crimson-story/components/ChapterHeading";
import Image from "next/image";
import { ParallaxLayer } from "@/templates/crimson-story/components/ParallaxLayer";
import { getStoryChapter } from "@/templates/crimson-story/content";
import branchBerryLong from "@/templates/crimson-story/assets/branch-berry-long.webp";
import { StoryTimeline } from "./StoryTimeline";

/** Bab II · Perjalanan: lini masa kisah cinta di halaman putih yang sama dengan Bab I, ditutup penanda "bersambung". */
export function StorySection() {
  return (
    <section id="story" className="relative scroll-mt-12 overflow-hidden bg-white px-6 pb-4 pt-16">
      <ParallaxLayer className="absolute -left-6 top-0 w-40" distance={50}>
        <Image src={branchBerryLong} alt="" className="h-auto w-full opacity-80" />
      </ParallaxLayer>

      <div className="relative">
        <ChapterHeading chapter={getStoryChapter("story")} />

        <StoryTimeline />

        <StoryReveal direction="bottom" className="mt-4 text-center">
          <p className="text-[0.9375rem] tracking-wide text-ink/60">
            — bersambung di Bab III —
          </p>
        </StoryReveal>
      </div>
    </section>
  );
}
