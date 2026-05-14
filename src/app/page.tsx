"use client";

import { useState } from "react";
import { CoverSection } from "@/features/cover/components/CoverSection";

export default function HomePage() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);

  return (
    <main>
      {!isInvitationOpen ? (
        <CoverSection onOpen={() => setIsInvitationOpen(true)} />
      ) : (
        <div>{/* sections lainnya akan ditambahkan di sini */}</div>
      )}
    </main>
  );
}
