import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

type Theme = 'light' | 'dark';

export interface TransitionCoord {
  x: number;
  y: number;
}

interface ThemeContextType {
  theme: Theme;
  toggleTheme: (e?: React.MouseEvent) => void;
  setTheme: (theme: Theme) => void;
  isTransitioning: boolean;
  transitionCoord: TransitionCoord | null;
  targetTheme: Theme | null;
}

const THEME_STORAGE_KEY = 'portfolio-theme';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'light';
    try {
      const stored = localStorage.getItem(THEME_STORAGE_KEY);
      if (stored === 'light' || stored === 'dark') {
        return stored;
      }
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    } catch {
      // Ignore storage access errors
    }
    return 'light';
  });

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionCoord, setTransitionCoord] = useState<TransitionCoord | null>(null);
  const [targetTheme, setTargetTheme] = useState<Theme | null>(null);
  const transitionTimerRef = useRef<number | null>(null);

  // Apply root classes
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      root.style.colorScheme = 'light';
    }

    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Ignore storage access errors
    }
  }, [theme]);

  // Clean up any pending transition timer on unmount
  useEffect(() => {
    return () => {
      if (transitionTimerRef.current) {
        window.clearTimeout(transitionTimerRef.current);
      }
      document.documentElement.classList.remove('theme-transitioning');
    };
  }, []);

  // Listen to system preference changes if user hasn't explicitly set localStorage
  useEffect(() => {
    try {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => {
        const stored = localStorage.getItem(THEME_STORAGE_KEY);
        if (!stored) {
          setThemeState(e.matches ? 'dark' : 'light');
        }
      };
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
      }
    } catch {
      // Ignore
    }
  }, []);

  const toggleTheme = (e?: React.MouseEvent) => {
    // Check for prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const nextTheme: Theme = theme === 'light' ? 'dark' : 'light';

    if (prefersReducedMotion) {
      setThemeState(nextTheme);
      return;
    }

    // Determine toggle origin coordinates
    let coord: TransitionCoord = {
      x: typeof window !== 'undefined' ? window.innerWidth - 64 : 100,
      y: 40,
    };

    if (e && e.currentTarget) {
      const rect = e.currentTarget.getBoundingClientRect();
      coord = {
        x: Math.round(rect.left + rect.width / 2),
        y: Math.round(rect.top + rect.height / 2),
      };
    }

    // Clear prior timer if rapidly clicking
    if (transitionTimerRef.current) {
      window.clearTimeout(transitionTimerRef.current);
      transitionTimerRef.current = null;
    }

    // Trigger coordinated transition class on documentElement
    document.documentElement.classList.add('theme-transitioning');
    setTransitionCoord(coord);
    setTargetTheme(nextTheme);
    setIsTransitioning(true);

    // Switch theme state
    setThemeState(nextTheme);

    // End transition after 650ms
    transitionTimerRef.current = window.setTimeout(() => {
      document.documentElement.classList.remove('theme-transitioning');
      setIsTransitioning(false);
      setTransitionCoord(null);
      setTargetTheme(null);
      transitionTimerRef.current = null;
    }, 650);
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        setTheme,
        isTransitioning,
        transitionCoord,
        targetTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

