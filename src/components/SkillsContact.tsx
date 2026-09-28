import React from 'react';
import {
  candidateProfile,
  skillGroupsData,
  toolsData,
  contactData,
  testimonialsData,
} from '../data/portfolioData';
import { InteractiveToolIndex } from './InteractiveToolIndex';

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

  return (
    <div className="space-y-0">
      {/* ========================================================================= */}
      {/* 1. SKILLS & TECHNICAL EXPERIENCE (Steve Mengelkoch Screenshot 4)           */}
      {/* Background: Solid Dark Green (#31543A) with White Cards                   */}
      {/* ========================================================================= */}
      <section
        id="skills"
        className="py-20 md:py-28 bg-[#31543A] text-white transition-colors duration-200 border-t border-white/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Section Kicker & Title */}
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-black tracking-widest uppercase text-[#F9B51B]">
              <span aria-hidden="true">✦</span>
              <span>SKILLS</span>
              <span aria-hidden="true">✦</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Skills &amp; Technical Experience
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed font-normal">
              Kombinasi keterampilan pelayanan langsung, operasional ritel toko fisik, ketelitian kasir, serta kemampuan digital pendukung sistem kerja modern.
            </p>
          </div>

          {/* 4 Steve Mengelkoch Signature Skill Cards with Code Badges & Percentages */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {skillCards.map((card) => (
              <div
                key={card.code}
                className="bg-white text-[#171717] rounded-3xl p-6 sm:p-7 border-2 border-[#171717] shadow-[6px_6px_0px_#171717] flex flex-col justify-between space-y-5 hover:-translate-y-1 transition-transform"
              >
                <div>
                  {/* Top Bar: Code Badge + Percentage Pill */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#E9E9E9]">
                    <span
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl font-black text-sm border-2 border-[#171717] ${card.badgeColor}`}
                    >
                      {card.code}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-black bg-[#F5F5F5] text-[#171717] border-2 border-[#171717]">
                      {card.percentage}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="pt-4 space-y-2">
                    <h3 className="text-lg font-black tracking-tight text-[#171717] leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs text-[#666666] leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>

                {/* Bullets with Checkmarks */}
                <div className="pt-2 border-t border-[#E9E9E9] space-y-2">
                  {card.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-medium text-[#171717]">
                      <span className="text-[#31543A] font-black shrink-0 mt-0.5">✓</span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tools yang Saya Gunakan inside Skills Section */}
          <div className="pt-10 border-t border-white/20 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-black tracking-widest text-white uppercase block">
                  DIGITAL TOOLS &amp; PLATFORMS
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  Tools yang Saya Kuasai
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-white/80 max-w-md">
                Aplikasi dan perangkat lunak yang biasa saya gunakan untuk pembukuan, pengolahan data, pengarsipan, dan komunikasi pelanggan.
              </p>
            </div>

            {/* Interactive Tool Carousel (Clean open layout without box wrapper) */}
            <InteractiveToolIndex tools={toolsData} />
          </div>
        </div>
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
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-black tracking-widest uppercase text-[#F9B51B]">
              <span aria-hidden="true">✦</span>
              <span>TESTIMONIALS</span>
              <span aria-hidden="true">✦</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#171717] dark:text-white">
              What Clients &amp; Colleagues Say
            </h2>
            <p className="text-sm sm:text-base text-[#666666] dark:text-[#A3A3A3] leading-relaxed">
              Tanggapan nyata dari mahasiswa, pelanggan ritel, dan pihak sekolah mengenai komunikasi, kehandalan, serta kualitas pelayanan yang saya berikan.
            </p>
          </div>

          {/* 4 Speech-Bubble Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {testimonialsData.map((testi) => (
              <div key={testi.id} className="relative flex flex-col justify-between">
                {/* Speech Bubble Box */}
                <div className="bg-white dark:bg-[#1E1E1E] border-2 border-[#171717] dark:border-[#333333] rounded-3xl p-6 sm:p-8 shadow-[5px_5px_0px_#171717] dark:shadow-[5px_5px_0px_#333333] space-y-5 relative">
                  {/* Top Bar: 5 Stars + Category Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    {/* 5 Warm Yellow Stars */}
                    <div className="flex items-center gap-1 text-[#F9B51B] text-lg select-none">
                      {'★'.repeat(testi.stars)}
                    </div>
                    {/* Category Tag */}
                    <span className="text-[11px] font-black uppercase px-3 py-1 rounded-full bg-[#31543A] text-white border-2 border-[#171717]">
                      {testi.category}
                    </span>
                  </div>

                  {/* Quote */}
                  <p className="text-sm sm:text-base text-[#171717] dark:text-white leading-relaxed font-medium italic">
                    &ldquo;{testi.quote}&rdquo;
                  </p>

                  {/* Author Meta */}
                  <div className="pt-4 border-t border-[#171717]/15 dark:border-[#2A2A2A] flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#F9B51B] border-2 border-[#171717] flex items-center justify-center font-black text-xs text-[#171717] shrink-0">
                      {testi.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-[#171717] dark:text-white leading-snug">
                        {testi.name}
                      </h4>
                      <p className="text-xs text-[#666666] dark:text-[#A3A3A3]">
                        {testi.role}
                      </p>
                    </div>
                  </div>

                  {/* Speech Bubble Notch Pointer (Triangle at bottom) */}
                  <div
                    className="absolute -bottom-3 left-10 w-6 h-6 bg-white dark:bg-[#1E1E1E] border-r-2 border-b-2 border-[#171717] dark:border-[#333333] transform rotate-45"
                    aria-hidden="true"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Retro Memphis Lightning Bolt Accent Graphic */}
          <div className="flex justify-center pt-6 select-none" aria-hidden="true">
            <svg className="w-10 h-10 text-[#F9B51B] fill-current animate-pulse drop-shadow-sm" viewBox="0 0 24 24">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
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
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-black tracking-widest uppercase text-[#F9B51B]">
              <span aria-hidden="true">✦</span>
              <span>CURRICULUM VITAE</span>
              <span aria-hidden="true">✦</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#171717] dark:text-white">
              Official Resume &amp; Documentation
            </h2>
          </div>

          {/* Document Preview & Download Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Col 1-7: Editorial Document Mockup */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="relative w-full max-w-[480px] h-[320px] sm:h-[350px]">
                {/* Back Page */}
                <div className="absolute right-3 top-0 w-[85%] h-full bg-[#F5F5F5] dark:bg-[#1E1E1E] border-2 border-[#171717] dark:border-[#333333] rounded-3xl p-6 text-[11px] text-[#666666] space-y-3 pointer-events-none shadow-[4px_4px_0px_#171717]">
                  <div className="h-6 bg-[#31543A] rounded-xl text-white px-3 flex items-center justify-between font-black text-[10px]">
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
                <div className="absolute left-0 bottom-0 w-[85%] h-[90%] bg-white dark:bg-[#1E1E1E] border-2 border-[#171717] dark:border-[#333333] rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-[6px_6px_0px_#171717] select-none">
                  <div>
                    <div className="text-xs font-black tracking-widest text-[#F9B51B] uppercase">
                      CURRICULUM VITAE
                    </div>
                    <div className="text-xl sm:text-2xl font-black text-[#171717] dark:text-white mt-1">
                      Taufik Hidayat Malii
                    </div>
                    <div className="w-12 h-1 bg-[#31543A] mt-2 rounded-full" />
                  </div>

                  <div className="space-y-2 text-xs text-[#666666] dark:text-[#A3A3A3]">
                    <p>• Pendidikan: SMA Negeri 1 Kabila</p>
                    <p>• Pengalaman: Operasional Usaha Keluarga (8 Thn)</p>
                    <p>• Portofolio: Jasa Digital &amp; Sistem PADDS</p>
                  </div>

                  <div className="flex items-center justify-between text-xs font-black text-[#171717] dark:text-white border-t border-[#171717]/15 dark:border-[#333333] pt-3">
                    <span>Gorontalo, Indonesia</span>
                    <span>Update 2025</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Col 8-12: Description & Action */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-black text-[#171717] dark:text-white">
                  Curriculum Vitae Siap Tinjau
                </h3>
                <p className="text-sm sm:text-base text-[#666666] dark:text-[#A3A3A3] leading-relaxed">
                  Dokumen lengkap berisi riwayat pendidikan, pengalaman operasional nyata, matriks kompetensi retail, serta kontak resmi. Tersedia untuk kebutuhan evaluasi rekrutmen dan kolaborasi kerja.
                </p>
              </div>

              {/* Split Pill Button to open CV Modal */}
              <div>
                <button
                  type="button"
                  onClick={onOpenCvModal}
                  className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full text-sm font-black bg-[#31543A] text-white hover:bg-[#26432E] border-2 border-[#171717] transition-all duration-150 shadow-[4px_4px_0px_#171717] active:scale-95 cursor-pointer"
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
        className="py-20 md:py-28 bg-[#171717] text-white transition-colors duration-200 border-t border-white/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Top Banner Headline */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-12 border-b border-white/20">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-black tracking-widest uppercase text-[#F9B51B]">
                <span aria-hidden="true">✦</span>
                <span>LET'S WORK TOGETHER</span>
                <span aria-hidden="true">✦</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Tertarik Bekerja Sama atau Rekrutmen?
              </h2>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
                Siap berkontribusi secara profesional untuk peran Pramuniaga, Kasir, Operasional Ritel, maupun Administrasi Digital. Hubungi langsung untuk peluang kerja atau diskusi lebih lanjut.
              </p>
            </div>

            {/* Split Pill Button for direct WhatsApp */}
            <div className="shrink-0">
              <a
                href="https://api.whatsapp.com/send?phone=6285656381485"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 pl-6 pr-2 py-2.5 rounded-full text-sm font-black bg-[#F9B51B] text-[#171717] hover:bg-[#E5A417] border-2 border-white transition-all duration-150 shadow-[4px_4px_0px_#FFFFFF] active:scale-95 cursor-pointer"
              >
                <span>HUBUNGI VIA WHATSAPP</span>
                <span className="w-9 h-9 rounded-full bg-[#171717] text-white flex items-center justify-center font-bold text-sm shrink-0 transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </div>
          </div>

          {/* 4 Contact Channels Grid (Steve Mengelkoch Dark Cards with Yellow Hover) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactData.map((contact) => (
              <a
                key={contact.platform}
                href={contact.actionUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#242424] rounded-3xl border-2 border-white/20 p-6 flex flex-col justify-between space-y-4 hover:border-[#F9B51B] hover:shadow-[4px_4px_0px_#F9B51B] transition-all group cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black tracking-wider text-[#F9B51B] uppercase">
                    {contact.label}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#F9B51B] group-hover:text-[#171717] flex items-center justify-center text-xs font-bold transition-colors">
                    &rarr;
                  </span>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-black text-white group-hover:text-[#F9B51B] transition-colors break-words">
                    {contact.value}
                  </h4>
                  <p className="text-xs text-white/60 mt-1">
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
