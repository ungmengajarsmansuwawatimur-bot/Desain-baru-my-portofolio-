import React, { useState } from 'react';
import { WorkflowEvidenceItem } from '../types';
import { workflowEvidenceData, realWorkBadges } from '../data/portfolioData';
import { ImageBlock } from './ImageBlock';
import { LightboxModal } from './LightboxModal';

export const EvidenceGallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<WorkflowEvidenceItem | null>(null);

  return (
    <div className="space-y-10">
      {/* 4 Workflow Evidence Items Grid */}
      <div>
        <div className="flex items-center justify-between pb-3 mb-6 border-b border-[#E5E7EB] dark:border-[#27272A]">
          <div>
            <span className="text-xs font-bold tracking-wider text-[#10B981] uppercase block">
              Alur Kerja 4 Tahap
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-[#111827] dark:text-[#F9FAFB]">
              Dokumentasi Tahapan Pelayanan Pelanggan
            </h4>
          </div>
          <span className="text-xs font-mono text-[#6B7280] dark:text-[#9CA3AF]">
            Klik tahap untuk rincian
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowEvidenceData.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-[#18181B] border border-[#E5E7EB] dark:border-[#27272A] rounded-2xl p-5 flex flex-col justify-between hover:border-[#10B981] transition-all duration-200 group shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-7 h-7 rounded-lg bg-[#10B981] text-white flex items-center justify-center font-mono font-bold text-xs shadow-xs">
                    {item.sequence}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#10B981]">
                    Alur Kerja
                  </span>
                </div>

                <div className="mb-3">
                  <ImageBlock
                    label={item.placeholderLabel || 'BUKTI / NEEDS USER INPUT'}
                    sublabel={item.subtitle}
                    aspectRatio="landscape"
                    clickable={true}
                    onClick={() => setSelectedItem(item)}
                  />
                </div>

                <h5 className="font-bold text-[#111827] dark:text-[#F9FAFB] text-base group-hover:text-[#10B981] transition-colors">
                  {item.title}
                </h5>
                <p className="text-xs font-semibold text-[#6B7280] dark:text-[#9CA3AF] mb-2">
                  {item.subtitle}
                </p>
                <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF] line-clamp-3 leading-relaxed">
                  {item.shortDescription}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E5E7EB] dark:border-[#27272A] flex items-center justify-between text-xs">
                <button
                  type="button"
                  onClick={() => setSelectedItem(item)}
                  className="font-bold text-[#111827] dark:text-[#F9FAFB] hover:text-[#10B981] transition-colors inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Buka Bukti</span>
                  <span aria-hidden="true">&rarr;</span>
                </button>
                <span className="text-[10px] text-[#6B7280] dark:text-[#9CA3AF]">Privasi Aman</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grid of Badges: Peran Saya, Hasil & Dampak, Yang Saya Pelajari */}
      <div className="bg-[#F8F9FA] dark:bg-[#18181B] border border-[#E5E7EB] dark:border-[#27272A] rounded-2xl p-6 sm:p-8 shadow-xs">
        <h4 className="text-base font-extrabold text-[#111827] dark:text-[#F9FAFB] tracking-tight uppercase mb-6 pb-2 border-b border-[#E5E7EB] dark:border-[#27272A]">
          Ringkasan Kompetensi Pelayanan & Pengelolaan
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Peran Saya */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#111827] dark:bg-white" aria-hidden="true" />
              <h5 className="font-bold text-sm text-[#111827] dark:text-[#F9FAFB] uppercase tracking-wide">
                Peran Saya
              </h5>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-[#6B7280] dark:text-[#9CA3AF]">
              {realWorkBadges.myRoles.map((role, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-white dark:bg-[#202024] p-2.5 rounded-xl border border-[#E5E7EB] dark:border-[#27272A]">
                  <span className="text-[#111827] dark:text-white font-bold">·</span>
                  <span>{role}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hasil & Dampak */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" aria-hidden="true" />
              <h5 className="font-bold text-sm text-[#111827] dark:text-[#F9FAFB] uppercase tracking-wide">
                Hasil & Dampak
              </h5>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-[#6B7280] dark:text-[#9CA3AF]">
              {realWorkBadges.outcomesAndImpact.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-white dark:bg-[#202024] p-2.5 rounded-xl border border-[#E5E7EB] dark:border-[#27272A]">
                  <span className="text-[#10B981] font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Yang Saya Pelajari */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#059669]" aria-hidden="true" />
              <h5 className="font-bold text-sm text-[#111827] dark:text-[#F9FAFB] uppercase tracking-wide">
                Yang Saya Pelajari
              </h5>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-[#6B7280] dark:text-[#9CA3AF]">
              {realWorkBadges.whatILearned.map((learned, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-white dark:bg-[#202024] p-2.5 rounded-xl border border-[#E5E7EB] dark:border-[#27272A]">
                  <span className="text-[#10B981] font-bold">★</span>
                  <span>{learned}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Selected Evidence */}
      {selectedItem && (
        <LightboxModal
          isOpen={true}
          onClose={() => setSelectedItem(null)}
          title={selectedItem.title}
          subtitle={selectedItem.subtitle}
          badge={`Tahap ${selectedItem.sequence} / Alur Pelayanan`}
        >
          <div className="space-y-4">
            <ImageBlock
              label={selectedItem.placeholderLabel || 'BUKTI / NEEDS USER INPUT'}
              sublabel="Dokumentasi tangkapan alur kerja terverifikasi"
              aspectRatio="landscape"
            />

            <div className="p-4 bg-white dark:bg-[#18181B] rounded-xl border border-[#E5E7EB] dark:border-[#27272A] space-y-2">
              <span className="text-xs font-bold text-[#111827] dark:text-[#F9FAFB] uppercase block">
                Deskripsi Alur
              </span>
              <p className="text-xs sm:text-sm text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">
                {selectedItem.shortDescription}
              </p>
            </div>

            <div className="p-4 bg-[#F8F9FA] dark:bg-[#202024] rounded-xl border border-[#E5E7EB] dark:border-[#27272A] space-y-1">
              <span className="text-xs font-bold text-[#10B981] uppercase block">
                Kebijakan Privasi
              </span>
              <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">
                {selectedItem.privacyNote}
              </p>
            </div>

            <div className="p-3 bg-[#E5E7EB] dark:bg-[#202024] rounded-xl text-xs text-[#6B7280] dark:text-[#9CA3AF]">
              <span className="font-bold block mb-0.5 text-[#111827] dark:text-[#F9FAFB]">Petunjuk Penggantian Berkas:</span>
              {selectedItem.replacementGuide}
            </div>
          </div>
        </LightboxModal>
      )}
    </div>
  );
};
