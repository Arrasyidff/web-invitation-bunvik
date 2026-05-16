export interface WishItem {
  id: string;
  guestName: string;
  message: string;
  attendanceStatus?: "hadir" | "tidak_hadir";
  createdAt: string;
}

export interface CreateWishInput {
  guestName: string;
  message: string;
}
