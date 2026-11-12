import { Suspense } from "react";
import { ActiveInvitationTemplate } from "@/templates/registry";

export default function HomePage() {
  return (
    <Suspense>
      <ActiveInvitationTemplate eventType="resepsi" />
    </Suspense>
  );
}
