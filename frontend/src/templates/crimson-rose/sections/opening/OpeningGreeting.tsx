import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/templates/crimson-rose/components/SectionHeading";
import { OpenBookIcon } from "@/templates/crimson-rose/components/SectionIcons";
import { OPENING_GREETING } from "@/templates/crimson-rose/content";
import dividerHeart from "@/templates/crimson-rose/assets/divider-heart.webp";

export function OpeningGreeting() {
  return (
    <ScrollReveal direction="bottom" className="mt-16 text-center">
      <SectionHeading icon={<OpenBookIcon className="h-10 w-16" />} title="Pembukaan" />

      <h3 className="mt-6 font-(family-name:--font-crimson-script) text-[2.5rem] leading-[1.15]! text-maroon">
        {OPENING_GREETING.salam.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h3>
      <svg viewBox="0 0 200 14" aria-hidden="true" className="mx-auto mt-1 w-44 text-maroon">
        <path d="M4 11C60 1 140 1 196 6" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" />
      </svg>

      <p className="mt-4 text-[1.25rem] leading-relaxed! text-foreground">{OPENING_GREETING.body}</p>

      <Image src={dividerHeart} alt="" aria-hidden="true" className="mx-auto mt-8 h-auto w-56" />
    </ScrollReveal>
  );
}
