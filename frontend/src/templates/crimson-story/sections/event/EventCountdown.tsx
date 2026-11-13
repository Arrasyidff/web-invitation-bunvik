"use client";

import { useState, useEffect } from "react";
import { calculateCountdown, EMPTY_COUNTDOWN, type CountdownTime } from "@/lib/countdown";

interface EventCountdownProps {
  targetIsoDate: string;
}

/** Hitung mundur berjajar dengan pemisah tipis; setelah acara lewat diganti satu kalimat. */
export function EventCountdown({ targetIsoDate }: EventCountdownProps) {
  const [countdown, setCountdown] = useState<CountdownTime>(EMPTY_COUNTDOWN);
  const [hasEventStarted, setHasEventStarted] = useState(false);

  useEffect(() => {
    const targetDate = new Date(targetIsoDate);
    const tick = () => {
      setCountdown(calculateCountdown(targetDate));
      setHasEventStarted(Date.now() >= targetDate.getTime());
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [targetIsoDate]);

  if (hasEventStarted) {
    return (
      <p className="mt-8 text-center text-[1.0625rem] text-ivory/85">
        Alhamdulillah, hari yang dinanti telah tiba.
      </p>
    );
  }

  const countdownUnits = [
    { value: countdown.days, label: "Hari" },
    { value: countdown.hours, label: "Jam" },
    { value: countdown.minutes, label: "Menit" },
    { value: countdown.seconds, label: "Detik" },
  ];

  return (
    <div className="mt-8 grid grid-cols-4 py-2">
      {countdownUnits.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center">
          <span className="text-[1.875rem] font-medium leading-none tabular-nums">
            {String(unit.value).padStart(2, "0")}
          </span>
          <span className="mt-1.5 text-[0.75rem] uppercase tracking-[0.2em] text-ivory/65">{unit.label}</span>
        </div>
      ))}
    </div>
  );
}
