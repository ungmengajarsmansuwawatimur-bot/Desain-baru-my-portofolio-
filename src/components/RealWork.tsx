import React from 'react';
import { portfolioImages } from '../assets/images';
import { EditableImage } from './EditableImage';

export interface RealWorkProps {
  onSelectProject?: (projectId: 'jasa-digital' | 'padds-smansat' | 'usaha-keluarga') => void;
}

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
              className="space-y-8"
            >
              {/* Header Row: Number & Category */}
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-[#F9B51B] tracking-[-0.02em]">
                  {entry.number}
                </span>
                <span className="font-info text-xs font-normal tracking-[0.08em] text-[#31543A] dark:text-[#F9B51B] uppercase">
                  {entry.category}
                </span>
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

              {/* Visual Mockup Showcase (Clean, Open, Generously Sized) */}
              <div
                onClick={() => handleCardClick(entry.id)}
                className="w-full flex items-center justify-center py-6 sm:py-10 cursor-pointer group select-none transition-transform duration-300 hover:scale-[1.01]"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardClick(entry.id);
                  }
                }}
                aria-label={`Buka detail ${entry.title}`}
              >
                <img
                  src={entry.mockupSrc}
                  alt={`Mockup visual ${entry.title}`}
                  className="w-full max-w-4xl h-auto max-h-[460px] object-contain drop-shadow-2xl transition-all duration-300 group-hover:drop-shadow-3xl"
                  loading="lazy"
                />
              </div>

              {/* Minimalist Action Button (Space-Saving, No Bento Pill) */}
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => handleCardClick(entry.id)}
                  className="font-display group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#31543A] dark:text-[#F9B51B] hover:opacity-80 transition-all cursor-pointer select-none"
                >
                  <span>{entry.ctaText}</span>
                  <span className="text-sm sm:text-base font-bold transition-transform group-hover:translate-x-1 duration-150" aria-hidden="true">
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
