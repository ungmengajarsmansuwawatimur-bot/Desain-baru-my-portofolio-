import React from 'react';
import { SkillGroupData } from '../types';

interface SkillGroupProps {
  data: SkillGroupData;
  index: number;
}

export const SkillGroup: React.FC<SkillGroupProps> = ({ data, index }) => {
  const badgeColors = ['bg-[#10B981]', 'bg-[#059669]', 'bg-[#047857]', 'bg-[#10B981]'];
  const badgeColor = badgeColors[index % badgeColors.length];

  return (
    <div className="bg-white dark:bg-[#18181B] border border-[#E5E7EB] dark:border-[#27272A] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#10B981] transition-all duration-200 shadow-xs">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E5E7EB] dark:border-[#27272A]">
          <div className="flex items-center gap-2">
            <span className={`w-2.5 h-2.5 rounded-full ${badgeColor}`} aria-hidden="true" />
            <h4 className="font-extrabold text-base sm:text-lg text-[#111827] dark:text-[#F9FAFB] tracking-tight">
              {data.category}
            </h4>
          </div>
          <span className="text-xs font-mono text-[#6B7280] dark:text-[#9CA3AF]">
            0{index + 1}
          </span>
        </div>

        {data.description && (
          <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF] mb-4 leading-relaxed">
            {data.description}
          </p>
        )}

        {/* Skills List */}
        <ul className="space-y-2.5 text-xs sm:text-sm">
          {data.skills.map((skill, idx) => (
            <li
              key={idx}
              className="p-2.5 bg-[#F8F9FA] dark:bg-[#202024] rounded-xl border border-[#E5E7EB] dark:border-[#27272A] flex flex-col sm:flex-row sm:items-center justify-between gap-1"
            >
              <span className="font-bold text-[#111827] dark:text-[#F9FAFB]">
                {skill.name}
              </span>
              {skill.levelDescription && (
                <span className="text-[11px] font-medium text-[#10B981] bg-white dark:bg-[#18181B] px-2 py-0.5 rounded border border-[#E5E7EB] dark:border-[#27272A]">
                  {skill.levelDescription}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
