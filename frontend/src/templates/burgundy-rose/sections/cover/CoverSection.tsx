import { GROOM_NAME, BRIDE_NAME, WEDDING_DATE_DISPLAY, GUEST_NAME_DEFAULT } from "@/lib/constants";
import { CornerBouquet } from "@/templates/burgundy-rose/components/FloralArt";
import { EnvelopeIcon } from "@/templates/burgundy-rose/components/LineIcons";
import { Monogram } from "@/templates/burgundy-rose/components/Monogram";

interface CoverSectionProps {
  onOpen: () => void;
  guestName?: string;
}

export function CoverSection({ onOpen, guestName = GUEST_NAME_DEFAULT }: CoverSectionProps) {
  return (
    <section
      id="cover"
      className="blush-paper relative mx-auto flex min-h-screen w-full max-w-[430px] flex-col items-center justify-center overflow-hidden px-8 py-16 text-center"
    >
      <CornerBouquet className="absolute left-0 top-0 w-44" />
      <CornerBouquet className="absolute bottom-0 right-0 w-44 rotate-180" />

      <div className="relative animate-fade-in">
        <Monogram />
        <p className="mt-8 text-[0.875rem] uppercase tracking-[0.3em] text-burgundy/80">The Wedding of</p>
        <div className="mt-3 flex flex-col items-center text-burgundy">
          <p className="font-display text-[3.75rem] leading-none">{GROOM_NAME}</p>
          <p className="font-display text-[2rem] leading-none">&amp;</p>
          <p className="font-display text-[3.75rem] leading-none">{BRIDE_NAME}</p>
        </div>
        <p className="mt-4 text-[1rem] tracking-[0.3em] text-burgundy/80">{WEDDING_DATE_DISPLAY}</p>

        <div className="mx-auto my-8 h-px w-16 bg-burgundy/30" />

        <p className="text-[1rem] text-foreground/80">Kepada Yth.</p>
        <p className="text-[1rem] text-foreground/80">Bapak/ Ibu/ Saudara/ i</p>
        <p className="mt-1 text-[1.5rem] font-semibold capitalize text-burgundy">{guestName}</p>

        <button
          type="button"
          onClick={onOpen}
          className="mx-auto mt-6 flex items-center gap-2 rounded-full bg-burgundy px-6 py-2.5 text-[1rem] tracking-wide text-blush shadow-md transition-transform active:scale-95"
        >
          <EnvelopeIcon className="h-5 w-5" />
          Buka Undangan
        </button>
      </div>
    </section>
  );
}
