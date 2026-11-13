import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HOLY_VERSE } from "@/templates/crimson-story/content";

/** Ayat suci dalam blok kutipan bergaya halaman buku. */
export function OpeningVerse() {
  return (
    <ScrollReveal
      direction="bottom"
      className="relative mt-12 rounded-2xl border border-antique/30 bg-parchment/70 px-6 pb-8 pt-10 text-center"
    >
      <span
        aria-hidden="true"
        className="absolute -top-6 left-1/2 -translate-x-1/2 font-(family-name:--font-story-display) text-[4rem] leading-none text-antique/70"
      >
        &ldquo;
      </span>

      <p
        dir="rtl"
        lang="ar"
        className="font-(family-name:--font-story-arabic) text-[1.5rem] leading-[2.1]! text-balance text-ink"
      >
        {HOLY_VERSE.arabic}
      </p>

      <p className="mt-5 text-[1rem] italic leading-relaxed! text-ink/80">{HOLY_VERSE.translation}</p>

      <p className="mt-5 text-[0.8125rem] font-semibold uppercase tracking-[0.3em]! text-maroon">
        {HOLY_VERSE.reference}
      </p>
    </ScrollReveal>
  );
}
