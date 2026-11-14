"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { StoryReveal } from "@/templates/crimson-story/components/StoryReveal";
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
    <section id="rsvp" className="relative scroll-mt-12 bg-white px-6 pb-8 pt-16">

      <div className="relative">
        <StoryReveal direction="bottom">
          <ChapterHeading chapter={getStoryChapter("rsvp")} />
          <p className="mx-auto mt-4 max-w-88 text-center text-[0.9375rem] leading-normal! text-ink/70">{RSVP_INTRO}</p>
        </StoryReveal>

        <StoryReveal direction="bottom" delay={100} className="mt-10">
          {/* Form menghilang dulu, lalu kartu terima kasih muncul. */}
          <AnimatePresence mode="wait">
            {submittedGuestName ? (
              <RsvpSubmitted key="submitted" guestName={submittedGuestName} />
            ) : (
              <motion.div key="form" exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }} transition={{ duration: 0.3 }}>
                <RsvpForm
                  onSubmitRsvp={submitZakiyaFadelRsvp}
                  onSubmitSuccess={(formData) => setSubmittedGuestName(formData.guestName.trim())}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </StoryReveal>
      </div>
    </section>
  );
}
