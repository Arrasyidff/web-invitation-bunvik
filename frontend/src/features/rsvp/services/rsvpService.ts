import type { RsvpFormData } from "../types";

export async function submitRsvp(data: RsvpFormData): Promise<void> {
  const payload = {
    nama: data.guestName,
    statusKehadiran: data.attendanceStatus,
    jumlahHadir: data.attendanceStatus === "hadir" ? data.guestCount : 0,
    ucapanDoa: data.message?.trim() || (data.attendanceStatus === "hadir" ? "Hadir" : "Tidak Hadir"),
  };

  const response = await fetch("/api/v1/rsvp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Gagal mengirim RSVP");
  }
}
