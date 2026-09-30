import React from 'react';

interface FooterProps {
  onOpenCvModal?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="w-full bg-[#FFFFFF] dark:bg-[#121212] text-[#171717] dark:text-white border-t border-[#171717]/15 dark:border-white/10 transition-colors duration-200">
      {/* Bottom Footer Bar */}
      <div className="bg-[#F5F5F5] dark:bg-[#181818] py-6 sm:py-8 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#666666] dark:text-[#A3A3A3]">
            {/* Left: Brand & Title */}
            <div className="font-info flex items-center gap-3 text-center sm:text-left">
              <span className="font-display font-semibold text-sm text-[#171717] dark:text-white tracking-wider">
                TAUFIK<span className="text-[#F9B51B]">.</span>
              </span>
              <span>&middot;</span>
              <span>&copy; {new Date().getFullYear()} Taufik Hidayat Malii &bull; Portfolio</span>
            </div>

            {/* Right: Scroll to top with Steve split pill */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Kembali ke bagian atas halaman"
              className="font-display group inline-flex items-center gap-2 text-xs font-semibold text-[#171717] dark:text-white hover:text-[#F9B51B] transition-colors cursor-pointer select-none py-1.5 px-4 rounded-full border-2 border-[#171717] dark:border-[#333333] bg-white dark:bg-[#1E1E1E] shadow-[2px_2px_0px_#171717]"
            >
              <span>Kembali ke Atas</span>
              <span className="font-bold text-[#F9B51B] group-hover:-translate-y-0.5 transition-transform">
                &uarr;
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

