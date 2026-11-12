"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SuccessToast } from "@/components/ui/SuccessToast";
import { RsvpForm } from "./RsvpForm";

interface RsvpSectionProps {
  onRsvpSubmitSuccess?: () => void;
}

export function RsvpSection({ onRsvpSubmitSuccess }: RsvpSectionProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);

  return (
    <section id="rsvp" className="scroll-mt-6 px-8 pb-12 pt-6">
      <ScrollReveal direction="bottom" className="text-center">
        <p className="text-[0.875rem] uppercase tracking-[0.3em] text-blush-rose">Mohon</p>
        <h2 className="-mt-1 font-display text-[3.25rem] leading-tight text-burgundy">Konfirmasi Kehadiran</h2>
        <p className="mt-3 text-[1.0625rem] leading-relaxed text-foreground/80">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga apabila
          Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kami.
        </p>
      </ScrollReveal>

      {isSubmitted ? (
        <ScrollReveal direction="bottom" className="mt-8 text-center">
          <p className="text-[1.0625rem] text-burgundy">Terima kasih! Konfirmasi kehadiran Anda telah kami terima.</p>
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
