"use client";

import { GUEST_NAME_DEFAULT } from "@/lib/constants";
import { CoverFlower } from "./CoverFlower";
import { CoverWeddingTitle } from "./CoverWeddingTitle";
import { CoverEnvelopeButton } from "./CoverEnvelopeButton";

interface CoverSectionProps {
  onOpen: () => void;
  guestName?: string;
}

export function CoverSection({
  onOpen,
  guestName = GUEST_NAME_DEFAULT,
}: CoverSectionProps) {
  return (
    <section
      id="cover"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      <CoverFlower />

      <div className="flex-1 flex flex-col items-center justify-center text-center w-full">
        <CoverWeddingTitle />

        <div className="mt-6 mb-6 flex flex-col items-center">
          <p className="font-sans font-light text-[1.375rem] tracking-wide text-foreground">
            Kepada Yth.
          </p>
          <p className="font-sans font-light text-[1.375rem] tracking-wide text-foreground">
            Bapak/ Ibu/ Saudara/ i
          </p>
          <p className="font-sans font-medium text-[2rem] text-foreground capitalize">
            {guestName}
          </p>
        </div>

        <CoverEnvelopeButton onOpen={onOpen} />
      </div>

      <CoverFlower isFlipped />
    </section>
  );
}
