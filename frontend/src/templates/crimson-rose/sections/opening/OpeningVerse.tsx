import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/templates/crimson-rose/components/SectionHeading";
import { MosqueIcon } from "@/templates/crimson-rose/components/SectionIcons";
import { HOLY_VERSE } from "@/templates/crimson-rose/content";

export function OpeningVerse() {
  return (
    <ScrollReveal direction="bottom" className="text-center">
      <SectionHeading icon={<MosqueIcon className="h-12 w-24" />} title="Ayat Suci" />

      <p
        dir="rtl"
        lang="ar"
        className="mt-8 font-(family-name:--font-crimson-arabic) text-[1.625rem] leading-[2.1]! text-balance text-foreground"
      >
        {HOLY_VERSE.arabic}
      </p>

      <p className="mt-6 text-[1.25rem] italic leading-relaxed! text-foreground/90">
        &ldquo;{HOLY_VERSE.translation}&rdquo;
      </p>

      <div className="mt-6 flex items-center gap-4">
        <span className="h-px flex-1 bg-maroon/60" />
        <span className="rounded-full bg-maroon px-6 py-1.5 text-[1.125rem] text-ivory shadow-sm">
          {HOLY_VERSE.reference}
        </span>
        <span className="h-px flex-1 bg-maroon/60" />
      </div>
    </ScrollReveal>
  );
}
