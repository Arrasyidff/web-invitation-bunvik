"use client";

import { useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { MusicPlayer } from "@/components/ui/MusicPlayer";
import type { InvitationTemplateProps } from "@/lib/types";
import backgroundSrc from "@/templates/ardhian-wilda/assets/background.webp";
import { CoverSection } from "@/templates/ardhian-wilda/sections/cover/CoverSection";
import { OpeningSection } from "@/templates/ardhian-wilda/sections/opening/OpeningSection";
import { CoupleSection } from "@/templates/ardhian-wilda/sections/couple/CoupleSection";
import { EventSection } from "@/templates/ardhian-wilda/sections/event/EventSection";
import { RsvpSection } from "@/templates/ardhian-wilda/sections/rsvp/RsvpSection";
import { WishesSection } from "@/templates/ardhian-wilda/sections/wishes/WishesSection";
import { ClosingSection } from "@/templates/ardhian-wilda/sections/closing/ClosingSection";

export function ArdhianWildaInvitation({ eventType }: InvitationTemplateProps) {
  const searchParams = useSearchParams();
  const guestName = searchParams.get("to") ?? undefined;

  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [wishesRefreshKey, setWishesRefreshKey] = useState(0);

  function handleInvitationOpen() {
    setIsInvitationOpen(true);
    window.scrollTo({ top: 0 });
  }

  return (
    <main className="relative min-h-screen">
      <div className="fixed inset-0 -z-10">
        <Image
          src={backgroundSrc}
          alt=""
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {!isInvitationOpen ? (
        <CoverSection onOpen={handleInvitationOpen} guestName={guestName} />
      ) : (
        <>
          <MusicPlayer src="/music.mp3" />
          <div className="mx-auto min-h-screen w-full max-w-[430px] animate-fade-in bg-cream shadow-2xl">
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
