import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { EnvelopeHeader } from "@/templates/ardhian-wilda/components/EnvelopeHeader";
import { FloralDivider } from "@/templates/ardhian-wilda/components/FloralDivider";
import { OpeningVerse } from "./OpeningVerse";
import { OpeningMonogram } from "./OpeningMonogram";
import { OpeningGreeting } from "./OpeningGreeting";

export function OpeningSection() {
  return (
    <section id="opening">
      <EnvelopeHeader />
      <FloralDivider className="-mt-2" />
      <ScrollReveal direction="bottom" className="px-8 pb-12 pt-6 text-center">
        <OpeningVerse />
        <OpeningMonogram />
        <p className="mt-6 text-[1rem] uppercase tracking-[0.3em] text-wine">Kami Menikah!</p>
      </ScrollReveal>
      <OpeningGreeting />
    </section>
  );
}
