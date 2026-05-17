import Link from "next/link";
import { GROOM_NAME, BRIDE_NAME } from "@/lib/constants";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="flex flex-col items-center gap-6 animate-fade-in">
        <p className="font-display text-[5rem] leading-none text-foreground/20 select-none">
          {GROOM_NAME[0]} & {BRIDE_NAME[0]}
        </p>

        <div className="flex flex-col items-center gap-2">
          <p className="font-sans text-[6rem] font-light leading-none text-foreground/10 select-none">
            404
          </p>
          <h1 className="font-sans text-2xl text-foreground/80 tracking-wide">
            Halaman Tidak Ditemukan
          </h1>
        </div>

        <p className="font-sans text-base text-foreground/50 max-w-xs leading-relaxed">
          Maaf, halaman yang kamu cari tidak ada. Mungkin kamu salah ketik
          alamat, atau halaman ini sudah tidak tersedia.
        </p>

        <Link
          href="/"
          className="mt-2 inline-block font-sans text-sm tracking-[0.2em] uppercase text-foreground/60 border border-foreground/20 px-8 py-3 hover:bg-foreground/5 transition-colors duration-200"
        >
          Kembali ke Undangan
        </Link>
      </div>
    </main>
  );
}
