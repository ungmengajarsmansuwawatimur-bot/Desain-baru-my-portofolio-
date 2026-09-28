import React from 'react';
import { LightboxModal } from './LightboxModal';
import { LearningItem } from '../types';
import { CTAButton } from './CTAButton';

interface LearningDetailModalProps {
  isOpen: boolean;
  item: LearningItem | null;
  onClose: () => void;
}

export const LearningDetailModal: React.FC<LearningDetailModalProps> = ({
  isOpen,
  item,
  onClose,
}) => {
  if (!item) return null;

  return (
    <LightboxModal
      isOpen={isOpen}
      onClose={onClose}
      title={item.title}
      subtitle={`Kategori: ${item.category} · Sumber: ${item.platform}`}
      badge="Modul Pembelajaran Mandiri"
    >
      <div className="space-y-4">
        {/* Source & Format metadata */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 bg-white dark:bg-[#18181B] rounded-xl border border-[#E5E7EB] dark:border-[#27272A]">
            <span className="text-[#6B7280] dark:text-[#9CA3AF] block font-medium">Penyedia / Platform</span>
            <span className="font-mono font-bold text-[#111827] dark:text-[#F9FAFB] mt-0.5 block">
              {item.platform}
            </span>
          </div>

          <div className="p-3 bg-white dark:bg-[#18181B] rounded-xl border border-[#E5E7EB] dark:border-[#27272A]">
            <span className="text-[#6B7280] dark:text-[#9CA3AF] block font-medium">Format Materi</span>
            <span className="font-mono font-bold text-[#111827] dark:text-[#F9FAFB] mt-0.5 block">
              {item.formats?.join(', ') || 'Modul'}
            </span>
          </div>
        </div>

        {/* Ringkasan Materi */}
        <div className="p-4 bg-white dark:bg-[#18181B] rounded-xl border border-[#E5E7EB] dark:border-[#27272A] space-y-2">
          <span className="text-xs font-bold text-[#111827] dark:text-[#F9FAFB] uppercase block">
            Ringkasan Materi (Overview)
          </span>
          <p className="text-xs sm:text-sm text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">
            {item.overview}
          </p>
        </div>

        {/* Yang Saya Pelajari */}
        <div className="p-4 bg-white dark:bg-[#18181B] rounded-xl border border-[#E5E7EB] dark:border-[#27272A] space-y-2">
          <span className="text-xs font-bold text-[#10B981] uppercase block">
            Yang Saya Pelajari (Key Takeaways)
          </span>
          <ul className="space-y-1 text-xs sm:text-sm text-[#6B7280] dark:text-[#9CA3AF]">
            {item.whatILearnedBullets?.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#10B981] font-bold">✓</span>
                <span className="text-[#111827] dark:text-[#F9FAFB]">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Kompetensi & Relevansi if any */}
        {item.competencies && item.competencies.length > 0 && (
          <div className="p-4 bg-white dark:bg-[#18181B] rounded-xl border border-[#E5E7EB] dark:border-[#27272A] space-y-2">
            <span className="text-xs font-bold text-[#10B981] uppercase block">
              Kompetensi & Relevansi
            </span>
            <div className="flex flex-wrap gap-1.5 pb-1">
              {item.competencies.map((comp, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 text-xs font-mono font-bold bg-[#F8F9FA] dark:bg-[#202024] text-[#6B7280] dark:text-[#9CA3AF] rounded border border-[#E5E7EB] dark:border-[#27272A]"
                >
                  {comp}
                </span>
              ))}
            </div>
            {item.relevance && (
              <p className="text-xs sm:text-sm text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">
                {item.relevance}
              </p>
            )}
          </div>
        )}

        {/* Action Button */}
        <div className="pt-2 border-t border-[#E5E7EB] dark:border-[#27272A] flex flex-wrap items-center justify-between gap-3">
          <CTAButton
            variant="secondary"
            size="sm"
            disabled={!item.sourceUrl}
            needsUserInput={!item.sourceUrl}
            onClick={() => item.sourceUrl && window.open(item.sourceUrl, '_blank')}
          >
            Buka Tautan Materi
          </CTAButton>

          <span className="text-[11px] text-[#6B7280] dark:text-[#9CA3AF] italic">
            Dokumentasi pembelajaran mandiri persiapan kerja retail.
          </span>
        </div>
      </div>
    </LightboxModal>
  );
};
