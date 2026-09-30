import React, { useState } from 'react';
import { ToolItem } from '../types';
import { OfficialAppIcon } from './OfficialAppIcon';

interface InteractiveToolIndexProps {
  tools: ToolItem[];
}

export const InteractiveToolIndex: React.FC<InteractiveToolIndexProps> = ({ tools }) => {
  const [activeTool, setActiveTool] = useState<ToolItem | null>(null);

  return (
    <div className="space-y-12">
      {/* 4-Column Grid of Clean White Square Cards (Balanced with Application Icon) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 max-w-3xl mx-auto justify-items-center">
        {tools.map((tool) => {
          const isSelected = activeTool?.name === tool.name;
          const cleanRole =
            tool.role.startsWith('(') && tool.role.endsWith(')')
              ? tool.role.slice(1, -1)
              : tool.role !== tool.name
              ? tool.role
              : '';

          return (
            <div
              key={tool.name}
              className="flex flex-col items-center group cursor-pointer w-full max-w-[110px] sm:max-w-[128px] md:max-w-[140px]"
              onClick={() => setActiveTool(isSelected ? null : tool)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveTool(isSelected ? null : tool);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={tool.name}
            >
              {/* White Square Tile Proportionate and Snug to Application Icon */}
              <div
                className={`w-full aspect-square bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 md:p-5 flex items-center justify-center text-center shadow-md transition-all duration-200 select-none relative ${
                  isSelected
                    ? 'ring-4 ring-[#F9B51B] -translate-y-1.5 shadow-xl scale-[1.04]'
                    : 'group-hover:-translate-y-1.5 group-hover:shadow-xl'
                }`}
              >
                {/* App Brand Icon (Harmoniously fills the square wrapper) */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center transition-transform duration-200 group-hover:scale-105 shrink-0">
                  <OfficialAppIcon
                    name={tool.iconName}
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 drop-shadow-xs"
                  />
                </div>

                {/* Category Pill Tag for context on click */}
                {isSelected && cleanRole && (
                  <span className="absolute -top-2.5 bg-[#31543A] text-white text-[10px] font-bold px-2 py-0.5 rounded-full border border-white shadow-xs whitespace-nowrap">
                    {cleanRole}
                  </span>
                )}
              </div>

              {/* White Label Underneath Card */}
              <span className="text-white text-xs sm:text-sm font-semibold text-center mt-2.5 tracking-tight block leading-snug group-hover:text-[#F9B51B] transition-colors">
                {tool.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Detail Toast/Strip when an application tile is selected */}
      {activeTool && (
        <div className="max-w-xl mx-auto p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-center animate-fadeIn text-white space-y-1">
          <div className="flex items-center justify-center gap-2">
            <span className="font-extrabold text-sm sm:text-base text-[#F9B51B]">
              {activeTool.name}
            </span>
            <span className="text-xs text-white/60">•</span>
            <span className="text-xs font-bold uppercase tracking-wider text-white/90">
              Kategori: {activeTool.category}
            </span>
          </div>
          <p className="text-xs text-white/80 leading-relaxed">
            Digunakan untuk{' '}
            {activeTool.role.replace(/[()]/g, '') || 'efisiensi tugas harian dan produktivitas'}.
          </p>
        </div>
      )}
    </div>
  );
};
