import { OrnamentDivider } from "@/templates/crimson-story/components/OrnamentDivider";

interface RsvpSubmittedProps {
  guestName: string;
}

/** Tampilan setelah RSVP terkirim: nama tamu "tertulis" di cerita. */
export function RsvpSubmitted({ guestName }: RsvpSubmittedProps) {
  return (
    <div
      role="status"
      className="rounded-3xl bg-white px-6 py-10 text-center"
    >
      <p className="text-[0.75rem] uppercase tracking-[0.35em]! text-antique">Konfirmasi Diterima</p>
      <p className="mt-3 font-(family-name:--font-story-script) text-[2.5rem] leading-tight! text-maroon">
        Terima kasih, {guestName}
      </p>
      <OrnamentDivider className="my-5 w-40" />
      <p className="text-[1rem] leading-normal! text-ink/75">Namamu kini tertulis di cerita kami.</p>
    </div>
  );
}
