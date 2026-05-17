"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  GROOM_NAME,
  BRIDE_NAME,
  GROOM_FULL_NAME,
  BRIDE_FULL_NAME,
  WEDDING_DATE_FULL,
  AKAD_TIME,
  RECEPTION_TIME,
  VENUE_NAME,
  VENUE_ADDRESS,
} from "@/lib/constants";

const TEMPLATES = [
  { id: "akad", label: "Akad", hint: "Akad & Resepsi" },
  { id: "resepsi", label: "Resepsi", hint: "Resepsi saja" },
] as const;

const RELIGIONS = [
  { id: "muslim", label: "Muslim" },
  { id: "nonmuslim", label: "Non-Muslim" },
] as const;

type TemplateId = (typeof TEMPLATES)[number]["id"];
type ReligionId = (typeof RELIGIONS)[number]["id"];

function buildNarasi(id: TemplateId, religion: ReligionId, name: string, origin: string): string {
  const recipient = name.trim() || "Nama Tamu";
  const link = `${origin}/${id}?to=${encodeURIComponent(recipient)}`;

  const isMuslim = religion === "muslim";

  const opening = isMuslim
    ? `Assalamu'alaikum warahmatullahi wabarakatuh.`
    : `Salam sejahtera,`;

  const intro = isMuslim
    ? `Dengan memohon rahmat dan ridho Allah SWT, kami dengan penuh kebahagiaan ingin berbagi kabar gembira dan memohon doa restu Bapak/Ibu/Saudara/i untuk hadir pada acara pernikahan kami:`
    : `Dengan penuh kebahagiaan ingin berbagi kabar gembira dan memohon doa restu Bapak/Ibu/Saudara/i untuk hadir pada acara pernikahan kami:`;

  const dateIntro = isMuslim
    ? `Yang Insya Allah akan dilaksanakan pada:`
    : `Yang akan dilaksanakan pada:`;

  const closing = isMuslim
    ? `Wassalamu'alaikum warahmatullahi wabarakatuh.

Kami yang berbahagia,
🌼 ${GROOM_NAME} & ${BRIDE_NAME} 🌼`
    : `Kami yang berbahagia,
🌼 ${GROOM_NAME} & ${BRIDE_NAME} 🌼`;

  if (id === "akad") {
    return `${opening}

${intro}

${GROOM_FULL_NAME}
&
${BRIDE_FULL_NAME}

${dateIntro}
🗓️ ${WEDDING_DATE_FULL}

Akad Nikah
🕐 ${AKAD_TIME}

Resepsi Pernikahan
🕐 ${RECEPTION_TIME}

📍 ${VENUE_NAME}
${VENUE_ADDRESS}

Klik link berikut untuk melihat undangan secara lengkap:
${link}

Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu pada acara pernikahan kami.

Atas perhatian Bapak/Ibu/Saudara/i, kami sampaikan terima kasih.

${closing}`;
  }

  return `${opening}

${intro}

${GROOM_FULL_NAME}
&
${BRIDE_FULL_NAME}

${dateIntro}
🗓️ ${WEDDING_DATE_FULL}

Resepsi Pernikahan
🕐 ${RECEPTION_TIME}
📍 ${VENUE_NAME}
${VENUE_ADDRESS}

Klik link berikut untuk melihat undangan secara lengkap:
${link}

Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu pada acara pernikahan kami.

Atas perhatian Bapak/Ibu/Saudara/i, kami sampaikan terima kasih.

${closing}`;
}

export function NarasiContent() {
  const [recipientName, setRecipientName] = useState("");
  const [activeTemplate, setActiveTemplate] = useState<TemplateId>("akad");
  const [activeReligion, setActiveReligion] = useState<ReligionId>("muslim");
  const [origin, setOrigin] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  const narasi = buildNarasi(activeTemplate, activeReligion, recipientName, origin);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(narasi);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-white/85 flex flex-col">
      <div className="max-w-lg mx-auto w-full px-6 py-12 flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <Link
            href="/"
            className="font-sans text-xs tracking-widest uppercase text-foreground/80 hover:text-foreground transition-colors w-fit"
          >
            ← Kembali
          </Link>
          <h1 className="font-display text-5xl text-foreground mt-3 leading-none">
            Narasi Undangan
          </h1>
          <p className="font-sans text-sm text-foreground/90 mt-1">
            Pilih template, isi nama penerima, lalu salin teksnya.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-sans text-xs tracking-widest uppercase text-foreground/90">
            Nama Penerima
          </label>
          <input
            type="text"
            value={recipientName}
            onChange={(e) => setRecipientName(e.target.value)}
            placeholder="cth: Budi Santoso"
            className="font-sans text-base text-foreground border-b border-foreground/20 bg-transparent pb-2 outline-none placeholder:text-foreground/25 focus:border-foreground/50 transition-colors"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-sans text-xs tracking-widest uppercase text-foreground/90">
            Agama
          </p>
          <div className="flex gap-2">
            {RELIGIONS.map((r) => (
              <button
                key={r.id}
                onClick={() => setActiveReligion(r.id)}
                className={`flex-1 border py-3 px-2 transition-colors cursor-pointer font-sans text-sm ${
                  activeReligion === r.id
                    ? "border-foreground/50 bg-foreground/5 text-foreground"
                    : "border-foreground/20 hover:border-foreground/40 text-foreground/90"
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-sans text-xs tracking-widest uppercase text-foreground/90">
            Template
          </p>
          <div className="flex gap-2">
            {TEMPLATES.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTemplate(t.id)}
                className={`flex-1 flex flex-col items-center gap-0.5 border py-3 px-2 transition-colors cursor-pointer ${
                  activeTemplate === t.id
                    ? "border-foreground/50 bg-foreground/5"
                    : "border-foreground/20 hover:border-foreground/40"
                }`}
              >
                <span className="font-sans text-sm text-foreground">{t.label}</span>
                <span className="font-sans text-[10px] text-foreground/80">{t.hint}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-sans text-xs tracking-widest uppercase text-foreground/90">
            Pratinjau
          </p>
          <pre className="font-sans text-sm text-foreground leading-relaxed whitespace-pre-wrap bg-foreground/3 border border-foreground/10 p-5">
            {narasi}
          </pre>
          <button
            onClick={handleCopy}
            className={`w-full py-3 font-sans text-sm tracking-widest uppercase transition-colors cursor-pointer ${
              isCopied
                ? "bg-foreground text-background"
                : "border border-foreground/30 text-foreground/90 hover:bg-foreground/5"
            }`}
          >
            {isCopied ? "Tersalin ✓" : "Salin Teks"}
          </button>
        </div>
      </div>
    </main>
  );
}
