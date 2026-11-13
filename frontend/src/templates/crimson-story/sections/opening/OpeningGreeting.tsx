import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { OrnamentDivider } from "@/templates/crimson-story/components/OrnamentDivider";
import { OPENING_GREETING } from "@/templates/crimson-story/content";

/** Salam pembuka; paragrafnya diawali huruf kapital besar (drop cap) seperti awal bab buku. */
export function OpeningGreeting() {
  return (
    <ScrollReveal direction="bottom" className="mt-14">
      <OrnamentDivider />

      <h3 className="-mx-4 mt-8 text-center font-(family-name:--font-story-script) text-[clamp(1.875rem,8.8vw,2.375rem)] leading-[1.25]! text-maroon">
        {OPENING_GREETING.salam.map((line) => (
          <span key={line} className="block whitespace-nowrap">
            {line}
          </span>
        ))}
      </h3>

      <p className="mt-6 text-[1.0625rem] leading-normal! text-ink first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:font-(family-name:--font-story-script) first-letter:text-[4.25rem] first-letter:leading-[0.8] first-letter:text-maroon">
        {OPENING_GREETING.body}
      </p>
    </ScrollReveal>
  );
}
