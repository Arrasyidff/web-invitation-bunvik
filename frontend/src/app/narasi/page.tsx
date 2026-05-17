import type { Metadata } from "next";
import { NarasiContent } from "@/features/narasi/components/NarasiContent";

export const metadata: Metadata = {
  title: "Narasi Undangan — Hendra & Vika",
};

export default function NarasiPage() {
  return <NarasiContent />;
}
