import Image from "next/image";
import iconHeartSwirl from "@/templates/crimson-rose/assets/icon-heart-swirl.webp";

interface RsvpSubmittedProps {
  guestName: string;
}

/** Tampilan setelah RSVP terkirim ("RSVP SUBMITTED"). */
export function RsvpSubmitted({ guestName }: RsvpSubmittedProps) {
  return (
    <div role="status" className="rounded-3xl bg-ivory px-6 py-10 text-center shadow-[0_12px_32px_rgba(0,0,0,0.25)]">
      <Image src={iconHeartSwirl} alt="" aria-hidden="true" className="mx-auto h-12 w-auto" />
      <p className="mt-4 text-[1rem] uppercase tracking-[0.3em]! text-maroon">RSVP Submitted</p>
      <p className="mt-2 font-(family-name:--font-crimson-script) text-[2.25rem] leading-tight! text-maroon">
        Terima kasih, {guestName}
      </p>
      <p className="mt-2 text-[1.0625rem] text-foreground/80">Konfirmasi kehadiran Anda telah kami terima.</p>
    </div>
  );
}
