import React, { useMemo } from 'react';
import {
  candidateProfile,
  skillGroupsData,
  toolsData,
  contactData,
  testimonialsData,
} from '../data/portfolioData';
import { InteractiveToolIndex } from './InteractiveToolIndex';
import { MarqueeTicker } from './MarqueeTicker';

interface SkillsContactProps {
  onOpenCvModal?: () => void;
}

export const SkillsContact: React.FC<SkillsContactProps> = ({ onOpenCvModal }) => {
  // Skill card data matching Steve Mengelkoch Screenshot 4
  const skillCards = [
    {
      code: 'CS',
      percentage: '95%',
      badgeColor: 'bg-[#F9B51B] text-[#171717]',
      title: 'Customer Service & Pelayanan Toko',
      desc: 'Komunikasi ramah, memahami kebutuhan pembeli, mendengarkan aktif, dan penyelesaian masalah pelanggan secara cepat.',
      bullets: [
        'Pelayanan ramah & tanggap',
        'Penanganan keluhan pelanggan',
        'Komunikasi interpersonal efektif',
        'Membangun loyalitas pembeli',
      ],
    },
    {
      code: 'RET',
      percentage: '92%',
      badgeColor: 'bg-[#31543A] text-white',
      title: 'Operasional Retail & Penataan Barang',
      desc: 'Penataan display produk estetik, penerapan metode FIFO, rotasi barang, dan pemeliharaan kerapian rak toko harian.',
      bullets: [
        'Display produk metode FIFO',
        'Pengecekan tanggal kedaluwarsa',
        'Penyesuaian label harga rak',
        'Menjaga kebersihan area penjualan',
      ],
    },
    {
      code: 'POS',
      percentage: '90%',
      badgeColor: 'bg-[#F9B51B] text-[#171717]',
      title: 'Sistem Kasir & Transaksi Tunai',
      desc: 'Ketelitian tinggi dalam input transaksi, penghitungan uang tunai dan kembalian, serta rekapitulasi kas harian.',
      bullets: [
        'Ketelitian input transaksi kasir',
        'Penghitungan uang tunai akurat',
        'Pencatatan pembukuan harian',
        'Konfirmasi pembayaran non-tunai/QR',
      ],
    },
    {
      code: 'DIG',
      percentage: '88%',
      badgeColor: 'bg-[#31543A] text-white',
      title: 'Administrasi Digital & Arsip Data',
      desc: 'Pengoperasian Microsoft Excel, Google Sheets, pengarsipan sistem digital PADDS, dan pembuatan materi grafis Canva.',
      bullets: [
        'Microsoft Office & Google Workspace',
        'Pengarsipan digital sistem PADDS',
        'Data entry & inventarisasi',
        'Desain promosi Canva & media sosial',
      ],
    },
  ];

  // Generate running text items automatically matching section content
  const skillsTickerItems = useMemo(() => {
    const titles = skillCards.map((card) => card.title.toUpperCase());
    const bullets = skillCards.flatMap((card) => card.bullets.map((b) => b.toUpperCase()));
    const tools = toolsData.map((tool) => tool.name.toUpperCase());
    return [...titles, ...bullets, ...tools];
  }, []);

  return (
    <div className="space-y-0">
      {/* ========================================================================= */}
      {/* 1. SKILLS & TECHNICAL EXPERIENCE (Steve Mengelkoch Screenshot 4)           */}
      {/* Background: Solid Dark Green (#31543A) with White Cards                   */}
      {/* ========================================================================= */}
      <section
        id="skills"
        className="pt-20 md:pt-28 pb-0 bg-[#31543A] text-white transition-colors duration-200 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-16 md:pb-20">
          {/* Section Kicker & Title */}
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.08em] uppercase text-[#F9B51B]">
              <span aria-hidden="true">✦</span>
              <span>SKILLS</span>
              <span aria-hidden="true">✦</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.025em] text-white leading-[1.08]">
              Skills &amp; Technical Experience
            </h2>
          </div>

          {/* 4 Skill Columns (Clean Open Editorial Layout, Zero Lines) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 items-start">
            {skillCards.map((card) => (
              <div
                key={card.code}
                className="flex flex-col justify-between space-y-5 text-white"
              >
                <div className="space-y-4">
                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/80 leading-[1.55] font-normal">
                      {card.desc}
                    </p>
                  </div>
                </div>

                {/* Bullets with Checkmarks */}
                <div className="space-y-2">
                  {card.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-medium text-white/90">
                      <span className="text-[#F9B51B] font-bold shrink-0 mt-0.5">✓</span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tools yang Saya Gunakan inside Skills Section */}
          <div className="pt-10 space-y-10">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.08em] uppercase text-[#F9B51B]">
                <span aria-hidden="true">✦</span>
                <span>DIGITAL TOOLS &amp; PLATFORMS</span>
                <span aria-hidden="true">✦</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Aplikasi &amp; Perangkat Lunak Kerja
              </h3>
            </div>

            {/* Grid of application cards matching reference screenshot */}
            <InteractiveToolIndex tools={toolsData} />
          </div>
        </div>

        {/* Marquee Ticker at the bottom of section#skills with content matching this section */}
        <MarqueeTicker items={skillsTickerItems} speed="slow" durationSeconds={85} />
      </section>

      {/* ========================================================================= */}
      {/* 2. TESTIMONIALS SECTION (Steve Mengelkoch Screenshots 6 & 7)               */}
      {/* ========================================================================= */}
      <section
        id="testimonials"
        className="py-20 md:py-28 bg-[#F5F5F5] dark:bg-[#18181B] text-[#171717] dark:text-white transition-colors duration-200 border-t border-[#171717]/15 dark:border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Section Kicker & Title */}
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.08em] uppercase text-[#F9B51B]">
              <span aria-hidden="true">✦</span>
              <span>TESTIMONIALS</span>
              <span aria-hidden="true">✦</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.025em] text-[#171717] dark:text-white leading-[1.08]">
              What Clients &amp; Colleagues Say
            </h2>
          </div>

          {/* 4 Testimonials (Clean Open Editorial Reviews, No Bento Box) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-start">
            {testimonialsData.map((testi) => (
              <div
                key={testi.id}
                className="border-t border-[#171717]/15 dark:border-white/10 pt-6 space-y-4"
              >
                {/* Top Bar: Stars + Category */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1 text-[#F9B51B] text-base select-none">
                    {'★'.repeat(testi.stars)}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#31543A] dark:text-[#F9B51B]">
                    {testi.category}
                  </span>
                </div>

                {/* Quote (Pure Plus Jakarta Sans) */}
                <p className="text-base sm:text-lg text-[#171717] dark:text-white leading-[1.65] italic font-normal">
                  &ldquo;{testi.quote}&rdquo;
                </p>

                {/* Author Meta */}
                <div className="pt-3 border-t border-[#171717]/10 dark:border-white/10 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#F9B51B] text-[#171717] flex items-center justify-center font-extrabold text-xs shrink-0">
                    {testi.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#171717] dark:text-white leading-snug">
                      {testi.name}
                    </h4>
                    <p className="text-xs text-[#666666] dark:text-[#A3A3A3] font-medium">
                      {testi.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CURRICULUM VITAE & OFFICIAL DOCUMENTATION                               */}
      {/* ========================================================================= */}
      <section
        id="cv"
        className="py-20 md:py-24 bg-white dark:bg-[#121212] text-[#171717] dark:text-white transition-colors duration-200 border-t border-[#171717]/15 dark:border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Kicker */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.08em] uppercase text-[#F9B51B]">
              <span aria-hidden="true">✦</span>
              <span>CURRICULUM VITAE</span>
              <span aria-hidden="true">✦</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.025em] text-[#171717] dark:text-white leading-[1.08]">
              Official Resume &amp; Documentation
            </h2>
          </div>

          {/* Document Preview & Download Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Col 1-7: Editorial Document Mockup */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="relative w-full max-w-[480px] h-[320px] sm:h-[350px]">
                {/* Back Page */}
                <div className="absolute right-3 top-0 w-[85%] h-full bg-[#F5F5F5] dark:bg-[#1E1E1E] border border-[#171717]/10 dark:border-white/10 rounded-2xl p-6 text-[11px] text-[#666666] space-y-3 pointer-events-none">
                  <div className="h-6 bg-[#31543A] rounded-xl text-white px-3 flex items-center justify-between font-bold text-[10px]">
                    <span>TAUFIK HIDAYAT MALII</span>
                    <span className="text-[#F9B51B]">PRAMUNIAGA</span>
                  </div>
                  <div className="space-y-1.5 pt-2">
                    <div className="w-20 h-2 bg-[#F9B51B] rounded-full" />
                    <div className="w-full h-1.5 bg-[#E9E9E9] dark:bg-[#333333] rounded-full" />
                    <div className="w-5/6 h-1.5 bg-[#E9E9E9] dark:bg-[#333333] rounded-full" />
                  </div>
                  <div className="space-y-1.5 pt-2">
                    <div className="w-16 h-2 bg-[#31543A] rounded-full" />
                    <div className="w-full h-1.5 bg-[#E9E9E9] dark:bg-[#333333] rounded-full" />
                    <div className="w-4/5 h-1.5 bg-[#E9E9E9] dark:bg-[#333333] rounded-full" />
                  </div>
                </div>

                {/* Front Page */}
                <div className="absolute left-0 bottom-0 w-[85%] h-[90%] bg-white dark:bg-[#1E1E1E] border border-[#171717]/15 dark:border-white/15 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-lg select-none">
                  <div>
                    <div className="text-xs font-bold tracking-[0.08em] text-[#F9B51B] uppercase">
                      CURRICULUM VITAE
                    </div>
                    <div className="text-xl sm:text-2xl font-extrabold text-[#171717] dark:text-white mt-1 tracking-tight">
                      Taufik Hidayat Malii
                    </div>
                    <div className="w-12 h-1 bg-[#31543A] mt-2 rounded-full" />
                  </div>

                  <div className="space-y-2 text-xs text-[#666666] dark:text-[#A3A3A3] font-normal">
                    <p>• Pendidikan: SMA Negeri 1 Kabila</p>
                    <p>• Pengalaman: Operasional Usaha Keluarga (8 Thn)</p>
                    <p>• Portofolio: Jasa Digital &amp; Sistem PADDS</p>
                  </div>

                  <div className="flex items-center justify-between text-xs font-bold text-[#171717] dark:text-white border-t border-[#171717]/15 dark:border-[#333333] pt-3">
                    <span>Gorontalo, Indonesia</span>
                    <span>Update 2025</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Col 8-12: Description & Action */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#171717] dark:text-white tracking-[-0.015em]">
                  Curriculum Vitae Siap Tinjau
                </h3>
                <p className="text-base sm:text-lg text-[#666666] dark:text-[#A3A3A3] leading-[1.65] font-normal">
                  Dokumen lengkap berisi riwayat pendidikan, pengalaman operasional nyata, matriks kompetensi retail, serta kontak resmi. Tersedia untuk kebutuhan evaluasi rekrutmen dan kolaborasi kerja.
                </p>
              </div>

              {/* Split Pill Button to open CV Modal */}
              <div>
                <button
                  type="button"
                  onClick={onOpenCvModal}
                  className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase bg-[#31543A] text-white hover:bg-[#26432E] border-2 border-[#171717] transition-all duration-150 shadow-md active:scale-95 cursor-pointer"
                >
                  <span>BUKA &amp; UNDUH CV LENGKAP</span>
                  <span className="w-9 h-9 rounded-full bg-[#F9B51B] text-[#171717] flex items-center justify-center font-bold text-sm shrink-0 transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. LET'S WORK TOGETHER & CONTACT CHANNELS (Steve Mengelkoch style)        */}
      {/* ========================================================================= */}
      <section
        id="contact"
        className="py-20 md:py-28 bg-[#171717] text-white transition-colors duration-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Top Banner Headline */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.08em] uppercase text-[#F9B51B]">
                <span aria-hidden="true">✦</span>
                <span>LET'S WORK TOGETHER</span>
                <span aria-hidden="true">✦</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.025em] text-white leading-[1.08]">
                Tertarik Bekerja Sama atau Rekrutmen?
              </h2>
            </div>

            {/* Button for direct WhatsApp */}
            <div className="shrink-0">
              <a
                href="https://api.whatsapp.com/send?phone=6285656381485"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 pl-6 pr-2 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase bg-[#F9B51B] text-[#171717] hover:bg-[#E5A417] transition-all duration-150 shadow-md active:scale-95 cursor-pointer"
              >
                <span>HUBUNGI VIA WHATSAPP</span>
                <span className="w-9 h-9 rounded-full bg-[#171717] text-white flex items-center justify-center font-bold text-sm shrink-0 transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </div>
          </div>

          {/* 4 Contact Channels (Clean Open Editorial Columns, Zero Lines) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactData.map((contact) => (
              <a
                key={contact.platform}
                href={contact.actionUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="space-y-2 group cursor-pointer block"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.08em] text-[#F9B51B] uppercase">
                    {contact.label}
                  </span>
                  <span className="text-white/60 group-hover:text-[#F9B51B] text-sm font-bold transition-colors">
                    &rarr;
                  </span>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-[#F9B51B] transition-colors break-words">
                    {contact.value}
                  </h4>
                  <p className="text-xs text-white/60 mt-1 font-medium">
                    {contact.placeholderText}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
