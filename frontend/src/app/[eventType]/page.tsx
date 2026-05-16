import { Suspense } from "react";
import { notFound } from "next/navigation";
import { InvitationContent } from "../_components/InvitationContent";

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
      <InvitationContent eventType={eventType} />
    </Suspense>
  );
}
