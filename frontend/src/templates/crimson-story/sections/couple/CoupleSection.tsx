import { ChapterHeading } from "@/templates/crimson-story/components/ChapterHeading";
import { OrnamentDivider } from "@/templates/crimson-story/components/OrnamentDivider";
import { BRIDE, GROOM, getStoryChapter } from "@/templates/crimson-story/content";
import { CouplePortraits } from "./CouplePortraits";
import { CoupleProfile } from "./CoupleProfile";

/** Bab I · Dua Insan: sepasang potret lalu profil mempelai wanita dan pria. */
export function CoupleSection() {
  return (
    <section id="couple" className="relative scroll-mt-12 bg-white px-7 pb-8 pt-12">
      {/* Menyambung dari Prolog (ditandai buket mawar) dan langsung mengalir ke Bab II. */}

      <div className="relative">
        <ChapterHeading chapter={getStoryChapter("couple")} />

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
