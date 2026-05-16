import { Suspense } from "react";
import { InvitationContent } from "./_components/InvitationContent";

export default function HomePage() {
  return (
    <Suspense>
      <InvitationContent eventType="resepsi" />
    </Suspense>
  );
}
