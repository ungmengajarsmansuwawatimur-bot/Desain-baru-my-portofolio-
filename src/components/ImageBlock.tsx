import React from 'react';

interface ImageBlockProps {
  label: string;
  sublabel?: string;
  aspectRatio?: 'portrait' | 'landscape' | 'square' | 'video';
  className?: string;
  onClick?: () => void;
  clickable?: boolean;
}

export const ImageBlock: React.FC<ImageBlockProps> = ({
  label,
  sublabel = 'Aset visual dapat dihubungkan tanpa mengubah tata letak',
  aspectRatio = 'portrait',
  className = '',
  onClick,
  clickable = false,
}) => {
  const aspectClasses = {
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
    square: 'aspect-square',
    video: 'aspect-[16/9]',
  };

  return (
    <div
      onClick={clickable ? onClick : undefined}
      role={clickable ? 'button' : 'region'}
      tabIndex={clickable ? 0 : undefined}
      onKeyDown={
        clickable
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onClick?.();
              }
            }
          : undefined
      }
      aria-label={label}
      className={`relative w-full ${aspectClasses[aspectRatio]} bg-[#F8F9FA] dark:bg-[#18181B] border border-[#E5E7EB] dark:border-[#27272A] rounded-2xl overflow-hidden flex flex-col justify-between p-5 md:p-6 transition-all duration-200 ${
        clickable ? 'cursor-pointer hover:border-[#10B981] hover:bg-[#F3F4F6] dark:hover:bg-[#202024]' : ''
      } ${className}`}
    >
      {/* Background editorial blueprint grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#9CA3AF 1px, transparent 1px), linear-gradient(90deg, #9CA3AF 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      {/* Subtle corner crosshairs */}
      <div className="absolute top-2 left-2 text-[#9CA3AF] font-mono text-[10px] select-none pointer-events-none">+</div>
      <div className="absolute top-2 right-2 text-[#9CA3AF] font-mono text-[10px] select-none pointer-events-none">+</div>
      <div className="absolute bottom-2 left-2 text-[#9CA3AF] font-mono text-[10px] select-none pointer-events-none">+</div>
      <div className="absolute bottom-2 right-2 text-[#9CA3AF] font-mono text-[10px] select-none pointer-events-none">+</div>

      {/* Top status indicator */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" aria-hidden="true" />
          <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-[#6B7280] dark:text-[#9CA3AF] uppercase">
            Placeholder Visual Resmi
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#6B7280] dark:text-[#9CA3AF] uppercase bg-[#E5E7EB] dark:bg-[#27272A] px-2 py-0.5 rounded">
          {aspectRatio.toUpperCase()}
        </span>
      </div>

      {/* Center label lockup */}
      <div className="relative z-10 text-center my-auto px-4 py-6">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#E5E7EB] dark:bg-[#27272A] text-[#111827] dark:text-[#F9FAFB] mb-3">
          <svg
            className="w-6 h-6 opacity-75"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </div>
        <div className="font-bold text-sm sm:text-base text-[#111827] dark:text-[#F9FAFB] tracking-tight leading-snug">
          {label}
        </div>
        <p className="mt-1 text-xs text-[#6B7280] dark:text-[#9CA3AF] max-w-xs mx-auto leading-relaxed">
          {sublabel}
        </p>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 pt-2 border-t border-[#E5E7EB] dark:border-[#27272A] flex items-center justify-between text-[11px] text-[#6B7280] dark:text-[#9CA3AF]">
        <span>Format Terverifikasi</span>
        {clickable && (
          <span className="font-medium text-[#10B981] underline underline-offset-2">
            Klik untuk detail
          </span>
        )}
      </div>
    </div>
  );
};
