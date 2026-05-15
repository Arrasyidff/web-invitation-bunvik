"use client";

import { useState } from "react";
import type { RsvpFormData } from "../types";
import { submitRsvp } from "../services/rsvpService";

interface RsvpFormProps {
  onSubmitSuccess: () => void;
}

export function RsvpForm({ onSubmitSuccess }: RsvpFormProps) {
  const [formData, setFormData] = useState<RsvpFormData>({
    guestName: "",
    guestCount: 1,
    attendanceStatus: "hadir",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasError, setHasError] = useState(false);

  async function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setHasError(false);

    try {
      await submitRsvp(formData);
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
          required
          value={formData.guestName}
          onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
          className="w-full rounded-full border border-foreground/25 bg-transparent px-5 py-2.5 text-[1.125rem] text-foreground outline-none focus:border-foreground/50"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[1.125rem] text-foreground">Jumlah tamu (orang):</label>
        <input
          type="number"
          min={1}
          required
          value={formData.guestCount}
          onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
          className="w-full rounded-full border border-foreground/25 bg-transparent px-5 py-2.5 text-[1.125rem] text-foreground outline-none focus:border-foreground/50"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <span className="text-[1.125rem] text-foreground">Konfirmasi Kehadiran</span>
        <label className="flex cursor-pointer items-center gap-3">
          <input
            type="radio"
            name="attendanceStatus"
            value="hadir"
            checked={formData.attendanceStatus === "hadir"}
            onChange={() => setFormData({ ...formData, attendanceStatus: "hadir" })}
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
            onChange={() => setFormData({ ...formData, attendanceStatus: "tidak_hadir" })}
            className="h-4 w-4 accent-foreground"
          />
          <span className="text-[1.125rem] text-foreground">Maaf, Saya tidak bisa hadir</span>
        </label>
      </div>

      {hasError && (
        <p className="text-center text-[0.875rem] text-red-500">
          Gagal mengirim. Silakan coba lagi.
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 w-full rounded-full bg-[#3B9CDA] py-3 text-[1rem] font-semibold text-white disabled:opacity-60"
      >
        {isSubmitting ? "Mengirim..." : "Submit"}
      </button>
    </form>
  );
}
