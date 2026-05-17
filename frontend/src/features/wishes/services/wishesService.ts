import type { WishItem, CreateWishInput } from "../types";

interface BackendRsvpItem {
  _id: string;
  nama: string;
  ucapanDoa: string;
  statusKehadiran: "hadir" | "tidak_hadir";
  createdAt: string;
  isDeleted: boolean;
}

export async function getWishesList(): Promise<WishItem[]> {
  const response = await fetch("/api/v1/rsvp", { cache: "no-store" });
  if (!response.ok) throw new Error("Gagal memuat ucapan");

  const { data }: { data: BackendRsvpItem[] } = await response.json();

  return data
    .filter((item) => !item.isDeleted)
    .map((item) => ({
      id: item._id,
      guestName: item.nama,
      message: item.ucapanDoa,
      attendanceStatus: item.statusKehadiran,
      createdAt: item.createdAt,
    }));
}

export async function createWish(input: CreateWishInput): Promise<void> {
  const payload = {
    nama: input.guestName,
    statusKehadiran: "hadir",
    jumlahHadir: 1,
    ucapanDoa: input.message,
  };

  const response = await fetch("/api/v1/rsvp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw new Error("Gagal mengirim ucapan");
}
