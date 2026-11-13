import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ScriptHeading } from "@/templates/crimson-rose/components/ScriptHeading";
import { BRIDE, GROOM } from "@/templates/crimson-rose/content";
import brideIllustration from "@/templates/crimson-rose/assets/illustration-bride.webp";
import groomIllustration from "@/templates/crimson-rose/assets/illustration-groom.webp";
import { CoupleDecorations } from "./CoupleDecorations";
import { CoupleProfile } from "./CoupleProfile";
import { CoupleAmpersand } from "./CoupleAmpersand";

/** Profil Mempelai: wanita lalu pria, dipisah lingkaran "&". */
export function CoupleSection() {
  return (
    <section id="couple" className="relative overflow-hidden bg-ivory px-6 pb-40 pt-36">
      <CoupleDecorations />
      <div className="relative">
        <ScrollReveal direction="bottom">
          <ScriptHeading label="Profil" scriptTitle="Mempelai" />
        </ScrollReveal>

        <CoupleProfile member={BRIDE} illustrationSrc={brideIllustration} illustrationSide="left" />
        <CoupleAmpersand />
        <CoupleProfile member={GROOM} illustrationSrc={groomIllustration} illustrationSide="right" />
      </div>
    </section>
  );
}
