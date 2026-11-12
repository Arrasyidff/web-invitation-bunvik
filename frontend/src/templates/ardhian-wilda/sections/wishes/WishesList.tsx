import type { WishItem } from "@/features/wishes/types";
import { formatTimeAgo } from "@/lib/utils";

interface WishesListProps {
  wishes: WishItem[];
}

export function WishesList({ wishes }: WishesListProps) {
  if (wishes.length === 0) {
    return (
      <p className="mt-8 text-center text-[0.9375rem] italic text-foreground/50">
        Belum ada ucapan. Jadilah yang pertama!
      </p>
    );
  }

  return (
    <ul className="wishes-scroll mt-8 flex max-h-112 flex-col gap-3 overflow-y-auto pr-1">
      {wishes.map((wish) => (
        <li key={wish.id} className="border-l-2 border-wine bg-white/80 px-4 py-3 shadow-sm">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-[1.0625rem] font-semibold text-wine">{wish.guestName}</p>
            {wish.attendanceStatus === "hadir" && (
              <span className="rounded-full bg-sage/20 px-2 py-0.5 text-[0.75rem] text-sage">Hadir</span>
            )}
            {wish.attendanceStatus === "tidak_hadir" && (
              <span className="rounded-full bg-foreground/10 px-2 py-0.5 text-[0.75rem] text-foreground/60">
                Tidak Hadir
              </span>
            )}
          </div>
          <p className="mt-1 text-[0.9375rem] leading-relaxed text-foreground">{wish.message}</p>
          <p className="mt-2 text-right text-[0.8125rem] text-foreground/40">{formatTimeAgo(wish.createdAt)}</p>
        </li>
      ))}
    </ul>
  );
}
