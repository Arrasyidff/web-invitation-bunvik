import { GROOM_NAME, BRIDE_NAME, WEDDING_DATE_DISPLAY, GUEST_NAME_DEFAULT } from "@/lib/constants";
import { GlassPanel } from "@/templates/ardhian-wilda/components/GlassPanel";
import { EnvelopeIcon } from "@/templates/ardhian-wilda/components/LineIcons";

interface CoverSectionProps {
  onOpen: () => void;
  guestName?: string;
}

export function CoverSection({ onOpen, guestName = GUEST_NAME_DEFAULT }: CoverSectionProps) {
  return (
    <section id="cover" className="flex min-h-screen items-center justify-center px-6 py-12">
      <GlassPanel className="animate-fade-in">
        <p className="text-[0.875rem] uppercase tracking-[0.3em] text-wine/80">The Wedding of</p>

        <div className="mt-4 flex flex-col items-center text-wine">
          <p className="font-display text-[3rem] leading-none">{GROOM_NAME}</p>
          <p className="font-display text-[1.75rem] leading-none">&amp;</p>
          <p className="font-display text-[3rem] leading-none">{BRIDE_NAME}</p>
        </div>

        <p className="mt-4 text-[1rem] tracking-[0.25em] text-wine/80">{WEDDING_DATE_DISPLAY}</p>

        <div className="my-6 h-px w-16 bg-wine/30" />

        <p className="text-[1rem] text-foreground/80">Kepada Yth.</p>
        <p className="text-[1rem] text-foreground/80">Bapak/ Ibu/ Saudara/ i</p>
        <p className="mt-1 text-[1.5rem] font-semibold capitalize text-wine">{guestName}</p>

        <button
          type="button"
          onClick={onOpen}
          className="mt-6 flex items-center gap-2 rounded-full bg-wine px-6 py-2.5 text-[1rem] tracking-wide text-cream shadow-md transition-transform active:scale-95"
        >
          <EnvelopeIcon className="h-5 w-5" />
          Buka Undangan
        </button>
      </GlassPanel>
    </section>
  );
}
