import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function OpeningGreeting() {
  return (
    <div className="bg-wine px-8 py-12 text-center text-cream">
      <ScrollReveal direction="bottom">
        <h2 className="text-[1.25rem] font-semibold leading-snug">
          Assalamu&apos;alaikum
          <br />
          Warahmatullahi Wabarakatuh
        </h2>
        <p className="mt-4 text-[1.0625rem] leading-relaxed text-cream/90">
          Dengan memohon Rahmat dan Ridho Allah SWT kami bermaksud untuk mengundang
          Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami
        </p>
      </ScrollReveal>
    </div>
  );
}
