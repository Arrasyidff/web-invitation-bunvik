"use client";

import { Fragment, useState, useEffect } from "react";
import { calculateCountdown, getEventStartDate, EMPTY_COUNTDOWN, type CountdownTime } from "@/lib/countdown";
import type { EventType } from "@/lib/types";

interface EventCountdownProps {
  eventType: EventType;
}

export function EventCountdown({ eventType }: EventCountdownProps) {
  const [countdown, setCountdown] = useState<CountdownTime>(EMPTY_COUNTDOWN);

  useEffect(() => {
    const eventStartDate = getEventStartDate(eventType);
    const tick = () => setCountdown(calculateCountdown(eventStartDate));

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [eventType]);

  const countdownUnits = [
    { value: countdown.days, label: "Hari" },
    { value: countdown.hours, label: "Jam" },
    { value: countdown.minutes, label: "Menit" },
    { value: countdown.seconds, label: "Detik" },
  ];

  return (
    <div className="mt-3 flex items-start justify-center gap-2">
      {countdownUnits.map((unit, i) => (
        <Fragment key={unit.label}>
          {i > 0 && <span className="text-[2.25rem] leading-none text-cream/70">:</span>}
          <div className="flex w-14 flex-col items-center">
            <span className="text-[2.5rem] font-medium leading-none tabular-nums">
              {String(unit.value).padStart(2, "0")}
            </span>
            <span className="mt-1 text-[0.8125rem] text-cream/80">{unit.label}</span>
          </div>
        </Fragment>
      ))}
    </div>
  );
}
