import { WEDDING_DATE } from "@/lib/constants";
import type { EventType } from "@/lib/types";

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const EVENT_START_TIME: Record<EventType, string> = {
  akad: "T09:00:00+08:00",
  resepsi: "T10:30:00+08:00",
};

export const EMPTY_COUNTDOWN: CountdownTime = { days: 0, hours: 0, minutes: 0, seconds: 0 };

export function getEventStartDate(eventType: EventType): Date {
  return new Date(`${WEDDING_DATE}${EVENT_START_TIME[eventType]}`);
}

export function calculateCountdown(targetDate: Date, now: number = Date.now()): CountdownTime {
  const diff = targetDate.getTime() - now;
  if (diff <= 0) return EMPTY_COUNTDOWN;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}
