import { OrnamentDivider } from "@/templates/crimson-story/components/OrnamentDivider";

interface RsvpSubmittedProps {
  guestName: string;
}

/** Tampilan setelah RSVP terkirim: nama tamu "tertulis" di cerita. */
export function RsvpSubmitted({ guestName }: RsvpSubmittedProps) {
  return (
    <div
      role="status"
      className="rounded-3xl border border-antique/25 bg-white/85 px-6 py-10 text-center shadow-[0_14px_32px_rgba(59,42,39,0.1)]"
    >
      <p className="text-[0.75rem] uppercase tracking-[0.35em]! text-antique">Konfirmasi Diterima</p>
      <p className="mt-3 font-(family-name:--font-story-script) text-[2.5rem] leading-tight! text-maroon">
        Terima kasih, {guestName}
      </p>
      <OrnamentDivider className="my-5 w-40" />
      <p className="text-[1rem] italic leading-relaxed! text-ink/75">Namamu kini tertulis di cerita kami.</p>
    </div>
  );
}
