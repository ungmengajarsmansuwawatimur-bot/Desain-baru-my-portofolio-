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
    <section id="work" className="py-20 md:py-28 bg-[#FFFFFF] dark:bg-[#121212] border-t border-[#171717]/15 dark:border-white/10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Col 1-7: Typography */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-black tracking-widest uppercase text-[#F9B51B]">
              <span aria-hidden="true">✦</span>
              <span>MY WORK</span>
              <span aria-hidden="true">✦</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#171717] dark:text-white tracking-tight leading-tight">
              Selected Projects &amp;<br />
              <span className="text-[#F9B51B]">Real Evidence</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-[#666666] dark:text-[#A3A3A3] leading-relaxed max-w-2xl font-normal">
              Representasi visual dari 3 bidang portofolio utama: Layanan Jasa Digital, Pusat Arsip Sekolah (PADDS), dan Pengelolaan Usaha Keluarga. Klik pada setiap mockup untuk membuka dokumentasi dan studi kasus lengkap.
            </p>

            {/* Handwritten Script Note */}
            <div className="pt-2">
              <span className="font-serif italic text-base sm:text-lg text-[#171717] dark:text-white block">
                Dari Kebutuhan Menjadi Hasil Nyata
              </span>
              <div className="w-20 h-1 bg-[#31543A] mt-1 rounded-full" />
            </div>
          </div>

          {/* Col 8-12: Editorial Split Image Banner */}
          <div className="lg:col-span-5 flex flex-col items-end">
            <div className="w-full max-w-sm rounded-3xl overflow-hidden border-2 border-[#171717] dark:border-[#333333] shadow-[6px_6px_0px_#171717]">
              <EditableImage
                storageKey="work_retail_service_counter"
                defaultSrc={portfolioImages.retailServiceCounter}
                alt="Pelayanan Kerja Nyata"
                containerClassName="h-44 bg-[#F5F5F5] dark:bg-[#1E1E1E] relative overflow-hidden"
                imgClassName="w-full h-full object-cover"
                buttonPosition="top-right"
              />
              <div className="bg-[#171717] text-white p-5">
                <p className="text-xs font-serif italic leading-relaxed">
                  "Pengalaman di lapangan membentuk ketelitian, ketanggapan, serta standar pelayanan yang prima."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* THREE FOCAL VISUAL MOCKUPS (Steve Mengelkoch Style Presentation)         */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 items-stretch pt-4 border-t border-[#171717]/15 dark:border-white/10">
          {projectEntries.map((entry) => (
            <div
              key={entry.id}
              onClick={() => handleCardClick(entry.id)}
              className="group relative flex flex-col justify-between rounded-3xl bg-white dark:bg-[#1E1E1E] border-2 border-[#171717] dark:border-[#333333] shadow-[6px_6px_0px_#171717] dark:shadow-[6px_6px_0px_#333333] hover:-translate-y-2 hover:shadow-[10px_10px_0px_#171717] dark:hover:shadow-[10px_10px_0px_#F9B51B] transition-all duration-200 overflow-hidden cursor-pointer"
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
              {/* Mockup Focal Visual Area (With True Transparent Background) */}
              <div className="p-6 sm:p-8 bg-gradient-to-b from-[#F5F5F5] to-white dark:from-[#252528] dark:to-[#1E1E1E] border-b-2 border-[#171717] dark:border-[#333333] flex items-center justify-center min-h-[240px] sm:min-h-[270px] relative overflow-hidden">
                {/* Number Badge Top Left */}
                <div className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-[#171717] dark:bg-white text-white dark:text-[#171717] flex items-center justify-center font-black text-xs shadow-sm">
                  {entry.number}
                </div>

                {/* Status / Feature Pill Top Right */}
                <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#31543A] text-white border border-[#171717] shadow-xs">
                  {entry.badge}
                </div>

                {/* Transparent High-Fidelity Device Mockup */}
                <div className="w-full flex items-center justify-center pt-2">
                  <img
                    src={entry.mockupSrc}
                    alt={`Mockup perangkat ${entry.title}`}
                    className="w-full h-auto max-h-[220px] object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Information & Clean Editorial Typography */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-5">
                <div className="space-y-2">
                  <div className="text-[11px] font-black tracking-widest text-[#31543A] dark:text-[#F9B51B] uppercase">
                    {entry.category}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#171717] dark:text-white tracking-tight leading-snug group-hover:text-[#31543A] dark:group-hover:text-[#F9B51B] transition-colors">
                    {entry.title}
                  </h3>
                  <div className="text-[11px] font-bold text-[#666666] dark:text-[#A3A3A3]">
                    {entry.period}
                  </div>
                  <p className="text-xs sm:text-sm text-[#666666] dark:text-[#A3A3A3] leading-relaxed pt-1 line-clamp-3">
                    {entry.teaser}
                  </p>
                </div>

                {/* Steve Mengelkoch Split Pill CTA Button */}
                <div className="pt-2">
                  <div className="inline-flex items-center justify-between w-full pl-5 pr-2 py-2 rounded-full text-xs font-black bg-[#F5F5F5] dark:bg-[#2A2A2A] text-[#171717] dark:text-white group-hover:bg-[#31543A] group-hover:text-white border-2 border-[#171717] dark:border-white transition-all duration-150 shadow-xs">
                    <span>{entry.ctaText}</span>
                    <span className="w-8 h-8 rounded-full bg-[#F9B51B] text-[#171717] flex items-center justify-center font-bold text-xs shrink-0 transition-transform group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
