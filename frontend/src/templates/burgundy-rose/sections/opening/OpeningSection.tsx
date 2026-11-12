import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CornerBouquet } from "@/templates/burgundy-rose/components/FloralArt";
import { Monogram } from "@/templates/burgundy-rose/components/Monogram";

export function OpeningSection() {
  return (
    <section id="opening" className="relative overflow-hidden px-8 pb-8 pt-20 text-center">
      <CornerBouquet className="absolute left-0 top-0 w-40" />

      <ScrollReveal direction="bottom" className="relative">
        <Monogram />

        <blockquote className="mt-8 text-[0.9375rem] italic leading-relaxed text-foreground/75">
          &ldquo;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan
          untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia
          menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar
          terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.&rdquo;
          <footer className="mt-1 not-italic text-burgundy">QS Ar-Rum 21</footer>
        </blockquote>

        <h2 className="mt-8 text-[1.125rem] font-semibold leading-snug text-foreground">
          Assalamu&apos;alaikum Warahmatullahi Wabarakatuh
        </h2>
        <p className="mt-2 text-[1.0625rem] leading-relaxed text-foreground/85">
          Dengan memohon Rahmat dan Ridho Allah SWT kami bermaksud untuk mengundang
          Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami
        </p>
      </ScrollReveal>
    </section>
  );
}
