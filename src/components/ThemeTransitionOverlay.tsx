import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const ThemeTransitionOverlay: React.FC = () => {
  const { isTransitioning, transitionCoord, targetTheme } = useTheme();

  if (!isTransitioning || !transitionCoord || !targetTheme) {
    return null;
  }

  const isGoingDark = targetTheme === 'dark';

  return (
    <div
      className="fixed inset-0 pointer-events-none z-30 overflow-hidden select-none"
      aria-hidden="true"
    >
      <div
        className="absolute rounded-full transition-none theme-radial-pulse"
        style={{
          left: `${transitionCoord.x}px`,
          top: `${transitionCoord.y}px`,
          width: '700px',
          height: '700px',
          background: isGoingDark
            ? 'radial-gradient(circle, rgba(17, 17, 17, 0.45) 0%, rgba(24, 24, 24, 0.28) 35%, rgba(17, 17, 17, 0.08) 65%, transparent 80%)'
            : 'radial-gradient(circle, rgba(247, 247, 245, 0.6) 0%, rgba(255, 255, 255, 0.35) 35%, rgba(247, 247, 245, 0.1) 65%, transparent 80%)',
        }}
      />
    </div>
  );
};
