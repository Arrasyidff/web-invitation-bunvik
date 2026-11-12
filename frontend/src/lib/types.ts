export type EventType = "akad" | "resepsi";

/** Props yang wajib diterima oleh setiap komponen root template. */
export interface InvitationTemplateProps {
  eventType: EventType;
}
