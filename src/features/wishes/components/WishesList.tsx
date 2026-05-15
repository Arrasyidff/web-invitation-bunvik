import type { WishItem } from "../types";
import { formatTimeAgo } from "@/lib/utils";

interface WishesListProps {
  wishes: WishItem[];
}

export function WishesList({ wishes }: WishesListProps) {
  if (wishes.length === 0) {
    return (
      <p className="mt-7.5 text-center text-[0.9375rem] text-foreground/50">
        Belum ada ucapan. Jadilah yang pertama!
      </p>
    );
  }

  return (
    <div className="mt-7.5 flex flex-col gap-2.5 max-h-125 overflow-y-auto pr-1 wishes-scroll">
      {wishes.map((wish) => (
        <div key={wish.id} className="rounded-[9px] bg-white/60 p-5 shadow-md w-[99%]">
          <p className="text-[1.125rem] font-bold text-foreground">{wish.guestName}</p>
          <p className="mt-1 font-bold text-[0.9375rem] text-foreground leading-relaxed">
            {wish.message}
          </p>
          <p className="mt-3 font-bold text-right text-[0.8125rem] text-foreground/40">
            {formatTimeAgo(wish.createdAt)}
          </p>
        </div>
      ))}
    </div>
  );
}
