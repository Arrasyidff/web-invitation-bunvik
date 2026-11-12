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
    <section id="rsvp" className="w-full px-6.5 mt-15 mb-7.5">
      <ScrollReveal direction="bottom">
        <h2 className="text-center text-[4.5rem] font-bold text-foreground" style={{ lineHeight: '0.8' }}>
          RSVP
        </h2>
      </ScrollReveal>

      <ScrollReveal direction="left" delay={100}>
        <p className="mt-7.5 text-center text-[1.125rem] text-foreground leading-relaxed">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga apabila
          Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kami.
          Atas kehadiran serta doa restu, kami ucapkan terima kasih.
        </p>
      </ScrollReveal>

      {isSubmitted ? (
        <ScrollReveal direction="bottom" delay={100}>
          <div className="mt-7.5 text-center">
            <p className="text-[1.125rem] text-foreground">
              Terima kasih! Konfirmasi kehadiran Anda telah kami terima.
            </p>
          </div>
        </ScrollReveal>
      ) : (
        <ScrollReveal direction="bottom" delay={150}>
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
