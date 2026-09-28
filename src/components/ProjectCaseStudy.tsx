import React, { useState } from 'react';
import { SchoolScreenshot } from '../types';
import { schoolPlatformData } from '../data/portfolioData';
import { ImageBlock } from './ImageBlock';
import { LightboxModal } from './LightboxModal';

export const ProjectCaseStudy: React.FC = () => {
  const [selectedScreenshot, setSelectedScreenshot] = useState<SchoolScreenshot | null>(null);

  return (
    <div className="bg-white dark:bg-[#18181B] border border-[#E5E7EB] dark:border-[#27272A] rounded-2xl p-6 sm:p-8 md:p-10 space-y-8 shadow-xs">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-[#E5E7EB] dark:border-[#27272A]">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#10B981] text-white">
              02
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280] dark:text-[#9CA3AF]">
              Karya Pendukung Digital
            </span>
          </div>
          <h4 className="text-2xl sm:text-3xl font-extrabold text-[#111827] dark:text-[#F9FAFB] tracking-tight">
            {schoolPlatformData.title}
          </h4>
          <p className="mt-2 text-sm sm:text-base text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">
            {schoolPlatformData.summary}
          </p>
        </div>

        {/* Status */}
        <div className="space-y-2 text-right">
          <div className="text-xs">
            <span className="text-[#6B7280] dark:text-[#9CA3AF] mr-2">Status Proyek:</span>
            <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
              {schoolPlatformData.status}
            </span>
          </div>
        </div>
      </div>

      {/* 3 Replaceable Neutral Screenshot Placeholders */}
      <div>
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E5E7EB] dark:border-[#27272A]">
          <span className="text-xs font-bold tracking-wider text-[#111827] dark:text-[#F9FAFB] uppercase">
            Tangkapan Layar Antarmuka
          </span>
          <span className="text-xs text-[#6B7280] dark:text-[#9CA3AF]">
            Klik gambar untuk memperbesar tampilan
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {schoolPlatformData.screenshots.map((screen) => (
            <div
              key={screen.id}
              className="group cursor-pointer space-y-2"
              onClick={() => setSelectedScreenshot(screen)}
            >
              <ImageBlock
                label={screen.placeholderLabel}
                sublabel={screen.caption}
                aspectRatio="video"
                clickable={true}
                onClick={() => setSelectedScreenshot(screen)}
              />
              <div className="flex items-center justify-between pt-1">
                <span className="font-bold text-xs sm:text-sm text-[#111827] dark:text-[#F9FAFB] group-hover:text-[#10B981] transition-colors">
                  {screen.title}
                </span>
                <span className="text-[11px] text-[#6B7280] dark:text-[#9CA3AF]">16:9</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Verified Feature List & Metadata Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
        {/* Col 1-7: Verified Feature List */}
        <div className="lg:col-span-7 space-y-4">
          <span className="text-xs font-bold tracking-wider text-[#111827] dark:text-[#F9FAFB] uppercase block">
            Fitur Terverifikasi
          </span>
          <div className="space-y-2.5">
            {schoolPlatformData.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-[#F8F9FA] dark:bg-[#202024] rounded-xl border border-[#E5E7EB] dark:border-[#27272A] flex items-start gap-3"
              >
                <span className="w-5 h-5 rounded bg-[#10B981] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div>
                  <h5 className="font-bold text-xs sm:text-sm text-[#111827] dark:text-[#F9FAFB]">
                    {feature.name}
                  </h5>
                  <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF] mt-0.5">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Col 8-12: Technologies & Privacy/Replacement Info */}
        <div className="lg:col-span-5 space-y-5">
          {/* Teknologi yang Digunakan */}
          <div className="p-4 sm:p-5 bg-[#F8F9FA] dark:bg-[#202024] rounded-2xl border border-[#E5E7EB] dark:border-[#27272A] space-y-2">
            <span className="text-xs font-bold tracking-wider text-[#111827] dark:text-[#F9FAFB] uppercase block">
              Teknologi yang Digunakan
            </span>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {schoolPlatformData.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs font-bold px-3 py-1 rounded bg-[#E5E7EB] dark:bg-[#18181B] text-[#111827] dark:text-[#F9FAFB] inline-block"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed pt-1">
              {schoolPlatformData.note}
            </p>
          </div>
        </div>
      </div>

      {/* Screenshot Lightbox Modal */}
      {selectedScreenshot && (
        <LightboxModal
          isOpen={true}
          onClose={() => setSelectedScreenshot(null)}
          title={selectedScreenshot.title}
          subtitle={selectedScreenshot.caption}
          badge="PADDS SMANSAT"
        >
          <div className="space-y-4">
            <ImageBlock
              label={selectedScreenshot.placeholderLabel}
              sublabel={selectedScreenshot.caption}
              aspectRatio="video"
            />
            <div className="p-4 bg-white dark:bg-[#18181B] rounded-xl border border-[#E5E7EB] dark:border-[#27272A] text-xs sm:text-sm text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">
              <span className="font-bold text-[#111827] dark:text-[#F9FAFB] block mb-1">
                Keterangan Tampilan:
              </span>
              Tangkapan layar ini mewakili tata letak {selectedScreenshot.title.toLowerCase()}. Seluruh data nama atau nomor induk disamarkan demi privasi dan integritas administrasi.
            </div>
          </div>
        </LightboxModal>
      )}
    </div>
  );
};
