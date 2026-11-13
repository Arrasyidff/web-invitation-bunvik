import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ChapterHeading } from "@/templates/crimson-story/components/ChapterHeading";
import { SectionWaves } from "@/templates/crimson-story/components/SectionWaves";
import { WEDDING_GIFT, getStoryChapter } from "@/templates/crimson-story/content";
import { GiftBankCard } from "./GiftBankCard";
import { GiftShippingCard } from "./GiftShippingCard";

/** Catatan Kecil · Tanda Kasih: rekening, alamat kirim hadiah, dan catatan. */
export function GiftSection() {
  return (
    <section id="gift" className="relative scroll-mt-12 overflow-hidden bg-white px-6 pb-36 pt-36">
      <SectionWaves />

      <div className="relative">
        <ScrollReveal direction="bottom">
          <ChapterHeading chapter={getStoryChapter("gift")} />
        </ScrollReveal>

        <div className="mt-10 flex flex-col gap-6">
          {WEDDING_GIFT.bankAccounts.map((bankAccount, i) => (
            <GiftBankCard key={bankAccount.accountNumber} bankAccount={bankAccount} revealDelay={i * 100} />
          ))}
          <GiftShippingCard recipientName={WEDDING_GIFT.shippingRecipient} address={WEDDING_GIFT.shippingAddress} />
        </div>

        <ScrollReveal direction="bottom">
          <ul className="mt-8 flex flex-col gap-2 text-[0.875rem] leading-normal text-ink/65">
            {WEDDING_GIFT.notes.map((note) => (
              <li key={note} className="flex gap-2">
                <span aria-hidden="true" className="text-antique">✦</span>
                {note}
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
