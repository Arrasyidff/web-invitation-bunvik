"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { PRESS_INTERACTION, STORY_EASE } from "@/templates/crimson-story/components/storyMotion";
import { StoryReveal } from "@/templates/crimson-story/components/StoryReveal";
import type { WEDDING_GIFT } from "@/templates/crimson-story/content";

interface GiftBankCardProps {
  bankAccount: (typeof WEDDING_GIFT.bankAccounts)[number];
  revealDelay?: number;
}

const COPIED_LABEL_DURATION_MS = 2000;

/** Kartu rekening dengan tombol salin nomor. */
export function GiftBankCard({ bankAccount, revealDelay = 0 }: GiftBankCardProps) {
  const [isCopied, setIsCopied] = useState(false);
  const [hasCopyError, setHasCopyError] = useState(false);

  useEffect(() => {
    if (!isCopied) return;
    const timeout = setTimeout(() => setIsCopied(false), COPIED_LABEL_DURATION_MS);
    return () => clearTimeout(timeout);
  }, [isCopied]);

  async function handleCopyButtonClick() {
    try {
      await navigator.clipboard.writeText(bankAccount.accountNumber);
      setHasCopyError(false);
      setIsCopied(true);
    } catch {
      setHasCopyError(true);
    }
  }

  return (
    <StoryReveal
      direction="bottom"
      delay={revealDelay}
      isLiftedOnHover
      className="flex items-center justify-between gap-4 rounded-2xl bg-white px-5 py-4"
    >
      <div className="min-w-0">
        <p className="text-[0.75rem] font-semibold uppercase tracking-[0.25em]! text-maroon">{bankAccount.bankName}</p>
        <p className="mt-1 text-[1.25rem] font-medium tracking-wider! tabular-nums text-ink">
          {bankAccount.accountNumber}
        </p>
        <p className="text-[0.875rem] text-ink/65">a.n. {bankAccount.accountHolder}</p>
        {hasCopyError && <p className="mt-1 text-[0.75rem] text-red-700">Gagal menyalin, salin manual ya.</p>}
      </div>

      <motion.button
        {...PRESS_INTERACTION}
        type="button"
        onClick={handleCopyButtonClick}
        aria-live="polite"
        className={`inline-flex min-w-26 shrink-0 items-center justify-center overflow-hidden rounded-full px-4 py-2 text-[0.75rem] uppercase tracking-[0.15em] transition-colors ${
          isCopied ? "bg-maroon text-ivory" : "bg-maroon/10 text-maroon hover:bg-maroon/15"
        }`}
      >
        {/* Label lama keluar ke atas, label baru masuk dari bawah. */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isCopied ? "copied" : "idle"}
            className="inline-flex items-center gap-1.5"
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.18, ease: STORY_EASE }}
          >
            {isCopied && (
              <svg viewBox="0 0 12 12" aria-hidden="true" className="h-3 w-3">
                <motion.path
                  d="M2 6.5l2.5 2.5L10 3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.35, delay: 0.1 }}
                />
              </svg>
            )}
            {isCopied ? "Tersalin" : "Salin"}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </StoryReveal>
  );
}
