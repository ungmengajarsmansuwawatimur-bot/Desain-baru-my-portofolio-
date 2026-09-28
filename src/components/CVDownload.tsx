import React from 'react';
import { cvConfiguration } from '../data/portfolioData';
import { CTAButton } from './CTAButton';

interface CVDownloadProps {
  onOpenGuideModal?: () => void;
}

export const CVDownload: React.FC<CVDownloadProps> = ({ onOpenGuideModal }) => {
  return (
    <div id="cv" className="bg-[#111827] text-white rounded-2xl p-6 sm:p-8 md:p-10 space-y-6 border border-[#1F2937] shadow-xl">
      <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-[#1F2937]">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" aria-hidden="true" />
            <span className="text-xs font-bold tracking-wider text-[#9CA3AF] uppercase">
              Dokumen Riwayat Hidup
            </span>
          </div>
          <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Curriculum Vitae (CV)
          </h4>
          <p className="mt-2 text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
            Arsitektur pengunduhan berkas CV resmi telah siap terpasang. Tautan berkas dinonaktifkan secara transparan hingga berkas PDF asli dihubungkan oleh pengguna.
          </p>
        </div>

        <div className="text-right">
          <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#1F2937] text-[#9CA3AF] border border-[#374151] inline-block">
            Status: {cvConfiguration.isAvailable ? 'Tersedia' : 'NEEDS USER INPUT'}
          </span>
        </div>
      </div>

      {/* CV Meta Details & Action Box */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Left: Metadata details */}
        <div className="md:col-span-7 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-[#1F2937] border border-[#374151]">
              <span className="text-[#9CA3AF] block mb-0.5">Nama Berkas:</span>
              <span className="font-mono text-white">
                {cvConfiguration.fileName || 'NEEDS USER INPUT'}
              </span>
            </div>
            <div className="p-3 rounded-xl bg-[#1F2937] border border-[#374151]">
              <span className="text-[#9CA3AF] block mb-0.5">Ukuran Berkas:</span>
              <span className="font-mono text-white">
                {cvConfiguration.fileSize || 'NEEDS USER INPUT'}
              </span>
            </div>
            <div className="p-3 rounded-xl bg-[#1F2937] border border-[#374151]">
              <span className="text-[#9CA3AF] block mb-0.5">Pembaruan Terakhir:</span>
              <span className="font-mono text-white">
                {cvConfiguration.lastUpdated || 'NEEDS USER INPUT'}
              </span>
            </div>
          </div>

          <div className="text-xs text-[#9CA3AF] leading-relaxed">
            *Untuk menjaga integritas dan kebenaran data, tidak ditampilkan pratinjau CV fiktif sebelum berkas resmi ditautkan.
          </div>
        </div>

        {/* Right: Actions */}
        <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col gap-3 justify-end items-stretch md:items-end">
          <CTAButton
            variant="secondary"
            size="lg"
            disabled={!cvConfiguration.isAvailable}
            needsUserInput={!cvConfiguration.isAvailable}
            onClick={() => {
              if (cvConfiguration.downloadUrl) {
                window.open(cvConfiguration.downloadUrl, '_blank', 'noopener,noreferrer');
              }
            }}
            icon={
              <svg
                className="w-4 h-4 text-[#111827]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            }
          >
            Download CV (PDF)
          </CTAButton>

          {onOpenGuideModal && (
            <button
              type="button"
              onClick={onOpenGuideModal}
              className="text-xs text-[#9CA3AF] hover:text-[#10B981] underline underline-offset-4 transition-colors text-center md:text-right cursor-pointer"
            >
              Petunjuk Menghubungkan Berkas CV &rarr;
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
