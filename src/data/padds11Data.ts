export interface PaddsVideoModuleItem {
  id: string;
  number: string;
  name: string;
  tag: string;
  youtubeId: string;
  youtubeUrl: string;
  videoSrc: string;
  altVideoSources: string[];
  posterSrc: string;
  summary: string;
  bullet: string;
}

export const padds6VideoModules: PaddsVideoModuleItem[] = [
  {
    id: 'dashboard',
    number: '01',
    name: 'Dashboard',
    tag: 'Pusat Informasi Operasional',
    youtubeId: '5fQKWxcGXgw',
    youtubeUrl: 'https://youtu.be/5fQKWxcGXgw?si=FlFTuTueJJvIsAcN',
    videoSrc: '/assets/padds/videos/01-dashboard.mp4',
    altVideoSources: [
      '/assets/padds/videos/dashboard.mp4',
      '/assets/padds/01-dashboard.mp4',
      '/assets/padds/dashboard.mp4',
    ],
    posterSrc: '',
    summary:
      'Rekaman layar beranda utama PADDS: metrik total & aktif 80 arsip, 13 kategori, 80 QR aktif, grafik pertumbuhan arsip, serta 6 tombol pintasan akses cepat.',
    bullet: 'Orientasi kerja terpusat untuk memantau status operasional harian secara langsung.',
  },
  {
    id: 'manajemen-arsip',
    number: '02',
    name: 'Manajemen Arsip',
    tag: 'Proses Inti Pengarsipan',
    youtubeId: 'uEvN4NwVJrE',
    youtubeUrl: 'https://youtu.be/uEvN4NwVJrE?si=eyWEqRdZXqltiSj1',
    videoSrc: '/assets/padds/videos/02-manajemen-arsip.mp4',
    altVideoSources: [
      '/assets/padds/videos/manajemen-arsip.mp4',
      '/assets/padds/02-manajemen-arsip.mp4',
      '/assets/padds/manajemen-arsip.mp4',
    ],
    posterSrc: '',
    summary:
      'Rekaman layar pengelolaan daftar arsip: filter tahun, kategori, jenis surat, penelusuran dokumen, dan inspeksi detail arsip resmi beserta tautan verifikasi.',
    bullet: 'Inventarisasi terstruktur berkas dokumen tata usaha dengan kontrol metadata lengkap.',
  },
  {
    id: 'upload-arsip',
    number: '03',
    name: 'Upload Arsip',
    tag: 'Intake & Validasi Dokumen',
    youtubeId: 'emyPbhWUrGA',
    youtubeUrl: 'https://youtu.be/emyPbhWUrGA?si=AYqi6p3DxY1RzVaU',
    videoSrc: '/assets/padds/videos/03-upload-arsip.mp4',
    altVideoSources: [
      '/assets/padds/videos/upload-arsip.mp4',
      '/assets/padds/03-upload-arsip.mp4',
      '/assets/padds/upload-arsip.mp4',
    ],
    posterSrc: '',
    summary:
      'Rekaman layar alur intake berkas: area drag-and-drop dokumen, antrean berkas, tahapan analisis metadata otomatis, dan pengecekan duplikasi nomor surat.',
    bullet: 'Proses intake terverifikasi sebelum dokumen disimpan ke database resmi.',
  },
  {
    id: 'cari-arsip',
    number: '04',
    name: 'Cari Arsip',
    tag: 'Retrieval & Investigasi Database',
    youtubeId: 'wlZlztZ-8Tg',
    youtubeUrl: 'https://youtu.be/wlZlztZ-8Tg?si=MpaNaWjjnQmJnxn3',
    videoSrc: '/assets/padds/videos/04-cari-arsip.mp4',
    altVideoSources: [
      '/assets/padds/videos/cari-arsip.mp4',
      '/assets/padds/04-cari-arsip.mp4',
      '/assets/padds/cari-arsip.mp4',
    ],
    posterSrc: '',
    summary:
      'Rekaman layar navigasi pencarian berkas: fitur pencarian standar multi-kriteria, pencarian semantik AI Document Search, dan investigasi database arsip.',
    bullet: 'Mempercepat penemuan berkas penting sekolah saat audit atau kebutuhan kedinasan.',
  },
  {
    id: 'statistik-laporan',
    number: '05',
    name: 'Statistik & Laporan',
    tag: 'Monitoring & Analisis Operasional',
    youtubeId: 'obX0y8xtM04',
    youtubeUrl: 'https://youtu.be/obX0y8xtM04?si=u_8vg4hIRa-QjDvj',
    videoSrc: '/assets/padds/videos/05-statistik-laporan.mp4',
    altVideoSources: [
      '/assets/padds/videos/statistik-laporan.mp4',
      '/assets/padds/05-statistik-laporan.mp4',
      '/assets/padds/statistik-laporan.mp4',
    ],
    posterSrc: '',
    summary:
      'Rekaman layar visualisasi statistik arsip: grafik pertumbuhan (harian/bulanan/tahunan), distribusi kategori & status, serta ekspor PDF dan Excel.',
    bullet: 'Data analitik komprehensif untuk pelaporan resmi dan evaluasi tata kelola berkas.',
  },
  {
    id: 'qr-code',
    number: '06',
    name: 'QR Code Management',
    tag: 'Akses Cepat & Tautan Publik',
    youtubeId: 'S_WvzYXajxA',
    youtubeUrl: 'https://youtu.be/S_WvzYXajxA?si=uqpQa3d0hygID38n',
    videoSrc: '/assets/padds/videos/06-qr-code.mp4',
    altVideoSources: [
      '/assets/padds/videos/qr-code.mp4',
      '/assets/padds/06-qr-code.mp4',
      '/assets/padds/qr-code.mp4',
    ],
    posterSrc: '',
    summary:
      'Rekaman layar manajemen kode QR berkas: rekap QR aktif (80 QR), daftar tautan publik unik per dokumen, verifikasi instan, dan aksi salin/unduh kode.',
    bullet: 'Jembatan digital-fisik untuk verifikasi keabsahan dokumen arsip sekolah secara instan.',
  },
];

// Compatibility exports
export type Padds11ModuleItem = PaddsVideoModuleItem;
export const padds11Modules = padds6VideoModules;
