import React from 'react';
import { candidateProfile } from '../data/portfolioData';
import { MarqueeTicker } from './MarqueeTicker';
import { EditableImage } from './EditableImage';
import { portfolioImages } from '../assets/images';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  return (
    <section id="home" className="pt-24 sm:pt-28 md:pt-32 bg-white dark:bg-[#121212] transition-colors duration-200">
      {/* Yellow Accent Pill Tab Centered */}
      <div className="flex justify-center mb-4">
        <div className="w-12 sm:w-16 h-3.5 sm:h-4 rounded-full bg-[#F9B51B] shadow-xs" />
      </div>

      {/* Full-Bleed Banner Photo: Tersambung Penuh ke Sisi Kiri & Kanan Section Website */}
      <div className="w-full mb-12 sm:mb-16 relative">
        <EditableImage
          storageKey="hero_creative_banner"
          defaultSrc={portfolioImages.creativeDeskBanner}
          alt="Aktivitas Meja Kerja & Perencanaan Profesional"
          containerClassName="w-full h-60 sm:h-76 md:h-96 lg:h-[420px] relative overflow-hidden"
          imgClassName="w-full h-full object-cover object-center"
          buttonPosition="top-right"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        {/* Main 12-Column Hero Grid: Left Typography + Right Steve-style Portrait Graphic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (Col 1-7): Steve Mengelkoch Typography, Headline & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Kicker with 4-point stars */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.08em] uppercase text-[#F9B51B]">
              <span aria-hidden="true">✦</span>
              <span>MY PORTFOLIO &bull; PROFIL RESMI</span>
              <span aria-hidden="true">✦</span>
            </div>

            {/* Giant Display Headline (Steve Mengelkoch Display) */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[4.75rem] font-extrabold tracking-[-0.035em] text-[#171717] dark:text-white leading-[1.0] break-words">
                {candidateProfile.fullName}
              </h1>
            </div>

            {/* Bio Description Text */}
            <p className="text-base sm:text-lg text-[#666666] dark:text-[#A3A3A3] leading-[1.65] max-w-xl font-normal">
              {candidateProfile.summary}
            </p>

            {/* Steve-style Split Pill CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase bg-[#31543A] text-white hover:bg-[#26432E] border-2 border-[#171717] transition-all duration-150 shadow-md active:scale-95 cursor-pointer"
              >
                <span>VIEW MY WORK</span>
                <span className="w-9 h-9 rounded-full bg-[#F9B51B] text-[#171717] flex items-center justify-center font-bold text-base shrink-0 transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>

              <button
                type="button"
                onClick={onOpenCvModal}
                className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase bg-white dark:bg-[#1E1E1E] text-[#171717] dark:text-white hover:bg-[#F5F5F5] dark:hover:bg-[#2A2A2A] border-2 border-[#171717] dark:border-white transition-all duration-150 shadow-md active:scale-95 cursor-pointer"
              >
                <span>UNDUH CV RESMI</span>
                <span className="w-9 h-9 rounded-full bg-[#171717] dark:bg-white text-white dark:text-[#171717] flex items-center justify-center font-bold text-sm shrink-0 transition-transform group-hover:translate-x-1">
                  ↓
                </span>
              </button>
            </div>
          </div>

          {/* Right Column (Col 8-12): Steve Mengelkoch Signature Portrait with Yellow Circle & Retro Lightning */}
          <div className="lg:col-span-5 flex justify-center items-center relative select-none pt-4 lg:pt-0">
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] aspect-[4/5] flex items-end justify-center">
              {/* Retro Graphic Accent 1: Comic Lightning Bolt (Top Right) */}
              <div className="absolute top-2 right-4 z-20 animate-bounce" style={{ animationDuration: '3s' }} aria-hidden="true">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[#F9B51B] drop-shadow-[2px_2px_0px_#171717]" viewBox="0 0 24 24" fill="currentColor" stroke="#171717" strokeWidth="1.5">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>

              {/* Retro Graphic Accent 2: 4-Point Star (Top Left) */}
              <div className="absolute top-6 left-2 z-20 text-[#F9B51B] text-2xl font-black drop-shadow-[1px_1px_0px_#171717]" aria-hidden="true">
                ✦
              </div>

              {/* Iconic Steve Mengelkoch Warm Yellow Circular / Egg Backdrop */}
              <div
                className="absolute inset-x-4 bottom-0 top-12 rounded-[50%_50%_45%_45%] bg-[#F9B51B] border-4 border-[#171717] shadow-[6px_6px_0px_#171717] overflow-hidden"
                aria-hidden="true"
              />

              {/* Floating Pill Badge 1: Pelayanan Konsumen (Top Right) */}
              <div className="absolute top-28 right-0 z-20 bg-[#31543A] text-white text-xs sm:text-sm font-black px-4 py-1.5 rounded-full border-2 border-[#171717] shadow-[3px_3px_0px_#171717]">
                Pelayanan Konsumen
              </div>

              {/* Floating Pill Badge 2: Kasir & POS (Bottom Left) */}
              <div className="absolute bottom-20 -left-2 z-20 bg-[#F9B51B] text-[#171717] text-xs sm:text-sm font-black px-4 py-1.5 rounded-full border-2 border-[#171717] shadow-[3px_3px_0px_#171717]">
                Kasir &amp; POS
              </div>

              {/* Floating Pill Badge 3: Penataan Display (Bottom Right) */}
              <div className="absolute bottom-10 right-2 z-20 bg-[#F9B51B] text-[#171717] text-xs sm:text-sm font-black px-4 py-1.5 rounded-full border-2 border-[#171717] shadow-[3px_3px_0px_#171717]">
                Display &amp; Planogram
              </div>

              {/* Floating Pill Badge 4: Manajemen Stok (Middle Left) */}
              <div className="absolute top-44 -left-4 z-20 bg-[#31543A] text-white text-xs sm:text-sm font-black px-3.5 py-1.5 rounded-full border-2 border-[#171717] shadow-[3px_3px_0px_#171717]">
                Manajemen Stok
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Signature Steve Mengelkoch Horizontal Yellow Marquee Ticker Strip */}
      <MarqueeTicker />
    </section>
  );
};

