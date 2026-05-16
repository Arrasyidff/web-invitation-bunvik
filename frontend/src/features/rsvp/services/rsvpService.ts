import type { RsvpFormData } from "../types";

export async function submitRsvp(data: RsvpFormData): Promise<void> {
  const response = await fetch("/api/rsvp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Gagal mengirim RSVP");
  }
}
