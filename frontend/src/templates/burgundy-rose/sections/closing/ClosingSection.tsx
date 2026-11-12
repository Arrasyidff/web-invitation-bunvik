import { GROOM_NAME, BRIDE_NAME } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FloralGarland } from "@/templates/burgundy-rose/components/FloralArt";

export function ClosingSection() {
  return (
    <footer className="relative bg-burgundy px-8 pb-28 pt-24 text-center text-blush">
      <FloralGarland className="absolute inset-x-0 -top-14" />
      <ScrollReveal direction="bottom">
        <p className="text-[1.125rem] leading-relaxed">
          Atas kehadiran serta doa restu Bapak/Ibu/Saudara/i,
          <br />
          kami ucapkan terima kasih.
        </p>
        <p className="mt-4 text-[0.875rem] uppercase tracking-[0.3em] text-blush/80">
          Wassalamu&apos;alaikum Wr. Wb.
        </p>
        <p className="mt-8 font-display text-[3.25rem] leading-none">Sampai Jumpa!</p>
        <p className="mt-5 text-[1rem] uppercase tracking-[0.3em] text-blush-rose">
          {GROOM_NAME} &amp; {BRIDE_NAME}
        </p>
      </ScrollReveal>
    </footer>
  );
}
