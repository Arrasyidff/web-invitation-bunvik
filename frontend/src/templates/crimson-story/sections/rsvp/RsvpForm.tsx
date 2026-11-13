"use client";

import { useState } from "react";
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
  if (!message) return null;
  return <p className="mt-1.5 text-[0.8125rem] text-red-700">{message}</p>;
}

export function RsvpForm({ onSubmitRsvp, onSubmitSuccess }: RsvpFormProps) {
  const [formData, setFormData] = useState<RsvpFormData>(INITIAL_FORM_DATA);
  const [fieldErrors, setFieldErrors] = useState<RsvpFieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitError, setHasSubmitError] = useState(false);

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
      onSubmit={handleFormSubmit}
      noValidate
      className="flex flex-col gap-6 rounded-3xl border border-antique/25 bg-white/85 px-6 py-8 text-ink shadow-[0_14px_32px_rgba(59,42,39,0.1)]"
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
          className="mt-2 w-full border-b border-maroon/40 bg-transparent px-1 py-2 text-[1rem] outline-none placeholder:text-ink/40 focus:border-maroon"
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

      {isAttending && (
        <div>
          <RsvpChoiceGroup
            legend="Jumlah Tamu"
            name="story-rsvp-guest-count"
            options={GUEST_COUNT_OPTIONS}
            selectedValue={formData.guestCount}
            onSelect={(guestCount) => updateFormData({ guestCount })}
          />
          <FieldError message={fieldErrors.guestCount} />
        </div>
      )}

      {hasSubmitError && (
        <p className="text-center text-[0.875rem] text-red-700">Gagal mengirim. Silakan coba lagi.</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 rounded-full bg-maroon py-3 text-[0.9375rem] uppercase tracking-[0.25em] text-ivory shadow-md transition-transform active:scale-[0.98] disabled:opacity-60"
      >
        {isSubmitting ? "Mengirim..." : "Kirim Konfirmasi"}
      </button>
    </form>
  );
}
