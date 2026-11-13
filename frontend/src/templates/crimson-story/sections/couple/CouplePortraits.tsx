import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PhotoFrame } from "@/templates/crimson-story/components/PhotoFrame";
import { BRIDE, GROOM } from "@/templates/crimson-story/content";
import gypsophilaSmall from "@/templates/crimson-story/assets/gypsophila-small.webp";

/** Dua bingkai potret yang saling bertumpuk, disatukan segel "&" di tengah. */
export function CouplePortraits() {
  return (
    <div className="relative mx-auto mt-12 h-72 max-w-80">
      <ScrollReveal direction="left" className="absolute left-0 top-0 w-[54%] -rotate-4">
        <PhotoFrame shape="arch" label={`Foto ${BRIDE.nickname}`} className="bg-ivory shadow-[0_14px_30px_rgba(59,42,39,0.16)]" />
      </ScrollReveal>
      <ScrollReveal direction="right" delay={120} className="absolute right-0 top-8 w-[54%] rotate-4">
        <PhotoFrame shape="arch" label={`Foto ${GROOM.nickname}`} className="bg-ivory shadow-[0_14px_30px_rgba(59,42,39,0.16)]" />
      </ScrollReveal>

      <span
        aria-hidden="true"
        className="absolute bottom-2 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-maroon font-(family-name:--font-story-script) text-[2.25rem] leading-none text-ivory shadow-[0_8px_18px_rgba(110,21,28,0.4)] ring-4 ring-maroon/25"
      >
        &amp;
      </span>
      <Image
        src={gypsophilaSmall}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-4 left-[58%] h-auto w-20 rotate-12"
      />
    </div>
  );
}
