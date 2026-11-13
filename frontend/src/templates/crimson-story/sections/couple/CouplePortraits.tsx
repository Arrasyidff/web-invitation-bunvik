import Image, { type StaticImageData } from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BRIDE, GROOM, type CoupleMember } from "@/templates/crimson-story/content";
import brideIllustration from "@/templates/crimson-story/assets/illustration-bride.webp";
import groomIllustration from "@/templates/crimson-story/assets/illustration-groom.webp";
import gypsophilaSmall from "@/templates/crimson-story/assets/gypsophila-small.webp";

interface CoupleIllustrationProps {
  member: CoupleMember;
  illustrationSrc: StaticImageData;
}

/** Ilustrasi satu mempelai di atas lengkung merah muda polos; kepala sedikit keluar dari lengkungan. */
function CoupleIllustration({ member, illustrationSrc }: CoupleIllustrationProps) {
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 top-[22%] rounded-t-full bg-petal/70" />
      <Image
        src={illustrationSrc}
        alt={`Ilustrasi ${member.fullName}`}
        sizes="180px"
        className="relative mx-auto h-auto w-[88%]"
      />
    </div>
  );
}

/** Ilustrasi mempelai wanita dan pria berdampingan, disatukan segel "&" di tengah. */
export function CouplePortraits() {
  return (
    <div className="relative mx-auto mt-12 max-w-80">
      <div className="grid grid-cols-2 gap-3">
        <ScrollReveal direction="left">
          <CoupleIllustration member={BRIDE} illustrationSrc={brideIllustration} />
        </ScrollReveal>
        <ScrollReveal direction="right" delay={120}>
          <CoupleIllustration member={GROOM} illustrationSrc={groomIllustration} />
        </ScrollReveal>
      </div>

      <span
        aria-hidden="true"
        className="absolute -bottom-6 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-maroon font-(family-name:--font-story-script) text-[2rem] leading-none text-ivory"
      >
        &amp;
      </span>
      <Image
        src={gypsophilaSmall}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 left-[56%] h-auto w-16 rotate-12"
      />
    </div>
  );
}
