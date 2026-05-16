import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function OpeningVerseArch() {
  return (
    <ScrollReveal direction="bottom" className="px-6.5 mt-22.75">
      <div
        className="relative w-full font-bold -mt-6 z-0 bg-[#4a85b8] flex flex-col items-center justify-center px-6 pt-24 pb-12 text-white text-center min-[430px]:min-h-0 min-[430px]:h-125"
        style={{ borderRadius: "232px 232px 12px 12px", background: 'linear-gradient(142deg, #4299E1 0%, #3783C2 100%)' }}
      >
        <p className="text-[1.375rem]">
          &ldquo;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan
          merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan
          sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda
          (kebesaran Allah) bagi kaum yang berpikir.&rdquo;
        </p>
        <p className="text-[1.375rem] font-bold tracking-wide">QS Ar-Rum 21</p>
      </div>
    </ScrollReveal>
  );
}
