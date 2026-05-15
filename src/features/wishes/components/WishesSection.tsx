"use client";

import { useState, useEffect } from "react";
import { WishesForm } from "./WishesForm";
import { WishesList } from "./WishesList";
import { getWishesList } from "../services/wishesService";
import type { WishItem } from "../types";

interface WishesSectionProps {}

export function WishesSection({}: WishesSectionProps) {
  const [wishesList, setWishesList] = useState<WishItem[]>([]);

  async function fetchWishes() {
    try {
      const data = await getWishesList();
      setWishesList(data);
    } catch {
      // silently fail — list stays empty
    }
  }

  useEffect(() => {
    fetchWishes();
  }, []);

  return (
    <section id="wishes" className="w-full px-6 py-14">
      <h2 className="text-center text-[3.5rem] font-bold tracking-wider text-[#343434] leading-none">
        UCAPAN
        <br />& DOA
      </h2>

      <div className="mt-8">
        <WishesForm onWishSubmitted={fetchWishes} />
      </div>

      <WishesList wishes={wishesList} />
    </section>
  );
}
