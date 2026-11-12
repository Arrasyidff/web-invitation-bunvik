import { Suspense } from "react";
import { notFound } from "next/navigation";
import { INVITATION_TEMPLATES, type TemplateId } from "@/templates/registry";
import type { EventType } from "@/lib/types";

interface PreviewPageProps {
  params: Promise<{ templateId: string }>;
  searchParams: Promise<{ event?: string }>;
}

function isTemplateId(value: string): value is TemplateId {
  return value in INVITATION_TEMPLATES;
}

/** Pratinjau template apa pun: /preview/<templateId>?event=akad&to=Nama */
export default async function PreviewPage({ params, searchParams }: PreviewPageProps) {
  const { templateId } = await params;
  const { event } = await searchParams;

  if (!isTemplateId(templateId)) {
    notFound();
  }

  const eventType: EventType = event === "akad" ? "akad" : "resepsi";
  const InvitationTemplate = INVITATION_TEMPLATES[templateId];

  return (
    <Suspense>
      <InvitationTemplate eventType={eventType} />
    </Suspense>
  );
}
