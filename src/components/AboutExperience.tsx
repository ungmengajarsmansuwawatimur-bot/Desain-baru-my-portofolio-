import React from 'react';
import {
  candidateProfile,
  experienceData,
  coreValues,
} from '../data/portfolioData';
import { portfolioImages } from '../assets/images';
import { EditableImage } from './EditableImage';

interface AboutExperienceProps {
  onOpenStoreModal?: () => void;
}

export const AboutExperience: React.FC<AboutExperienceProps> = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#F5F5F5] dark:bg-[#18181B] border-t-2 border-[#171717] dark:border-[#333333] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* ========================================================================= */}
        {/* PART 1: ABOUT TAUFIK HIDAYAT MALII (Steve Mengelkoch Screenshots 2 & 3)   */}
        {/* ========================================================================= */}
        <div className="space-y-12">
          {/* Section Kicker & Title */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-black tracking-widest uppercase text-[#F9B51B]">
              <span aria-hidden="true">✦</span>
              <span>ABOUT</span>
              <span aria-hidden="true">✦</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#171717] dark:text-white">
              About Taufik Hidayat Malii
            </h2>
          </div>

          {/* Grid: Left Bio & 3 Key Stats + Right Second Portrait Graphic */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Col 1-7: Narrative Bio + 3 Key Metric Columns + Split Pill Button */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4 text-sm sm:text-base md:text-lg text-[#666666] dark:text-[#A3A3A3] leading-relaxed">
                <p>
                  Saya memiliki ketertarikan tinggi pada industri pelayanan retail dan operasional toko modern. Melalui pengalaman lebih dari 8 tahun membantu usaha keluarga, saya terlatih melayani berbagai karakter pembeli, mengelola transaksi kasir, menjaga stok barang, serta memastikan area penjualan selalu tertata rapi.
                </p>
                <p>
                  Selain pengalaman di toko fisik, saya juga menguasai keterampilan digital dan pengarsipan data yang dibuktikan melalui perancangan sistem prototipe PADDS SMANSAT serta pelayanan puluhan mahasiswa secara mandiri. Bagi saya, pelayanan prima bukan sekadar menjual barang, melainkan menciptakan kepercayaan dan kepuasan bagi pelanggan.
                </p>
              </div>

              {/* 3 Steve Mengelkoch Signature Stat Columns */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 py-6 border-y-2 border-[#171717] dark:border-[#333333]">
                <div>
                  <span className="text-xs font-bold text-[#666666] dark:text-[#A3A3A3] block uppercase tracking-wide">
                    Pelanggan &amp; Transaksi
                  </span>
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-[#171717] dark:text-white tracking-tight mt-1 block">
                    250+
                  </span>
                </div>

                <div>
                  <span className="text-xs font-bold text-[#666666] dark:text-[#A3A3A3] block uppercase tracking-wide">
                    Modul PADDS SMANSAT
                  </span>
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-[#171717] dark:text-white tracking-tight mt-1 block">
                    24
                  </span>
                </div>

                <div>
                  <span className="text-xs font-bold text-[#666666] dark:text-[#A3A3A3] block uppercase tracking-wide">
                    Kesiapan Kerja
                  </span>
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-[#171717] dark:text-white tracking-tight mt-1 block">
                    100%
                  </span>
                </div>
              </div>

              {/* Read More Split Pill Button */}
              <div>
                <a
                  href="#background"
                  className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full text-sm font-black bg-[#31543A] text-white hover:bg-[#26432E] border-2 border-[#171717] transition-all duration-150 shadow-md active:scale-95 cursor-pointer"
                >
                  <span>BACA RIWAYAT LENGKAP</span>
                  <span className="w-8 h-8 rounded-full bg-[#F9B51B] text-[#171717] flex items-center justify-center font-bold text-sm shrink-0 transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>

            {/* Col 8-12: Steve Mengelkoch Second Cutout Portrait with Yellow Circle & 4 Skill Badges */}
            <div className="lg:col-span-5 flex justify-center items-center relative select-none">
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] flex items-end justify-center">
                {/* Yellow circle backdrop with thick black outline */}
                <div
                  className="absolute inset-x-4 bottom-0 top-10 rounded-[50%_50%_46%_46%] bg-[#F9B51B] border-4 border-[#171717] shadow-[6px_6px_0px_#171717] overflow-hidden"
                  aria-hidden="true"
                />

                {/* Portrait Cutout Photo */}
                <img
                  src={portfolioImages.heroPortrait || portfolioImages.cashierHero}
                  alt="Taufik Hidayat Malii"
                  className="relative z-10 w-full h-[90%] object-contain object-bottom drop-shadow-xl"
                  loading="lazy"
                />

                {/* 4 Floating Badges (Exactly like Screenshot 3) */}
                <div className="absolute top-20 -left-2 z-20 bg-[#31543A] text-white text-xs sm:text-sm font-black px-4 py-1.5 rounded-full border-2 border-[#171717] shadow-[3px_3px_0px_#171717]">
                  Pelayanan Retail
                </div>

                <div className="absolute top-28 -right-2 z-20 bg-[#F9B51B] text-[#171717] text-xs sm:text-sm font-black px-4 py-1.5 rounded-full border-2 border-[#171717] shadow-[3px_3px_0px_#171717]">
                  Kasir POS
                </div>

                <div className="absolute bottom-28 -left-3 z-20 bg-[#F9B51B] text-[#171717] text-xs sm:text-sm font-black px-4 py-1.5 rounded-full border-2 border-[#171717] shadow-[3px_3px_0px_#171717]">
                  Display Produk
                </div>

                <div className="absolute bottom-12 -right-2 z-20 bg-[#31543A] text-white text-xs sm:text-sm font-black px-4 py-1.5 rounded-full border-2 border-[#171717] shadow-[3px_3px_0px_#171717]">
                  Administrasi Arsip
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PART 2: EXPERIENCE & EDUCATION (Steve Mengelkoch Screenshots 5 & 6)       */}
        {/* ========================================================================= */}
        <div id="background" className="space-y-10 pt-10 border-t-2 border-[#171717] dark:border-[#333333]">
          {/* Section Kicker & Title */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-black tracking-widest uppercase text-[#F9B51B]">
              <span aria-hidden="true">✦</span>
              <span>BACKGROUND</span>
              <span aria-hidden="true">✦</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#171717] dark:text-white">
              Experience &amp; Education
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Card 1: Education (Steve's Card Layout with Yellow Header & Thick Border) */}
            <div className="bg-white dark:bg-[#1E1E1E] border-2 border-[#171717] dark:border-[#333333] rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="flex items-center gap-3 pb-4 border-b-2 border-[#E9E9E9] dark:border-[#2A2A2A]">
                <div className="w-12 h-12 rounded-full bg-[#F9B51B] border-2 border-[#171717] flex items-center justify-center shrink-0 text-[#171717]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-[#F9B51B] tracking-tight">
                  Education
                </h3>
              </div>

              {/* Education Rows */}
              <div className="space-y-6 divide-y divide-[#E9E9E9] dark:divide-[#2A2A2A]">
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-base sm:text-lg font-black text-[#171717] dark:text-white">
                      SMA Negeri 1 Kabila (Suwawa Timur)
                    </h4>
                    <p className="text-xs sm:text-sm text-[#666666] dark:text-[#A3A3A3] mt-0.5">
                      Pendidikan Menengah Atas &bull; Kesiswaan &amp; Administrasi
                    </p>
                  </div>
                  <span className="self-start sm:self-auto text-xs font-bold px-3 py-1 rounded-full bg-[#F5F5F5] dark:bg-[#2A2A2A] text-[#171717] dark:text-white border border-[#171717]/20 shrink-0">
                    2020 &ndash; 2023
                  </span>
                </div>

                <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-base sm:text-lg font-black text-[#171717] dark:text-white">
                      SMP Negeri 1 Suwawa Timur
                    </h4>
                    <p className="text-xs sm:text-sm text-[#666666] dark:text-[#A3A3A3] mt-0.5">
                      Pendidikan Menengah Pertama &bull; Fondasi Karakter &amp; Disiplin
                    </p>
                  </div>
                  <span className="self-start sm:self-auto text-xs font-bold px-3 py-1 rounded-full bg-[#F5F5F5] dark:bg-[#2A2A2A] text-[#171717] dark:text-white border border-[#171717]/20 shrink-0">
                    2017 &ndash; 2020
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: Work Experience (Steve's Card Layout with Yellow Header & Thick Border) */}
            <div className="bg-white dark:bg-[#1E1E1E] border-2 border-[#171717] dark:border-[#333333] rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="flex items-center gap-3 pb-4 border-b-2 border-[#E9E9E9] dark:border-[#2A2A2A]">
                <div className="w-12 h-12 rounded-full bg-[#F9B51B] border-2 border-[#171717] flex items-center justify-center shrink-0 text-[#171717]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-[#F9B51B] tracking-tight">
                  Work Experience
                </h3>
              </div>

              {/* Work Experience Rows */}
              <div className="space-y-6 divide-y divide-[#E9E9E9] dark:divide-[#2A2A2A]">
                {experienceData.map((exp) => (
                  <div key={exp.id} className="pt-4 first:pt-0 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="text-base sm:text-lg font-black text-[#171717] dark:text-white">
                        {exp.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#666666] dark:text-[#A3A3A3] mt-0.5">
                        {exp.responsibilities[0]}
                      </p>
                    </div>
                    <span className="self-start sm:self-auto text-xs font-bold px-3 py-1 rounded-full bg-[#F5F5F5] dark:bg-[#2A2A2A] text-[#171717] dark:text-white border border-[#171717]/20 shrink-0">
                      {exp.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PART 3: MINDSET SAYA & 3 VALUE CARDS                                      */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: Mindset Box with Dark Green Accent */}
          <div className="lg:col-span-4 bg-[#31543A] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-4 border-2 border-[#171717] shadow-sm">
            <div className="space-y-2">
              <span className="text-xs font-black tracking-widest text-[#F9B51B] uppercase block">
                MINDSET SAYA
              </span>
              <p className="text-sm sm:text-base text-white/95 leading-relaxed font-medium">
                &ldquo;{candidateProfile.mindsetQuote}&rdquo;
              </p>
            </div>
            <div className="pt-3 border-t border-white/20 text-xs font-bold text-white/80">
              Prinsip Kerja &bull; Integritas &bull; Komitmen
            </div>
          </div>

          {/* Right: 3 Core Value Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {coreValues.map((val) => (
              <div
                key={val.number}
                className="bg-white dark:bg-[#1E1E1E] rounded-3xl border-2 border-[#171717] dark:border-[#333333] p-6 flex flex-col justify-between space-y-3 shadow-sm hover:border-[#F9B51B] transition-colors"
              >
                <div>
                  <div className="text-3xl font-black text-[#F9B51B] leading-none mb-2">
                    {val.number}
                  </div>
                  <h4 className="text-lg font-black text-[#171717] dark:text-white">
                    {val.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#666666] dark:text-[#A3A3A3] leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

