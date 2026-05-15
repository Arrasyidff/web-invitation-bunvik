export interface WishItem {
  id: string;
  guestName: string;
  message: string;
  createdAt: string;
}

export interface CreateWishInput {
  guestName: string;
  message: string;
}
