import {
  ExperienceItem,
  WorkflowEvidenceItem,
  SchoolFeature,
  SchoolScreenshot,
  LearningItem,
  SkillGroupData,
  ToolItem,
  ContactChannel,
  CvConfig,
  TestimonialItem,
} from '../types';
import { portfolioImages } from '../assets/images';

export const candidateProfile = {
  fullName: 'TAUFIK HIDAYAT MALII',
  splitName: {
    first: 'Taufik',
    middle: 'Hidayat Malii',
    last: '',
  },
  brandMark: 'TH',
  eyebrow: 'SIAP BERKONTRIBUSI DI DUNIA RETAIL',
  role: 'Operasional & Pelayanan Retail',
  location: 'Gorontalo, Indonesia',
  lastEducation: 'SMA Negeri 1 Kabila (2020 – 2022)',
  currentFocus: 'Operasional retail, pelayanan pelanggan, & pengembangan profesional',
  summary:
    'Berpengalaman dalam pelayanan pelanggan, pengelolaan usaha, serta memiliki kemampuan digital yang dapat mendukung pekerjaan di lingkungan retail.',
  aboutIntro:
    'Saya adalah individu yang memiliki minat besar dalam pelayanan pelanggan dan lingkungan retail. Terbiasa berkomunikasi dengan berbagai jenis pelanggan, disiplin, bertanggung jawab, dan selalu siap untuk belajar hal baru.',
  aboutPreviewQuote: 'Lebih dari Sekadar Pekerjaan, Ini Tentang Pelayanan.',
  mindsetQuote:
    'Saya percaya bahwa kerja yang baik dimulai dari sikap yang baik. Dengan niat belajar, disiplin, dan bertanggung jawab, setiap pekerjaan bisa menjadi pengalaman berharga.',
  learningBannerQuote: 'Knowledge today, better service tomorrow.',
  learningBannerSubtitle:
    'Saya percaya bahwa pembelajaran adalah investasi terbaik untuk menjadi pribadi yang lebih siap, lebih baik, dan lebih bermanfaat di masa depan.',
  values: ['Disiplin', 'Bertanggung Jawab', 'Komunikatif', 'Mudah Beradaptasi'],
  myGoal:
    'Berkembang di lingkungan retail, memberikan pelayanan terbaik, dan terus mempelajari hal baru.',
  footerQuote1: 'Terus belajar, terus berkembang.',
  footerQuote2: 'Setiap pengalaman adalah pelajaran, setiap pelanggan adalah kesempatan.',
  footerQuote3: 'Setiap pekerjaan adalah proses belajar untuk menjadi lebih baik.',
  footerQuote4: 'Belajar tidak pernah berhenti.',
};

export const capabilityColumns = [
  {
    number: '01',
    title: 'Customer Service',
    description: 'Melayani dengan baik, memahami kebutuhan pelanggan.',
    icon: 'users',
  },
  {
    number: '02',
    title: 'Retail',
    description: 'Mendukung operasional toko dan penataan produk.',
    icon: 'bag',
  },
  {
    number: '03',
    title: 'Real Work',
    description: 'Pengalaman nyata dalam pelayanan dan proyek digital.',
    icon: 'laptop',
  },
  {
    number: '04',
    title: 'Digital Skill',
    description: 'Menggunakan teknologi untuk bekerja lebih efektif.',
    icon: 'chart',
  },
];

export const coreValues = [
  {
    number: '01',
    title: 'Disiplin',
    description: 'Menjaga komitmen dalam setiap pekerjaan.',
  },
  {
    number: '02',
    title: 'Bertanggung Jawab',
    description: 'Menyelesaikan tugas dengan baik dan tepat waktu.',
  },
  {
    number: '03',
    title: 'Terbuka untuk Belajar',
    description: 'Selalu siap mempelajari hal baru dan menerima masukan.',
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-1',
    orderNumber: '01',
    title: 'Pengelolaan Usaha Keluarga',
    period: '2016 – Sekarang (Paruh Waktu)',
    durationLabel: '± 8 Tahun',
    type: 'Operasional Usaha Mandiri',
    responsibilities: [
      'Membantu operasional usaha keluarga, melayani pelanggan, memberikan informasi produk, menjaga kepuasan pelanggan, serta mempelajari dasar-dasar penjualan dan pengelolaan toko.',
    ],
    learningBullets: [
      'Interaksi dengan pelanggan',
      'Pelayanan dan komunikasi',
      'Informasi produk',
      'Pengelolaan stok sederhana',
      'Tanggung jawab dan konsistensi',
    ],
  },
  {
    id: 'exp-2',
    orderNumber: '02',
    title: 'Pelayanan & Pengelolaan Jasa Digital',
    period: 'Januari 2025 – Sekarang',
    durationLabel: 'Aktif',
    type: 'Layanan Mandiri',
    responsibilities: [
      'Memberikan layanan secara langsung kepada pelanggan dengan memahami kebutuhan, menjelaskan informasi, melakukan koordinasi selama proses, menangani revisi, dan menindaklanjuti hingga pekerjaan selesai.',
    ],
    learningBullets: [
      'Komunikasi dengan pelanggan',
      'Memahami kebutuhan',
      'Menjelaskan solusi/informasi',
      'Koordinasi dan revisi',
      'Manajemen beberapa permintaan',
      'Follow-up hingga selesai',
    ],
  },
  {
    id: 'exp-3',
    orderNumber: '03',
    title: 'Pembelajaran Retail',
    period: 'Februari 2025 – Sekarang',
    durationLabel: 'Pengembangan Mandiri',
    type: 'Persiapan Karir Retail',
    isLearningFocus: true,
    responsibilities: [
      'Secara aktif mempelajari berbagai materi terkait customer service, operasional toko, product display, planogram, dan stock management sebagai persiapan untuk bekerja di lingkungan retail.',
    ],
    learningBullets: [
      'Customer service fundamentals',
      'Operasional retail',
      'Penataan produk & display',
      'Planogram',
      'Stock management',
      'Komunikasi dan pelayanan pelanggan',
    ],
  },
];

export const workflowEvidenceData: WorkflowEvidenceItem[] = [
  {
    id: 'wf-1',
    sequence: '01',
    title: 'Tanya Jasa & Penawaran Tarif',
    subtitle: 'Alur Chat Nyata',
    shortDescription:
      'Menerima pesan awal dari pelanggan mengenai biaya publikasi berita kegiatan sosialisasi di media portal, dilayani secara cepat dengan transparansi tarif Rp 50.000 – 100.000.',
    privacyNote:
      'Identitas dan nomor telepon disamarkan demi privasi pelanggan sesuai etika profesional.',
    replacementGuide:
      'Tangkapan layar WhatsApp asli alur negosiasi dan respons awal.',
    screenshotUrl: '/assets/chat/chat_real_evidence_01.svg',
    screenshots: [
      '/assets/chat/chat_real_evidence_01.svg',
      '/assets/chat/chat_real_evidence_02.svg',
      '/assets/chat/chat_real_evidence_05.svg',
      '/assets/chat/chat_real_evidence_03.svg',
      '/assets/chat/chat_real_evidence_04.svg',
    ],
    chats: [
      {
        sender: 'client',
        text: 'assalamualaikum kak, untuk upload kegiatan di berita atau portal begitu kira-kira berapa ya?',
        time: '08.58',
      },
      {
        sender: 'taufik',
        text: 'Walaikumsalam, 50-100k ka tergantung isi teks dalam naskah',
        time: '09.01',
      },
      {
        sender: 'client',
        text: 'isi teks dalam naskah dari kita yang sediakan kak?',
        time: '09.02',
      },
    ],
  },
  {
    id: 'wf-2',
    sequence: '02',
    title: 'Memahami Kebutuhan',
    subtitle: 'Alur Chat Nyata',
    shortDescription:
      'Mendengarkan rincian kebutuhan naskah dan artikel dari pelanggan secara cermat, memastikan keakuratan berkas yang dikirim, serta mengonfirmasi kesiapan penulisan dan publikasi sesuai instruksi.',
    privacyNote:
      'Identitas dan nomor telepon disamarkan demi privasi pelanggan sesuai etika profesional.',
    replacementGuide:
      'Tangkapan layar WhatsApp asli alur identifikasi kebutuhan naskah dan penyesuaian berkas.',
    screenshotUrl: '/assets/chat/chat_kebutuhan_01.svg',
    screenshots: [
      '/assets/chat/chat_kebutuhan_01.svg',
      '/assets/chat/chat_kebutuhan_02.svg',
      '/assets/chat/chat_kebutuhan_03.svg',
      '/assets/chat/chat_kebutuhan_04.svg',
      '/assets/chat/chat_kebutuhan_05.svg',
    ],
    chats: [
      {
        sender: 'client',
        text: 'Judul Artikel: MENDOBRAK SIKLUS STRES DAN INSOMNIA: SOLUSI UNTUK TIDUR BERKUALITAS (1. Rahma Ramadhani Mooduto, 2. Moh. Ammar Farid, 3. Fatma Ismail, 4. Murhima A. Kau)',
        time: '20.12',
      },
      {
        sender: 'taufik',
        text: 'Okey siap ka 🙏',
        time: '20.13',
      },
      {
        sender: 'client',
        text: 'kak maaf yang ini slah file, ini kak yang baru: ARTIKEL psikologi.docx',
        time: '20.19',
      },
      {
        sender: 'taufik',
        text: 'Okey siap kak 🙏',
        time: '20.39',
      },
    ],
  },
  {
    id: 'wf-3',
    sequence: '03',
    title: 'Koordinasi & Revisi',
    subtitle: 'Alur Chat Nyata',
    shortDescription:
      'Menerima permintaan penyesuaian/revisi urutan nama dosen pembimbing dari pelanggan, melakukan pembaruan pada naskah artikel, dan menjelaskan estimasi sinkronisasi pembaruan sistem (~5 menit) hingga terbit sempurna.',
    privacyNote:
      'Identitas dan nomor telepon disamarkan demi privasi pelanggan sesuai etika profesional.',
    replacementGuide:
      'Tangkapan layar WhatsApp asli alur koordinasi revisi urutan nama dan konfirmasi pembaruan sistem.',
    screenshotUrl: '/assets/chat/chat_revisi_01.svg',
    screenshots: [
      '/assets/chat/chat_revisi_01.svg',
      '/assets/chat/chat_revisi_02.svg',
    ],
    chats: [
      {
        sender: 'client',
        text: 'Kak bisa di edit nama dosen in jadi di paling terakhir ka? Di bagian belakng namanya torang, Soalnya nilai ada kurang kalo nama dosen di depan 🙏🙏',
        time: '15.59',
      },
      {
        sender: 'taufik',
        text: 'Sudah ka, coba dicek ulang ka',
        time: '16.06',
      },
      {
        sender: 'taufik',
        text: 'Sudah ka tunggu 5 menit, baru bisa ka t update di sistem',
        time: '16.09',
      },
      {
        sender: 'client',
        text: 'Ohiyaa kak mksihh bnyak ka 🙏',
        time: '16.10',
      },
    ],
  },
  {
    id: 'wf-4',
    sequence: '04',
    title: 'Pekerjaan Selesai',
    subtitle: 'Alur Chat Nyata',
    shortDescription:
      'Melakukan serah terima hasil akhir publikasi, memastikan kepuasan pelanggan, menerima dan memvalidasi 19 bukti transfer serta transaksi dari berbagai mahasiswa (DANA, Seabank, Bank Muamalat, BTN, BRI), dan saling bertukar apresiasi secara ramah dan profesional.',
    privacyNote:
      'Nama kontak diseragamkan menjadi Customer Mahasiswa dan nomor telepon disensor demi privasi pelanggan sesuai etika profesional.',
    replacementGuide:
      'Tangkapan layar WhatsApp asli alur penyelesaian pekerjaan, 19 konfirmasi bukti transfer dan penyelesaian transaksi, serta apresiasi pelanggan.',
    screenshotUrl: '/assets/chat/chat_selesai_01.svg',
    screenshots: [
      '/assets/chat/chat_selesai_01.svg',
      '/assets/chat/chat_selesai_02.svg',
      '/assets/chat/chat_selesai_03.svg',
      '/assets/chat/chat_selesai_04.svg',
      '/assets/chat/chat_selesai_05.svg',
      '/assets/chat/chat_selesai_06.svg',
      '/assets/chat/chat_selesai_07.svg',
      '/assets/chat/chat_selesai_08.svg',
      '/assets/chat/chat_selesai_09.svg',
      '/assets/chat/chat_selesai_10.svg',
      '/assets/chat/chat_selesai_11.svg',
      '/assets/chat/chat_selesai_12.svg',
      '/assets/chat/chat_selesai_13.svg',
      '/assets/chat/chat_selesai_14.svg',
      '/assets/chat/chat_selesai_15.svg',
      '/assets/chat/chat_selesai_16.svg',
      '/assets/chat/chat_selesai_17.svg',
      '/assets/chat/chat_selesai_18.svg',
      '/assets/chat/chat_selesai_19.svg',
    ],
    chats: [
      {
        sender: 'client',
        text: 'sudah di transfer kak 🙏 mhon dicek',
        time: '15.08',
      },
      {
        sender: 'taufik',
        text: 'Iyaaa sudah so masuk, makasih banyak yaa 🙏🙏',
        time: '15.10',
      },
      {
        sender: 'client',
        text: 'terimakasih kembali kak sngat membantu 😇',
        time: '15.11',
      },
    ],
  },
];

export const realWorkBadges = {
  myRoles: [
    'Komunikasi dengan pelanggan',
    'Memahami kebutuhan pelanggan',
    'Pengelolaan permintaan',
    'Penentuan tarif berdasarkan kebutuhan',
    'Pelayanan pelanggan',
    'Tindak lanjut layanan',
    'Promosi organik',
    'Rekomendasi pelanggan',
  ],
  outcomesAndImpact: [
    'Periode layanan aktif: Desember 2024 — Sekarang',
    'Total pelanggan terlayani: ±48 mahasiswa selama periode 2024–2025',
    '2024: Melayani sekitar ±30 mahasiswa dengan total pendapatan Rp2,3 juta, dengan tarif Rp50.000–Rp100.000 per artikel sesuai isi dan kebutuhan.',
    '2025: Melayani 18 mahasiswa dari 5 jurusan di Fakultas Ilmu Pendidikan Universitas Negeri Gorontalo, dengan tarif Rp100.000 per artikel dan total pendapatan Rp1,8 juta.',
    'Total pendapatan: Rp4,1 juta selama periode 2024–2025.',
    'Akuisisi pelanggan: Mengembangkan layanan melalui promosi organik dan rekomendasi pelanggan (word of mouth).',
    'Pelayanan pelanggan: Memahami kebutuhan, berkomunikasi selama proses, dan menindaklanjuti permintaan hingga layanan selesai.',
    'Pengelolaan layanan: Menyesuaikan tarif dan proses pengerjaan berdasarkan kebutuhan masing-masing pelanggan.',
    'Pengalaman yang diperoleh: Mengembangkan kemampuan pelayanan pelanggan, koordinasi, komunikasi, dan manajemen waktu melalui pengelolaan layanan secara mandiri.',
  ],
  whatILearned: [
    'Cara berkomunikasi dengan pelanggan',
    'Memahami kebutuhan pelanggan secara detail',
    'Menjelaskan solusi dengan jelas',
    'Menangani revisi dan perubahan permintaan',
    'Menjaga kepuasan pelanggan',
    'Pengelolaan permintaan dan penentuan tarif berdasarkan kebutuhan',
    'Pelayanan pelanggan dan tindak lanjut layanan hingga tuntas',
    'Membangun reputasi melalui promosi organik dan rekomendasi pelanggan',
  ],
};

export const schoolPlatformData = {
  title: 'PADDS SMANSAT',
  fullTitle: 'PADDS SMANSAT',
  summary:
    'Platform PADDS SMANSAT yang dikembangkan untuk membantu pengelolaan data administrasi sekolah dengan lebih mudah dan terstruktur.',
  status: 'Selesai (Demo Prototipe)',
  technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
  note: 'Jika website sudah tidak aktif, bukti berupa 3 screenshot asli prototipe PADDS SMANSAT tetap digunakan sebagai dokumentasi resmi.',
  features: [
    {
      name: 'Manajemen Data Siswa & Arsip',
      description: 'Mengelola data siswa dan arsip dokumen sekolah secara terstruktur.',
    },
    {
      name: 'Manajemen Guru & Staf',
      description: 'Menyimpan dan mengelola data guru serta hak akses staf.',
    },
    {
      name: 'Absensi & Presensi',
      description: 'Pencatatan kehadiran siswa dan log aktivitas sistem.',
    },
    {
      name: 'Laporan & Retensi',
      description: 'Rekap data, laporan berkas, dan pemantauan retensi dokumen.',
    },
    {
      name: 'Pengumuman & Notifikasi',
      description: 'Informasi digital untuk siswa, guru, dan staf tata usaha.',
    },
  ] as SchoolFeature[],
  screenshots: [
    {
      id: 'sc-desktop',
      title: 'Dashboard Prototipe PADDS SMANSAT',
      caption: 'Tampilan antarmuka desktop untuk ringkasan metrik arsip dan status retensi.',
      placeholderLabel: 'Screenshot Desktop Dashboard',
      imageUrl: '/assets/padds/padds_desktop_dashboard.svg',
    },
    {
      id: 'sc-tablet',
      title: 'Manajemen Arsip Prototipe PADDS SMANSAT',
      caption: 'Tampilan antarmuka tablet untuk tabel berkas arsip dan kontrol filter data.',
      placeholderLabel: 'Screenshot Tablet Manajemen Arsip',
      imageUrl: '/assets/padds/padds_tablet_manajemen.svg',
    },
    {
      id: 'sc-mobile',
      title: 'Navigasi Menu Prototipe PADDS SMANSAT',
      caption: 'Tampilan antarmuka smartphone untuk drawer menu navigasi terintegrasi.',
      placeholderLabel: 'Screenshot Smartphone Navigasi',
      imageUrl: '/assets/padds/padds_mobile_drawer.svg',
    },
  ] as SchoolScreenshot[],
};

export const learningMaterialsData: LearningItem[] = [
  {
    id: 'learn-01',
    code: '01',
    categoryLabel: 'CUSTOMER SERVICE',
    title: 'Customer Service Fundamentals',
    category: 'Customer Service',
    platform: 'Coursera (Free Course)',
    formats: ['Artikel', 'Video', 'PDF'],
    image: portfolioImages.thumbnails.customerService,
    sourceUrl: 'https://coursera.org',
    overview:
      'Dasar pelayanan pelanggan, komunikasi efektif, dan penanganan keluhan.',
    whatILearnedBullets: [
      'Cara berkomunikasi dengan pelanggan',
      'Memahami kebutuhan pelanggan',
      'Menangani keluhan dengan baik',
    ],
  },
  {
    id: 'learn-02',
    code: '02',
    categoryLabel: 'RETAIL OPERATIONS',
    title: 'Operasional Toko Retail',
    category: 'Retail',
    platform: 'OpenStax',
    formats: ['PDF', 'Video'],
    image: portfolioImages.thumbnails.retailOperations,
    sourceUrl: 'https://openstax.org',
    overview:
      'Operasional toko, alur kerja di area penjualan, dan hal-hal penting dalam menjaga area toko.',
    whatILearnedBullets: [
      'Alur operasional di toko',
      'Manajemen area penjualan',
      'Peran setiap posisi dalam toko',
    ],
  },
  {
    id: 'learn-03',
    code: '03',
    categoryLabel: 'PRODUCT DISPLAY',
    title: 'Product Display & Store Layout',
    category: 'Display',
    platform: 'YouTube (Retail Academy)',
    formats: ['Video', 'Artikel'],
    image: portfolioImages.thumbnails.visualMerchandising,
    sourceUrl: 'https://youtube.com',
    overview:
      'Prinsip penataan produk, store layout, dan strategi display yang menarik.',
    whatILearnedBullets: [
      'Teknik penataan produk',
      'Cara membuat display yang menarik',
      'Meningkatkan daya tarik produk',
    ],
  },
  {
    id: 'learn-04',
    code: '04',
    categoryLabel: 'PLANOGRAM',
    title: 'Planogram di Retail',
    category: 'Planogram',
    platform: 'Retail Academy',
    formats: ['PDF', 'Artikel'],
    image: portfolioImages.thumbnails.planogram,
    sourceUrl: 'https://youtube.com',
    overview:
      'Konsep dan penerapan planogram untuk penataan produk yang efektif dan efisien.',
    whatILearnedBullets: [
      'Membaca planogram',
      'Menata produk sesuai kategori',
      'Menjaga kerapian dan konsistensi display',
    ],
  },
  {
    id: 'learn-05',
    code: '05',
    categoryLabel: 'STOCK MANAGEMENT',
    title: 'Manajemen Stok',
    category: 'Stock',
    platform: 'YouTube / Artikel Retail',
    formats: ['Video', 'Artikel'],
    image: portfolioImages.thumbnails.stockManagement,
    sourceUrl: 'https://youtube.com',
    overview:
      'Pengelolaan stok, pencatatan produk, rotasi barang, dan menghindari stock out.',
    whatILearnedBullets: [
      'Pencatatan dan pengecekan stok',
      'Rotasi barang (FIFO)',
      'Menjaga ketersediaan produk',
    ],
  },
  {
    id: 'learn-06',
    code: '06',
    categoryLabel: 'KOMUNIKASI',
    title: 'Komunikasi di Tempat Kerja',
    category: 'Komunikasi',
    platform: 'LinkedIn Learning (Artikel)',
    formats: ['Video', 'Artikel'],
    image: portfolioImages.thumbnails.communication,
    sourceUrl: 'https://linkedin.com',
    overview:
      'Komunikasi efektif dengan rekan kerja, atasan, dan pelanggan di lingkungan kerja.',
    whatILearnedBullets: [
      'Cara berkomunikasi dengan jelas',
      'Mendengarkan dengan aktif',
      'Menyampaikan informasi dengan tepat',
    ],
  },
];

export const skillGroupsData: SkillGroupData[] = [
  {
    category: 'Customer Service',
    description: 'Kombinasi keterampilan pelayanan pelanggan.',
    iconType: 'customer',
    skills: [
      { name: 'Pelayanan pelanggan' },
      { name: 'Komunikasi interpersonal' },
      { name: 'Identifikasi kebutuhan' },
      { name: 'Problem solving' },
      { name: 'Penanganan keluhan' },
      { name: 'Membangun hubungan baik' },
    ],
  },
  {
    category: 'Retail',
    description: 'Keterampilan operasional toko fisik.',
    iconType: 'retail',
    skills: [
      { name: 'Operasional toko' },
      { name: 'Penataan produk' },
      { name: 'Display produk' },
      { name: 'Planogram' },
      { name: 'Manajemen stok' },
      { name: 'Kebersihan dan kerapian toko' },
    ],
  },
  {
    category: 'Work Skills',
    description: 'Sikap kerja, ketelitian, dan integritas.',
    iconType: 'work',
    skills: [
      { name: 'Ketelitian' },
      { name: 'Tanggung jawab' },
      { name: 'Manajemen waktu' },
      { name: 'Kerja sama tim' },
      { name: 'Adaptabilitas' },
      { name: 'Bekerja di bawah tekanan' },
    ],
  },
  {
    category: 'Digital Skills',
    description: 'Kemampuan digital dan sistem pendukung kerja.',
    iconType: 'digital',
    skills: [
      { name: 'Microsoft Word' },
      { name: 'Microsoft Excel' },
      { name: 'Google Sheets' },
      { name: 'Data entry' },
      { name: 'Manajemen informasi' },
      { name: 'Operasional platform website' },
      { name: 'Dokumentasi digital' },
    ],
  },
];

export const toolsData: ToolItem[] = [
  {
    name: 'Microsoft Word',
    role: 'Microsoft Word',
    category: 'Office',
    iconName: 'word',
  },
  {
    name: 'Microsoft Excel',
    role: 'Microsoft Excel',
    category: 'Office',
    iconName: 'excel',
  },
  {
    name: 'Google Sheets',
    role: 'Google Sheets',
    category: 'Workspace',
    iconName: 'sheets',
  },
  {
    name: 'Google Drive',
    role: 'Google Drive',
    category: 'Cloud',
    iconName: 'drive',
  },
  {
    name: 'WhatsApp',
    role: 'WhatsApp',
    category: 'Messaging',
    iconName: 'whatsapp',
  },
  {
    name: 'Google Chrome',
    role: 'Google Chrome',
    category: 'Browser',
    iconName: 'chrome',
  },
  {
    name: 'Notion',
    role: '(dokumentasi)',
    category: 'Productivity',
    iconName: 'notion',
  },
  {
    name: 'Website Platform',
    role: '(operasional)',
    category: 'Systems',
    iconName: 'web',
  },
  {
    name: 'Canva',
    role: '(desain grafis)',
    category: 'Design',
    iconName: 'canva',
  },
  {
    name: 'CapCut',
    role: '(editing video)',
    category: 'Multimedia',
    iconName: 'capcut',
  },
  {
    name: 'Lovable',
    role: '(AI app builder)',
    category: 'Development',
    iconName: 'lovable',
  },
  {
    name: 'Base44',
    role: '(no-code platform)',
    category: 'Systems',
    iconName: 'base44',
  },
];

export const contactData: ContactChannel[] = [
  {
    platform: 'WhatsApp',
    label: 'WhatsApp',
    value: '+62 856 5638 1485',
    isAvailable: true,
    actionUrl: 'https://api.whatsapp.com/send?phone=6285656381485',
    placeholderText: 'Terhubung melalui pesan instan WhatsApp',
    iconType: 'whatsapp',
  },
  {
    platform: 'Email',
    label: 'Email',
    value: 'taufikmalii281003@gmail.com',
    isAvailable: true,
    actionUrl: 'mailto:taufikmalii281003@gmail.com',
    placeholderText: 'Kirim surat elektronik resmi',
    iconType: 'email',
  },
  {
    platform: 'LinkedIn',
    label: 'LinkedIn',
    value: 'Taufik Hidayat Malii',
    isAvailable: true,
    actionUrl: 'https://www.linkedin.com/in/taufik-hidayat-malii-bb54bb343',
    placeholderText: 'Koneksi jaringan kerja profesional',
    iconType: 'linkedin',
  },
  {
    platform: 'Lokasi',
    label: 'Lokasi',
    value: 'Gorontalo, Indonesia',
    isAvailable: true,
    actionUrl: 'https://www.google.com/maps/search/?api=1&query=Gorontalo,+Indonesia',
    placeholderText: 'Buka lokasi Gorontalo di Google Maps',
    iconType: 'location',
  },
];

export const cvConfiguration: CvConfig = {
  fileName: 'CV_Taufik_Hidayat_Malii.pdf',
  fileSize: '1.2 MB',
  lastUpdated: '2025',
  downloadUrl: '/cv.pdf',
  isAvailable: true,
};

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'testi-1',
    name: 'Customer Mahasiswa',
    role: 'Klien Jasa Digital & Publikasi Artikel UAS',
    category: 'JASA DIGITAL',
    quote:
      'Responnya sangat cepat dan komunikatif. Ketika kami meminta revisi susunan urutan nama dosen pembimbing untuk keperluan penilaian UAS, langsung diperbaiki dalam hitungan menit dan sistemnya terupdate rapi.',
    stars: 5,
  },
  {
    id: 'testi-2',
    name: 'Pelanggan Toko Kelontong',
    role: 'Pelanggan Tetap Usaha Keluarga',
    category: 'PELAYANAN RETAIL',
    quote:
      'Selalu senang belanja di toko karena pelayanannya ramah, penataan barang di etalase dan rak sangat rapi sehingga gampang dicari, dan saat transaksi kasir uang kembalian selalu tepat dan teliti.',
    stars: 5,
  },
  {
    id: 'testi-3',
    name: 'Staf Tata Usaha & Kesiswaan',
    role: 'Pengguna Sistem PADDS SMANSAT',
    category: 'ARSIP DIGITAL',
    quote:
      'Platform PADDS yang dirancang Taufik mempermudah pencarian arsip dan dokumen fisik sekolah. Tata letak menu dan formulir inputnya sangat ramah pengguna, bahkan bagi staf yang belum terbiasa dengan sistem komputer rumit.',
    stars: 5,
  },
  {
    id: 'testi-4',
    name: 'Rekan Kelompok Mahasiswa',
    role: 'Klien Kolaborasi Publikasi Mandiri',
    category: 'INTEGRITAS & TANGGUNG JAWAB',
    quote:
      'Sangat bertanggung jawab dan bisa dipercaya. Setiap tahapan mulai dari cek naskah, konfirmasi revisi, hingga pengiriman bukti transfer dan link hasil publikasi dijalankan dengan transparan.',
    stars: 5,
  },
];
