import Image, { type StaticImageData } from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { InstagramIcon } from "@/templates/crimson-rose/components/InstagramIcon";
import type { CoupleMember } from "@/templates/crimson-rose/content";

interface CoupleProfileProps {
  member: CoupleMember;
  illustrationSrc: StaticImageData;
  illustrationSide: "left" | "right";
}

export function CoupleProfile({ member, illustrationSrc, illustrationSide }: CoupleProfileProps) {
  const isIllustrationLeft = illustrationSide === "left";

  return (
    <div
      className={`mt-10 grid items-center gap-3 ${isIllustrationLeft ? "grid-cols-[5fr_6fr]" : "grid-cols-[6fr_5fr]"}`}
    >
      <ScrollReveal
        direction={illustrationSide}
        className={`relative ${isIllustrationLeft ? "order-1" : "order-2"}`}
      >
        <div className="absolute inset-x-1 bottom-0 top-[12%] rounded-[58%_42%_52%_48%/42%_48%_52%_58%] bg-petal/70" />
        <Image
          src={illustrationSrc}
          alt={`Ilustrasi ${member.fullName}`}
          sizes="200px"
          className="relative mx-auto h-auto w-full"
        />
      </ScrollReveal>

      <ScrollReveal
        direction={isIllustrationLeft ? "right" : "left"}
        delay={100}
        className={`text-center ${isIllustrationLeft ? "order-2" : "order-1"}`}
      >
        <h3 className="font-(family-name:--font-crimson-script) text-[2.125rem] leading-[1.15]! text-balance text-maroon">
          {member.fullName}
        </h3>
        <div className="mx-auto mt-3 h-px w-4/5 bg-maroon/40" />
        <p className="mt-3 text-[1.0625rem] leading-snug! text-foreground">
          {member.childLabel}
          <br />
          {`${member.fatherName} &`}
          <br />
          {member.motherName}
        </p>
        <a
          href={member.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-petal/80 px-4 py-1.5 text-[0.9375rem] text-foreground transition-colors hover:bg-petal"
        >
          <InstagramIcon className="h-4.5 w-4.5" />@{member.instagramHandle}
        </a>
      </ScrollReveal>
    </div>
  );
}
