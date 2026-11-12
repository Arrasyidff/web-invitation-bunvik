"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SuccessToast } from "@/components/ui/SuccessToast";
import { CalendarHeartIcon } from "@/templates/ardhian-wilda/components/LineIcons";
import { RsvpForm } from "./RsvpForm";

interface RsvpSectionProps {
  onRsvpSubmitSuccess?: () => void;
}

export function RsvpSection({ onRsvpSubmitSuccess }: RsvpSectionProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);

  return (
    <section id="rsvp" className="bg-wine px-8 py-12 text-cream">
      <ScrollReveal direction="bottom" className="text-center">
        <CalendarHeartIcon className="mx-auto h-9 w-9" />
        <h2 className="mt-3 text-[1rem] font-semibold uppercase tracking-[0.3em]">Konfirmasi Kehadiran</h2>
        <p className="mt-3 text-[1.0625rem] leading-relaxed text-cream/90">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga apabila
          Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kami.
        </p>
      </ScrollReveal>

      {isSubmitted ? (
        <ScrollReveal direction="bottom" className="mt-8 text-center">
          <p className="text-[1.0625rem]">Terima kasih! Konfirmasi kehadiran Anda telah kami terima.</p>
        </ScrollReveal>
      ) : (
        <ScrollReveal direction="bottom" delay={100}>
          <RsvpForm
            onSubmitSuccess={() => {
              setIsSubmitted(true);
              setIsToastVisible(true);
              onRsvpSubmitSuccess?.();
            }}
          />
        </ScrollReveal>
      )}

      {isToastVisible && (
        <SuccessToast
          message="RSVP terkirim!"
          subMessage="Terima kasih telah mengkonfirmasi kehadiran Anda."
          onClose={() => setIsToastVisible(false)}
        />
      )}
    </section>
  );
}
