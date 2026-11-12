import type { ComponentType } from "react";
import type { InvitationTemplateProps } from "@/lib/types";
import { ClassicBlueInvitation } from "@/templates/classic-blue/ClassicBlueInvitation";
import { ArdhianWildaInvitation } from "@/templates/ardhian-wilda/ArdhianWildaInvitation";
import { BurgundyRoseInvitation } from "@/templates/burgundy-rose/BurgundyRoseInvitation";

/** Daftar semua template undangan. Tambahkan template baru di sini. */
export const INVITATION_TEMPLATES = {
  "classic-blue": ClassicBlueInvitation,
  "ardhian-wilda": ArdhianWildaInvitation,
  "burgundy-rose": BurgundyRoseInvitation,
} satisfies Record<string, ComponentType<InvitationTemplateProps>>;

export type TemplateId = keyof typeof INVITATION_TEMPLATES;

/** Template yang dipakai di halaman undangan publik. */
export const ACTIVE_TEMPLATE_ID: TemplateId = "classic-blue";

export const ActiveInvitationTemplate = INVITATION_TEMPLATES[ACTIVE_TEMPLATE_ID];
