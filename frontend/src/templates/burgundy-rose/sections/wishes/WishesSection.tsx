"use client";

import { useState, useEffect } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { getWishesList } from "@/features/wishes/services/wishesService";
import type { WishItem } from "@/features/wishes/types";
import { ChatHeartIcon } from "@/templates/burgundy-rose/components/LineIcons";
import { WishesList } from "./WishesList";

interface WishesSectionProps {
  refreshKey?: number;
}

export function WishesSection({ refreshKey = 0 }: WishesSectionProps) {
  const [wishesList, setWishesList] = useState<WishItem[]>([]);

  useEffect(() => {
    async function fetchWishes() {
      try {
        setWishesList(await getWishesList());
      } catch {
        // Gagal memuat: biarkan daftar kosong
      }
    }
    fetchWishes();
  }, [refreshKey]);

  return (
    <section id="wishes" className="px-8 pb-16 pt-6">
      <ScrollReveal direction="bottom" className="text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-burgundy text-blush shadow-md">
          <ChatHeartIcon className="h-7 w-7" />
        </span>
        <h2 className="mt-3 font-display text-[3.25rem] leading-tight text-burgundy">Ucapan &amp; Doa</h2>
        <p className="mt-2 text-[1.0625rem] leading-relaxed text-foreground/80">
          Terima kasih atas segala doa dan ucapan selamat yang telah Bapak/Ibu/Saudara/i sampaikan.
          Semoga Allah SWT membalas kebaikan kalian berlipat ganda.
        </p>
      </ScrollReveal>

      <ScrollReveal direction="bottom" delay={100}>
        <WishesList wishes={wishesList} />
      </ScrollReveal>
    </section>
  );
}
