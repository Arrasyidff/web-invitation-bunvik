import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ActiveInvitationTemplate } from "@/templates/registry";

interface EventPageProps {
  params: Promise<{ eventType: string }>;
}

export default async function EventPage({ params }: EventPageProps) {
  const { eventType } = await params;

  if (eventType !== "akad" && eventType !== "resepsi") {
    notFound();
  }

  return (
    <Suspense>
      <ActiveInvitationTemplate eventType={eventType} />
    </Suspense>
  );
}
