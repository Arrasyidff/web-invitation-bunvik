/**
 * Undangan yang dilayani backend ini. Setiap RSVP ditandai dengan salah satu id ini
 * agar data antar undangan tidak tercampur.
 */
export const INVITATION_IDS = ["hendra-vika", "zakiya-fadel"];

/**
 * Undangan pertama. RSVP lama (dibuat sebelum field `invitationId` ada) tidak
 * memiliki field tersebut dan dianggap milik undangan ini.
 */
export const DEFAULT_INVITATION_ID = "hendra-vika";

/** Filter MongoDB untuk satu undangan, termasuk data lama tanpa `invitationId`. */
export const buildInvitationFilter = (invitationId) => {
  if (!invitationId) return {};
  if (invitationId === DEFAULT_INVITATION_ID) {
    return {
      $or: [{ invitationId }, { invitationId: { $exists: false } }],
    };
  }
  return { invitationId };
};
