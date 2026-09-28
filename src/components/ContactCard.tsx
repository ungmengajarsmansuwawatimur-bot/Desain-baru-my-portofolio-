import React from 'react';
import { contactData } from '../data/portfolioData';
import { CTAButton } from './CTAButton';

export const ContactCard: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* 4 Contact Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactData.map((contact) => (
          <div
            key={contact.platform}
            className="bg-white dark:bg-[#18181B] border border-[#E5E7EB] dark:border-[#27272A] rounded-2xl p-6 flex flex-col justify-between hover:border-[#10B981] transition-all duration-200 shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E5E7EB] dark:border-[#27272A]">
                <span className="font-extrabold text-sm text-[#111827] dark:text-[#F9FAFB] uppercase tracking-wide">
                  {contact.platform}
                </span>
                <span
                  className={`w-2 h-2 rounded-full ${
                    contact.isAvailable ? 'bg-[#10B981]' : 'bg-[#EF4444]'
                  }`}
                  aria-hidden="true"
                />
              </div>

              <div className="text-xs text-[#6B7280] dark:text-[#9CA3AF] mb-1 font-medium">
                {contact.label}
              </div>

              <div className="font-bold text-sm sm:text-base text-[#111827] dark:text-[#F9FAFB] break-all">
                {contact.value}
              </div>

              <p className="mt-2 text-xs text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">
                {contact.placeholderText}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-[#E5E7EB] dark:border-[#27272A]">
              <CTAButton
                variant={contact.isAvailable ? 'primary' : 'disabled'}
                size="sm"
                className="w-full"
                disabled={!contact.isAvailable}
                needsUserInput={!contact.isAvailable}
                href={contact.actionUrl || undefined}
              >
                {contact.isAvailable ? 'Hubungi' : 'Hubungi'}
              </CTAButton>
            </div>
          </div>
        ))}
      </div>

      {/* Final CTA Panel: Mari Terhubung */}
      <div className="bg-[#F8F9FA] dark:bg-[#18181B] border border-[#E5E7EB] dark:border-[#27272A] rounded-2xl p-8 md:p-12 text-center space-y-4 shadow-xs">
        <span className="text-xs font-bold tracking-widest text-[#10B981] uppercase block">
          Kesempatan Kerjasama & Rekrutmen
        </span>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-[#111827] dark:text-[#F9FAFB] tracking-tight">
          Mari Terhubung
        </h3>
        <p className="text-sm sm:text-base text-[#6B7280] dark:text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed">
          Saya siap memenuhi panggilan wawancara kerja, proses seleksi bidang retail & operasional toko, maupun kesempatan pelatihan di wilayah Gorontalo dan sekitarnya.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-[#6B7280] dark:text-[#9CA3AF]">
          <span className="px-3 py-1.5 rounded-xl bg-white dark:bg-[#202024] border border-[#E5E7EB] dark:border-[#27272A]">
            Status: Terbuka untuk Rekrutmen Retail
          </span>
          <span className="px-3 py-1.5 rounded-xl bg-white dark:bg-[#202024] border border-[#E5E7EB] dark:border-[#27272A]">
            Wilayah: Gorontalo, Indonesia
          </span>
        </div>
      </div>
    </div>
  );
};
