"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { RISE_VARIANTS, STORY_EASE, createStaggerVariants } from "@/templates/crimson-story/components/storyMotion";
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
    <motion.div
      className="mt-8 grid grid-cols-4 py-2"
      variants={createStaggerVariants(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
    >
      {countdownUnits.map((unit) => (
        <motion.div key={unit.label} variants={RISE_VARIANTS} className="flex flex-col items-center">
          {/* Angka lama keluar ke atas, angka baru masuk dari bawah, seperti kalender sobek. */}
          <span className="relative flex h-[1em] items-center overflow-hidden text-[1.875rem] font-medium leading-none tabular-nums">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={unit.value}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.4, ease: STORY_EASE }}
              >
                {String(unit.value).padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
          </span>
          <span className="mt-1.5 text-[0.75rem] uppercase tracking-[0.2em] text-ivory/65">{unit.label}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}
