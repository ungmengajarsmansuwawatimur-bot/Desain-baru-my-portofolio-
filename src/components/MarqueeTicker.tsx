import React from 'react';

interface MarqueeTickerProps {
  items?: string[];
  className?: string;
  speed?: 'normal' | 'slow';
  durationSeconds?: number;
}

const DEFAULT_ITEMS = [
  'PRAMUNIAGA',
  'OPERASIONAL TOKO',
  'KASIR & SISTEM POS',
  'PENATAAN DISPLAY PRODUK',
  'PELAYANAN KONSUMEN PRIMA',
  'MANAJEMEN STOK & INVENTARIS',
  'ADMINISTRASI DOKUMEN DIGITAL',
  'KOMUNIKASI EFEKTIF',
  'DISIPLIN & TANGGUNG JAWAB',
];

export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({
  items = DEFAULT_ITEMS,
  className = '',
  speed = 'slow',
  durationSeconds,
}) => {
  // Comfortable reading pace: calculate smooth duration based on number of items
  const animationDuration =
    durationSeconds ?? (speed === 'slow' ? Math.max(65, items.length * 2.4) : 40);

  return (
    <div
      className={`w-full overflow-hidden bg-[#F9B51B] py-3.5 select-none border-y-2 border-[#171717] relative z-20 ${className}`}
      aria-label="Keterampilan & Layanan Berjalan"
    >
      <div
        className="animate-ticker flex items-center"
        style={{ animationDuration: `${animationDuration}s` }}
      >
        {/* Repeating segments for seamless loop */}
        {[...Array(4)].map((_, loopIdx) => (
          <div key={loopIdx} className="flex items-center shrink-0">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-center shrink-0">
                <span className="text-xs sm:text-sm font-black tracking-wider text-[#171717] px-4 uppercase whitespace-nowrap">
                  {item}
                </span>
                <span className="text-sm font-bold text-[#171717] shrink-0" aria-hidden="true">
                  ✦
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
