"use client";

import { useState } from "react";
import type { RsvpFormData } from "@/features/rsvp/types";
import { submitRsvp } from "@/features/rsvp/services/rsvpService";
import { validateRsvpForm, type RsvpFieldErrors } from "@/features/rsvp/rsvpSchema";

interface RsvpFormProps {
  onSubmitSuccess: () => void;
}

interface FieldErrorProps {
  message?: string;
}

const INITIAL_FORM_DATA: RsvpFormData = {
  guestName: "",
  guestCount: 0,
  attendanceStatus: "hadir",
  message: "",
};

const INPUT_CLASS_NAME =
  "w-full rounded-full border border-cream/40 bg-cream/10 px-5 py-2.5 text-[1.0625rem] text-cream outline-none placeholder:text-cream/50 focus:border-cream";

function FieldError({ message }: FieldErrorProps) {
  if (!message) return null;
  return <p className="text-[0.875rem] text-rose-200">{message}</p>;
}

export function RsvpForm({ onSubmitSuccess }: RsvpFormProps) {
  const [formData, setFormData] = useState<RsvpFormData>(INITIAL_FORM_DATA);
  const [fieldErrors, setFieldErrors] = useState<RsvpFieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasError, setHasError] = useState(false);

  function clearFieldError(field: keyof RsvpFormData) {
    setFieldErrors((previousErrors) => {
      if (!previousErrors[field]) return previousErrors;
      const nextErrors = { ...previousErrors };
      delete nextErrors[field];
      return nextErrors;
    });
  }

  function handleAttendanceChange(attendanceStatus: RsvpFormData["attendanceStatus"]) {
    setFormData({
      ...formData,
      attendanceStatus,
      guestCount: attendanceStatus === "hadir" ? formData.guestCount : 0,
    });
    clearFieldError("attendanceStatus");
    clearFieldError("guestCount");
  }

  async function handleFormSubmit(event: React.FormEvent) {
    event.preventDefault();
    setHasError(false);

    const errors = validateRsvpForm(formData);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    setIsSubmitting(true);

    try {
      await submitRsvp({
        ...formData,
        guestCount: formData.attendanceStatus === "hadir" ? formData.guestCount : 0,
      });
      onSubmitSuccess();
    } catch {
      setHasError(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleFormSubmit} className="mt-8 flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="rsvp-guest-name" className="text-[1rem]">Nama</label>
        <input
          id="rsvp-guest-name"
          type="text"
          value={formData.guestName}
          onChange={(event) => {
            setFormData({ ...formData, guestName: event.target.value });
            clearFieldError("guestName");
          }}
          className={INPUT_CLASS_NAME}
        />
        <FieldError message={fieldErrors.guestName} />
      </div>

      <fieldset className="flex flex-col gap-1.5">
        <legend className="mb-1.5 text-[1rem]">Konfirmasi Kehadiran</legend>
        <label className="flex cursor-pointer items-center gap-3">
          <input
            type="radio"
            name="attendanceStatus"
            value="hadir"
            checked={formData.attendanceStatus === "hadir"}
            onChange={() => handleAttendanceChange("hadir")}
            className="h-4 w-4 accent-cream"
          />
          <span className="text-[1.0625rem]">Hadir</span>
        </label>
        <label className="flex cursor-pointer items-center gap-3">
          <input
            type="radio"
            name="attendanceStatus"
            value="tidak_hadir"
            checked={formData.attendanceStatus === "tidak_hadir"}
            onChange={() => handleAttendanceChange("tidak_hadir")}
            className="h-4 w-4 accent-cream"
          />
          <span className="text-[1.0625rem]">Maaf, saya tidak bisa hadir</span>
        </label>
        <FieldError message={fieldErrors.attendanceStatus} />
      </fieldset>

      {formData.attendanceStatus === "hadir" && (
        <div className="flex flex-col gap-1.5">
          <label htmlFor="rsvp-guest-count" className="text-[1rem]">Jumlah hadir</label>
          <input
            id="rsvp-guest-count"
            type="number"
            min={1}
            max={10}
            placeholder="0/10"
            value={formData.guestCount > 0 ? formData.guestCount : ""}
            onChange={(event) => {
              const rawValue = event.target.value;
              setFormData({ ...formData, guestCount: rawValue === "" ? 0 : Number(rawValue) });
              clearFieldError("guestCount");
            }}
            className={INPUT_CLASS_NAME}
          />
          <FieldError message={fieldErrors.guestCount} />
        </div>
      )}

      <div className="flex flex-col gap-1.5">
        <label htmlFor="rsvp-message" className="text-[1rem]">Ucapan &amp; Doa (opsional)</label>
        <textarea
          id="rsvp-message"
          value={formData.message}
          onChange={(event) => {
            setFormData({ ...formData, message: event.target.value });
            clearFieldError("message");
          }}
          rows={3}
          className={`${INPUT_CLASS_NAME} resize-none rounded-2xl`}
        />
        <FieldError message={fieldErrors.message} />
      </div>

      {hasError && (
        <p className="text-center text-[0.875rem] text-rose-200">Gagal mengirim. Silakan coba lagi.</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mx-auto mt-2 rounded-full border border-cream px-8 py-2 text-[1.0625rem] tracking-wide text-cream transition-colors hover:bg-cream hover:text-wine disabled:opacity-60"
      >
        {isSubmitting ? "Mengirim..." : "Konfirmasi di sini"}
      </button>
    </form>
  );
}
