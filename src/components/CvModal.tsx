import React from 'react';
import { LightboxModal } from './LightboxModal';
import { candidateProfile, cvConfiguration } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const handleDownload = () => {
    // Generate a printable CV view or download
    window.print();
  };

  return (
    <LightboxModal
      isOpen={isOpen}
      onClose={onClose}
      title="Curriculum Vitae"
      subtitle={`${candidateProfile.fullName} — ${candidateProfile.role}`}
      badge="Dokumen Resmi"
    >
      <div className="space-y-6">
        {/* CV Visual Preview */}
        <div className="p-6 bg-white dark:bg-[#1E1E1E] rounded-3xl border-2 border-[#171717] dark:border-[#333333] shadow-[4px_4px_0px_#171717] space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#171717]/15 dark:border-[#2A2A2A] gap-2">
            <div>
              <span className="text-xl font-black text-[#F9B51B]">{candidateProfile.brandMark}</span>
              <h4 className="text-lg font-black text-[#171717] dark:text-white">
                {candidateProfile.fullName}
              </h4>
              <span className="text-xs font-black text-[#31543A] dark:text-[#F9B51B]">
                {candidateProfile.role}
              </span>
            </div>
            <div className="text-xs text-[#666666] dark:text-[#A3A3A3] sm:text-right">
              <div>{candidateProfile.location}</div>
              <div>Tahun: 2025</div>
            </div>
          </div>

          <div className="space-y-2 text-xs text-[#666666] dark:text-[#A3A3A3] leading-relaxed">
            <span className="font-bold text-[#171717] dark:text-white block">Ringkasan Profil:</span>
            <p>{candidateProfile.summary}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs border-t border-[#171717]/15 dark:border-[#2A2A2A]">
            <div>
              <span className="font-bold text-[#171717] dark:text-white block mb-1">Pendidikan:</span>
              <span className="text-[#666666] dark:text-[#A3A3A3]">{candidateProfile.lastEducation}</span>
            </div>
            <div>
              <span className="font-bold text-[#171717] dark:text-white block mb-1">Fokus &amp; Minat:</span>
              <span className="text-[#666666] dark:text-[#A3A3A3]">{candidateProfile.currentFocus}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-full border-2 border-[#171717] dark:border-[#333333] text-xs font-black text-[#171717] dark:text-white hover:bg-[#F5F5F5] dark:hover:bg-[#2A2A2A] cursor-pointer transition-colors"
          >
            Tutup
          </button>
          <button
            type="button"
            onClick={handleDownload}
            className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full text-xs font-black bg-[#31543A] hover:bg-[#26432E] text-white border-2 border-[#171717] shadow-[3px_3px_0px_#171717] transition-all active:scale-95 cursor-pointer"
          >
            <span>Cetak / Simpan PDF</span>
            <span className="w-6 h-6 rounded-full bg-[#F9B51B] text-[#171717] flex items-center justify-center font-bold text-xs shrink-0">
              &darr;
            </span>
          </button>
        </div>
      </div>
    </LightboxModal>
  );
};
