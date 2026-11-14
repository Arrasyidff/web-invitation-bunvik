import type { ReactNode } from "react";
import { ArchGarland } from "./ArchGarland";

interface ArchFrameProps {
  children: ReactNode;
  /** Kelas untuk blok marun (padding, warna teks). */
  className?: string;
}

/**
 * Transisi putih → marun berbentuk lengkungan (arch): blok marun muncul seperti jendela
 * melengkung (setengah lingkaran penuh) di tengah halaman putih, dihiasi untaian bunga
 * penuh di sepanjang lengkungannya. Halaman tidak terasa terpotong section.
 */
export function ArchFrame({ children, className = "" }: ArchFrameProps) {
  return (
    <div className="relative overflow-hidden bg-white px-4 pt-16">
      <div className={`relative overflow-hidden rounded-t-full bg-maroon ${className}`}>{children}</div>

      {/* Di luar blok marun agar bunga boleh keluar dari garis lengkungan. */}
      <ArchGarland />
    </div>
  );
}
