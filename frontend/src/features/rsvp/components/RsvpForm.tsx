"use client";

import { useState } from "react";
import type { RsvpFormData } from "../types";
import { submitRsvp } from "../services/rsvpService";
import { validateRsvpForm, type RsvpFieldErrors } from "../rsvpSchema";

interface RsvpFormProps {
  onSubmitSuccess: () => void;
}

const initialFormData: RsvpFormData = {
  guestName: "",
  guestCount: 0,
  attendanceStatus: "hadir",
  message: "",
};

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-[0.875rem] text-red-500">{message}</p>;
}

export function RsvpForm({ onSubmitSuccess }: RsvpFormProps) {
  const [formData, setFormData] = useState<RsvpFormData>(initialFormData);
  const [fieldErrors, setFieldErrors] = useState<RsvpFieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasError, setHasError] = useState(false);

  function clearFieldError(field: keyof RsvpFormData) {
    setFieldErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  async function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
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
    <form onSubmit={handleFormSubmit} className="mt-8 flex flex-col gap-1.5">
      <div className="flex flex-col gap-1.5">
        <label className="text-[1.125rem] text-foreground">Nama:</label>
        <input
          type="text"
          value={formData.guestName}
          onChange={(e) => {
            setFormData({ ...formData, guestName: e.target.value });
            clearFieldError("guestName");
          }}
          className="w-full rounded-full border border-foreground/25 bg-transparent px-5 py-2.5 text-[1.125rem] text-foreground outline-none focus:border-foreground/50"
        />
        <FieldError message={fieldErrors.guestName} />
      </div>

      {formData.attendanceStatus === "hadir" && (
        <div className="flex flex-col gap-1.5">
          <label className="text-[1.125rem] text-foreground">Jumlah hadir:</label>
          <input
            type="number"
            min={1}
            max={10}
            placeholder="0/10"
            value={formData.guestCount > 0 ? formData.guestCount : ""}
            onChange={(e) => {
              const raw = e.target.value;
              setFormData({
                ...formData,
                guestCount: raw === "" ? 0 : Number(raw),
              });
              clearFieldError("guestCount");
            }}
            className="w-full rounded-full border border-foreground/25 bg-transparent px-5 py-2.5 text-[1.125rem] text-foreground outline-none focus:border-foreground/50 placeholder:text-foreground/40"
          />
          <FieldError message={fieldErrors.guestCount} />
        </div>
      )}

      <div className="flex flex-col gap-1.5">
        <span className="text-[1.125rem] text-foreground">Konfirmasi Kehadiran</span>
        <label className="flex cursor-pointer items-center gap-3">
          <input
            type="radio"
            name="attendanceStatus"
            value="hadir"
            checked={formData.attendanceStatus === "hadir"}
            onChange={() => {
              setFormData({ ...formData, attendanceStatus: "hadir" });
              clearFieldError("attendanceStatus");
              clearFieldError("guestCount");
            }}
            className="h-4 w-4 accent-foreground"
          />
          <span className="text-[1.125rem] text-foreground">Hadir</span>
        </label>
        <label className="flex cursor-pointer items-center gap-3">
          <input
            type="radio"
            name="attendanceStatus"
            value="tidak_hadir"
            checked={formData.attendanceStatus === "tidak_hadir"}
            onChange={() => {
              setFormData({ ...formData, attendanceStatus: "tidak_hadir", guestCount: 0 });
              clearFieldError("attendanceStatus");
              clearFieldError("guestCount");
            }}
            className="h-4 w-4 accent-foreground"
          />
          <span className="text-[1.125rem] text-foreground">Maaf, Saya tidak bisa hadir</span>
        </label>
        <FieldError message={fieldErrors.attendanceStatus} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[1.125rem] text-foreground">Ucapan & Doa (opsional):</label>
        <textarea
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
            clearFieldError("message");
          }}
          rows={3}
          className="w-full rounded-2xl border border-foreground/25 bg-transparent px-5 py-2.5 text-[1.125rem] text-foreground outline-none focus:border-foreground/50 resize-none"
        />
        <FieldError message={fieldErrors.message} />
      </div>

      {hasError && (
        <p className="text-center text-[0.875rem] text-red-500">
          Gagal mengirim. Silakan coba lagi.
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-1.5 w-full rounded-full py-3 text-[1rem] font-semibold text-white disabled:opacity-60"
        style={{ background: 'linear-gradient(142deg, #4299E1 0%, #3783C2 100%)' }}
      >
        {isSubmitting ? "Mengirim..." : "Submit"}
      </button>
    </form>
  );
}
