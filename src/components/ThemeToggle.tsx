import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', showLabel = false }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={(e) => toggleTheme(e)}
      className={`group relative inline-flex items-center justify-center rounded-full cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#10B981] dark:focus:ring-[#10B981] focus:ring-offset-2 focus:ring-offset-[#F8F9FA] dark:focus:ring-offset-[#0E0E10] transition-all duration-300 active:scale-95 select-none ${
        isDark
          ? 'bg-[#18181B] hover:bg-[#27272A] text-[#F9FAFB] border border-[#27272A] shadow-xs'
          : 'bg-white hover:bg-[#F8F9FA] text-[#111827] border border-[#E5E7EB] shadow-xs'
      } ${showLabel ? 'px-3 py-1.5 gap-2' : 'w-9 h-9'} ${className}`}
      aria-label={isDark ? 'Ganti ke Mode Siang (Day Mode)' : 'Ganti ke Mode Malam (Night Mode)'}
      title={isDark ? 'Ganti ke Mode Siang' : 'Ganti ke Mode Malam'}
    >
      <div className="relative w-4 h-4 flex items-center justify-center overflow-visible">
        {/* Sun Icon (shown in light mode, transitions out when entering dark mode) */}
        <svg
          className={`w-4 h-4 absolute transition-all duration-500 ease-out transform ${
            !isDark
              ? 'rotate-0 scale-100 opacity-100 text-[#111111]'
              : 'rotate-90 scale-40 opacity-0 pointer-events-none'
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>

        {/* Moon Icon (shown in dark mode, transitions out when entering light mode) */}
        <svg
          className={`w-4 h-4 absolute transition-all duration-500 ease-out transform ${
            isDark
              ? 'rotate-0 scale-100 opacity-100 text-[#FFFFFF]'
              : '-rotate-90 scale-40 opacity-0 pointer-events-none'
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      </div>

      {showLabel && (
        <span className="text-xs font-semibold select-none">
          {isDark ? 'Siang' : 'Malam'}
        </span>
      )}
    </button>
  );
};

