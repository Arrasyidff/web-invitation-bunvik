"use client";

import { useState } from "react";
import { AnimatePresence, motion, useAnimate } from "motion/react";
import { PRESS_INTERACTION, STORY_EASE } from "@/templates/crimson-story/components/storyMotion";
import type { RsvpFormData } from "@/features/rsvp/types";
import { validateRsvpForm, type RsvpFieldErrors } from "@/features/rsvp/rsvpSchema";
import { RsvpChoiceGroup } from "./RsvpChoiceGroup";

interface RsvpFormProps {
  onSubmitRsvp: (formData: RsvpFormData) => Promise<void>;
  onSubmitSuccess: (formData: RsvpFormData) => void;
}

interface FieldErrorProps {
  message?: string;
}

const INITIAL_FORM_DATA: RsvpFormData = {
  guestName: "",
  guestCount: 1,
  attendanceStatus: "hadir",
};

const GUEST_COUNT_OPTIONS = [
  { value: 1, label: "1 orang" },
  { value: 2, label: "2 orang" },
];

const ATTENDANCE_OPTIONS: { value: RsvpFormData["attendanceStatus"]; label: string }[] = [
  { value: "hadir", label: "Hadir" },
  { value: "tidak_hadir", label: "Maaf, saya tidak bisa hadir" },
];

function FieldError({ message }: FieldErrorProps) {
  return (
    <AnimatePresence>
      {message && (
        <motion.p
          className="mt-1.5 text-[0.8125rem] text-red-700"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          {message}
        </motion.p>
      )}
    </AnimatePresence>
  );
}

export function RsvpForm({ onSubmitRsvp, onSubmitSuccess }: RsvpFormProps) {
  const [formData, setFormData] = useState<RsvpFormData>(INITIAL_FORM_DATA);
  const [fieldErrors, setFieldErrors] = useState<RsvpFieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitError, setHasSubmitError] = useState(false);
  const [formScope, animateForm] = useAnimate<HTMLFormElement>();

  const isAttending = formData.attendanceStatus === "hadir";

  function updateFormData(changes: Partial<RsvpFormData>) {
    setFormData((previousData) => ({ ...previousData, ...changes }));
    setFieldErrors({});
  }

  async function handleFormSubmit(event: React.FormEvent) {
    event.preventDefault();
    setHasSubmitError(false);

    const submittedData: RsvpFormData = { ...formData, guestCount: isAttending ? formData.guestCount : 0 };
    const errors = validateRsvpForm(submittedData);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      // Form "menggeleng" pelan sebagai tanda ada yang belum diisi.
      animateForm(formScope.current, { x: [0, -10, 10, -6, 6, 0] }, { duration: 0.45 });
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmitRsvp(submittedData);
      onSubmitSuccess(submittedData);
    } catch {
      setHasSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      ref={formScope}
      onSubmit={handleFormSubmit}
      noValidate
      className="flex flex-col gap-6 rounded-3xl bg-white px-6 py-8 text-ink"
    >
      <div>
        <label htmlFor="story-rsvp-name" className="text-[0.9375rem] uppercase tracking-[0.2em]! text-antique">
          Nama
        </label>
        <input
          id="story-rsvp-name"
          type="text"
          autoComplete="name"
          placeholder="Tulis nama Anda"
          value={formData.guestName}
          onChange={(event) => updateFormData({ guestName: event.target.value })}
          className="mt-2 w-full rounded-xl bg-neutral-100 px-4 py-3 text-[1rem] outline-none placeholder:text-ink/40 focus-visible:ring-2 focus-visible:ring-maroon/40"
        />
        <FieldError message={fieldErrors.guestName} />
      </div>

      <RsvpChoiceGroup
        legend="Konfirmasi Kehadiran"
        name="story-rsvp-attendance"
        options={ATTENDANCE_OPTIONS}
        selectedValue={formData.attendanceStatus}
        onSelect={(attendanceStatus) => updateFormData({ attendanceStatus })}
        isStacked
      />
      <FieldError message={fieldErrors.attendanceStatus} />

      {/* Pilihan jumlah tamu membuka/menutup halus; margin negatif menetralkan gap saat tertutup. */}
      <AnimatePresence initial={false}>
        {isAttending && (
          <motion.div
            className="-mx-1 overflow-hidden px-1 pb-1"
            initial={{ height: 0, opacity: 0, marginTop: -24 }}
            animate={{ height: "auto", opacity: 1, marginTop: 0 }}
            exit={{ height: 0, opacity: 0, marginTop: -24 }}
            transition={{ duration: 0.35, ease: STORY_EASE }}
          >
            <RsvpChoiceGroup
              legend="Jumlah Tamu"
              name="story-rsvp-guest-count"
              options={GUEST_COUNT_OPTIONS}
              selectedValue={formData.guestCount}
              onSelect={(guestCount) => updateFormData({ guestCount })}
            />
            <FieldError message={fieldErrors.guestCount} />
          </motion.div>
        )}
      </AnimatePresence>

      {hasSubmitError && (
        <p className="text-center text-[0.875rem] text-red-700">Gagal mengirim. Silakan coba lagi.</p>
      )}

      <motion.button
        {...PRESS_INTERACTION}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        type="submit"
        disabled={isSubmitting}
        className="mt-2 rounded-full bg-maroon py-3 text-[0.9375rem] uppercase tracking-[0.25em] text-ivory disabled:opacity-60"
      >
        {isSubmitting ? "Mengirim..." : "Kirim Konfirmasi"}
      </motion.button>
    </form>
  );
}
