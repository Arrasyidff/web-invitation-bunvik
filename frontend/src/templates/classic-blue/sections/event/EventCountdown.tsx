"use client";

import { useState, useEffect } from "react";
import { calculateCountdown, getEventStartDate, EMPTY_COUNTDOWN, type CountdownTime } from "@/lib/countdown";
import type { EventType } from "@/lib/types";
import { EventCountdownBox } from "./EventCountdownBox";

interface EventCountdownProps {
  eventType?: EventType;
}

export function EventCountdown({ eventType = "resepsi" }: EventCountdownProps) {
  const [countdown, setCountdown] = useState<CountdownTime>(EMPTY_COUNTDOWN);

  useEffect(() => {
    const eventStartDate = getEventStartDate(eventType);

    const tick = () => {
      setCountdown(calculateCountdown(eventStartDate));
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
