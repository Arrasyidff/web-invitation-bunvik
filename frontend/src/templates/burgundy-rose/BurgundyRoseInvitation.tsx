"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { MusicPlayer } from "@/components/ui/MusicPlayer";
import type { InvitationTemplateProps } from "@/lib/types";
import { CoverSection } from "@/templates/burgundy-rose/sections/cover/CoverSection";
import { OpeningSection } from "@/templates/burgundy-rose/sections/opening/OpeningSection";
import { CoupleSection } from "@/templates/burgundy-rose/sections/couple/CoupleSection";
import { EventSection } from "@/templates/burgundy-rose/sections/event/EventSection";
import { RsvpSection } from "@/templates/burgundy-rose/sections/rsvp/RsvpSection";
import { WishesSection } from "@/templates/burgundy-rose/sections/wishes/WishesSection";
import { ClosingSection } from "@/templates/burgundy-rose/sections/closing/ClosingSection";

export function BurgundyRoseInvitation({ eventType }: InvitationTemplateProps) {
  const searchParams = useSearchParams();
  const guestName = searchParams.get("to") ?? undefined;

  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [wishesRefreshKey, setWishesRefreshKey] = useState(0);

  function handleInvitationOpen() {
    setIsInvitationOpen(true);
    window.scrollTo({ top: 0 });
  }

  return (
    <main className="min-h-screen bg-burgundy-deep">
      {!isInvitationOpen ? (
        <CoverSection onOpen={handleInvitationOpen} guestName={guestName} />
      ) : (
        <>
          <MusicPlayer src="/music.mp3" />
          <div className="blush-paper mx-auto min-h-screen w-full max-w-[430px] animate-fade-in overflow-hidden shadow-2xl">
            <OpeningSection />
            <CoupleSection />
            <EventSection eventType={eventType} />
            <RsvpSection onRsvpSubmitSuccess={() => setWishesRefreshKey((key) => key + 1)} />
            <WishesSection refreshKey={wishesRefreshKey} />
            <ClosingSection />
          </div>
        </>
      )}
    </main>
  );
}
