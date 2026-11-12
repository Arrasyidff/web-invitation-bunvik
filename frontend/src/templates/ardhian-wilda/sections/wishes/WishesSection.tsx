"use client";

import { useState, useEffect } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { getWishesList } from "@/features/wishes/services/wishesService";
import type { WishItem } from "@/features/wishes/types";
import { FloralDivider } from "@/templates/ardhian-wilda/components/FloralDivider";
import { ChatHeartIcon } from "@/templates/ardhian-wilda/components/LineIcons";
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
    <section id="wishes">
      <FloralDivider className="-mt-2" />
      <div className="px-8 pb-12 pt-6">
        <ScrollReveal direction="bottom" className="text-center">
          <ChatHeartIcon className="mx-auto h-9 w-9 text-wine" />
          <h2 className="mt-3 text-[1rem] font-semibold uppercase tracking-[0.3em] text-wine">Ucapan &amp; Doa</h2>
          <p className="mt-3 text-[1.0625rem] leading-relaxed text-foreground/80">
            Terima kasih atas segala doa dan ucapan selamat yang telah Bapak/Ibu/Saudara/i sampaikan.
            Semoga Allah SWT membalas kebaikan kalian berlipat ganda.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="bottom" delay={100}>
          <WishesList wishes={wishesList} />
        </ScrollReveal>
      </div>
    </section>
  );
}
