import React from 'react';
import {
  candidateProfile,
  experienceData,
  coreValues,
} from '../data/portfolioData';

interface AboutExperienceProps {
  onOpenStoreModal?: () => void;
}

const AnimatedCounter: React.FC<{
  target: number;
  suffix?: string;
  duration?: number;
}> = ({ target, suffix = '', duration = 2200 }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic for a silky smooth finish
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(easeOut * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [target, duration]);

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
};

export const AboutExperience: React.FC<AboutExperienceProps> = () => {
  const backgroundItems = [
    {
      id: 'bg-1',
      type: 'experience' as const,
      category: 'Pengalaman Kerja',
      period: '2016 – Sekarang (± 8 Tahun)',
      periodBadge: 'Paruh Waktu',
      title: 'Pengelolaan Usaha Keluarga',
      subtitle: 'Operasional Usaha Mandiri',
      description:
        'Membantu operasional toko fisik keluarga sejak 2016, menangani interaksi langsung dengan konsumen, penjelasan produk, penerimaan pembayaran tunai, serta menjaga kerapian stok barang secara konsisten.',
      tags: ['Pelayanan Langsung', 'Kasir POS', 'Penataan Barang', 'Manajemen Stok'],
      isFeatured: false,
      icon: (
        <svg className="w-8 h-8 sm:w-9 sm:h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.25A2.25 2.25 0 010 18.75V10.5m13.5 10.5h7.5A2.25 2.25 0 0023.25 18.75V10.5M3 10.5l9-7.5 9 7.5M3 10.5v8.25A2.25 2.25 0 005.25 21h3" />
        </svg>
      ),
    },
    {
      id: 'bg-2',
      type: 'experience' as const,
      category: 'Pengalaman Kerja',
      period: 'Desember 2024 – Sekarang',
      periodBadge: 'Layanan Mandiri',
      title: 'Pelayanan & Pengelolaan Jasa Digital',
      subtitle: 'Komunikasi Klien & Publikasi Naskah',
      description:
        'Memberikan layanan langsung kepada pelanggan melalui WhatsApp dalam memahami kebutuhan publikasi naskah/berita tugas, koordinasi pengerjaan, transparansi tarif, penanganan revisi, hingga follow-up kepuasan klien.',
      tags: ['Komunikasi Konsumen', 'Publikasi Media', 'Manajemen Revisi', 'Pelayanan Cepat'],
      isFeatured: true, // Yellow circular arrow matching row 2 of the example screenshot
      icon: (
        <svg className="w-8 h-8 sm:w-9 sm:h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
        </svg>
      ),
    },
    {
      id: 'bg-3',
      type: 'experience' as const,
      category: 'Pengalaman Kerja & Pembelajaran',
      period: 'Februari 2025 – Sekarang',
      periodBadge: 'Pengembangan Mandiri',
      title: 'Pembelajaran Retail & Operasional Toko',
      subtitle: 'Standar Ritel Modern & Penataan Rak',
      description:
        'Mendalami prinsip operasional ritel modern secara intensif, mencakup pelayanan ramah konsumen, display barang metode FIFO, pemahaman planogram rak, sistem kasir POS, dan komunikasi pelayanan pembeli.',
      tags: ['Customer Service', 'Display FIFO', 'Planogram Rak', 'Kasir POS'],
      isFeatured: false,
      icon: (
        <svg className="w-8 h-8 sm:w-9 sm:h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
      ),
    },
    {
      id: 'bg-4',
      type: 'education' as const,
      category: 'Pendidikan Formal',
      period: '2020 – 2023',
      periodBadge: 'SMA',
      title: 'SMA Negeri 1 Kabila',
      subtitle: 'Pendidikan Menengah Atas (Suwawa Timur)',
      description:
        'Menyelesaikan pendidikan menengah atas dengan rekam jejak kedisiplinan yang baik, keterlibatan aktif dalam kegiatan kesiswaan, tata kelola administrasi sekolah, serta pembentukan etika komunikasi dan kerja sama tim.',
      tags: ['Kesiswaan', 'Administrasi Dasar', 'Disiplin & Tanggung Jawab'],
      isFeatured: false,
      icon: (
        <svg className="w-8 h-8 sm:w-9 sm:h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
    },
  ];

  const filteredItems = backgroundItems;

  return (
    <section id="about" className="py-20 md:py-28 bg-[#F5F5F5] dark:bg-[#18181B] border-t border-[#171717]/15 dark:border-white/10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* ========================================================================= */}
        {/* PART 1: ABOUT TAUFIK HIDAYAT MALII (Steve Mengelkoch Screenshots 2 & 3)   */}
        {/* ========================================================================= */}
        <div className="space-y-12">
          {/* Section Kicker & Title */}
          <div className="space-y-3">
            <div className="font-display inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.08em] uppercase text-[#F9B51B]">
              <span aria-hidden="true">✦</span>
              <span>ABOUT</span>
              <span aria-hidden="true">✦</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-[#171717] dark:text-white leading-[1.12]">
              About Taufik Hidayat Malii
            </h2>
          </div>

          {/* Narrative Bio & 3 Key Metric Columns */}
          <div className="max-w-4xl space-y-8">
            <div className="font-body space-y-4 text-base sm:text-lg text-[#666666] dark:text-[#A3A3A3] leading-[1.65] font-normal">
              <p>
                Saya memiliki ketertarikan tinggi pada industri pelayanan retail dan operasional toko modern. Melalui pengalaman lebih dari 8 tahun membantu usaha keluarga, saya terlatih melayani berbagai karakter pembeli, mengelola transaksi kasir, menjaga stok barang, serta memastikan area penjualan selalu tertata rapi.
              </p>
              <p>
                Selain pengalaman di toko fisik, saya juga menguasai keterampilan digital dan pengarsipan data yang dibuktikan melalui perancangan sistem prototipe PADDS SMANSAT serta pelayanan puluhan mahasiswa secara mandiri. Bagi saya, pelayanan prima bukan sekadar menjual barang, melainkan menciptakan kepercayaan dan kepuasan bagi pelanggan.
              </p>
            </div>

            {/* 3 Steve Mengelkoch Signature Stat Columns - Centered & Animated */}
            <div className="grid grid-cols-3 divide-x divide-[#171717]/10 dark:divide-white/10 py-6 sm:py-8 border-y border-[#171717]/15 dark:border-white/10 text-center">
              <div className="flex flex-col items-center justify-center text-center px-2 sm:px-4">
                <span className="font-info text-xs sm:text-sm font-normal text-[#666666] dark:text-[#A3A3A3] block uppercase tracking-wide text-center">
                  Pelanggan &amp; Transaksi
                </span>
                <span className="font-info text-3xl sm:text-4xl md:text-5xl font-normal text-[#171717] dark:text-white tracking-tight mt-1.5 block text-center tabular-nums">
                  <AnimatedCounter target={250} suffix="+" duration={2400} />
                </span>
              </div>

              <div className="flex flex-col items-center justify-center text-center px-2 sm:px-4">
                <span className="font-info text-xs sm:text-sm font-normal text-[#666666] dark:text-[#A3A3A3] block uppercase tracking-wide text-center">
                  Modul PADDS SMANSAT
                </span>
                <span className="font-info text-3xl sm:text-4xl md:text-5xl font-normal text-[#171717] dark:text-white tracking-tight mt-1.5 block text-center tabular-nums">
                  <AnimatedCounter target={24} duration={2000} />
                </span>
              </div>

              <div className="flex flex-col items-center justify-center text-center px-2 sm:px-4">
                <span className="font-info text-xs sm:text-sm font-normal text-[#666666] dark:text-[#A3A3A3] block uppercase tracking-wide text-center">
                  Kesiapan Kerja
                </span>
                <span className="font-info text-3xl sm:text-4xl md:text-5xl font-normal text-[#171717] dark:text-white tracking-tight mt-1.5 block text-center tabular-nums">
                  <AnimatedCounter target={100} suffix="%" duration={2200} />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PART 2: EXPERIENCE & EDUCATION (Steve Mengelkoch Editorial Row Layout)    */}
        {/* ========================================================================= */}
        <div id="background" className="space-y-8 pt-10 border-t border-[#171717]/15 dark:border-white/10">
          {/* Section Kicker & Title */}
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="font-display inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.08em] uppercase text-[#F9B51B]">
              <span aria-hidden="true">✦</span>
              <span>BACKGROUND</span>
              <span aria-hidden="true">✦</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-[#171717] dark:text-white leading-[1.12]">
              Experience &amp; Education
            </h2>
          </div>

          {/* Full-width Stacked Horizontal Rows (Screenshot-identical layout) */}
          <div className="border-t border-[#171717]/15 dark:border-white/10 divide-y divide-[#171717]/15 dark:divide-white/10">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="py-8 sm:py-10 md:py-12 group transition-colors hover:bg-black/[0.01] dark:hover:bg-white/[0.01]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start lg:items-center">
                  {/* Left Column (col 1-4): Icon + Title & Category */}
                  <div className="lg:col-span-4 flex items-start gap-4 sm:gap-5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-transparent flex items-center justify-center shrink-0 text-[#171717] dark:text-white transition-transform group-hover:scale-105">
                      {item.icon}
                    </div>
                    <div className="space-y-1">
                      <span className="font-info text-[10px] sm:text-xs font-normal uppercase tracking-wider text-[#31543A] dark:text-[#F9B51B] block">
                        {item.category}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#171717] dark:text-white tracking-[-0.015em] leading-snug">
                        {item.title}
                      </h3>
                      <p className="font-info text-xs sm:text-sm text-[#666666] dark:text-[#A3A3A3] font-normal">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Middle Column (col 5-12): Rich Description & Tags */}
                  <div className="lg:col-span-8 space-y-3">
                    <p className="font-body text-sm sm:text-base text-[#555555] dark:text-[#A3A3A3] leading-[1.65] font-normal">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 pt-0.5">
                      <span className="font-info text-xs font-normal text-[#31543A] dark:text-[#F9B51B]">
                        {item.period}
                      </span>
                      {item.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="font-info text-xs text-[#777777] dark:text-[#888888] font-normal"
                        >
                          &bull; {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PART 3: 3 CORE VALUES (Clean Open Layout)                                 */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          {coreValues.map((val) => (
            <div
              key={val.number}
              className="border-t border-[#171717]/15 dark:border-white/10 pt-4 flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="font-display text-3xl sm:text-4xl font-semibold text-[#F9B51B] leading-none mb-2 tracking-tight">
                  {val.number}
                </div>
                <h4 className="font-display text-base sm:text-lg font-semibold text-[#171717] dark:text-white">
                  {val.title}
                </h4>
              </div>
              <p className="font-body text-xs sm:text-sm text-[#666666] dark:text-[#A3A3A3] leading-[1.6] font-normal">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

