import React from 'react';
import { LearningItem } from '../types';
import { CTAButton } from './CTAButton';

interface LearningCardProps {
  item: LearningItem;
  onSelect: (item: LearningItem) => void;
}

export const LearningCard: React.FC<LearningCardProps> = ({ item, onSelect }) => {
  return (
    <div className="bg-white dark:bg-[#18181B] border border-[#E5E7EB] dark:border-[#27272A] rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-[#10B981] dark:hover:border-[#10B981] transition-all duration-200 group shadow-xs">
      <div>
        {/* Top Tag & Format */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-bold tracking-wider text-[#10B981] uppercase">
            {item.category}
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F8F9FA] dark:bg-[#202024] text-[#6B7280] dark:text-[#9CA3AF] border border-[#E5E7EB] dark:border-[#27272A]">
            {item.formats?.join(', ') || 'Modul'}
          </span>
        </div>

        {/* Title */}
        <h4 className="text-lg font-bold text-[#111827] dark:text-[#F9FAFB] group-hover:text-[#10B981] transition-colors leading-snug">
          {item.title}
        </h4>

        {/* Platform info */}
        <div className="mt-2 flex items-center gap-1.5 text-xs text-[#6B7280] dark:text-[#9CA3AF]">
          <span className="font-medium">Sumber:</span>
          <span className="font-mono text-[11px] text-[#111827] dark:text-[#F9FAFB]">{item.platform}</span>
        </div>

        {/* Overview preview */}
        <p className="mt-3 text-xs sm:text-sm text-[#6B7280] dark:text-[#9CA3AF] line-clamp-3 leading-relaxed">
          {item.overview}
        </p>

        {/* Bullets preview */}
        <div className="mt-4 pt-3 border-t border-[#E5E7EB] dark:border-[#27272A] space-y-1">
          {item.whatILearnedBullets?.slice(0, 2).map((bullet, idx) => (
            <div key={idx} className="text-xs text-[#6B7280] dark:text-[#9CA3AF] flex items-center gap-1.5">
              <span className="text-[#10B981] font-bold">✓</span>
              <span>{bullet}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Actions */}
      <div className="mt-5 pt-4 border-t border-[#E5E7EB] dark:border-[#27272A] flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => onSelect(item)}
          className="text-xs font-bold text-[#111827] dark:text-[#F9FAFB] hover:text-[#10B981] transition-colors inline-flex items-center gap-1 cursor-pointer"
        >
          <span>Detail & Catatan</span>
          <span>&rarr;</span>
        </button>

        <CTAButton
          variant="secondary"
          size="sm"
          onClick={() => onSelect(item)}
        >
          Buka
        </CTAButton>
      </div>
    </div>
  );
};
