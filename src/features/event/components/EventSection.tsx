"use client";

import { useState, useEffect } from "react";
import {
  GROOM_NAME,
  BRIDE_NAME,
  WEDDING_DATE,
  WEDDING_DATE_SHORT,
  AKAD_TIME,
  VENUE_NAME,
  MAPS_URL,
  MAPS_EMBED_URL,
} from "@/lib/constants";

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownBoxProps {
  value: number;
  label: string;
}

function CountdownBox({ value, label }: CountdownBoxProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-[72px] h-[72px] bg-white border border-white flex items-center justify-center">
        <span className="text-[2rem] font-semibold text-[#343434] leading-none">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-[0.75rem] tracking-widest uppercase text-white">{label}</span>
    </div>
  );
}

export function EventSection() {
  const [countdown, setCountdown] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingTarget = new Date(`${WEDDING_DATE}T09:00:00+08:00`);

    const tick = () => {
      const diff = weddingTarget.getTime() - Date.now();

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
  }, []);

  const countdownItems: CountdownBoxProps[] = [
    { value: countdown.days, label: "Hari" },
    { value: countdown.hours, label: "Jam" },
    { value: countdown.minutes, label: "Menit" },
    { value: countdown.seconds, label: "Detik" },
  ];

  return (
    <section id="event" className="relative w-full px-6 py-14">
      <div className="bg-[#3B9CDA] rounded-2xl px-7 py-10 text-white text-center">

        {/* Save The Date */}
        <h2 className="font-[family-name:var(--font-pinyon)] text-[3.5rem] leading-tight">
          Save The Date
        </h2>

        {/* Wedding of */}
        <p className="mt-5 text-[0.7rem] uppercase tracking-[0.25em] font-light">
          For The Wedding Of
        </p>

        <h3 className="mt-1 text-[1.5rem] font-bold uppercase tracking-[0.15em]">
          {GROOM_NAME} &amp; {BRIDE_NAME}
        </h3>

        <p className="mt-2 text-[1rem] tracking-[0.4em]">{WEDDING_DATE_SHORT}</p>

        {/* Divider */}
        <div className="mx-auto mt-7 mb-7 w-3/4 border-t border-white/30" />

        {/* Akad heading */}
        <h4 className="text-[1.75rem] uppercase tracking-[0.3em] font-light">Akad</h4>
        <p className="mt-1 text-[0.9375rem] tracking-wide">{AKAD_TIME}</p>

        {/* Countdown */}
        <div className="mt-7 flex justify-center gap-3">
          {countdownItems.map((item) => (
            <CountdownBox key={item.label} value={item.value} label={item.label} />
          ))}
        </div>

        {/* Location link */}
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 flex items-center justify-center gap-2 text-white underline underline-offset-2 text-[0.8125rem] uppercase tracking-widest"
        >
          <span>📍</span>
          <span>{VENUE_NAME}</span>
        </a>

        {/* Maps embed */}
        <div className="mt-4 w-full h-48 overflow-hidden rounded-lg">
          <iframe
            src={MAPS_EMBED_URL}
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Lokasi ${VENUE_NAME}`}
          />
        </div>
      </div>
    </section>
  );
}
