import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ChapterHeading } from "@/templates/crimson-story/components/ChapterHeading";
import { OrnamentDivider } from "@/templates/crimson-story/components/OrnamentDivider";
import { BRIDE, GROOM, getStoryChapter } from "@/templates/crimson-story/content";
import { CouplePortraits } from "./CouplePortraits";
import { CoupleProfile } from "./CoupleProfile";

/** Bab I · Dua Insan: sepasang potret lalu profil mempelai wanita dan pria. */
export function CoupleSection() {
  return (
    <section id="couple" className="relative border-t border-antique/20 scroll-mt-12 overflow-hidden bg-white px-7 pb-24 pt-24">
      <ScrollReveal direction="bottom">
        <ChapterHeading chapter={getStoryChapter("couple")} />
      </ScrollReveal>

      <CouplePortraits />

      <div className="mt-12 flex flex-col gap-10">
        <CoupleProfile member={BRIDE} revealDirection="left" />
        <OrnamentDivider />
        <CoupleProfile member={GROOM} revealDirection="right" />
      </div>
    </section>
  );
}
