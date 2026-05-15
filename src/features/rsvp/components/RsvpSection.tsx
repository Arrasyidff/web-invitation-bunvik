"use client";

import { useState } from "react";
import type { RsvpFormData } from "../types";
import { submitRsvp } from "../services/rsvpService";

interface RsvpSectionProps {}

export function RsvpSection({}: RsvpSectionProps) {
  const [formData, setFormData] = useState<RsvpFormData>({
    guestName: "",
    guestCount: 1,
    attendanceStatus: "hadir",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);

  async function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setHasError(false);

    try {
      await submitRsvp(formData);
      setIsSubmitted(true);
    } catch {
      setHasError(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="rsvp" className="w-full px-6 py-14">
      <h2 className="text-center text-[3rem] font-bold tracking-wider text-[#343434]">
        RSVP
      </h2>

      <p className="mt-5 text-center text-[0.9375rem] text-[#343434] leading-relaxed">
        Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga apabila
        Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kami.
        Atas kehadiran serta doa restu, kami ucapkan terima kasih.
      </p>

      {isSubmitted ? (
        <div className="mt-10 text-center">
          <p className="text-[1.0625rem] text-[#343434]">
            Terima kasih! Konfirmasi kehadiran Anda telah kami terima.
          </p>
        </div>
      ) : (
        <form onSubmit={handleFormSubmit} className="mt-8 flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-[0.9375rem] text-[#343434]">Nama:</label>
            <input
              type="text"
              required
              value={formData.guestName}
              onChange={(e) =>
                setFormData({ ...formData, guestName: e.target.value })
              }
              className="w-full rounded-full border border-[#343434]/25 bg-transparent px-5 py-2.5 text-[0.9375rem] text-[#343434] outline-none focus:border-[#343434]/50"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[0.9375rem] text-[#343434]">
              Jumlah tamu (orang):
            </label>
            <input
              type="number"
              min={1}
              required
              value={formData.guestCount}
              onChange={(e) =>
                setFormData({ ...formData, guestCount: Number(e.target.value) })
              }
              className="w-full rounded-full border border-[#343434]/25 bg-transparent px-5 py-2.5 text-[0.9375rem] text-[#343434] outline-none focus:border-[#343434]/50"
            />
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-[0.9375rem] text-[#343434]">
              Konfirmasi Kehadiran
            </span>
            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="radio"
                name="attendanceStatus"
                value="hadir"
                checked={formData.attendanceStatus === "hadir"}
                onChange={() =>
                  setFormData({ ...formData, attendanceStatus: "hadir" })
                }
                className="h-4 w-4 accent-[#343434]"
              />
              <span className="text-[0.9375rem] text-[#343434]">Hadir</span>
            </label>
            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="radio"
                name="attendanceStatus"
                value="tidak_hadir"
                checked={formData.attendanceStatus === "tidak_hadir"}
                onChange={() =>
                  setFormData({ ...formData, attendanceStatus: "tidak_hadir" })
                }
                className="h-4 w-4 accent-[#343434]"
              />
              <span className="text-[0.9375rem] text-[#343434]">
                Maaf, Saya tidak bisa hadir
              </span>
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
            className="mt-2 w-full rounded-lg bg-[#3B9CDA] py-3 text-[1rem] font-semibold text-white disabled:opacity-60"
          >
            {isSubmitting ? "Mengirim..." : "Submit"}
          </button>
        </form>
      )}
    </section>
  );
}
