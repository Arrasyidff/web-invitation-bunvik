/**
 * Id undangan yang dikenali backend. Setiap RSVP/ucapan ditandai dengan salah satunya
 * agar data antar undangan tidak tercampur. Harus sama dengan
 * `backend/src/config/invitations.js`.
 */
export const INVITATION_IDS = ["hendra-vika", "zakiya-fadel"] as const;

export type InvitationId = (typeof INVITATION_IDS)[number];

/** Undangan utama (classic-blue, Hendra & Vika); juga pemilik data RSVP lama. */
export const DEFAULT_INVITATION_ID: InvitationId = "hendra-vika";

export function isInvitationId(value: unknown): value is InvitationId {
  return typeof value === "string" && (INVITATION_IDS as readonly string[]).includes(value);
}

/** Ambil id undangan dari input yang tidak tepercaya; jatuh ke default jika tidak valid. */
export function resolveInvitationId(value: unknown): InvitationId {
  return isInvitationId(value) ? value : DEFAULT_INVITATION_ID;
}

/**
 * Field `invitationId` untuk body POST ke backend. Undangan utama tidak dikirim
 * (backend mengisinya sebagai default), sehingga request undangan utama tetap sama
 * persis dengan sebelum fitur ini ada dan aman terhadap backend versi lama.
 */
export function invitationIdPayload(value: unknown): { invitationId?: InvitationId } {
  const invitationId = resolveInvitationId(value);
  return invitationId === DEFAULT_INVITATION_ID ? {} : { invitationId };
}
