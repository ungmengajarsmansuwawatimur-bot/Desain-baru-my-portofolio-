import React from 'react';
import { OfficialAppIcon } from './OfficialAppIcon';

export interface DigitalToolItem {
  name: string;
  subtitle: string;
  iconName: string;
}

export const digitalToolsList: DigitalToolItem[] = [
  { name: 'Microsoft Word', subtitle: 'Pengolahan dokumen', iconName: 'word' },
  { name: 'Microsoft Excel', subtitle: 'Pengolahan data', iconName: 'excel' },
  { name: 'Google Sheets', subtitle: 'Spreadsheet online', iconName: 'sheets' },
  { name: 'Google Drive', subtitle: 'Penyimpanan cloud', iconName: 'drive' },
  { name: 'WhatsApp', subtitle: 'Komunikasi', iconName: 'whatsapp' },
  { name: 'Google Chrome', subtitle: 'Akses internet', iconName: 'chrome' },
  { name: 'Notion', subtitle: 'Manajemen catatan', iconName: 'notion' },
  { name: 'Website Platform', subtitle: 'Pengelolaan website', iconName: 'web' },
  { name: 'Canva', subtitle: 'Desain grafis', iconName: 'canva' },
  { name: 'CapCut', subtitle: 'Edit video', iconName: 'capcut' },
  { name: 'Higgsfield', subtitle: 'AI creative tools', iconName: 'higgsfield' },
  { name: 'Google AI Studio', subtitle: 'AI & pengembangan', iconName: 'aistudio' },
];

interface InteractiveToolIndexProps {
  tools?: any[];
}

export const InteractiveToolIndex: React.FC<InteractiveToolIndexProps> = () => {
  return (
    <div className="w-full">
      {/* Landscape 3x4 Formation (3 rows x 4 columns = 12 tools) - Bento box wrapper removed */}
      <div className="grid grid-cols-2 md:grid-cols-4 landscape:grid-cols-4 gap-y-6 sm:gap-y-8 gap-x-4 sm:gap-x-6 md:gap-x-8 items-center">
        {digitalToolsList.map((tool) => (
          <div
            key={tool.name}
            className="flex items-center gap-3.5 sm:gap-4 group transition-transform duration-150 hover:translate-x-1"
          >
            {/* White rounded squircle icon container */}
            <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center p-2 sm:p-2.5 shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-150">
              <OfficialAppIcon
                name={tool.iconName}
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 object-contain"
              />
            </div>

            {/* Label and Subtitle */}
            <div className="min-w-0">
              <h4 className="font-display text-white font-semibold text-xs sm:text-sm md:text-base leading-snug truncate group-hover:text-[#F9B51B] transition-colors">
                {tool.name}
              </h4>
              <p className="font-body text-white/70 text-[11px] sm:text-xs md:text-sm mt-0.5 leading-snug truncate sm:whitespace-normal">
                {tool.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
