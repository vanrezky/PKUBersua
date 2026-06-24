import {
  NavItem,
  MeetupSchedule,
  ProblemItem,
  ValuePropCard,
  ActivityCard,
  TestimonialItem,
} from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Tentang', href: '#tentang' },
  { label: 'Kegiatan', href: '#kegiatan' },
  { label: 'Ruang Temu', href: '#ruang-temu' },
  { label: 'Gabung', href: '#gabung' },
];

export const HERO_BENEFITS: string[] = [
  'Kenalan dengan orang baru di Pekanbaru',
  'Berbagi ilmu, cerita, dan peluang',
  'Ikut kegiatan santai bareng komunitas',
];

export const DUMMY_MEETUP: MeetupSchedule = {
  title: 'Ruang Temu Pekanbaru #12',
  date: 'Sabtu Ini',
  time: '16.00 WIB - Selesai',
  location: 'Kedai Kopi Lokal Rumbai / Gobah',
  badges: ['Ngopi', 'Info', 'Kolaborasi'],
};

export const MINI_AVATARS = [
  { name: 'Rizky', color: 'bg-amber-100 text-amber-800' },
  { name: 'Siti', color: 'bg-blue-100 text-blue-800' },
  { name: 'Ilham', color: 'bg-emerald-100 text-emerald-800' },
  { name: 'Nadya', color: 'bg-rose-100 text-rose-800' },
  { name: 'Dani', color: 'bg-purple-100 text-purple-800' },
  { name: '+42', color: 'bg-slate-800 text-white font-bold' },
];

export const PROBLEM_ITEMS: ProblemItem[] = [
  {
    number: '01',
    title: 'Banyak orang punya skill, tapi belum punya circle.',
  },
  {
    number: '02',
    title: 'Ada ide bagus, tapi bingung mau cerita ke siapa.',
  },
  {
    number: '03',
    title: 'Mau ikut komunitas, tapi takut suasananya terlalu formal.',
  },
  {
    number: '04',
    title: 'Pengen ngobrol dan berkembang bareng orang lokal.',
  },
];

export const VALUE_PROPS: ValuePropCard[] = [
  {
    title: 'Ruang Temu Offline',
    description:
      'Kegiatan santai seperti ngopi, diskusi kecil, sharing pengalaman, atau meetup komunitas.',
    badge: 'Tatap Muka & Hangat',
    iconName: 'coffee',
  },
  {
    title: 'Ruang Temu Digital',
    description:
      'Tempat update agenda, cerita komunitas, dokumentasi kegiatan, dan info kolaborasi.',
    badge: 'Kapan Saja & Terhubung',
    iconName: 'laptop',
  },
];

export const ACTIVITIES: ActivityCard[] = [
  {
    title: 'Ngopi & Kenalan',
    description:
      'Meetup santai untuk ngobrol, kenalan, dan cari teman baru di Pekanbaru.',
    badge: 'Santai & Rutin',
    icon: 'coffee',
    colorAccent: 'border-amber-400 bg-amber-50/50 text-amber-900',
  },
  {
    title: 'Sharing Session',
    description:
      'Sesi berbagi pengalaman seputar kerja, teknologi, bisnis kecil, kreatif, dan kehidupan sehari-hari.',
    badge: 'Belajar Bareng',
    icon: 'users',
    colorAccent: 'border-blue-400 bg-blue-50/50 text-blue-900',
  },
  {
    title: 'Kolaborasi Lokal',
    description:
      'Tempat menemukan partner, teman diskusi, atau peluang kolaborasi antar warga Pekanbaru.',
    badge: 'Peluang & Karya',
    icon: 'handshake',
    colorAccent: 'border-orange-400 bg-orange-50/50 text-orange-900',
  },
];

export const HIGHLIGHT_TAGS = [
  'Pekanbaru',
  'Kota Bertuah',
  'Ruang Temu Digital',
  'Komunitas Lokal',
  'Anak Muda Kreatif',
  'Saling Berjumpa',
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote:
      'Awalnya cuma ikut ngobrol, ternyata ketemu banyak orang yang satu frekuensi.',
    name: 'Anggota Komunitas',
    role: 'Software Engineer & Freelancer',
    avatarBg: 'bg-blue-600 text-white',
  },
  {
    quote:
      'Enak karena suasananya santai. Tidak harus formal, tapi tetap dapat insight.',
    name: 'Warga Pekanbaru',
    role: 'Pebisnis Kecil & F&B',
    avatarBg: 'bg-amber-500 text-white',
  },
  {
    quote:
      'Dari kenalan kecil, bisa jadi diskusi kerjaan, project, dan kolaborasi.',
    name: 'Teman Bersua',
    role: 'UI/UX Designer',
    avatarBg: 'bg-indigo-600 text-white',
  },
];
