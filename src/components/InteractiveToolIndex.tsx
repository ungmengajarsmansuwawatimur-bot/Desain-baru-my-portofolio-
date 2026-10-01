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
    <div className="w-full max-w-4xl mx-auto">
      {/* Formasi 2x6 Landskap (2 baris x 6 kolom = 12 aplikasi) */}
      <div className="grid grid-cols-6 gap-2.5 sm:gap-4 md:gap-6 justify-items-center items-center py-2">
        {digitalToolsList.map((tool) => (
          <div
            key={tool.name}
            className="group flex flex-col items-center justify-center"
            title={`${tool.name} — ${tool.subtitle}`}
          >
            {/* White rounded squircle icon container */}
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white rounded-xl sm:rounded-2xl md:rounded-3xl flex items-center justify-center p-2.5 sm:p-3.5 md:p-4 shadow-sm group-hover:scale-110 group-hover:shadow-lg transition-all duration-200 cursor-pointer">
              <OfficialAppIcon
                name={tool.iconName}
                className="w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
