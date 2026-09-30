import React from 'react';
import { candidateProfile } from '../data/portfolioData';
import { MarqueeTicker } from './MarqueeTicker';
import { EditableImage } from './EditableImage';
import { portfolioImages } from '../assets/images';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [photoSrc, setPhotoSrc] = React.useState<string>(() => {
    try {
      return localStorage.getItem('custom_hero_portrait') || portfolioImages.heroPortrait;
    } catch {
      return portfolioImages.heroPortrait;
    }
  });

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setPhotoSrc(result);
          try {
            localStorage.setItem('custom_hero_portrait', result);
          } catch {}
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="home" className="pt-24 sm:pt-28 md:pt-32 bg-white dark:bg-[#121212] transition-colors duration-200 overflow-hidden">
      {/* Decorative top pill tab */}
      <div className="flex justify-center mb-3 sm:mb-4">
        <div className="w-12 sm:w-16 h-3 sm:h-3.5 rounded-full bg-[#F9B51B] border-2 border-[#171717] shadow-[2px_2px_0px_#171717]" />
      </div>

      {/* Full-Bleed Rectangular Banner Photo: Membentang Penuh ke Sisi Kiri & Kanan di Section Paling Atas */}
      <div className="w-full mb-10 sm:mb-14 relative">
        <EditableImage
          storageKey="hero_creative_banner"
          defaultSrc={portfolioImages.creativeDeskBanner}
          alt="Aktivitas Meja Kerja & Perencanaan Profesional"
          containerClassName="w-full h-60 sm:h-76 md:h-96 lg:h-[420px] relative overflow-hidden border-y-2 border-[#171717]/10 dark:border-white/10"
          imgClassName="w-full h-full object-cover object-center"
          buttonPosition="top-right"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-0">
        {/* Modern Split-Screen Layout: ~45% Content (Left) + ~55% Portrait (Right) aligned to bottom */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-end">
          
          {/* AREA KIRI — CONTENT (Col 1-5, ~45% width on desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 sm:space-y-7 z-10 pb-8 sm:pb-12 lg:pb-16 pt-4">
            {/* Small Official Label */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-black tracking-[0.08em] uppercase text-[#F9B51B]">
                <span aria-hidden="true">✦</span>
                <span>MY PORTFOLIO • PROFIL RESMI</span>
                <span aria-hidden="true">✦</span>
              </div>
            </div>

            {/* Main Headline: Focal Point 1 */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] xl:text-[4.5rem] font-black tracking-[-0.035em] text-[#171717] dark:text-white leading-[1.02] uppercase break-words">
                {candidateProfile.fullName}
              </h1>
            </div>

            {/* Two Action Buttons: VIEW MY WORK & UNDUH CV RESMI */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#work"
                className="group inline-flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-full bg-[#F5A61D] dark:bg-[#F9B51B] transition-all duration-150 hover:brightness-105 active:scale-95 shadow-md hover:shadow-lg cursor-pointer"
              >
                <span className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#2B4734] text-white text-xs sm:text-sm font-extrabold tracking-widest uppercase flex items-center justify-center">
                  VIEW MY WORK
                </span>
                <span className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white text-[#171717] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:translate-x-1 shadow-sm">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-[#171717]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="4" y1="12" x2="19" y2="12" />
                    <polyline points="13 6 19 12 13 18" />
                  </svg>
                </span>
              </a>

              <button
                type="button"
                onClick={onOpenCvModal}
                className="group inline-flex items-center gap-3 pl-6 pr-2.5 py-2.5 rounded-full text-xs sm:text-sm font-black tracking-wider uppercase bg-white dark:bg-[#1E1E1E] text-[#171717] dark:text-white hover:bg-[#F9B51B]/10 border-2 border-[#171717] dark:border-white transition-all duration-150 shadow-[4px_4px_0px_#171717] dark:shadow-[4px_4px_0px_rgba(255,255,255,0.2)] hover:shadow-[2px_2px_0px_#171717] hover:translate-x-[2px] hover:translate-y-[2px] active:scale-95 cursor-pointer"
              >
                <span>UNDUH CV RESMI</span>
                <span className="w-9 h-9 rounded-full bg-[#171717] dark:bg-white text-white dark:text-[#171717] flex items-center justify-center font-black text-sm shrink-0 transition-transform group-hover:translate-x-1">
                  ↓
                </span>
              </button>
            </div>

            {/* Teks Penyeimbang Sisi Kiri Tepat di Bawah Tombol Aksi */}
            <div className="pt-2 sm:pt-3 max-w-lg">
              <p className="text-sm sm:text-base text-[#555555] dark:text-[#CCCCCC] leading-relaxed font-normal">
                {candidateProfile.summary}
              </p>
            </div>
          </div>

          {/* AREA KANAN — FOTO PORTRAIT (Col 6-12, ~55% width on desktop) Digeser ke Kanan Menempel di Atas Garis Running Text */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end items-end relative select-none pt-6 lg:pt-0 self-end">
            {/* Visual Container: Digeser ke Kanan Secara Tegak Lurus (Shifted Horizontally to the Right, Upright) */}
            <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[540px] xl:max-w-[580px] h-[480px] sm:h-[560px] md:h-[620px] lg:h-[660px] flex items-end justify-center lg:translate-x-10 xl:translate-x-16 transition-transform duration-300">
              
              {/* Decorative Accent 1: Comic Lightning Bolt (Top Right) */}
              <div className="absolute top-2 right-4 sm:right-6 z-20 animate-bounce" style={{ animationDuration: '3s' }} aria-hidden="true">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[#F9B51B] drop-shadow-[2px_2px_0px_#171717]" viewBox="0 0 24 24" fill="currentColor" stroke="#171717" strokeWidth="1.5">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>

              {/* Decorative Accent 2: 4-Point Star (Top Left) */}
              <div className="absolute top-8 left-2 sm:left-4 z-20 text-[#171717] dark:text-[#F9B51B] text-2xl sm:text-3xl font-black drop-shadow-[2px_2px_0px_#F9B51B]" aria-hidden="true">
                ✦
              </div>

              {/* Signature Warm Yellow Rounded Rectangle / Arch Backdrop resting directly on the ticker line (Solid Clean Yellow) */}
              <div
                className="absolute inset-x-4 sm:inset-x-8 bottom-0 top-16 sm:top-20 lg:top-24 rounded-t-[40px] sm:rounded-t-[48px] lg:rounded-t-[56px] rounded-b-none bg-[#F9B51B] border-t-4 border-x-4 border-b-0 border-[#171717] shadow-[6px_0px_0px_#171717]"
                aria-hidden="true"
              />

              {/* Authentic Portrait Photo: Centered, Scaled Up, Dynamically Popping Out Above the Container */}
              <div className="relative z-10 w-full h-full flex items-end justify-center pointer-events-none pb-0 overflow-visible">
                <img
                  src={photoSrc}
                  alt={candidateProfile.fullName}
                  className="h-[105%] sm:h-[110%] lg:h-[114%] w-auto max-w-none object-contain object-bottom drop-shadow-[0_16px_28px_rgba(0,0,0,0.3)] select-none transition-transform duration-300 pointer-events-auto"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  decoding="async"
                />

                {/* Instant Change / Upload Button for custom photo */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                  aria-label="Upload Foto Asli"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  title="Pilih / Ganti Foto Asli dari Perangkat"
                  className="absolute bottom-3 right-5 sm:right-9 z-30 bg-[#171717] hover:bg-[#31543A] text-white p-2.5 rounded-full border-2 border-white shadow-[2px_2px_0px_#171717] text-xs font-bold transition-all hover:scale-110 active:scale-95 cursor-pointer opacity-75 hover:opacity-100 pointer-events-auto"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                  </svg>
                </button>
              </div>

              {/* Floating Pill Badge 1: Pelayanan Konsumen (Top Right) */}
              <div className="absolute top-28 sm:top-32 -right-2 sm:right-0 z-20 bg-[#31543A] text-white text-xs sm:text-sm font-black px-4 py-1.5 rounded-full border-2 border-[#171717] shadow-[3px_3px_0px_#171717]">
                Pelayanan Konsumen
              </div>

              {/* Floating Pill Badge 2: Kasir & POS (Bottom Left) */}
              <div className="absolute bottom-16 sm:bottom-20 -left-2 sm:-left-4 z-20 bg-[#F9B51B] text-[#171717] text-xs sm:text-sm font-black px-4 py-1.5 rounded-full border-2 border-[#171717] shadow-[3px_3px_0px_#171717]">
                Kasir &amp; POS
              </div>

              {/* Floating Pill Badge 3: Penataan Display (Bottom Right) */}
              <div className="absolute bottom-8 sm:bottom-10 -right-1 sm:right-2 z-20 bg-[#F9B51B] text-[#171717] text-xs sm:text-sm font-black px-4 py-1.5 rounded-full border-2 border-[#171717] shadow-[3px_3px_0px_#171717]">
                Display &amp; Planogram
              </div>

              {/* Floating Pill Badge 4: Manajemen Stok (Middle Left) */}
              <div className="absolute top-44 sm:top-48 -left-3 sm:-left-6 z-20 bg-[#31543A] text-white text-xs sm:text-sm font-black px-3.5 py-1.5 rounded-full border-2 border-[#171717] shadow-[3px_3px_0px_#171717]">
                Manajemen Stok
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Signature Horizontal Yellow Marquee Ticker Strip */}
      <MarqueeTicker />
    </section>
  );
};
