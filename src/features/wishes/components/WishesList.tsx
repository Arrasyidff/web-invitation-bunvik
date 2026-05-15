import type { WishItem } from "../types";
import { formatTimeAgo } from "@/lib/utils";

interface WishesListProps {
  wishes: WishItem[];
}

export function WishesList({ wishes }: WishesListProps) {
  if (wishes.length === 0) {
    return (
      <p className="mt-8 text-center text-[0.9375rem] text-[#343434]/50">
        Belum ada ucapan. Jadilah yang pertama!
      </p>
    );
  }

  return (
    <div className="mt-6 flex flex-col gap-4">
      {wishes.map((wish) => (
        <div key={wish.id} className="rounded-2xl bg-white/60 p-5 shadow-sm">
          <p className="text-[1rem] font-bold text-[#343434]">{wish.guestName}</p>
          <p className="mt-1 text-[0.9375rem] text-[#343434] leading-relaxed">
            {wish.message}
          </p>
          <p className="mt-3 text-right text-[0.8125rem] text-[#343434]/40">
            {formatTimeAgo(wish.createdAt)}
          </p>
        </div>
      ))}
    </div>
  );
}
