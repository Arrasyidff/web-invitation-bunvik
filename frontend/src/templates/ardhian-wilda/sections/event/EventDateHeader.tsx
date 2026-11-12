import { WEDDING_DATE } from "@/lib/constants";

/** Tanggal acara di zona waktu WITA, dipecah per bagian untuk ditata. */
const WEDDING_DAY = new Date(`${WEDDING_DATE}T00:00:00+08:00`);

function formatWeddingDay(options: Intl.DateTimeFormatOptions): string {
  return new Intl.DateTimeFormat("id-ID", { ...options, timeZone: "Asia/Makassar" }).format(WEDDING_DAY);
}

export function EventDateHeader() {
  const monthName = formatWeddingDay({ month: "long" });
  const dayName = formatWeddingDay({ weekday: "long" });
  const dayNumber = formatWeddingDay({ day: "2-digit" });
  const yearNumber = formatWeddingDay({ year: "numeric" });

  return (
    <div>
      <p className="text-[0.9375rem] uppercase tracking-[0.35em] text-cream/90">{monthName}</p>
      <div className="mt-2 flex items-center justify-center gap-4">
        <span className="w-24 border-y border-cream/60 py-1 text-[0.875rem] uppercase tracking-[0.2em]">
          {dayName}
        </span>
        <span className="font-display text-[4rem] leading-none">{dayNumber}</span>
        <span className="w-24 border-y border-cream/60 py-1 text-[0.875rem] tracking-[0.2em]">{yearNumber}</span>
      </div>
    </div>
  );
}
