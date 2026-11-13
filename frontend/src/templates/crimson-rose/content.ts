/**
 * Data undangan Zakiya & Fadel untuk template crimson-rose.
 * Sumber: undangan-zakiya-fadel.md (salinan dari its.goodchoice.id/zakiya-fadel).
 *
 * Data ini sengaja terpisah dari `lib/constants.ts` karena pasangannya berbeda
 * dengan undangan utama (Hendra & Vika).
 */

export const BRIDE = {
  nickname: "Zakiya",
  fullName: "Nurotuz Zakiya",
  childOf: "Putri dari Alm. Bapak H. Ali Masyhar & Ibu Anggia Murni",
  instagramUrl: "https://www.instagram.com/nzakiyaaa_/",
} as const;

export const GROOM = {
  nickname: "Fadel",
  fullName: "Arrasyiid Fadel Fatonsyah",
  childOf: "Putra dari Bapak H. Sunoto & Ibu Hj. Eli Ernawati",
  instagramUrl: "https://www.instagram.com/arfafa.dev/",
} as const;

export const COUPLE_TITLE = `${BRIDE.nickname} & ${GROOM.nickname}`;

export const WEDDING_DATE_LONG = "24 September 2025";
export const WEDDING_DATE_SHORT = "24.09.25";

const BRIDE_RESIDENCE = {
  venueName: "Kediaman Mempelai Wanita",
  address:
    "Jl. Raya Sukolilo No.67, Dusun Gandon Barat, Sukolilo, Kec. Jabung, Kabupaten Malang, Jawa Timur 65155",
} as const;

export const WEDDING_EVENTS = [
  {
    title: "Akad Nikah",
    dateLabel: "Rabu, 24 September 2025",
    timeLabel: "08:00 - 10:00 WIB",
    startsAt: "2025-09-24T08:00:00+07:00",
    ...BRIDE_RESIDENCE,
  },
  {
    title: "Resepsi Pernikahan",
    dateLabel: "Rabu, 24 September 2025",
    timeLabel: "13:00 WIB - Selesai",
    startsAt: "2025-09-24T13:00:00+07:00",
    ...BRIDE_RESIDENCE,
  },
] as const;

export const HOLY_VERSE = {
  arabic:
    "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
  translation:
    "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir.",
  reference: "QS Ar-Rum : 21",
} as const;

export const OPENING_GREETING = {
  salam: ["Assalamu'alaikum", "Warahmatullahi Wabarakatuh"],
  body: "Dengan memohon Rahmat dan Ridho Allah SWT kami bermaksud untuk mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami:",
} as const;

export const RSVP_INTRO =
  "Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai. Atas kehadiran serta doa restu, kami ucapkan terima kasih.";

export const LOVE_STORY = [
  {
    title: "Awal Pertemuan",
    story:
      "Kisah ini berawal dari sebuah acara outing kantor. Sebenarnya, Fadel dan Zakiya sudah cukup sering bekerja bersama, hanya saja lebih banyak melalui sistem kerja WFH.",
  },
  {
    title: "Menjalin Hubungan",
    story:
      "Hingga pada suatu momen di sebuah toko oleh-oleh, mereka bertemu secara langsung. Dari pertemuan itu, Fadel mulai merasakan sesuatu yang berbeda. Namun setelah acara usai, komunikasi mereka kembali seperti semula—sebatas urusan pekerjaan.",
  },
  {
    title: "Menjalin Hubungan",
    story:
      "Dua tahun kemudian, kantor kembali mengadakan outing, dan mereka dipertemukan lagi. Sejak saat itu, Fadel mulai lebih sering menghubungi Zakiya di luar urusan kantor. Hubungan mereka pun terasa semakin dekat, hingga akhirnya komunikasi mengarah pada sesuatu yang lebih serius.",
  },
  {
    title: "Menjalin Hubungan",
    story:
      "Fadel menyampaikan perasaannya, dengan niat baik untuk melanjutkan ke tahap berikutnya. Zakiya pun membuka hati, hingga akhirnya Fadel memberanikan diri untuk bertemu keluarga Zakiya. Sejak itu, hubungan mereka semakin serius, hingga sampai pada lamaran, dan insyaAllah akan menuju pernikahan.",
  },
  {
    title: "Menjalin Hubungan",
    story:
      "Kisah ini mungkin sederhana, tetapi penuh makna. Alhamdulillah, Allah menyatukan dua hati dalam satu ikatan. Semoga Fadel dan Zakiya menjadi pasangan yang selalu diberkahi, dunia dan akhirat. Aamiin.",
  },
] as const;

export const WEDDING_GIFT = {
  intro: "Bagi yang ingin memberikan tanda kasih, dapat mengirimkan melalui fitur di bawah ini:",
  bankAccounts: [
    { bankName: "BCA", accountNumber: "3660532225", accountHolder: "Nurotuz Zakiya" },
    { bankName: "MANDIRI", accountNumber: "1450013575762", accountHolder: "Arrasyid Fadel Faton" },
  ],
  shippingRecipient: BRIDE.nickname,
  shippingAddress: BRIDE_RESIDENCE.address,
  notes: [
    "Pastikan nama dan nomor rekening sudah sesuai dengan nama mempelai ketika melakukan proses transfer.",
    "Mohon untuk melakukan konfirmasi hadiah anda dengan mengirim bukti transfer/ resi pengiriman kepada mempelai melalui personal message. Terima kasih.",
  ],
} as const;

/**
 * Di halaman sumber tertulis "Sabtu, 12 Februari 2022 | Pukul 13.00 WIB",
 * kemungkinan sisa template. Tanggal & link YouTube belum dikonfirmasi.
 */
export const LIVE_STREAMING = {
  description: "Acara akan disiarkan secara live melalui youtube",
  scheduleLabel: null,
  youtubeUrl: null,
} as const;

export const CLOSING_MESSAGE =
  "Menjadi sebuah kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dalam hari bahagia ini. Terima kasih atas segala ucapan, doa, dan perhatian yang diberikan. See you on our big day!";
