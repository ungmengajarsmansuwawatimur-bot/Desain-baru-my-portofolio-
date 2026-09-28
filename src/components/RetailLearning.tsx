import React, { useState, useMemo } from 'react';
import {
  candidateProfile,
  learningMaterialsData,
} from '../data/portfolioData';
import { LearningCategory, LearningItem } from '../types';
import { portfolioImages } from '../assets/images';
import { EditableImage } from './EditableImage';
import { LightboxModal } from './LightboxModal';

const CATEGORIES: readonly LearningCategory[] = [
  'Semua',
  'Customer Service',
  'Retail',
  'Display',
  'Planogram',
  'Stock',
  'Komunikasi',
] as const;

const RetailLearningComponent: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<LearningCategory>('Semua');
  const [selectedItem, setSelectedItem] = useState<LearningItem | null>(null);

  const filteredMaterials = useMemo(
    () =>
      activeCategory === 'Semua'
        ? learningMaterialsData
        : learningMaterialsData.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  return (
    <section id="learning" className="py-20 md:py-28 bg-[#FFFFFF] dark:bg-[#121212] border-t-2 border-[#171717] dark:border-[#333333] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Col 1-7: Typography & Filter */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-black tracking-widest uppercase text-[#F9B51B]">
              <span aria-hidden="true">✦</span>
              <span>LEARNING</span>
              <span aria-hidden="true">✦</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#171717] dark:text-white tracking-tight leading-tight">
              Pembelajaran Retail<br />
              <span className="text-[#F9B51B]">&amp; Customer Service</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-[#666666] dark:text-[#A3A3A3] leading-relaxed max-w-2xl font-normal">
              Berbagai materi yang saya pelajari secara mandiri untuk mempersiapkan diri bekerja di lingkungan retail modern. Pembelajaran ini saya lakukan sebagai komitmen berkelanjutan dalam memberikan pelayanan prima.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 pt-2" role="tablist" aria-label="Kategori Pembelajaran">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-black transition-all duration-150 cursor-pointer border-2 ${
                      isActive
                        ? 'bg-[#31543A] text-white border-[#171717] shadow-[2px_2px_0px_#171717]'
                        : 'bg-[#F5F5F5] dark:bg-[#1E1E1E] text-[#171717] dark:text-white border-[#171717] dark:border-[#333333] hover:border-[#F9B51B]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Col 8-12: Right Store Image with Banner */}
          <div className="lg:col-span-5 relative flex justify-end">
            <div className="relative w-full max-w-[420px]">
              <EditableImage
                storageKey="learning_store_interior"
                defaultSrc={portfolioImages.retailStoreInterior}
                alt="Good Service Brighter Tomorrow"
                aspectRatioClass="aspect-4/3"
                containerClassName="rounded-3xl overflow-hidden shadow-[6px_6px_0px_#171717] bg-[#F5F5F5] border-2 border-[#171717] dark:border-[#333333]"
                imgClassName="w-full h-full object-cover"
                buttonPosition="top-left"
              />

              {/* Overlapping Steve Badge */}
              <div className="absolute -bottom-4 right-3 bg-[#F9B51B] text-[#171717] px-5 py-3 rounded-2xl border-2 border-[#171717] shadow-[4px_4px_0px_#171717] max-w-[260px] pointer-events-none">
                <p className="font-black text-xs leading-snug">
                  Belajar Hari Ini, Untuk Pelayanan yang Lebih Baik Besok.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Daftar Materi Pembelajaran */}
        <div className="pt-10 border-t-2 border-[#171717] dark:border-[#333333] space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#F9B51B]" />
              <h3 className="text-2xl sm:text-3xl font-black text-[#171717] dark:text-white tracking-tight">
                Daftar Modul Pembelajaran
              </h3>
            </div>

            <p className="font-serif italic text-xs sm:text-sm text-[#666666] dark:text-[#A3A3A3]">
              &ldquo; Terus belajar, karena setiap pengetahuan akan membawa peluang baru. &rdquo;
            </p>
          </div>

          {/* 6 Material Cards in 2x3 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMaterials.map((item) => (
              <div
                key={item.id}
                className="bg-[#F5F5F5] dark:bg-[#1E1E1E] rounded-3xl border-2 border-[#171717] dark:border-[#333333] p-6 flex flex-col justify-between space-y-5 shadow-[4px_4px_0px_#171717] hover:-translate-y-1 transition-transform"
              >
                <div className="space-y-4">
                  {/* Category Code & Title */}
                  <div className="space-y-1">
                    <span className="text-[11px] font-black tracking-widest text-[#F9B51B] uppercase block">
                      {item.code} {item.categoryLabel}
                    </span>
                    <h4 className="text-lg font-black text-[#171717] dark:text-white leading-snug">
                      {item.title}
                    </h4>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.formats.map((fmt) => (
                      <span
                        key={fmt}
                        className="px-3 py-0.5 rounded-full text-[10px] font-black bg-white dark:bg-[#2A2A2A] text-[#171717] dark:text-white border-2 border-[#171717] dark:border-[#333333]"
                      >
                        {fmt}
                      </span>
                    ))}
                  </div>

                  {/* Thumbnail Image */}
                  <EditableImage
                    storageKey={`learning_material_${item.id}`}
                    defaultSrc={item.image}
                    alt={item.title}
                    aspectRatioClass="aspect-16/9"
                    containerClassName="rounded-2xl overflow-hidden bg-white dark:bg-black border-2 border-[#171717] dark:border-[#333333]"
                    imgClassName="w-full h-full object-cover"
                    compact={true}
                    buttonPosition="top-right"
                  />

                  {/* Source */}
                  <div className="text-xs text-[#666666] dark:text-[#A3A3A3]">
                    <span className="font-bold text-[#171717] dark:text-white">Sumber:</span> {item.platform}
                  </div>

                  {/* Overview */}
                  <div className="text-xs text-[#666666] dark:text-[#A3A3A3] leading-relaxed">
                    <span className="font-bold text-[#171717] dark:text-white">Tentang Materi:</span> {item.overview}
                  </div>

                  {/* Yang Saya Pelajari */}
                  <div className="pt-3 border-t-2 border-[#E9E9E9] dark:border-[#2A2A2A] space-y-2">
                    <span className="text-[11px] font-black text-[#171717] dark:text-white uppercase tracking-wide block">
                      Yang Saya Pelajari:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#666666] dark:text-[#A3A3A3]">
                      {item.whatILearnedBullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2 font-medium text-[#171717] dark:text-white">
                          <span className="text-[#31543A] dark:text-[#F9B51B] font-black">✓</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="pt-3 border-t-2 border-[#E9E9E9] dark:border-[#2A2A2A]">
                  <button
                    type="button"
                    onClick={() => setSelectedItem(item)}
                    className="group inline-flex items-center gap-2 text-xs font-black text-[#31543A] dark:text-[#F9B51B] hover:underline cursor-pointer"
                  >
                    <span>Lihat Rincian Modul</span>
                    <span className="w-5 h-5 rounded-full bg-[#171717] text-white flex items-center justify-center font-bold text-[10px] group-hover:translate-x-1 transition-transform">
                      &rarr;
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Dark Green Banner + Book Stack + Goals */}
        <div className="pt-10 border-t-2 border-[#171717] dark:border-[#333333] grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Col 1-5: Green Banner */}
          <div className="lg:col-span-5 bg-[#31543A] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-4 border-2 border-[#171717] shadow-[5px_5px_0px_#171717]">
            <div className="space-y-3">
              <span className="text-xs font-black tracking-widest text-[#F9B51B] uppercase block">
                LEARNING PRINCIPLE
              </span>
              <h4 className="text-2xl sm:text-3xl font-black tracking-tight leading-snug">
                Knowledge today,<br />
                better service tomorrow.
              </h4>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
                {candidateProfile.learningBannerSubtitle}
              </p>
            </div>

            <div className="text-[11px] font-bold text-[#F9B51B] pt-3 border-t border-white/20">
              Dedikasi Pembelajaran Mandiri &bull; Kesiapan Kerja Tinggi
            </div>
          </div>

          {/* Col 6-8: Real Book Stack Image */}
          <div className="lg:col-span-3 rounded-3xl overflow-hidden shadow-[5px_5px_0px_#171717] bg-[#171717] border-2 border-[#171717] min-h-[220px]">
            <EditableImage
              storageKey="learning_books_stack"
              defaultSrc={portfolioImages.retailBooksStack}
              alt="Retail Books & Study Guides"
              containerClassName="w-full h-full min-h-[220px] rounded-3xl bg-[#171717]"
              imgClassName="w-full h-full object-cover"
              buttonPosition="top-right"
            />
          </div>

          {/* Col 9-12: 2 Info Cards */}
          <div className="lg:col-span-4 space-y-4">
            {/* Card 1: Masih Terus Belajar */}
            <div className="p-6 bg-[#F5F5F5] dark:bg-[#1E1E1E] rounded-3xl border-2 border-[#171717] dark:border-[#333333] space-y-2 shadow-[3px_3px_0px_#171717]">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black text-[#F9B51B] uppercase tracking-wide">
                  ✦ MASIH TERUS BELAJAR
                </span>
              </div>
              <p className="text-xs text-[#666666] dark:text-[#A3A3A3] leading-relaxed">
                Daftar ini akan terus saya perbarui seiring pembelajaran baru dan sertifikasi yang saya tempuh.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setActiveCategory('Semua')}
                  className="inline-flex items-center gap-1.5 text-xs font-black text-[#31543A] dark:text-[#F9B51B] hover:underline cursor-pointer"
                >
                  <span>Lihat Semua Modul</span>
                  <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </div>

            {/* Card 2: Tujuan Saya */}
            <div className="p-6 bg-[#F5F5F5] dark:bg-[#1E1E1E] rounded-3xl border-2 border-[#171717] dark:border-[#333333] space-y-2 shadow-[3px_3px_0px_#171717]">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black text-[#31543A] dark:text-[#F9B51B] uppercase tracking-wide">
                  ✦ TUJUAN SAYA
                </span>
              </div>
              <p className="text-xs text-[#666666] dark:text-[#A3A3A3] leading-relaxed">
                Menguasai pengetahuan operasional dan keterampilan pelayanan terbaik agar dapat beradaptasi cepat di lingkungan retail profesional.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <LightboxModal
          isOpen={Boolean(selectedItem)}
          onClose={() => setSelectedItem(null)}
          title={selectedItem.title}
          subtitle={`Sumber: ${selectedItem.platform}`}
          badge={selectedItem.category}
        >
          <div className="space-y-4 text-xs sm:text-sm text-[#171717] dark:text-white leading-relaxed">
            <div>
              <span className="font-black text-[#171717] dark:text-white block mb-1">
                Tentang Materi:
              </span>
              <p className="text-[#666666] dark:text-[#A3A3A3]">{selectedItem.overview}</p>
            </div>

            <div>
              <span className="font-black text-[#171717] dark:text-white block mb-1">
                Hal yang Dipelajari:
              </span>
              <ul className="space-y-1.5">
                {selectedItem.whatILearnedBullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#31543A] font-black">✓</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <a
                href={selectedItem.sourceUrl || '#'}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full text-xs font-black bg-[#31543A] text-white hover:bg-[#26432E] border-2 border-[#171717] transition-all duration-150 shadow-[3px_3px_0px_#171717] active:scale-95"
              >
                <span>Buka Referensi Materi</span>
                <span className="w-6 h-6 rounded-full bg-[#F9B51B] text-[#171717] flex items-center justify-center font-bold text-xs shrink-0">
                  &rarr;
                </span>
              </a>
            </div>
          </div>
        </LightboxModal>
      )}
    </section>
  );
};

export const RetailLearning = React.memo(RetailLearningComponent);

