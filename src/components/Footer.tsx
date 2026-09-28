import React, { useState } from 'react';

interface FooterProps {
  onOpenCvModal?: () => void;
}

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: 'Apa saja peran dan keahlian utama yang saya tawarkan?',
    answer:
      'Saya memiliki kesiapan kerja tinggi di bidang pelayanan pelanggan (Customer Service), operasional ritel toko modern, penataan display barang metode FIFO, kasir dan transaksi tunai/non-tunai, serta administrasi digital (Google Workspace, Microsoft Excel, Canva, dan pengarsipan data PADDS).',
  },
  {
    question: 'Pengalaman nyata apa saja yang telah saya jalankan?',
    answer:
      'Pengalaman nyata saya meliputi lebih dari 8 tahun membantu operasional usaha keluarga (pelayanan pembeli, stok barang, kasir), pengelolaan Jasa Digital mandiri untuk puluhan mahasiswa (Desember 2024–sekarang), serta perancangan platform arsip digital PADDS SMANSAT dengan 6 video modul operasional.',
  },
  {
    question: 'Apakah saya siap bekerja penuh waktu (Full-Time) atau sistem shift?',
    answer:
      'Ya, saya memiliki kesiapan 100% untuk bekerja penuh waktu, sistem shift kerja toko, maupun tugas lembur sesuai kebutuhan operasional ritel atau perusahaan.',
  },
  {
    question: 'Bagaimana cara menghubungi saya secara cepat?',
    answer:
      'Cara tercepat adalah melalui WhatsApp di +62 856 5638 1485. Anda juga dapat mengirimkan surat elektronik resmi ke taufikmalii281003@gmail.com atau terhubung via LinkedIn.',
  },
  {
    question: 'Di mana saya bisa meninjau dokumen Curriculum Vitae?',
    answer:
      'Dokumen CV resmi lengkap dapat dibuka dan diunduh langsung melalui tombol "Buka & Unduh CV Lengkap" di website ini atau melalui menu navigasi atas.',
  },
];

export const Footer: React.FC<FooterProps> = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="w-full bg-[#FFFFFF] dark:bg-[#121212] text-[#171717] dark:text-white border-t border-[#171717]/15 dark:border-white/10 transition-colors duration-200">
      {/* FAQ: Steve Mengelkoch Editorial Accordion */}
      <section
        id="faq"
        aria-label="Pertanyaan yang Sering Diajukan"
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
      >
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-black tracking-widest uppercase text-[#F9B51B]">
            <span aria-hidden="true">✦</span>
            <span>FREQUENTLY ASKED QUESTIONS</span>
            <span aria-hidden="true">✦</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#171717] dark:text-white tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-xs sm:text-sm text-[#666666] dark:text-[#A3A3A3] max-w-xl mx-auto">
            Informasi ringkas seputar ketersediaan kerja, pengalaman operasional, dan komitmen profesional saya.
          </p>
        </div>

        {/* Accordion List with Steve's Clean Borders */}
        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={item.question}
                className="bg-[#F5F5F5] dark:bg-[#1E1E1E] border-2 border-[#171717] dark:border-[#333333] rounded-2xl overflow-hidden shadow-[3px_3px_0px_#171717] transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-left group cursor-pointer select-none"
                >
                  <span
                    className={`text-sm sm:text-base font-black tracking-tight leading-snug transition-colors pr-2 ${
                      isOpen
                        ? 'text-[#31543A] dark:text-[#F9B51B]'
                        : 'text-[#171717] dark:text-white group-hover:text-[#F9B51B]'
                    }`}
                  >
                    {item.question}
                  </span>

                  <span
                    className={`shrink-0 w-8 h-8 rounded-full border-2 border-[#171717] flex items-center justify-center font-black text-xs transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#F9B51B] text-[#171717] rotate-180'
                        : 'bg-white dark:bg-[#2A2A2A] text-[#171717] dark:text-white'
                    }`}
                    aria-hidden="true"
                  >
                    ↓
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#666666] dark:text-[#A3A3A3] leading-relaxed border-t border-[#E9E9E9] dark:border-[#2A2A2A]">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Footer Bar */}
      <div className="border-t border-[#171717]/15 dark:border-white/10 bg-[#F5F5F5] dark:bg-[#181818] py-6 sm:py-8 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#666666] dark:text-[#A3A3A3]">
            {/* Left: Brand & Title */}
            <div className="flex items-center gap-3 text-center sm:text-left">
              <span className="font-black text-sm text-[#171717] dark:text-white tracking-wider">
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
              className="group inline-flex items-center gap-2 text-xs font-black text-[#171717] dark:text-white hover:text-[#F9B51B] transition-colors cursor-pointer select-none py-1.5 px-4 rounded-full border-2 border-[#171717] dark:border-[#333333] bg-white dark:bg-[#1E1E1E] shadow-[2px_2px_0px_#171717]"
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
