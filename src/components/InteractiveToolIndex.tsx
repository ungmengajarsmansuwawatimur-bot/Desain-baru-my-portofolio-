import React, { useState, useRef, useCallback } from 'react';
import { ToolItem } from '../types';
import { OfficialAppIcon } from './OfficialAppIcon';

interface InteractiveToolIndexProps {
  tools: ToolItem[];
}

export const InteractiveToolIndex: React.FC<InteractiveToolIndexProps> = ({ tools }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [animKey, setAnimKey] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const totalTools = tools.length;
  const activeTool = tools[currentIndex] || tools[0];

  const formatIndex = (n: number) => String(n).padStart(2, '0');

  const goTo = useCallback(
    (index: number) => {
      if (index === currentIndex || index < 0 || index >= totalTools) return;
      setDirection(index > currentIndex ? 'next' : 'prev');
      setCurrentIndex(index);
      setAnimKey((prev) => prev + 1);
    },
    [currentIndex, totalTools]
  );

  const handleNext = useCallback(() => {
    if (currentIndex < totalTools - 1) {
      goTo(currentIndex + 1);
    }
  }, [currentIndex, totalTools, goTo]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      goTo(currentIndex - 1);
    }
  }, [currentIndex, goTo]);

  // Keyboard navigation when container has focus or globally inside component
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      handleNext();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      handlePrev();
    }
  };

  // Touch Swipe handlers that preserve vertical page scrolling
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    // Only recognize swipe if horizontal movement significantly exceeds vertical
    if (Math.abs(deltaX) > 42 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Extract clean descriptive role text
  const cleanRole = activeTool.role.startsWith('(') && activeTool.role.endsWith(')')
    ? activeTool.role.slice(1, -1)
    : activeTool.role !== activeTool.name
    ? activeTool.role
    : '';

  return (
    <div
      ref={containerRef}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Interactive Tool Index"
      aria-roledescription="carousel"
      className="relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded-2xl"
    >
      {/* Editorial Top Bar (clean, open layout without card box or divider line) */}
      <div className="py-3 sm:py-4 flex items-center justify-between gap-4">
        {/* Counter & Label */}
        <div className="flex items-center gap-3">
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl sm:text-2xl font-extrabold text-[#F9B51B] tracking-tight">
              {formatIndex(currentIndex + 1)}
            </span>
            <span className="text-sm font-medium text-white/50">/</span>
            <span className="text-sm font-semibold text-white/70">
              {formatIndex(totalTools)}
            </span>
          </div>

          <span className="text-[11px] font-bold uppercase tracking-widest text-white/70">
            Indeks Alat Kerja
          </span>
        </div>
      </div>

      {/* Main Content: Focused Editorial Tool Stage with Left and Right Nav Buttons */}
      <div
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        className="py-8 sm:py-10 flex items-center justify-between relative overflow-hidden select-none min-h-[300px] sm:min-h-[340px] gap-2 sm:gap-6"
      >
        {/* Left Navigation Button */}
        <button
          type="button"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          aria-label="Tool sebelumnya (Panah Kiri)"
          className="group shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full text-[#171717] bg-white hover:bg-[#F5F5F5] hover:shadow-md active:scale-95 disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:bg-white disabled:active:scale-100 flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer shadow-sm"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:-translate-x-0.5"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 12L6 8L10 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Active Tool Content with Keyed Coordinated Transition */}
        <div
          key={animKey}
          className={`flex-1 flex flex-col justify-center items-center text-center space-y-5 sm:space-y-6 max-w-xl mx-auto w-full px-2 ${
            direction === 'next' ? 'tool-animate-next' : 'tool-animate-prev'
          }`}
        >
          {/* Top Eyebrow & Category */}
          <div className="flex items-center justify-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-white/15 text-white">
              {activeTool.category}
            </span>
          </div>

          {/* Logo and Main Identity Header */}
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-5 text-center">
            {/* Authentic Brand Logo directly presented centered */}
            <div className="tool-animate-logo shrink-0 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mx-auto">
              <OfficialAppIcon
                name={activeTool.iconName}
                className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-sm"
              />
            </div>

            {/* Name & Role */}
            <div className="min-w-0 space-y-1.5 text-center">
              <h4 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                {activeTool.name}
              </h4>

              {cleanRole && (
                <p className="text-sm sm:text-base font-bold text-white tracking-normal">
                  Fungsi: {cleanRole}
                </p>
              )}
            </div>
          </div>

          {/* Context Note (based on available data) */}
          <div className="pt-1 text-center max-w-md sm:max-w-lg mx-auto">
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Alat kerja dalam kategori{' '}
              <span className="font-bold text-white">
                {activeTool.category}
              </span>
              {cleanRole ? ` yang digunakan untuk keperluan ${cleanRole.toLowerCase()}` : ''} guna
              mendukung produktivitas dan alur kerja operasional.
            </p>
          </div>
        </div>

        {/* Right Navigation Button */}
        <button
          type="button"
          onClick={handleNext}
          disabled={currentIndex === totalTools - 1}
          aria-label="Tool berikutnya (Panah Kanan)"
          className="group shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full text-[#171717] bg-white hover:bg-[#F5F5F5] hover:shadow-md active:scale-95 disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:bg-white disabled:active:scale-100 flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer shadow-sm"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
