"use client";

import { useState, useEffect } from "react";
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
    <div className="mx-auto mt-6 grid max-w-72 grid-cols-4 divide-x divide-blush-rose/50 border-y border-blush-rose/50 py-3">
      {countdownUnits.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center">
          <span className="text-[1.75rem] font-semibold leading-none tabular-nums text-burgundy">
            {String(unit.value).padStart(2, "0")}
          </span>
          <span className="mt-1 text-[0.75rem] uppercase tracking-widest text-foreground/60">{unit.label}</span>
        </div>
      ))}
    </div>
  );
}
