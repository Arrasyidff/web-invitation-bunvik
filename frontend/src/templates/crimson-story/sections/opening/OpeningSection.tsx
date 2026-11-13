import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ChapterHeading } from "@/templates/crimson-story/components/ChapterHeading";
import { FloatingPetal } from "@/templates/crimson-story/components/FloatingPetal";
import { getStoryChapter } from "@/templates/crimson-story/content";
import bouquetRoseBranch from "@/templates/crimson-story/assets/bouquet-rose-branch.webp";
import petalBlush1 from "@/templates/crimson-story/assets/petal-blush-1.webp";
import petalBlush4 from "@/templates/crimson-story/assets/petal-blush-4.webp";
import petalCrimson3 from "@/templates/crimson-story/assets/petal-crimson-3.webp";
import { OpeningVerse } from "./OpeningVerse";
import { OpeningGreeting } from "./OpeningGreeting";

/** Prolog: ayat suci lalu salam pembuka. */
export function OpeningSection() {
  return (
    <section id="opening" className="relative scroll-mt-12 overflow-hidden bg-white px-7 pb-24 pt-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image src={bouquetRoseBranch} alt="" className="absolute -right-12 -top-6 h-auto w-[58%] -scale-x-100" />
        <FloatingPetal src={petalCrimson3} className="left-[8%] top-[10%] w-6" rotateDegrees={-25} />
        <FloatingPetal src={petalBlush1} className="left-[6%] top-[46%] w-7" rotateDegrees={30} delaySeconds={1.4} />
        <FloatingPetal src={petalBlush4} className="right-[7%] bottom-[12%] w-7" rotateDegrees={-15} delaySeconds={2.6} />
      </div>

      <div className="relative">
        <ScrollReveal direction="bottom">
          <ChapterHeading chapter={getStoryChapter("opening")} />
        </ScrollReveal>
        <OpeningVerse />
        <OpeningGreeting />
      </div>
    </section>
  );
}
