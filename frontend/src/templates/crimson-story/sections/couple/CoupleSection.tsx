import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ChapterHeading } from "@/templates/crimson-story/components/ChapterHeading";
import { OrnamentDivider } from "@/templates/crimson-story/components/OrnamentDivider";
import { SectionWaves } from "@/templates/crimson-story/components/SectionWaves";
import { BRIDE, GROOM, getStoryChapter } from "@/templates/crimson-story/content";
import { CouplePortraits } from "./CouplePortraits";
import { CoupleProfile } from "./CoupleProfile";

/** Bab I · Dua Insan: sepasang potret lalu profil mempelai wanita dan pria. */
export function CoupleSection() {
  return (
    <section id="couple" className="relative scroll-mt-12 overflow-hidden bg-white px-7 pb-36 pt-12">
      {/* Batas atas sudah ditandai buket mawar di akhir Prolog, jadi tanpa gelombang atas. */}
      <SectionWaves isTopWaveVisible={false} />

      <div className="relative">
        <ScrollReveal direction="bottom">
          <ChapterHeading chapter={getStoryChapter("couple")} />
        </ScrollReveal>

        <CouplePortraits />

        <div className="mt-12 flex flex-col gap-10">
          <CoupleProfile member={BRIDE} revealDirection="left" />
          <OrnamentDivider />
          <CoupleProfile member={GROOM} revealDirection="right" />
        </div>
      </div>
    </section>
  );
}
