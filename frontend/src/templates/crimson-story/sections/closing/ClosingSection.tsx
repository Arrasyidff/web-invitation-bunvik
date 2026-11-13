import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ChapterHeading } from "@/templates/crimson-story/components/ChapterHeading";
import { OrnamentDivider } from "@/templates/crimson-story/components/OrnamentDivider";
import { BRIDE, CLOSING_MESSAGE, CLOSING_SALAM, GROOM, getStoryChapter } from "@/templates/crimson-story/content";
import bouquetCrimsonCorner from "@/templates/crimson-story/assets/bouquet-crimson-corner.webp";
import roseCrimsonStem from "@/templates/crimson-story/assets/rose-crimson-stem.webp";

/** Epilog: ucapan terima kasih dan salam penutup, seperti halaman terakhir buku. */
export function ClosingSection() {
  return (
    <section id="closing" className="relative scroll-mt-12 overflow-hidden bg-maroon px-7 pb-28 pt-24 text-center text-ivory">
      <Image
        src={bouquetCrimsonCorner}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 -right-16 h-auto w-[62%] -rotate-12 opacity-90"
      />

      <div className="relative">
        <ScrollReveal direction="bottom">
          <ChapterHeading chapter={getStoryChapter("closing")} tone="light" />
        </ScrollReveal>

        <ScrollReveal direction="bottom" delay={100}>
          <p className="mx-auto mt-6 max-w-88 text-[1rem] leading-normal! text-ivory/80">{CLOSING_MESSAGE}</p>
          <p className="mt-6 text-[0.9375rem] text-ivory/85">{CLOSING_SALAM}</p>

          <OrnamentDivider className="mt-10" colorClassName="text-petal/60" />

          <p className="mt-8 text-[0.75rem] uppercase tracking-[0.35em]! text-petal">Kami yang berbahagia</p>
          <p className="mt-2 font-(family-name:--font-story-script) text-[3.5rem] leading-[1.05]!">
            {BRIDE.nickname} &amp; {GROOM.nickname}
          </p>
          <Image src={roseCrimsonStem} alt="" aria-hidden="true" className="mx-auto mt-6 h-auto w-12 -rotate-12" />
        </ScrollReveal>
      </div>
    </section>
  );
}
