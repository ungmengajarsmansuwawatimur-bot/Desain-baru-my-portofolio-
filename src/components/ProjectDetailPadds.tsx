import React, { useState, useEffect, useCallback } from 'react';
import { padds6VideoModules } from '../data/padds11Data';

const FOCUS_CONTRIBUTIONS = [
  {
    title: 'Arsitektur Metadata Arsip',
    desc: 'Menyusun struktur tabel arsip kesiswaan dan tata usaha agar dokumen mudah dicari berdasarkan nomor surat dan kategori.',
  },
  {
    title: 'Alur Kerja & Lokasi Fisik',
    desc: 'Memetakan keterhubungan dokumen digital dengan lemari/boks arsip fisik sekolah dan penentuan jadwal retensi.',
  },
  {
    title: 'Navigasi Ramah Operator',
    desc: 'Memastikan tata letak tombol, filter pencarian, dan formulir input nyaman dioperasikan oleh staf administrasi sekolah.',
  },
  {
    title: 'Privasi & Keamanan Data',
    desc: 'Menerapkan penyamaran identitas kependidikan pada seluruh portofolio publik guna menjaga etika kerahasiaan institusi.',
  },
] as const;

interface ProjectDetailPaddsProps {
  onBack: () => void;
}

export const ProjectDetailPadds: React.FC<ProjectDetailPaddsProps> = ({ onBack }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const total = padds6VideoModules.length;
  const current = padds6VideoModules[activeIndex];

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  }, [total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [handlePrev, handleNext]);

  return (
    <article className="min-h-screen py-10 md:py-16 bg-[#FFFFFF] dark:bg-[#121212] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Top Back Navigation Breadcrumb */}
        <div className="flex items-center justify-between gap-4 border-b border-[#171717]/15 dark:border-white/10 pb-5">
          <button
            type="button"
            onClick={onBack}
            className="group inline-flex items-center gap-2.5 text-xs sm:text-sm font-black text-[#171717] dark:text-white hover:text-[#31543A] dark:hover:text-[#F9B51B] transition-colors cursor-pointer"
          >
            <span className="w-8 h-8 rounded-full border-2 border-[#171717] dark:border-white flex items-center justify-center font-bold text-sm transition-transform group-hover:-translate-x-1">
              &larr;
            </span>
            <span>Kembali ke Beranda</span>
          </button>

          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#31543A] dark:text-[#F9B51B]">
            <span>PROYEK 02</span>
            <span>&bull;</span>
            <span>DETAIL LENGKAP</span>
          </div>
        </div>

        {/* Main Header Information */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="text-4xl sm:text-5xl font-extrabold text-[#F9B51B] tracking-[-0.03em]">02</span>
            <span className="text-xs font-medium tracking-wider text-[#666666] dark:text-[#A3A3A3] uppercase">
              PADDS SMANSAT · 6 Modul Video Asli
            </span>
          </div>
          <div className="text-xs font-bold tracking-[0.08em] text-[#31543A] dark:text-[#F9B51B] uppercase">
            PENGEMBANGAN SISTEM ARSIP
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171717] dark:text-white tracking-[-0.025em] leading-[1.08]">
            Pusat Arsip dan Dokumen Digital Sekolah
          </h1>
          <p className="text-base sm:text-lg text-[#666666] dark:text-[#A3A3A3] leading-[1.65] pt-1 font-normal">
            Platform pengelolaan arsip digital SMAN 1 Suwawa Timur yang memusatkan pencatatan surat dan dokumen, pencarian, pengelolaan metadata, lokasi fisik, retensi, QR/public link, pelaporan, dan jejak aktivitas. Rekaman video langsung memperlihatkan demo interaksi nyata di setiap modul sistem.
          </p>
        </div>

        {/* PEMUTAR VIDEO EMBED ASLI (6 MODUL RESMI) */}
        <div className="space-y-6 pt-6 border-t border-[#171717]/15 dark:border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold tracking-[0.08em] text-[#171717] dark:text-white uppercase block">
                Pemutar Dokumentasi Video Modul Sistem
              </span>
              <p className="text-xs text-[#666666] dark:text-[#A3A3A3] mt-0.5">
                Demonstrasi video interaksi layar untuk 6 modul operasional PADDS SMANSAT.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#31543A] dark:text-[#F9B51B]">
                Modul {activeIndex + 1} dari {total}
              </span>
            </div>
          </div>

          {/* Video Container */}
          <div className="relative w-full aspect-video max-h-[640px] bg-black rounded-3xl overflow-hidden shadow-[6px_6px_0px_#171717] border-2 border-[#171717] dark:border-[#333333]">
            <iframe
              key={current.youtubeId}
              src={`https://www.youtube-nocookie.com/embed/${current.youtubeId}?rel=0&modestbranding=1&playsinline=1`}
              title={`Video dokumentasi rekaman layar ${current.name}`}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>

          {/* Bar Informasi & Navigasi Modul */}
          <div className="flex items-center justify-between text-xs text-[#666666] dark:text-[#A3A3A3] px-1 flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <span className="font-black text-[#171717] dark:text-white text-sm">
                Modul {current.number}: {current.name}
              </span>
              <span className="text-[#666666] dark:text-[#A3A3A3] hidden sm:inline">— {current.tag}</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 bg-[#F5F5F5] dark:bg-[#1E1E1E] border-2 border-[#171717] dark:border-[#333333] rounded-full px-3 py-1 shadow-[2px_2px_0px_#171717]">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Modul Sebelumnya"
                  title="Modul Sebelumnya"
                  className="p-1 text-[#171717] dark:text-white hover:text-[#F9B51B] transition-colors cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <span className="text-[11px] px-1 text-[#171717] dark:text-white font-bold">
                  {activeIndex + 1} / {total}
                </span>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Modul Berikutnya"
                  title="Modul Berikutnya"
                  className="p-1 text-[#171717] dark:text-white hover:text-[#F9B51B] transition-colors cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <a
                href={current.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-black text-[#31543A] dark:text-[#F9B51B] hover:underline"
              >
                <svg className="w-4 h-4 fill-current text-[#F9B51B]" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>Buka di YouTube</span>
              </a>
            </div>
          </div>

          {/* Module Selector Horizontal Tabs Strip */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-2 pt-1 no-scrollbar">
            {padds6VideoModules.map((mod, idx) => (
              <button
                key={mod.number}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`px-4 py-2.5 rounded-full border-2 text-left transition-all cursor-pointer shrink-0 flex items-center gap-2 ${
                  activeIndex === idx
                    ? 'bg-[#31543A] text-white border-[#171717] shadow-[3px_3px_0px_#171717]'
                    : 'bg-[#F5F5F5] dark:bg-[#1E1E1E] text-[#171717] dark:text-white border-[#171717]/15 dark:border-[#333333] hover:border-[#171717]'
                }`}
              >
                <span className={`text-[11px] font-black ${activeIndex === idx ? 'text-[#F9B51B]' : 'text-[#31543A] dark:text-[#F9B51B]'}`}>
                  {mod.number}
                </span>
                <span className="text-xs font-bold whitespace-nowrap">
                  {mod.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* FOKUS & KONTRIBUSI PENGEMBANGAN (LINEAR FEATURE LIST) */}
        <div className="space-y-4 pt-6 border-t border-[#171717]/15 dark:border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#F9B51B]" />
            <h3 className="text-xs sm:text-sm font-black text-[#171717] dark:text-white uppercase tracking-wider">
              Fokus &amp; Kontribusi Pengembangan
            </h3>
          </div>

          <div className="divide-y divide-[#171717]/10 dark:divide-white/10 rounded-3xl border-2 border-[#171717] dark:border-[#333333] overflow-hidden bg-[#F5F5F5] dark:bg-[#1E1E1E] shadow-[4px_4px_0px_#171717]">
            {FOCUS_CONTRIBUTIONS.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 flex flex-col sm:flex-row items-start gap-4 hover:bg-white dark:hover:bg-[#252528] transition-colors"
              >
                <span className="text-sm font-black text-[#F9B51B] shrink-0 pt-0.5">
                  0{idx + 1}.
                </span>
                <div className="space-y-1">
                  <h4 className="text-sm sm:text-base font-black text-[#171717] dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#666666] dark:text-[#A3A3A3] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Back Button */}
        <div className="pt-8 border-t border-[#171717]/15 dark:border-white/10 flex justify-center">
          <button
            type="button"
            onClick={onBack}
            className="group inline-flex items-center gap-3 px-8 py-3 rounded-full text-sm font-black bg-[#31543A] text-white hover:bg-[#26432E] border-2 border-[#171717] transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <span>&larr; KEMBALI KE BERANDA</span>
          </button>
        </div>
      </div>
    </article>
  );
};
