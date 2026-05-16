import type { RsvpFormData } from "./types";

export type RsvpFieldErrors = Partial<Record<keyof RsvpFormData, string>>;

/** Mirrors backend `rsvpSchema` in `backend/src/routes/rsvp.routes.js` */
export function validateRsvpForm(data: RsvpFormData): RsvpFieldErrors {
  const errors: RsvpFieldErrors = {};

  const nama = data.guestName.trim();
  if (!nama) {
    errors.guestName = "Nama wajib diisi";
  } else if (nama.length < 2) {
    errors.guestName = "Nama minimal 2 karakter";
  } else if (nama.length > 100) {
    errors.guestName = "Nama maksimal 100 karakter";
  }

  if (!data.attendanceStatus) {
    errors.attendanceStatus = "Status kehadiran wajib dipilih";
  } else if (data.attendanceStatus === "hadir") {
    if (!Number.isInteger(data.guestCount) || data.guestCount < 0) {
      errors.guestCount = "Jumlah hadir tidak valid";
    } else if (data.guestCount === 0) {
      errors.guestCount = "Jumlah hadir tidak boleh 0";
    } else if (data.guestCount > 10) {
      errors.guestCount = "Jumlah hadir maksimal 10";
    }
  }

  const ucapan = (data.message ?? "").trim();
  if (ucapan.length > 0 && (ucapan.length < 5 || ucapan.length > 500)) {
    errors.message = "Ucapan & doa minimal 5 karakter, maksimal 500 karakter";
  }

  return errors;
}
