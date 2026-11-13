"use client";

import { useEffect, useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
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
    <ScrollReveal
      direction="bottom"
      delay={revealDelay}
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

      <button
        type="button"
        onClick={handleCopyButtonClick}
        aria-live="polite"
        className={`shrink-0 rounded-full px-4 py-2 text-[0.75rem] uppercase tracking-[0.15em] transition-colors ${
          isCopied ? "bg-maroon text-ivory" : "bg-maroon/10 text-maroon hover:bg-maroon/15"
        }`}
      >
        {isCopied ? "Tersalin" : "Salin"}
      </button>
    </ScrollReveal>
  );
}
