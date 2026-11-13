import { DEFAULT_INVITATION_ID, type InvitationId } from "@/lib/invitations";
import type { RsvpFormData, RsvpSubmission } from "../types";

export async function submitRsvp(
  data: RsvpFormData,
  invitationId: InvitationId = DEFAULT_INVITATION_ID
): Promise<void> {
  const submission: RsvpSubmission = { ...data, invitationId };
  const response = await fetch("/api/rsvp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(submission),
  });

  if (!response.ok) {
    throw new Error("Gagal mengirim RSVP");
  }
}
