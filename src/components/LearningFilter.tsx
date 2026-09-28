import React from 'react';
import { LearningCategory } from '../types';

interface LearningFilterProps {
  categories: LearningCategory[];
  activeCategory: LearningCategory;
  onSelectCategory: (cat: LearningCategory) => void;
  counts: Record<LearningCategory, number>;
}

export const LearningFilter: React.FC<LearningFilterProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  counts,
}) => {
  return (
    <div
      className="flex flex-wrap items-center gap-2 p-1.5 bg-[#F3F4F6] dark:bg-[#18181B] rounded-xl border border-[#E5E7EB] dark:border-[#27272A]"
      role="tablist"
      aria-label="Penyaring Kategori Pembelajaran"
    >
      {categories.map((category) => {
        const isActive = activeCategory === category;
        const count = counts[category] || 0;

        return (
          <button
            key={category}
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelectCategory(category)}
            className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#10B981] cursor-pointer ${
              isActive
                ? 'bg-white dark:bg-[#27272A] text-[#10B981] shadow-xs'
                : 'text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111827] dark:hover:text-white hover:bg-white/60 dark:hover:bg-[#202024]'
            }`}
          >
            <span>{category}</span>
            <span
              className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                isActive ? 'bg-[#10B981] text-white' : 'bg-black/10 dark:bg-white/10 text-[#6B7280] dark:text-[#9CA3AF]'
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};
