import { StoryReveal } from "@/templates/crimson-story/components/StoryReveal";

interface GiftShippingCardProps {
  recipientName: string;
  address: string;
}

/** Alamat pengiriman kado fisik. */
export function GiftShippingCard({ recipientName, address }: GiftShippingCardProps) {
  return (
    <StoryReveal direction="bottom" isLiftedOnHover className="rounded-2xl bg-white px-5 py-4">
      <p className="text-[0.75rem] font-semibold uppercase tracking-[0.25em]! text-maroon">Kirim Kado</p>
      <p className="mt-1 text-[0.9375rem] text-ink">Penerima: {recipientName}</p>
      <p className="mt-1 text-[0.875rem] leading-normal! text-ink/70">{address}</p>
    </StoryReveal>
  );
}
