import { GROOM_NAME, BRIDE_NAME } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ClosingSection() {
  return (
    <footer className="bg-wine px-8 pb-28 pt-12 text-center text-cream">
      <ScrollReveal direction="bottom">
        <p className="text-[1.0625rem] leading-relaxed text-cream/90">
          Atas kehadiran serta doa restu Bapak/Ibu/Saudara/i, kami ucapkan terima kasih.
        </p>
        <p className="mt-4 text-[0.875rem] uppercase tracking-[0.3em]">Wassalamu&apos;alaikum Wr. Wb.</p>
        <p className="mt-6 font-display text-[2.5rem] leading-none">Terima Kasih</p>
        <p className="mt-4 text-[1rem] uppercase tracking-[0.3em] text-cream/80">
          {GROOM_NAME} &amp; {BRIDE_NAME}
        </p>
      </ScrollReveal>
    </footer>
  );
}
