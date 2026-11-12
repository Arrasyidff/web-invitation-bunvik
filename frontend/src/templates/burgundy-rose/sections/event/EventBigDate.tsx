import { WEDDING_DATE, AKAD_TIME, RECEPTION_TIME } from "@/lib/constants";
import type { EventType } from "@/lib/types";

interface EventBigDateProps {
  eventType: EventType;
}

/** Tanggal acara di zona waktu WITA, dipecah per bagian untuk ditata. */
const WEDDING_DAY = new Date(`${WEDDING_DATE}T00:00:00+08:00`);

function formatWeddingDay(options: Intl.DateTimeFormatOptions): string {
  return new Intl.DateTimeFormat("id-ID", { ...options, timeZone: "Asia/Makassar" }).format(WEDDING_DAY);
}

export function EventBigDate({ eventType }: EventBigDateProps) {
  const eventTime = eventType === "akad" ? AKAD_TIME : RECEPTION_TIME;

  return (
    <div className="flex flex-col items-center">
      <span className="text-[6rem] font-bold leading-[0.85] text-burgundy">
        {formatWeddingDay({ day: "2-digit" })}
      </span>
      <span className="-mt-6 -rotate-6 font-display text-[3.75rem] leading-none text-gold">
        {formatWeddingDay({ month: "long" })}
      </span>
      <span className="mt-1 text-[1.75rem] font-semibold tracking-[0.35em] text-foreground">
        {formatWeddingDay({ year: "numeric" })}
      </span>
      <p className="mt-4 flex items-center gap-2 text-[1.0625rem] text-burgundy">
        <span className="text-gold">♥</span>
        {formatWeddingDay({ weekday: "long" })} | {eventTime}
        <span className="text-gold">♥</span>
      </p>
    </div>
  );
}
