import {
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
import { FloralDivider } from "@/templates/ardhian-wilda/components/FloralDivider";
import { CoupleProfile } from "./CoupleProfile";

export function CoupleSection() {
  return (
    <section id="couple" className="px-8 py-12">
      <ScrollReveal direction="bottom">
        <h2 className="text-center text-[1rem] uppercase tracking-[0.3em] text-wine">Kedua Mempelai</h2>
      </ScrollReveal>

      <CoupleProfile
        fullName={GROOM_FULL_NAME}
        childOrder={GROOM_CHILD_ORDER}
        parents={GROOM_PARENTS}
        photoSrc={groomPhoto}
        revealDirection="left"
      />

      <ScrollReveal direction="bottom" className="my-8 text-center">
        <span className="font-display text-[3rem] leading-none text-wine">&amp;</span>
      </ScrollReveal>

      <CoupleProfile
        fullName={BRIDE_FULL_NAME}
        childOrder={BRIDE_CHILD_ORDER}
        parents={BRIDE_PARENTS}
        photoSrc={bridePhoto}
        revealDirection="right"
      />

      <FloralDivider isFlipped className="mt-10" />
    </section>
  );
}
