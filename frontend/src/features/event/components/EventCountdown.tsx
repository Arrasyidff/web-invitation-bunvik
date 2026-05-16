"use client";

import { useState, useEffect } from "react";
import { WEDDING_DATE } from "@/lib/constants";
import { EventCountdownBox } from "./EventCountdownBox";

type EventType = "akad" | "resepsi";

interface EventCountdownProps {
  eventType?: EventType;
}

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function EventCountdown({ eventType = "resepsi" }: EventCountdownProps) {
  const [countdown, setCountdown] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetTime = eventType === "akad" ? "T09:00:00+08:00" : "T10:30:00+08:00";
    const eventTarget = new Date(`${WEDDING_DATE}${targetTime}`);

    const tick = () => {
      const diff = eventTarget.getTime() - Date.now();

      if (diff <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setCountdown({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [eventType]);

  const boxes = [
    { value: countdown.days, label: "Hari" },
    { value: countdown.hours, label: "Jam" },
    { value: countdown.minutes, label: "Menit" },
    { value: countdown.seconds, label: "Detik" },
  ];

  return (
    <div className="mt-7.5 flex justify-center gap-3">
      {boxes.map((box) => (
        <EventCountdownBox key={box.label} value={box.value} label={box.label} />
      ))}
    </div>
  );
}
