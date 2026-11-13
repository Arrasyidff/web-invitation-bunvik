import Image from "next/image";
import { StoryReveal } from "@/templates/crimson-story/components/StoryReveal";
import { ChapterHeading } from "@/templates/crimson-story/components/ChapterHeading";
import { SectionWaves } from "@/templates/crimson-story/components/SectionWaves";
import { ParallaxLayer } from "@/templates/crimson-story/components/ParallaxLayer";
import { FloatingPetal } from "@/templates/crimson-story/components/FloatingPetal";
import { getStoryChapter } from "@/templates/crimson-story/content";
import bouquetRoseBranch from "@/templates/crimson-story/assets/bouquet-rose-branch.webp";
import petalBlush1 from "@/templates/crimson-story/assets/petal-blush-1.webp";
import petalBlush4 from "@/templates/crimson-story/assets/petal-blush-4.webp";
import petalCrimson3 from "@/templates/crimson-story/assets/petal-crimson-3.webp";
import bouquetRosesWide from "@/templates/crimson-story/assets/bouquet-roses-wide.webp";
import { OpeningVerse } from "./OpeningVerse";
import { OpeningGreeting } from "./OpeningGreeting";

/** Prolog: ayat suci lalu salam pembuka; ditutup buket mawar sebagai pemisah ke Bab I (tanpa gelombang). */
export function OpeningSection() {
  return (
    <section id="opening" className="relative scroll-mt-12 overflow-hidden bg-white px-7 pb-10 pt-36">
      <SectionWaves isBottomWaveVisible={false}>
        <ParallaxLayer className="absolute -right-[6%] top-0 w-[58%]" distance={-30}>
          <Image src={bouquetRoseBranch} alt="" className="h-auto w-full -scale-x-100" />
        </ParallaxLayer>
        <FloatingPetal src={petalCrimson3} className="left-[8%] top-[10%] w-6" rotateDegrees={-25} />
        <FloatingPetal src={petalBlush1} className="left-[6%] top-[46%] w-7" rotateDegrees={30} delaySeconds={1.4} />
        <FloatingPetal src={petalBlush4} className="left-[8%] bottom-[16%] w-7" rotateDegrees={-15} delaySeconds={2.6} />
      </SectionWaves>

      <div className="relative">
        <ChapterHeading chapter={getStoryChapter("opening")} />
        <OpeningVerse />
        <OpeningGreeting />

        <StoryReveal direction="zoom" className="mt-16">
          <Image src={bouquetRosesWide} alt="" aria-hidden="true" className="mx-auto h-auto w-44" />
        </StoryReveal>
      </div>
    </section>
  );
}
