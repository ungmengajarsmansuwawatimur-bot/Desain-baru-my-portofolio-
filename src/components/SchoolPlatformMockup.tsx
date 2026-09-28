import React, { useState, useRef, useCallback } from 'react';
import { schoolPlatformData } from '../data/portfolioData';
import { OptimizedPicture } from './OptimizedPicture';

interface SchoolPlatformMockupProps {
  onSelectScreenshot?: (name: string) => void;
}

const SchoolPlatformMockupComponent: React.FC<SchoolPlatformMockupProps> = ({ onSelectScreenshot }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const slides = schoolPlatformData.screenshots;
  const activeScreenshot = slides[currentSlide] || slides[0];

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  // Mobile swipe gestures handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      // Swiped left -> next slide
      nextSlide();
    } else if (diff < -45) {
      // Swiped right -> prev slide
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="space-y-8">
      {/* ========================================================================= */}
      {/* SINGLE IMAGE CAROUSEL (INSTAGRAM STYLE: 1 SLIDE AT A TIME)               */}
      {/* Direct screenshots without device mockup frames                           */}
      {/* ========================================================================= */}
      <div className="space-y-3">
        {/* Main Carousel Card Container */}
        <div className="bg-white dark:bg-[#18181B] rounded-2xl border border-[#E5E7EB] dark:border-[#27272A] overflow-hidden shadow-xs transition-colors">
          {/* Top Bar: Slide Index, Title & Pagination Dots */}
          <div className="px-4 sm:px-6 py-3.5 bg-[#F9FAFB] dark:bg-[#141416] border-b border-[#E5E7EB] dark:border-[#27272A] flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="w-2 h-2 rounded-full bg-[#10B981] shrink-0" />
              <span className="text-xs font-mono font-bold tracking-widest text-[#10B981] shrink-0 uppercase">
                0{currentSlide + 1} / 0{slides.length}
              </span>
              <span className="text-[#9CA3AF] shrink-0" aria-hidden="true">·</span>
              <h4 className="text-xs sm:text-sm font-extrabold text-[#111827] dark:text-[#F9FAFB] tracking-tight truncate">
                {activeScreenshot.title}
              </h4>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              {/* Minimal Pagination Dots */}
              <div className="flex items-center gap-1.5" role="tablist" aria-label="Slide Indicator">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Buka slide ${idx + 1}`}
                    className={`transition-all duration-200 cursor-pointer rounded-full ${
                      idx === currentSlide
                        ? 'w-6 h-2 bg-[#10B981]'
                        : 'w-2 h-2 bg-[#9CA3AF]/30 hover:bg-[#9CA3AF]'
                    }`}
                  />
                ))}
              </div>

              {/* Fullscreen Button */}
              <button
                type="button"
                onClick={() => onSelectScreenshot && onSelectScreenshot(activeScreenshot.title)}
                className="hidden sm:flex items-center gap-1.5 text-[11px] font-semibold text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#10B981] dark:hover:text-[#10B981] transition-colors cursor-pointer pl-3 border-l border-[#E5E7EB] dark:border-[#27272A]"
                title="Lihat resolusi penuh"
              >
                <span>Perbesar</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </button>
            </div>
          </div>

          {/* Carousel Viewport (Single Slide, Direct Screenshot, Swipeable) */}
          <div
            className="relative bg-[#0F172A]/3 dark:bg-[#0B111E] select-none flex items-center justify-center min-h-[380px] sm:min-h-[500px] max-h-[640px] overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Left / Previous Arrow Button */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Screenshot sebelumnya"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/75 hover:bg-black text-white flex items-center justify-center border border-white/20 shadow-lg cursor-pointer transition-all active:scale-95"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Direct Screenshot Display Container */}
            <div
              className="w-full h-full max-h-[620px] overflow-y-auto p-2 sm:p-6 flex items-center justify-center cursor-pointer group"
              onClick={() => onSelectScreenshot && onSelectScreenshot(activeScreenshot.title)}
            >
              <OptimizedPicture
                key={activeScreenshot.id}
                src={activeScreenshot.imageUrl || ''}
                alt={activeScreenshot.title}
                loading="lazy"
                decoding="async"
                className="max-h-[580px] w-auto max-w-full object-contain mx-auto rounded-lg shadow-sm transition-opacity duration-200"
              />

              {/* Hover overlay hint */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 backdrop-blur-xs text-white text-[11px] font-semibold px-3 py-1.5 rounded-lg hidden sm:flex items-center gap-1.5 shadow-lg pointer-events-none">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                </svg>
                <span>Klik untuk Memperbesar</span>
              </div>
            </div>

            {/* Right / Next Arrow Button */}
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Screenshot berikutnya"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/75 hover:bg-black text-white flex items-center justify-center border border-white/20 shadow-lg cursor-pointer transition-all active:scale-95"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Bottom Caption & Carousel Navigation Strip */}
          <div className="p-4 sm:p-5 bg-white dark:bg-[#18181B] border-t border-[#E5E7EB] dark:border-[#27272A] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="space-y-0.5">
              <span className="font-bold text-[#111827] dark:text-[#F9FAFB] block">
                Keterangan Tangkapan Layar:
              </span>
              <p className="text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed max-w-2xl">
                {activeScreenshot.caption}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0 self-start sm:self-auto">
              <span className="text-[11px] font-mono text-[#6B7280] dark:text-[#9CA3AF] bg-[#F8F9FA] dark:bg-[#202024] px-2.5 py-1 rounded-md border border-[#E5E7EB] dark:border-[#27272A]">
                Geser / Tombol Panah
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4 EDITORIAL PILLARS (MASALAH, PERAN, MODUL, PRIVASI)                      */}
      {/* Preserved Project Context with Clean Editorial Layout                     */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-2">
        {/* Pillar 1: Masalah */}
        <div className="p-5 bg-white dark:bg-[#18181B] rounded-2xl border border-[#E5E7EB] dark:border-[#27272A] space-y-2 hover:border-[#10B981] dark:hover:border-[#10B981] transition-colors shadow-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#6B7280] dark:text-[#9CA3AF]">
              Konteks Masalah
            </span>
          </div>
          <h4 className="text-sm font-extrabold text-[#111827] dark:text-[#F9FAFB]">
            Administrasi Manual &amp; Data Tercecer
          </h4>
          <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">
            Sebelum digitalisasi melalui PADDS SMANSAT, pencatatan data arsip sekolah, surat masuk/keluar, dan dokumen tata usaha dilakukan manual di buku fisik dan file terpisah, memicu risiko data ganda dan lambatnya pencarian berkas.
          </p>
        </div>

        {/* Pillar 2: Peran Saya */}
        <div className="p-5 bg-white dark:bg-[#18181B] rounded-2xl border border-[#E5E7EB] dark:border-[#27272A] space-y-2 hover:border-[#10B981] dark:hover:border-[#10B981] transition-colors shadow-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#6B7280] dark:text-[#9CA3AF]">
              Peran &amp; Kontribusi
            </span>
          </div>
          <h4 className="text-sm font-extrabold text-[#111827] dark:text-[#F9FAFB]">
            Perancangan Alur &amp; Validasi Data
          </h4>
          <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">
            Menyusun struktur tabel arsip kesiswaan dan tata usaha pada PADDS SMANSAT, memetakan alur input dokumen, validasi retensi arsip, serta memastikan format navigasi mudah dioperasikan staf sekolah.
          </p>
        </div>

        {/* Pillar 3: Modul Terintegrasi */}
        <div className="p-5 bg-white dark:bg-[#18181B] rounded-2xl border border-[#E5E7EB] dark:border-[#27272A] space-y-2 hover:border-[#10B981] dark:hover:border-[#10B981] transition-colors shadow-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#6B7280] dark:text-[#9CA3AF]">
              Modul Terintegrasi
            </span>
          </div>
          <h4 className="text-sm font-extrabold text-[#111827] dark:text-[#F9FAFB]">
            Fitur Utama PADDS SMANSAT
          </h4>
          <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">
            Dashboard metrik arsip, Manajemen Dokumen Arsip, Upload &amp; Import Berkas, Retensi Dokumen, Pencarian Cepat, dan Navigasi Terstruktur yang terhubung dalam satu sistem database.
          </p>
        </div>

        {/* Pillar 4: Integritas & Privasi */}
        <div className="p-5 bg-white dark:bg-[#18181B] rounded-2xl border border-[#E5E7EB] dark:border-[#27272A] space-y-2 hover:border-[#10B981] dark:hover:border-[#10B981] transition-colors shadow-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#6B7280] dark:text-[#9CA3AF]">
              Integritas &amp; Privasi
            </span>
          </div>
          <h4 className="text-sm font-extrabold text-[#111827] dark:text-[#F9FAFB]">
            Perlindungan Privasi Sekolah
          </h4>
          <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">
            Seluruh nomor surat, identitas siswa, dan nomor kontak pada materi portofolio prototipe PADDS SMANSAT telah disamarkan demi mematuhi regulasi privasi data dan etika profesional kependidikan.
          </p>
        </div>
      </div>

      {/* Note */}
      <div className="pt-2">
        <p className="text-xs italic text-[#6B7280] dark:text-[#9CA3AF] max-w-2xl">
          <span className="font-semibold text-[#111827] dark:text-[#F9FAFB]">Catatan Pembuktian Portofolio:</span> {schoolPlatformData.note}
        </p>
      </div>
    </div>
  );
};

export const SchoolPlatformMockup = React.memo(SchoolPlatformMockupComponent);

