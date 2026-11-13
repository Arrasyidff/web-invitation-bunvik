import { DEFAULT_INVITATION_ID, type InvitationId } from "@/lib/invitations";
import type { WishItem, CreateWishInput } from "../types";

export async function getWishesList(invitationId: InvitationId = DEFAULT_INVITATION_ID): Promise<WishItem[]> {
  const response = await fetch(`/api/wishes?${new URLSearchParams({ invitationId }).toString()}`);
  if (!response.ok) throw new Error("Gagal memuat ucapan");
  return response.json();
}

export async function createWish(
  input: CreateWishInput,
  invitationId: InvitationId = DEFAULT_INVITATION_ID
): Promise<void> {
  const response = await fetch("/api/wishes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...input, invitationId }),
  });
  if (!response.ok) throw new Error("Gagal mengirim ucapan");
}
