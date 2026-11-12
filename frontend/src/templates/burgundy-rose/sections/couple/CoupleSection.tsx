import {
  GROOM_NAME,
  BRIDE_NAME,
  GROOM_FULL_NAME,
  BRIDE_FULL_NAME,
  GROOM_CHILD_ORDER,
  BRIDE_CHILD_ORDER,
  GROOM_PARENTS,
  BRIDE_PARENTS,
} from "@/lib/constants";
import groomPhoto from "@/app/assets/groom.webp";
import bridePhoto from "@/app/assets/bride.webp";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CoupleProfile } from "./CoupleProfile";

export function CoupleSection() {
  return (
    <section id="couple" className="px-6 pb-12 text-center">
      <div className="grid grid-cols-2 gap-4">
        <CoupleProfile
          fullName={GROOM_FULL_NAME}
          childOrder={GROOM_CHILD_ORDER}
          parents={GROOM_PARENTS}
          photoSrc={groomPhoto}
          revealDirection="left"
        />
        <CoupleProfile
          fullName={BRIDE_FULL_NAME}
          childOrder={BRIDE_CHILD_ORDER}
          parents={BRIDE_PARENTS}
          photoSrc={bridePhoto}
          revealDirection="right"
        />
      </div>

      <ScrollReveal direction="bottom" className="mt-10 text-burgundy">
        <p className="font-display text-[4.5rem] leading-[0.9]">{GROOM_NAME}</p>
        <p className="font-display text-[2.25rem] leading-none">&amp;</p>
        <p className="font-display text-[4.5rem] leading-[0.9]">{BRIDE_NAME}</p>
        <p className="mt-6 text-[0.9375rem] uppercase tracking-[0.2em] text-foreground/80">
          Mengundang Anda untuk hadir
          <br />
          di hari pernikahan kami
        </p>
        <svg viewBox="0 0 40 12" aria-hidden="true" className="mx-auto mt-3 w-8 text-gold">
          <path d="M2 2l18 7 18-7M2 6l18 5 18-5" fill="none" stroke="currentColor" strokeWidth={1} />
        </svg>
      </ScrollReveal>
    </section>
  );
}
