"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { RsvpFormData } from "@/features/rsvp/types";
import { submitRsvp } from "@/features/rsvp/services/rsvpService";
import { ChapterHeading } from "@/templates/crimson-story/components/ChapterHeading";
import { INVITATION_ID, RSVP_INTRO, getStoryChapter } from "@/templates/crimson-story/content";
import { RsvpForm } from "./RsvpForm";
import { RsvpSubmitted } from "./RsvpSubmitted";

/** Simpan RSVP ke backend, ditandai sebagai milik undangan Zakiya & Fadel. */
function submitZakiyaFadelRsvp(formData: RsvpFormData): Promise<void> {
  return submitRsvp(formData, INVITATION_ID);
}

/** Bab IV · Bagian dari Cerita Kami: konfirmasi kehadiran. */
export function RsvpSection() {
  const [submittedGuestName, setSubmittedGuestName] = useState<string | null>(null);

  return (
    <section id="rsvp" className="relative scroll-mt-12 overflow-hidden bg-parchment px-6 pb-20 pt-24">
      <ScrollReveal direction="bottom">
        <ChapterHeading chapter={getStoryChapter("rsvp")} />
        <p className="mx-auto mt-4 max-w-88 text-center text-[0.9375rem] leading-relaxed! text-ink/70">{RSVP_INTRO}</p>
      </ScrollReveal>

      <ScrollReveal direction="bottom" delay={100} className="mt-10">
        {submittedGuestName ? (
          <RsvpSubmitted guestName={submittedGuestName} />
        ) : (
          <RsvpForm
            onSubmitRsvp={submitZakiyaFadelRsvp}
            onSubmitSuccess={(formData) => setSubmittedGuestName(formData.guestName.trim())}
          />
        )}
      </ScrollReveal>
    </section>
  );
}
