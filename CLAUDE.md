# CLAUDE.md — Wedding Invitation Project

> Baca file ini setiap awal sesi. Ikuti semua aturan di bawah secara konsisten tanpa pengecualian.

---

## 🎯 Konteks Proyek

Wedding invitation berbasis web dengan Next.js. Satu halaman utama yang terdiri dari beberapa section yang dibuka setelah user mengklik cover.

**Sections (urutan tampil):**
1. **Cover** — halaman awal, klik untuk membuka undangan
2. **Opening** — kata pembuka / bismillah / sapaan tamu
3. **Kedua Mempelai** — profil pengantin pria & wanita
4. **Detail Acara** — tanggal, waktu, lokasi akad & resepsi
5. **RSVP** — form konfirmasi kehadiran
6. **Our Story** — timeline perjalanan cerita cinta
7. **Ucapan & Doa** — form kirim ucapan + tampil list ucapan

---

## 📁 Struktur Folder

```
src/
├── app/
│   ├── layout.tsx               ← font, metadata, global wrapper
│   ├── page.tsx                 ← merakit semua section, handle open state
│   └── api/
│       ├── rsvp/
│       │   └── route.ts         ← POST /api/rsvp
│       └── wishes/
│           └── route.ts         ← POST & GET /api/wishes
│
├── features/
│   ├── cover/
│   │   └── components/
│   │       └── CoverSection.tsx
│   │
│   ├── opening/
│   │   └── components/
│   │       └── OpeningSection.tsx
│   │
│   ├── couple/
│   │   └── components/
│   │       └── CoupleSection.tsx
│   │
│   ├── event/
│   │   └── components/
│   │       └── EventSection.tsx
│   │
│   ├── rsvp/
│   │   ├── components/
│   │   │   └── RsvpSection.tsx
│   │   ├── services/
│   │   │   └── rsvpService.ts
│   │   └── types.ts
│   │
│   ├── story/
│   │   └── components/
│   │       └── StorySection.tsx
│   │
│   └── wishes/
│       ├── components/
│       │   ├── WishesSection.tsx
│       │   ├── WishesList.tsx
│       │   └── WishesForm.tsx
│       ├── services/
│       │   └── wishesService.ts
│       └── types.ts
│
├── components/
│   └── ui/
│       ├── Button.tsx
│       └── SectionWrapper.tsx
│
├── lib/
│   ├── supabase.ts
│   └── utils.ts
│
├── config/
│   └── env.ts
│
└── styles/
    └── globals.css
```

---

## ⚙️ Tech Stack

| Kebutuhan | Tool |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript — strict, tidak ada `any` |
| Styling | Tailwind CSS |
| Database | Supabase (RSVP & Ucapan) |
| State | `useState` / `useEffect` saja — tidak ada Zustand |
| Validasi | Inline dengan kondisi sederhana — tidak ada Zod |
| ORM | Tidak ada — query langsung via Supabase JS client |

> **DILARANG** install: Prisma, Zustand, Zod, Redux, React Query, atau library state/validasi lainnya tanpa persetujuan eksplisit.

---

## 🏗️ Aturan Arsitektur

### Penempatan File — Wajib Diikuti

| Jenis file | Lokasi |
|---|---|
| Route & halaman | `app/` |
| API route (server) | `app/api/<nama>/route.ts` |
| Komponen per section | `features/<nama-section>/components/` |
| Service / Supabase call | `features/<nama-section>/services/` |
| Types per fitur | `features/<nama-section>/types.ts` |
| Komponen UI reusable | `components/ui/` |
| Supabase client | `lib/supabase.ts` |
| Utility functions | `lib/utils.ts` |
| Env config | `config/env.ts` |

### Larangan Arsitektur

- **JANGAN** tulis JSX panjang langsung di `page.tsx` — delegate ke komponen fitur
- **JANGAN** taruh komponen spesifik section di `components/` — gunakan `features/`
- **JANGAN** import dari `features/` ke `features/` lain secara langsung
- **JANGAN** hardcode URL, key, atau nilai konfigurasi — gunakan `config/env.ts`
- **JANGAN** buat file di luar struktur ini tanpa alasan yang jelas

---

## 📐 Aturan Pembuatan Komponen

### page.tsx — Hanya Merakit Section

`app/page.tsx` hanya boleh berisi:
- State `isOpen` untuk toggle cover → main content
- Import dan pemanggilan komponen section

```tsx
// ✅ Benar
"use client";

import { useState } from "react";
import { CoverSection } from "@/features/cover/components/CoverSection";
import { OpeningSection } from "@/features/opening/components/OpeningSection";

export default function HomePage() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);

  return (
    <main>
      {!isInvitationOpen ? (
        <CoverSection onOpen={() => setIsInvitationOpen(true)} />
      ) : (
        <>
          <OpeningSection />
          {/* section lainnya */}
        </>
      )}
    </main>
  );
}

// ❌ Salah — jangan tulis JSX detail di page.tsx
export default function HomePage() {
  return (
    <main>
      <div className="h-screen bg-cover ...">
        <h1>Undangan Pernikahan</h1>
        <p>...</p>
        {/* puluhan baris JSX */}
      </div>
    </main>
  );
}
```

### Struktur Komponen Section

Setiap komponen section mengikuti pola ini:

```tsx
// ✅ Benar — features/couple/components/CoupleSection.tsx

interface CoupleSectionProps {
  // props jika ada
}

export function CoupleSection({ }: CoupleSectionProps) {
  return (
    <section id="couple" className="...">
      {/* konten section */}
    </section>
  );
}
```

Aturan komponen section:
- Selalu gunakan tag `<section>` dengan `id` yang sesuai nama section
- Export sebagai **named export** (bukan default) — konsisten untuk semua komponen fitur
- Jika section memiliki lebih dari ~15 baris JSX yang logis terpisah, pecah menjadi sub-komponen di file yang sama atau file berbeda

### Sub-komponen dalam Satu Section

Jika section kompleks (misal `WishesSection`), pecah menjadi file terpisah:

```
features/wishes/components/
├── WishesSection.tsx   ← container utama, merakit WishesForm & WishesList
├── WishesForm.tsx      ← form input ucapan
└── WishesList.tsx      ← tampilan list ucapan
```

`WishesSection.tsx` hanya merakit:

```tsx
import { WishesForm } from "./WishesForm";
import { WishesList } from "./WishesList";

export function WishesSection() {
  return (
    <section id="wishes" className="...">
      <WishesForm />
      <WishesList />
    </section>
  );
}
```

---

## 🔤 Konvensi Penamaan

| Jenis | Format | Contoh |
|---|---|---|
| File komponen | PascalCase | `CoverSection.tsx`, `WishesForm.tsx` |
| File non-komponen | camelCase | `rsvpService.ts`, `supabase.ts` |
| Fungsi komponen | PascalCase | `export function CoverSection()` |
| Variabel & fungsi | camelCase | `isInvitationOpen`, `handleFormSubmit` |
| Interface & type | PascalCase | `RsvpFormData`, `WishItem` |
| Konstanta global | UPPER_SNAKE_CASE | `WEDDING_DATE`, `VENUE_NAME` |
| Props handler | prefix `on` | `onOpen`, `onSubmit`, `onClose` |
| Handler function | prefix `handle` | `handleButtonClick`, `handleFormSubmit` |
| Boolean state/var | prefix `is`/`has` | `isLoading`, `isOpen`, `hasError` |

### Nama Harus Deskriptif — Singkatan Dilarang

```ts
// ✅ Benar
const [isFormSubmitting, setIsFormSubmitting] = useState(false);
const [wishesList, setWishesList] = useState<WishItem[]>([]);
const guestName = formData.name;

function handleRsvpSubmit(formData: RsvpFormData) {}

// ❌ Salah
const [loading, setLoading] = useState(false);
const [w, setW] = useState([]);
const n = formData.name;

function submit(d: RsvpFormData) {}
```

**Pengecualian yang diizinkan:** `id`, `url`, `i`/`j` untuk index loop sederhana.

---

## ⚓ Hooks yang Diizinkan

Hanya gunakan hooks berikut. **Hooks lain DILARANG tanpa konfirmasi eksplisit.**

| Hook | Kegunaan |
|---|---|
| `useState` | State lokal komponen |
| `useEffect` | Fetch data, side effect |
| `useRef` | Akses DOM atau simpan nilai tanpa re-render |

```tsx
// ✅ Boleh langsung dipakai
const [isLoading, setIsLoading] = useState(false);
const [wishesList, setWishesList] = useState<WishItem[]>([]);
useEffect(() => { fetchWishes(); }, []);
const sectionRef = useRef<HTMLElement>(null);

// ❌ TANYA DULU sebelum pakai
useMemo(...)
useCallback(...)
useReducer(...)
useContext(...)
useTransition(...)
```

---

## 🌐 Aturan TypeScript

- Gunakan `interface` untuk object shape, `type` untuk union/alias
- **DILARANG** gunakan `any` — gunakan `unknown` jika tipe tidak pasti
- Semua props komponen wajib punya interface eksplisit
- Infer tipe dari data Supabase jika memungkinkan

```ts
// ✅ Benar
interface RsvpFormData {
  guestName: string;
  attendanceStatus: "hadir" | "tidak_hadir";
  guestCount: number;
}

// ❌ Salah
const handleSubmit = (data: any) => { ... }
```

---

## 🗄️ Aturan Supabase

### Client

Selalu import dari `@/lib/supabase`, jangan buat instance baru:

```ts
// ✅ Benar — lib/supabase.ts sudah ada, pakai ini
import { supabase } from "@/lib/supabase";

// ❌ Salah — jangan buat client sendiri
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(...);
```

### Service Pattern

Semua query Supabase diletakkan di `features/<fitur>/services/`, bukan langsung di komponen:

```ts
// ✅ Benar — features/wishes/services/wishesService.ts
import { supabase } from "@/lib/supabase";
import type { WishItem, CreateWishInput } from "../types";

export async function getWishesList(): Promise<WishItem[]> {
  const { data, error } = await supabase
    .from("wishes")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return data ?? [];
}

export async function createWish(input: CreateWishInput): Promise<void> {
  const { error } = await supabase.from("wishes").insert(input);
  if (error) throw new Error(error.message);
}
```

```tsx
// ❌ Salah — jangan query Supabase langsung di komponen
export function WishesForm() {
  async function handleSubmit() {
    await supabase.from("wishes").insert({ ... }); // ← pindah ke service
  }
}
```

### Types Supabase

Definisikan di `features/<fitur>/types.ts`:

```ts
// features/wishes/types.ts
export interface WishItem {
  id: string;
  guestName: string;
  message: string;
  createdAt: string;
}

export interface CreateWishInput {
  guestName: string;
  message: string;
}
```

---

## 🌍 Config & Environment

Semua env variable diakses lewat `config/env.ts`, bukan `process.env` langsung:

```ts
// ✅ config/env.ts
export const env = {
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
  supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
};

// ✅ Penggunaan
import { env } from "@/config/env";

// ❌ Salah — jangan akses process.env langsung di luar config/env.ts
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
```

Konstanta wedding (nama, tanggal, venue) diletakkan di `lib/constants.ts`:

```ts
// lib/constants.ts
export const GROOM_NAME = "Ahmad Fauzi";
export const BRIDE_NAME = "Siti Rahayu";
export const WEDDING_DATE = "2025-09-20";
export const AKAD_TIME = "08.00 WIB";
export const RECEPTION_TIME = "11.00 WIB";
export const VENUE_NAME = "Gedung Serbaguna Al-Ikhlas";
export const VENUE_ADDRESS = "Jl. Raya Malang No. 10, Malang";
export const MAPS_URL = "https://maps.google.com/?q=...";
```

---

## 🎨 Aturan Styling (Tailwind)

- Gunakan utility class Tailwind — jangan CSS custom kecuali untuk animasi yang tidak bisa di-handle Tailwind
- Custom CSS hanya boleh di `styles/globals.css`
- Jangan gunakan `style={{ }}` inline kecuali untuk nilai dinamis (misal tinggi dari JS)
- Animasi scroll/fade gunakan Tailwind `animate-` atau CSS `@keyframes` di globals.css

```tsx
// ✅ Benar — Tailwind utility
<section className="min-h-screen flex flex-col items-center justify-center bg-rose-50 px-6 py-16">

// ✅ Boleh — nilai dinamis memang perlu inline style
<div style={{ height: `${scrollProgress}%` }} className="bg-rose-400 transition-all">

// ❌ Salah — jangan styling inline statis
<section style={{ minHeight: "100vh", display: "flex", backgroundColor: "#fff1f2" }}>
```

---

## 🚫 Larangan Mutlak

1. **JANGAN** install Prisma, Zustand, Zod, Redux, atau React Query
2. **JANGAN** gunakan `any` dalam TypeScript
3. **JANGAN** gunakan `var` — gunakan `const` atau `let`
4. **JANGAN** query Supabase langsung di dalam komponen — gunakan service
5. **JANGAN** hardcode env variable — selalu lewat `config/env.ts`
6. **JANGAN** hardcode data wedding (nama, tanggal, venue) di JSX — gunakan `lib/constants.ts`
7. **JANGAN** tulis JSX panjang di `page.tsx` — rakit komponen saja
8. **JANGAN** pakai hooks di luar daftar yang diizinkan tanpa konfirmasi

---

## ✅ Checklist Sebelum Membuat Section Baru

- [ ] File diletakkan di `features/<nama-section>/components/<NamaSection>.tsx`
- [ ] Komponen menggunakan named export (`export function`)
- [ ] Props memiliki interface TypeScript yang eksplisit
- [ ] Tidak ada `any` dalam kode
- [ ] Query Supabase (jika ada) ada di `services/`, bukan di komponen
- [ ] Data wedding diambil dari `lib/constants.ts`, bukan hardcode di JSX
- [ ] Section menggunakan tag `<section id="nama-section">`
- [ ] Tidak ada library baru yang diinstall tanpa konfirmasi