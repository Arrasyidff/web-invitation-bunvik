/**
 * Data undangan Zakiya & Fadel untuk template crimson-story (versi storytelling).
 * Data mempelai, acara, dan hadiah disalin dari `templates/crimson-rose/content.ts`
 * (template tidak boleh saling import); bedanya, di sini ada copy naratif per bab.
 */

import type { InvitationId } from "@/lib/invitations";

/** Penanda undangan ini di backend; RSVP disimpan terpisah dari undangan lain. */
export const INVITATION_ID: InvitationId = "zakiya-fadel";

export interface CoupleMember {
  nickname: string;
  fullName: string;
  /** Peran dalam cerita, mis. "Sang Mempelai Wanita". */
  roleLabel: string;
  childLabel: string;
  fatherName: string;
  motherName: string;
  instagramHandle: string;
  instagramUrl: string;
}

export const BRIDE: CoupleMember = {
  nickname: "Zakiya",
  fullName: "Nurotuz Zakiya",
  roleLabel: "Sang Mempelai Wanita",
  childLabel: "Putri dari",
  fatherName: "Alm. Bapak H. Ali Masyhar",
  motherName: "Ibu Anggia Murni",
  instagramHandle: "nzakiyaaa_",
  instagramUrl: "https://www.instagram.com/nzakiyaaa_/",
};

export const GROOM: CoupleMember = {
  nickname: "Fadel",
  fullName: "Arrasyiid Fadel Fatonsyah",
  roleLabel: "Sang Mempelai Pria",
  childLabel: "Putra dari",
  fatherName: "Bapak H. Sunoto",
  motherName: "Ibu Hj. Eli Ernawati",
  instagramHandle: "arfafa.dev",
  instagramUrl: "https://www.instagram.com/arfafa.dev/",
};

export const COUPLE_TITLE = `${BRIDE.nickname} & ${GROOM.nickname}`;

export const WEDDING_DATE_DOTTED = "24 · 09 · 2025";

/** Tanggal acara dipecah untuk tampilan "halaman kalender" di Bab III. */
export const WEDDING_DATE_PARTS = {
  weekday: "Rabu",
  day: "24",
  monthYear: "September 2025",
} as const;

const BRIDE_RESIDENCE_ADDRESS =
  "Jl. Raya Sukolilo No.67, Dusun Gandon Barat, Sukolilo, Kec. Jabung, Kabupaten Malang, Jawa Timur 65155";

const BRIDE_RESIDENCE = {
  venueName: "Kediaman Mempelai Wanita",
  address: BRIDE_RESIDENCE_ADDRESS,
  /** Sumber tidak menyertakan link peta; ini pencarian Google Maps dari alamat. */
  mapsUrl: `https://www.google.com/maps/search/?${new URLSearchParams({
    api: "1",
    query: BRIDE_RESIDENCE_ADDRESS,
  }).toString()}`,
} as const;

export const WEDDING_EVENTS = [
  {
    title: "Akad Nikah",
    narrative: "Di sinilah kami mengikat janji.",
    dateLabel: "Rabu, 24 September 2025",
    timeLabel: "08:00 - 10:00 WIB",
    startsAt: "2025-09-24T08:00:00+07:00",
    ...BRIDE_RESIDENCE,
  },
  {
    title: "Resepsi Pernikahan",
    narrative: "Dan di sinilah kami merayakannya bersama kalian.",
    dateLabel: "Rabu, 24 September 2025",
    timeLabel: "13:00 WIB - Selesai",
    startsAt: "2025-09-24T13:00:00+07:00",
    ...BRIDE_RESIDENCE,
  },
] as const;

export type WeddingEvent = (typeof WEDDING_EVENTS)[number];

/** Hitung mundur menuju acara pertama (akad). */
export const COUNTDOWN_TARGET = WEDDING_EVENTS[0].startsAt;

/**
 * Link "Add to Calendar" (Google Calendar) sebagai acara seharian, karena
 * resepsi tidak punya jam selesai ("13:00 WIB - Selesai").
 */
export const ADD_TO_CALENDAR_URL = `https://calendar.google.com/calendar/render?${new URLSearchParams({
  action: "TEMPLATE",
  text: `Pernikahan ${COUPLE_TITLE}`,
  dates: "20250924/20250925",
  details: WEDDING_EVENTS.map((weddingEvent) => `${weddingEvent.title}: ${weddingEvent.timeLabel}`).join("\n"),
  location: `${BRIDE_RESIDENCE.venueName}, ${BRIDE_RESIDENCE.address}`,
}).toString()}`;

export const HOLY_VERSE = {
  arabic:
    "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
  translation:
    "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir.",
  reference: "QS Ar-Rum : 21",
} as const;

export const OPENING_GREETING = {
  salam: ["Assalamu'alaikum", "Warahmatullahi Wabarakatuh"],
  body: "Dengan memohon Rahmat dan Ridho Allah SWT kami bermaksud untuk mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami.",
} as const;

export const RSVP_INTRO =
  "Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai.";

export interface LoveStoryChapter {
  title: string;
  story: string;
  /** true: bab ini diberi bingkai foto (kosong sampai foto tersedia). */
  hasPhotoFrame: boolean;
}

/** Judul tiap bagian dibedakan; di sumber aslinya empat judul sama ("Menjalin Hubungan"). */
export const LOVE_STORY: LoveStoryChapter[] = [
  {
    title: "Awal Pertemuan",
    story:
      "Kisah ini berawal dari sebuah acara outing kantor. Sebenarnya, Fadel dan Zakiya sudah cukup sering bekerja bersama, hanya saja lebih banyak melalui sistem kerja WFH.",
    hasPhotoFrame: true,
  },
  {
    title: "Di Toko Oleh-oleh",
    story:
      "Hingga pada suatu momen di sebuah toko oleh-oleh, mereka bertemu secara langsung. Dari pertemuan itu, Fadel mulai merasakan sesuatu yang berbeda. Namun setelah acara usai, komunikasi mereka kembali seperti semula—sebatas urusan pekerjaan.",
    hasPhotoFrame: false,
  },
  {
    title: "Dipertemukan Kembali",
    story:
      "Dua tahun kemudian, kantor kembali mengadakan outing, dan mereka dipertemukan lagi. Sejak saat itu, Fadel mulai lebih sering menghubungi Zakiya di luar urusan kantor. Hubungan mereka pun terasa semakin dekat, hingga akhirnya komunikasi mengarah pada sesuatu yang lebih serius.",
    hasPhotoFrame: true,
  },
  {
    title: "Niat Baik",
    story:
      "Fadel menyampaikan perasaannya, dengan niat baik untuk melanjutkan ke tahap berikutnya. Zakiya pun membuka hati, hingga akhirnya Fadel memberanikan diri untuk bertemu keluarga Zakiya. Sejak itu, hubungan mereka semakin serius, hingga sampai pada lamaran, dan insyaAllah akan menuju pernikahan.",
    hasPhotoFrame: false,
  },
  {
    title: "Menuju Halal",
    story:
      "Kisah ini mungkin sederhana, tetapi penuh makna. Alhamdulillah, Allah menyatukan dua hati dalam satu ikatan. Semoga Fadel dan Zakiya menjadi pasangan yang selalu diberkahi, dunia dan akhirat. Aamiin.",
    hasPhotoFrame: true,
  },
];

export const WEDDING_GIFT = {
  bankAccounts: [
    { bankName: "BCA", accountNumber: "3660532225", accountHolder: "Nurotuz Zakiya" },
    { bankName: "MANDIRI", accountNumber: "1450013575762", accountHolder: "Arrasyid Fadel Faton" },
  ],
  shippingRecipient: BRIDE.nickname,
  shippingAddress: BRIDE_RESIDENCE.address,
  notes: [
    "Pastikan nama dan nomor rekening sudah sesuai dengan nama mempelai ketika melakukan proses transfer.",
    "Mohon konfirmasi hadiah Anda dengan mengirim bukti transfer/resi pengiriman kepada mempelai melalui personal message. Terima kasih.",
  ],
} as const;

export const CLOSING_MESSAGE =
  "Menjadi sebuah kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dalam hari bahagia ini. Terima kasih atas segala ucapan, doa, dan perhatian yang diberikan.";

export const CLOSING_SALAM = "Wassalamu'alaikum Warahmatullahi Wabarakatuh";

export type ChapterId = "opening" | "couple" | "story" | "event" | "rsvp" | "gift" | "closing";

export interface StoryChapter {
  id: ChapterId;
  /** Penanda bab, mis. "Bab II". */
  label: string;
  /** Judul naratif bab. */
  title: string;
  /** Nama fungsional section agar tamu tetap tahu isinya, mis. "Detail Acara". */
  caption: string;
  /** Satu kalimat pembuka bab. */
  lead: string;
}

/** Daftar isi undangan; urutannya sama dengan urutan section di halaman. */
export const STORY_CHAPTERS: StoryChapter[] = [
  {
    id: "opening",
    label: "Prolog",
    title: "Sebuah Awal",
    caption: "Ayat Suci & Pembukaan",
    lead: "Setiap kisah punya awal. Kisah kami dimulai dengan doa.",
  },
  {
    id: "couple",
    label: "Bab I",
    title: "Dua Insan",
    caption: "Kedua Mempelai",
    lead: "Dua nama yang ditulis-Nya dalam satu cerita.",
  },
  {
    id: "story",
    label: "Bab II",
    title: "Perjalanan",
    caption: "Kisah Cinta",
    lead: "Dari rekan kerja, menjadi teman hidup.",
  },
  {
    id: "event",
    label: "Bab III",
    title: "Hari yang Dinanti",
    caption: "Detail Acara",
    lead: "Halaman berikutnya akan kami tulis pada",
  },
  {
    id: "rsvp",
    label: "Bab IV",
    title: "Bagian dari Cerita Kami",
    caption: "Konfirmasi Kehadiran",
    lead: "Kehadiranmu akan menjadi bagian dari kisah ini.",
  },
  {
    id: "gift",
    label: "Catatan Kecil",
    title: "Tanda Kasih",
    caption: "Wedding Gift",
    lead: "Doa restu adalah hadiah terindah. Namun jika ingin memberi tanda kasih, dapat melalui:",
  },
  {
    id: "closing",
    label: "Epilog",
    title: "Dan Cerita Berlanjut",
    caption: "Penutup",
    lead: "Cerita ini belum selesai. Ia baru saja dimulai, bersama doa kalian.",
  },
];

/** Ambil data bab berdasarkan id section. */
export function getStoryChapter(chapterId: ChapterId): StoryChapter {
  const chapter = STORY_CHAPTERS.find((storyChapter) => storyChapter.id === chapterId);
  if (!chapter) throw new Error(`Bab "${chapterId}" tidak ditemukan`);
  return chapter;
}
