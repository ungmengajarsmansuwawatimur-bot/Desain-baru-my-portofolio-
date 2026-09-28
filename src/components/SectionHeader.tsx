import React from 'react';

interface SectionHeaderProps {
  number: string;
  eyebrow: string;
  title: string;
  highlightWord?: string;
  description?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  eyebrow,
  title,
  highlightWord,
  description,
  align = 'left',
}) => {
  const parts = highlightWord && title.includes(highlightWord)
    ? title.split(highlightWord)
    : [title];

  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-4xl'}`}>
      <div className={`flex items-center gap-2.5 mb-3.5 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#10B981]/10 text-[#059669] dark:text-[#34D399] border border-[#10B981]/20">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" aria-hidden="true" />
          <span>{number}</span>
          <span className="opacity-40">&bull;</span>
          <span>{eyebrow}</span>
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111827] dark:text-[#F9FAFB] leading-[1.15] text-balance">
        {parts.length > 1 ? (
          <>
            {parts[0]}
            <span className="text-[#10B981]">{highlightWord}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed max-w-2xl text-balance">
          {description}
        </p>
      )}

      <div className="mt-6 w-full h-px bg-[#E5E7EB] dark:bg-[#27272A]" aria-hidden="true" />
    </div>
  );
};
