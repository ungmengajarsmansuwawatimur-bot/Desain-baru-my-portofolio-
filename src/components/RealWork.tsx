import React, { useState, useCallback } from 'react';
import {
  candidateProfile,
  workflowEvidenceData,
  realWorkBadges,
} from '../data/portfolioData';
import { portfolioImages } from '../assets/images';
import { EditableImage } from './EditableImage';
import { PhoneChatMockup } from './PhoneChatMockup';
import { PaddsShowcaseSection } from './PaddsShowcaseSection';
import { FamilyBusinessSection } from './FamilyBusinessSection';
import { LightboxModal } from './LightboxModal';
import { OptimizedPicture } from './OptimizedPicture';
import { WorkflowEvidenceItem } from '../types';

export const RealWork: React.FC = () => {
  const [isEvidenceOpen, setIsEvidenceOpen] = useState(false);
  const [selectedEvidence, setSelectedEvidence] = useState<WorkflowEvidenceItem | null>(null);
  const [modalScreenshot, setModalScreenshot] = useState<string | null>(null);

  const handleOpenEvidence = useCallback((item: WorkflowEvidenceItem, activeScreenshot?: string) => {
    setSelectedEvidence(item);
    setModalScreenshot(
      activeScreenshot || item.screenshotUrl || '/assets/chat/chat_real_evidence_01.avif'
    );
  }, []);

  return (
    <section id="work" className="py-20 md:py-28 bg-[#FFFFFF] dark:bg-[#121212] border-t-2 border-[#171717] dark:border-[#333333] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
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
              Berikut adalah dokumentasi pekerjaan dan proyek nyata yang pernah saya jalankan sebagai bukti kehandalan dalam pelayanan pelanggan, operasional jasa digital, dan manajemen sistem arsip.
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

        {/* Project 01: Jasa Digital */}
        <div className="space-y-10 pt-10 border-t-2 border-[#171717] dark:border-[#333333]">
          {/* Top Info Header */}
          <div className="space-y-4 max-w-4xl">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-4xl sm:text-5xl font-black text-[#F9B51B]">01</span>
                <span className="text-xs font-bold tracking-wider text-[#666666] dark:text-[#A3A3A3] uppercase">
                  Desember 2024 — Sekarang
                </span>
              </div>
              <div className="text-xs font-black tracking-widest text-[#31543A] dark:text-[#F9B51B] uppercase">
                PELAYANAN &amp; PENGELOLAAN
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-[#171717] dark:text-white tracking-tight">
                Jasa Digital &amp; Publikasi Mahasiswa
              </h3>
              <p className="text-xs sm:text-sm text-[#666666] dark:text-[#A3A3A3] leading-relaxed pt-1">
                Memberikan layanan secara langsung kepada pelanggan dengan memahami kebutuhan, menjelaskan informasi, melakukan koordinasi selama proses, menangani revisi, dan menindaklanjuti hingga pekerjaan selesai. Pengalaman Jasa Digital dimulai pada Desember 2024 ketika seorang teman mahasiswa menghubungi saya karena membutuhkan bantuan untuk publikasi artikel tugas mata kuliahnya. Informasi mengenai jasa kemudian menyebar melalui promosi organik dan rekomendasi pelanggan (word of mouth) ke jaringan mahasiswa lainnya.
              </p>

              {/* Tombol Toggle Buka/Tutup Galeri Bukti & Evaluasi */}
              <div className="pt-3 flex items-center justify-start md:justify-end">
                <button
                  type="button"
                  onClick={() => setIsEvidenceOpen((prev) => !prev)}
                  className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full text-xs sm:text-sm font-black bg-[#31543A] text-white hover:bg-[#26432E] border-2 border-[#171717] transition-all duration-150 shadow-[4px_4px_0px_#171717] active:scale-95 cursor-pointer"
                >
                  <span>{isEvidenceOpen ? 'Sembunyikan Galeri Bukti' : 'Buka Galeri Bukti & Chat Pelanggan'}</span>
                  <span className="w-7 h-7 rounded-full bg-[#F9B51B] text-[#171717] flex items-center justify-center font-bold text-xs shrink-0 transition-transform">
                    {isEvidenceOpen ? '↑' : '↓'}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* BUKTI PEKERJAAN — PHONE EVIDENCE GALLERY & EVALUASI (COLLAPSIBLE) */}
          {isEvidenceOpen && (
            <div className="space-y-8 pt-4 border-t-2 border-[#E9E9E9] dark:border-[#2A2A2A] animate-fadeIn">
              {/* PERAN SAYA & AKTIVITAS LAYANAN (8 KOMPONEN) */}
              <div className="space-y-3">
                <span className="text-xs font-black tracking-widest text-[#171717] dark:text-white uppercase block">
                  Peran Saya &amp; Aktivitas Layanan
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
                  {[
                    'Komunikasi dengan pelanggan',
                    'Memahami kebutuhan naskah',
                    'Pengelolaan antrean pesanan',
                    'Penentuan tarif transparan',
                    'Pelayanan & revisi cepat',
                    'Tindak lanjut kepuasan',
                    'Promosi mandiri organik',
                    'Rekomendasi dari mulut ke mulut',
                  ].map((role, rIdx) => (
                    <div
                      key={rIdx}
                      className="p-3.5 bg-[#F5F5F5] dark:bg-[#1E1E1E] rounded-2xl border-2 border-[#171717] dark:border-[#333333] text-center space-y-1.5 shadow-[2px_2px_0px_#171717]"
                    >
                      <span className="text-xs font-black text-[#F9B51B] block">0{rIdx + 1}</span>
                      <span className="text-[11px] font-bold text-[#171717] dark:text-white block leading-tight">
                        {role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* BUKTI PEKERJAAN — 4 SMARTPHONE EVIDENCE MOCKUPS */}
              <div className="space-y-4 pt-4 border-t-2 border-[#E9E9E9] dark:border-[#2A2A2A]">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black tracking-widest text-[#F9B51B] uppercase">
                      BUKTI CHAT LANGSUNG
                    </span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-[#171717] dark:text-white tracking-tight mt-1">
                    Galeri Bukti Percakapan Smartphone
                  </h4>
                  <p className="text-xs text-[#666666] dark:text-[#A3A3A3] max-w-md pt-0.5">
                    Tangkapan layar alur komunikasi nyata dengan pelanggan (konsultasi, konfirmasi, pengerjaan, dan ulasan).
                  </p>
                </div>
              </div>

              {/* KONTEN BUKTI SMARTPHONE & HASIL EVALUASI */}
              <div className="space-y-8 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-6 items-start">
                  {workflowEvidenceData.map((item) => (
                    <PhoneChatMockup
                      key={item.id}
                      item={item}
                      onClick={(activeScreenshot) => handleOpenEvidence(item, activeScreenshot)}
                    />
                  ))}
                </div>

                {/* HASIL & DAMPAK + YANG SAYA PELAJARI */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t-2 border-[#E9E9E9] dark:border-[#2A2A2A]">
                  {/* Hasil & Dampak */}
                  <div className="bg-[#F5F5F5] dark:bg-[#1E1E1E] rounded-3xl border-2 border-[#171717] dark:border-[#333333] p-6 sm:p-7 space-y-4 shadow-[4px_4px_0px_#171717]">
                    <div className="flex items-center gap-2.5">
                      <span className="w-3 h-3 rounded-full bg-[#F9B51B]" />
                      <h4 className="text-sm font-black text-[#171717] dark:text-white uppercase tracking-wider">
                        Hasil &amp; Dampak
                      </h4>
                    </div>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-[#666666] dark:text-[#A3A3A3]">
                      {realWorkBadges.outcomesAndImpact.map((item, idx) => {
                        const colonIdx = item.indexOf(': ');
                        if (colonIdx !== -1) {
                          const label = item.slice(0, colonIdx);
                          const rest = item.slice(colonIdx + 2);
                          return (
                            <li
                              key={idx}
                              className="grid grid-cols-[14px_120px_8px_1fr] sm:grid-cols-[16px_200px_10px_1fr] items-start gap-x-1.5 sm:gap-x-2"
                            >
                              <span className="text-[#31543A] font-black mt-0.5 shrink-0">✓</span>
                              <span className="font-bold text-[#171717] dark:text-white leading-snug">
                                {label}
                              </span>
                              <span className="font-bold text-[#171717] dark:text-white text-center leading-snug">
                                :
                              </span>
                              <span className="leading-relaxed text-[#666666] dark:text-[#A3A3A3]">
                                {rest}
                              </span>
                            </li>
                          );
                        }
                        return (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="text-[#31543A] font-black mt-0.5 shrink-0">✓</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Yang Saya Pelajari */}
                  <div className="bg-[#F5F5F5] dark:bg-[#1E1E1E] rounded-3xl border-2 border-[#171717] dark:border-[#333333] p-6 sm:p-7 space-y-4 shadow-[4px_4px_0px_#171717]">
                    <div className="flex items-center gap-2.5">
                      <span className="w-3 h-3 rounded-full bg-[#31543A]" />
                      <h4 className="text-sm font-black text-[#171717] dark:text-white uppercase tracking-wider">
                        Yang Saya Pelajari
                      </h4>
                    </div>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-[#666666] dark:text-[#A3A3A3]">
                      {realWorkBadges.whatILearned.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="text-[#31543A] font-black mt-0.5">✓</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Project 02: PADDS SMANSAT - PERBAIKAN TOTAL CASE STUDY */}
        <PaddsShowcaseSection />

        {/* Project 03: PENGELOLAAN USAHA KELUARGA (OPERASIONAL & PELAYANAN LANGSUNG) */}
        <FamilyBusinessSection />
      </div>

      {/* Lightbox Modal for Phone Evidence */}
      {selectedEvidence && (
        <LightboxModal
          isOpen={Boolean(selectedEvidence)}
          onClose={() => setSelectedEvidence(null)}
          title={`${selectedEvidence.sequence} — ${selectedEvidence.title}`}
          subtitle={selectedEvidence.subtitle}
          badge="Bukti Tangkapan Layar Smartphone"
        >
          <div className="space-y-4">
            {/* Screenshot Switcher Inside Modal */}
            {selectedEvidence.screenshots && selectedEvidence.screenshots.length > 1 && (
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar px-0.5">
                {selectedEvidence.screenshots.map((src, sIdx) => {
                  const isActive = (modalScreenshot || selectedEvidence.screenshots?.[0]) === src;
                  return (
                    <button
                      key={sIdx}
                      type="button"
                      onClick={() => setModalScreenshot(src)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all cursor-pointer shrink-0 ${
                        isActive
                          ? 'bg-[#10B981] text-white border-[#10B981] shadow-xs'
                          : 'bg-white dark:bg-[#18181B] text-[#6B7280] dark:text-[#9CA3AF] border-[#E5E7EB] dark:border-[#27272A] hover:text-[#111827] dark:hover:text-white'
                      }`}
                    >
                      Bukti {sIdx + 1}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Full Screenshot View with Prev / Next Arrows */}
            <div className="relative flex justify-center items-center bg-[#0B141A] p-4 rounded-xl max-h-[70vh] overflow-y-auto">
              {/* Prev Button */}
              {selectedEvidence.screenshots && selectedEvidence.screenshots.length > 1 && (
                <button
                  type="button"
                  onClick={() => {
                    const list = selectedEvidence.screenshots!;
                    const cur = modalScreenshot || list[0];
                    const idx = list.indexOf(cur);
                    const prevIdx = (idx - 1 + list.length) % list.length;
                    setModalScreenshot(list[prevIdx]);
                  }}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-black/80 hover:bg-black text-white flex items-center justify-center border border-white/25 shadow-lg cursor-pointer transition-transform active:scale-95"
                  title="Bukti sebelumnya"
                  aria-label="Bukti sebelumnya"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              <div className="w-full max-w-[340px] rounded-[24px] overflow-hidden border border-white/20 shadow-2xl">
                {modalScreenshot || selectedEvidence.screenshotUrl ? (
                  <OptimizedPicture
                    src={modalScreenshot || selectedEvidence.screenshotUrl || ''}
                    alt={selectedEvidence.title}
                    className="w-full h-auto object-contain"
                  />
                ) : (
                  <div className="p-8 text-center text-white text-xs">
                    Tangkapan layar siap diganti dengan berkas gambar asli.
                  </div>
                )}
              </div>

              {/* Next Button */}
              {selectedEvidence.screenshots && selectedEvidence.screenshots.length > 1 && (
                <button
                  type="button"
                  onClick={() => {
                    const list = selectedEvidence.screenshots!;
                    const cur = modalScreenshot || list[0];
                    const idx = list.indexOf(cur);
                    const nextIdx = (idx + 1) % list.length;
                    setModalScreenshot(list[nextIdx]);
                  }}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-black/80 hover:bg-black text-white flex items-center justify-center border border-white/25 shadow-lg cursor-pointer transition-transform active:scale-95"
                  title="Bukti berikutnya"
                  aria-label="Bukti berikutnya"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>

            {/* Description & Privacy note */}
            <div className="p-4 bg-[#F8F9FA] dark:bg-[#18181B] rounded-xl text-xs sm:text-sm text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed space-y-2 border border-[#E5E7EB] dark:border-[#27272A]">
              <span className="font-bold text-[#111827] dark:text-[#F9FAFB] block">
                Ringkasan Alur Komunikasi:
              </span>
              <p>{selectedEvidence.shortDescription}</p>
              <div className="text-[11px] text-[#6B7280] dark:text-[#9CA3AF] pt-1">
                <span className="font-semibold text-[#111827] dark:text-[#F9FAFB]">Kebijakan Privasi: </span>
                {selectedEvidence.privacyNote}
              </div>
            </div>
          </div>
        </LightboxModal>
      )}
    </section>
  );
};
