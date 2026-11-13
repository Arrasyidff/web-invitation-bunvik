"use client";

import { useState, useEffect } from "react";
import { calculateCountdown, EMPTY_COUNTDOWN, type CountdownTime } from "@/lib/countdown";

interface EventCountdownProps {
  targetIsoDate: string;
}

export function EventCountdown({ targetIsoDate }: EventCountdownProps) {
  const [countdown, setCountdown] = useState<CountdownTime>(EMPTY_COUNTDOWN);

  useEffect(() => {
    const targetDate = new Date(targetIsoDate);
    const tick = () => setCountdown(calculateCountdown(targetDate));

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [targetIsoDate]);

  const countdownUnits = [
    { value: countdown.days, label: "Hari" },
    { value: countdown.hours, label: "Jam" },
    { value: countdown.minutes, label: "Menit" },
    { value: countdown.seconds, label: "Detik" },
  ];

  return (
    <div className="mt-8 grid grid-cols-4 gap-2.5">
      {countdownUnits.map((unit) => (
        <div
          key={unit.label}
          className="flex aspect-square flex-col items-center justify-center rounded-2xl border border-ivory/35 bg-ivory/10"
        >
          <span className="text-[1.875rem] font-semibold leading-none tabular-nums">
            {String(unit.value).padStart(2, "0")}
          </span>
          <span className="mt-1 text-[0.8125rem] uppercase tracking-wider text-ivory/75">{unit.label}</span>
        </div>
      ))}
    </div>
  );
}
