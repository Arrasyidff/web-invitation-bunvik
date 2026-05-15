"use client";

import { useState } from "react";
import { RsvpForm } from "./RsvpForm";

export function RsvpSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <section id="rsvp" className="w-full px-6 py-14">
      <h2 className="text-center text-[3rem] font-bold tracking-wider text-foreground">
        RSVP
      </h2>

      <p className="mt-5 text-center text-[0.9375rem] text-foreground leading-relaxed">
        Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga apabila
        Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kami.
        Atas kehadiran serta doa restu, kami ucapkan terima kasih.
      </p>

      {isSubmitted ? (
        <div className="mt-10 text-center">
          <p className="text-[1.0625rem] text-foreground">
            Terima kasih! Konfirmasi kehadiran Anda telah kami terima.
          </p>
        </div>
      ) : (
        <RsvpForm onSubmitSuccess={() => setIsSubmitted(true)} />
      )}
    </section>
  );
}
