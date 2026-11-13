import type { InvitationId } from "@/lib/invitations";

export interface RsvpFormData {
  guestName: string;
  guestCount: number;
  attendanceStatus: "hadir" | "tidak_hadir";
  message?: string;
}

/** Body yang dikirim ke `/api/rsvp`: isi form + undangan asalnya. */
export interface RsvpSubmission extends RsvpFormData {
  invitationId?: InvitationId;
}
