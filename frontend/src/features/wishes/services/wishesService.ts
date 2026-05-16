import type { WishItem, CreateWishInput } from "../types";

export async function getWishesList(): Promise<WishItem[]> {
  const response = await fetch("/api/wishes");
  if (!response.ok) throw new Error("Gagal memuat ucapan");
  return response.json();
}

export async function createWish(input: CreateWishInput): Promise<void> {
  const response = await fetch("/api/wishes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  if (!response.ok) throw new Error("Gagal mengirim ucapan");
}
