"use client";

import { useState, useEffect } from "react";
import { WishesForm } from "./WishesForm";
import { WishesList } from "./WishesList";
import { getWishesList } from "../services/wishesService";
import type { WishItem } from "../types";

const MOCK_WISHES: WishItem[] = [
  {
    id: "mock-1",
    guestName: "Budi Santoso",
    message: "Selamat menempuh hidup baru! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Barakallahu lakuma wa baraka 'alaikuma.",
    createdAt: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
  },
  {
    id: "mock-2",
    guestName: "Siti Nurhaliza",
    message: "Doa terbaik untuk kalian berdua. Semoga rumah tangganya dipenuhi keberkahan dan kebahagiaan selalu. Aamiin.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
  },
  {
    id: "mock-3",
    guestName: "Ahmad Rizky",
    message: "Mabrook! Semoga cinta kalian abadi dan keluarga yang dibangun menjadi keluarga yang penuh kasih sayang. Aamiin ya Rabb.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
  },
  {
    id: "mock-4",
    guestName: "Dewi Kartika",
    message: "Semoga pernikahan ini menjadi awal dari kebahagiaan yang tiada akhir. Jadilah pasangan yang saling mendukung dan menguatkan. Barakallah!",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
  },
  {
    id: "mock-5",
    guestName: "Rendra Pratama",
    message: "Congratulations! Semoga pernikahan kalian penuh cinta, kebahagiaan, dan kebersamaan hingga akhir hayat. Aamiin.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(),
  },
];

interface WishesSectionProps {}

export function WishesSection({}: WishesSectionProps) {
  const [wishesList, setWishesList] = useState<WishItem[]>(MOCK_WISHES);

  async function fetchWishes() {
    try {
      const data = await getWishesList();
      if (data.length > 0) {
        setWishesList(data);
      }
    } catch {
      // silently fail — mock stays visible
    }
  }

  useEffect(() => {
    fetchWishes();
  }, []);

  return (
    <section id="wishes" className="w-full px-6.5 mt-7.5">
      <h2 className="text-center text-[5rem] font-bold text-foreground" style={{ lineHeight: '0.8' }}>
        UCAPAN
        <br />& DOA
      </h2>

      <div className="mt-7.5">
        <WishesForm onWishSubmitted={fetchWishes} />
      </div>

      <WishesList wishes={wishesList} />
    </section>
  );
}
