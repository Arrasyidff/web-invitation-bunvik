"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { RsvpFormData } from "@/features/rsvp/types";
import { FloatingPetal } from "@/templates/crimson-rose/components/FloatingPetal";
import { ScriptHeading } from "@/templates/crimson-rose/components/ScriptHeading";
import { RSVP_INTRO } from "@/templates/crimson-rose/content";
import petalBlush1 from "@/templates/crimson-rose/assets/petal-blush-1.webp";
import petalBlush4 from "@/templates/crimson-rose/assets/petal-blush-4.webp";
import petalBlush6 from "@/templates/crimson-rose/assets/petal-blush-6.webp";
import { RsvpForm } from "./RsvpForm";
import { RsvpSubmitted } from "./RsvpSubmitted";

/**
 * SEMENTARA: belum menulis ke database. API RSVP proyek ini menyimpan semua RSVP
 * di satu tabel tanpa penanda undangan, sehingga data Zakiya & Fadel akan
 * tercampur dengan undangan Hendra & Vika. Ganti dengan `submitRsvp` dari
 * `@/features/rsvp/services/rsvpService` setelah cara pemisahannya diputuskan.
 */
const submitRsvpPreview: (formData: RsvpFormData) => Promise<void> = () =>
  new Promise((resolve) => setTimeout(resolve, 600));

export function RsvpSection() {
  const [submittedGuestName, setSubmittedGuestName] = useState<string | null>(null);

  return (
    <section id="rsvp" className="relative overflow-hidden bg-maroon px-6 pb-20 pt-10 text-ivory">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <FloatingPetal src={petalBlush1} className="right-[8%] top-[6%] w-7" rotateDegrees={20} />
        <FloatingPetal src={petalBlush4} className="left-[5%] top-[38%] w-7" rotateDegrees={-35} delaySeconds={1.6} />
        <FloatingPetal src={petalBlush6} className="right-[6%] bottom-[10%] w-8" rotateDegrees={45} delaySeconds={2.8} />
      </div>

      <div className="relative">
        <ScrollReveal direction="bottom">
          <ScriptHeading label="Konfirmasi" scriptTitle="Kehadiran" tone="light" />
          <p className="mt-5 text-center text-[1.125rem] leading-relaxed! text-ivory/85">{RSVP_INTRO}</p>
        </ScrollReveal>

        <ScrollReveal direction="bottom" delay={100} className="mt-8">
          {submittedGuestName ? (
            <RsvpSubmitted guestName={submittedGuestName} />
          ) : (
            <RsvpForm
              onSubmitRsvp={submitRsvpPreview}
              onSubmitSuccess={(formData) => setSubmittedGuestName(formData.guestName.trim())}
            />
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
