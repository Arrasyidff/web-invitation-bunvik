export interface RsvpEntry {
  id: string;
  nama: string;
  statusKehadiran: "hadir" | "tidak_hadir";
  jumlahHadir: number;
  ucapanDoa: string;
  createdAt: string;
  isDeleted: boolean;
  deletedAt: string | null;
}
