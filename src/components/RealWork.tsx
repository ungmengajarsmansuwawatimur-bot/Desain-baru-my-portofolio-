import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { portfolioImages } from '../assets/images';
import { EditableImage } from './EditableImage';

export interface RealWorkProps {
  onSelectProject?: (projectId: 'jasa-digital' | 'padds-smansat' | 'usaha-keluarga') => void;
}

interface ScrollZoomMockupProps {
  mockupSrc: string;
  title: string;
  onClick: () => void;
}

const ScrollZoomMockup: React.FC<ScrollZoomMockupProps> = ({ mockupSrc, title, onClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Zoom in on enter, stable at peak focal center, zoom out on exit (bi-directional scroll)
  const scale = useTransform(
    scrollYProgress,
    [0, 0.32, 0.68, 1],
    [0.82, 1, 1, 0.82]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.22, 0.78, 1],
    [0.25, 1, 1, 0.25]
  );

  return (
    <div
      ref={containerRef}
      onClick={onClick}
      className="w-full flex items-center justify-center py-6 sm:py-10 cursor-pointer group select-none overflow-visible"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`Buka detail ${title}`}
    >
      <motion.img
        style={{ scale, opacity }}
        src={mockupSrc}
        alt={`Mockup visual ${title}`}
        className="w-full max-w-4xl h-auto max-h-[460px] object-contain drop-shadow-2xl transition-shadow duration-300 group-hover:drop-shadow-3xl will-change-transform"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

export const RealWork: React.FC<RealWorkProps> = ({ onSelectProject }) => {
  const projectEntries = [
    {
      id: 'jasa-digital' as const,
      number: '01',
      period: 'Desember 2024 — Sekarang',
      category: 'PELAYANAN & PENGELOLAAN',
      title: 'Jasa Digital & Publikasi Mahasiswa',
      teaser: 'Layanan koordinasi naskah publikasi artikel tugas mahasiswa via WhatsApp, transparansi tarif, dan penanganan revisi cepat.',
      badge: '5 Studi Alur Nyata',
      mockupSrc: '/assets/mockups/mockup_01_jasa_digital.svg',
      ctaText: 'Buka Detail & Galeri Chat',
    },
    {
      id: 'padds-smansat' as const,
      number: '02',
      period: 'PADDS SMANSAT · 6 Modul Video Asli',
      category: 'PENGEMBANGAN SISTEM ARSIP',
      title: 'Pusat Arsip dan Dokumen Digital Sekolah',
      teaser: 'Platform arsip digital SMAN 1 Suwawa Timur dengan pemusatan pencatatan surat, retensi, QR code, dan rekaman demo 6 modul video asli.',
      badge: '6 Video Demo Sistem',
      mockupSrc: '/assets/mockups/mockup_02_padds_smansat.svg',
      ctaText: 'Buka Detail & 6 Modul Video',
    },
    {
      id: 'usaha-keluarga' as const,
      number: '03',
      period: '2016 — Sekarang (±8 Tahun)',
      category: 'OPERASIONAL & PELAYANAN LANGSUNG',
      title: 'Pengelolaan Usaha Keluarga & Ritel Fisik',
      teaser: 'Praktik nyata melayani pembeli toko, penataan rak metode FIFO, pengecekan stok fisik, hingga ketelitian transaksi kasir tunai.',
      badge: 'Praktik Operasional Nyata',
      mockupSrc: '/assets/mockups/mockup_03_usaha_keluarga.svg',
      ctaText: 'Buka Detail Pengelolaan Usaha',
    },
  ];

  const handleCardClick = (id: 'jasa-digital' | 'padds-smansat' | 'usaha-keluarga') => {
    if (onSelectProject) {
      onSelectProject(id);
    } else {
      window.location.hash = `#/project/${id}`;
    }
  };

  return (
    <section id="work" className="py-20 md:py-28 bg-[#FFFFFF] dark:bg-[#121212] transition-colors duration-200">
      {/* Top Header Typography */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
        <div className="max-w-3xl space-y-4">
          <div className="font-display inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.08em] uppercase text-[#F9B51B]">
            <span aria-hidden="true">✦</span>
            <span>MY WORK</span>
            <span aria-hidden="true">✦</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#171717] dark:text-white tracking-[-0.02em] leading-[1.12]">
            Selected Projects &amp;<br />
            <span className="text-[#F9B51B]">Real Evidence</span>
          </h2>

          <p className="font-body text-base sm:text-lg text-[#666666] dark:text-[#A3A3A3] leading-[1.65] max-w-2xl font-normal text-justify">
            Representasi visual dari 3 bidang portofolio utama: Layanan Jasa Digital, Pusat Arsip Sekolah (PADDS), dan Pengelolaan Usaha Keluarga. Klik pada setiap proyek untuk membuka dokumentasi dan studi kasus lengkap.
          </p>

          {/* Note */}
          <div className="pt-2">
            <span className="font-body italic font-normal text-base sm:text-lg text-[#171717] dark:text-white block">
              Dari Kebutuhan Menjadi Hasil Nyata
            </span>
          </div>
        </div>
      </div>

      {/* Full-Width Image Banner (Tersambung langsung dengan sisi kiri dan kanan section website) */}
      <div className="w-full mb-16 sm:mb-20 relative">
        <EditableImage
          storageKey="work_retail_service_counter"
          defaultSrc={portfolioImages.retailServiceCounter}
          alt="Pelayanan Kerja Nyata"
          containerClassName="w-full h-64 sm:h-80 md:h-96 lg:h-[440px] relative overflow-hidden"
          imgClassName="w-full h-full object-cover object-center"
          buttonPosition="top-right"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* ========================================================================= */}
        {/* EDITORIAL SHOWCASE (Linear & Open Presentation, Absolutely No Bento Grid) */}
        {/* ========================================================================= */}
        <div className="space-y-20 sm:space-y-28">
          {projectEntries.map((entry) => (
            <article
              key={entry.id}
              className="border-t-2 border-[#171717] dark:border-white/20 pt-8 sm:pt-10 space-y-8"
            >
              {/* Header Row: Number, Category & Metadata (Clean zero-pill typography) */}
              <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#171717]/10 dark:border-white/10 pb-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-[#F9B51B] tracking-[-0.03em] leading-none">
                    {entry.number}
                  </span>
                  <div className="space-y-0.5">
                    <span className="font-info text-xs font-semibold tracking-[0.1em] text-[#31543A] dark:text-[#F9B51B] uppercase block">
                      {entry.category}
                    </span>
                    <span className="font-info text-xs text-[#888888] dark:text-[#999999] block">
                      {entry.period}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-info text-[#666666] dark:text-[#A3A3A3]">
                  <span className="w-2 h-2 rounded-full bg-[#31543A] dark:bg-[#F9B51B]" aria-hidden="true" />
                  <span className="font-medium tracking-wide uppercase">{entry.badge}</span>
                </div>
              </div>

              {/* Title & Teaser Content */}
              <div className="max-w-4xl space-y-3">
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#171717] dark:text-white tracking-[-0.02em] leading-[1.15]">
                  {entry.title}
                </h3>
                <p className="font-body text-base sm:text-lg text-[#666666] dark:text-[#A3A3A3] leading-[1.65] font-normal text-justify">
                  {entry.teaser}
                </p>
              </div>

              {/* Visual Mockup Showcase dengan animasi Zoom-in saat masuk & Zoom-out saat keluar viewport */}
              <ScrollZoomMockup
                mockupSrc={entry.mockupSrc}
                title={entry.title}
                onClick={() => handleCardClick(entry.id)}
              />

              {/* Tactile Action Button */}
              <div className="flex items-center pt-2">
                <button
                  type="button"
                  onClick={() => handleCardClick(entry.id)}
                  className="font-display group inline-flex items-center gap-3 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase border-2 border-[#171717] dark:border-white bg-[#171717] dark:bg-white text-white dark:text-[#171717] hover:bg-[#F9B51B] hover:text-[#171717] hover:border-[#171717] dark:hover:bg-[#F9B51B] dark:hover:text-[#171717] dark:hover:border-[#F9B51B] shadow-[3px_3px_0px_#F9B51B] dark:shadow-[3px_3px_0px_#171717] transition-all duration-200 cursor-pointer select-none active:translate-x-0.5 active:translate-y-0.5"
                >
                  <span>{entry.ctaText}</span>
                  <span className="w-6 h-6 rounded-full bg-white dark:bg-[#171717] text-[#171717] dark:text-white group-hover:bg-[#171717] group-hover:text-white dark:group-hover:bg-[#171717] dark:group-hover:text-white flex items-center justify-center text-xs font-bold transition-transform group-hover:translate-x-1" aria-hidden="true">
                    &rarr;
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
