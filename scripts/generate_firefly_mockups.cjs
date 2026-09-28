const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const MOCKUP_DIR = path.join(__dirname, '..', 'public', 'assets', 'mockups');
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

if (!fs.existsSync(MOCKUP_DIR)) {
  fs.mkdirSync(MOCKUP_DIR, { recursive: true });
}

// -------------------------------------------------------------
// 1. MOCKUP 01: Jasa Digital & Publikasi (Smartphone WhatsApp Mockup)
// -------------------------------------------------------------
const svg01 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 620" width="800" height="620" fill="none">
  <defs>
    <filter id="phone-drop-shadow" x="-30%" y="-20%" width="160%" height="160%" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="24" stdDeviation="24" flood-color="#05070B" flood-opacity="0.38" />
      <feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#05070B" flood-opacity="0.22" />
    </filter>
    <filter id="ground-shadow" x="-20%" y="-20%" width="140%" height="140%" filterUnits="userSpaceOnUse">
      <feGaussianBlur stdDeviation="16" />
    </filter>
    <linearGradient id="phone-outer-rim" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#4B5563" />
      <stop offset="25%" stop-color="#9CA3AF" />
      <stop offset="50%" stop-color="#374151" />
      <stop offset="75%" stop-color="#1F2937" />
      <stop offset="100%" stop-color="#4B5563" />
    </linearGradient>
    <linearGradient id="phone-inner-bezel" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#111827" />
      <stop offset="100%" stop-color="#030712" />
    </linearGradient>
    <linearGradient id="wa-header-grad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#075E54" />
      <stop offset="100%" stop-color="#128C7E" />
    </linearGradient>
    <linearGradient id="glass-glare" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.18" />
      <stop offset="35%" stop-color="#FFFFFF" stop-opacity="0.04" />
      <stop offset="70%" stop-color="#FFFFFF" stop-opacity="0.0" />
    </linearGradient>
    <clipPath id="phone-screen-clip">
      <rect x="256" y="32" width="288" height="528" rx="40" />
    </clipPath>
  </defs>

  <!-- Diffused Ground Shadow on Transparent Canvas -->
  <ellipse cx="400" cy="580" rx="200" ry="18" fill="#000000" opacity="0.32" filter="url(#ground-shadow)" />

  <!-- Smartphone Outer Body with 3D Bevel -->
  <g filter="url(#phone-drop-shadow)">
    <!-- Side buttons (Volume up, Volume down, Power) -->
    <rect x="248" y="140" width="4" height="42" rx="2" fill="#4B5563" />
    <rect x="248" y="196" width="4" height="42" rx="2" fill="#4B5563" />
    <rect x="548" y="160" width="4" height="64" rx="2" fill="#4B5563" />

    <!-- Main Chassis Outer Rim -->
    <rect x="250" y="26" width="300" height="540" rx="46" fill="url(#phone-outer-rim)" />
    <!-- Inner Dark Bezel -->
    <rect x="253" y="29" width="294" height="534" rx="43" fill="url(#phone-inner-bezel)" />

    <!-- Screen Area (Clipped for rounded corners) -->
    <g clip-path="url(#phone-screen-clip)">
      <!-- WhatsApp Wallpaper Canvas -->
      <rect x="256" y="32" width="288" height="528" fill="#EFEAE2" />

      <!-- Subtle Wallpaper Doodle Pattern Overlay -->
      <g opacity="0.06" stroke="#111827" stroke-width="1.5" fill="none">
        <circle cx="280" cy="180" r="14" />
        <path d="M320 220 l12 -12 l12 12" />
        <rect x="480" y="200" width="20" height="20" rx="4" />
        <circle cx="500" cy="340" r="16" />
        <path d="M290 380 q15 -15 30 0" />
        <rect x="360" y="440" width="24" height="16" rx="4" />
      </g>

      <!-- WhatsApp Header -->
      <rect x="256" y="32" width="288" height="88" fill="url(#wa-header-grad)" />

      <!-- Status Bar Time & Icons -->
      <text x="276" y="52" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700">09:41</text>
      <!-- WiFi, Signal & Battery Icons -->
      <g fill="#FFFFFF" transform="translate(492, 42)">
        <rect x="0" y="8" width="3" height="4" rx="0.5" />
        <rect x="5" y="6" width="3" height="6" rx="0.5" />
        <rect x="10" y="3" width="3" height="9" rx="0.5" />
        <rect x="15" y="0" width="3" height="12" rx="0.5" />
        <rect x="26" y="1" width="18" height="10" rx="2.5" fill="none" stroke="#FFFFFF" stroke-width="1.5" />
        <rect x="28" y="3" width="12" height="6" rx="1" fill="#FFFFFF" />
        <path d="M45 4 v4" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" />
      </g>

      <!-- Dynamic Island Capsule -->
      <rect x="355" y="40" width="90" height="22" rx="11" fill="#000000" />
      <circle cx="430" cy="51" r="4.5" fill="#111827" />
      <circle cx="430" cy="51" r="2" fill="#1E3A8A" opacity="0.8" />

      <!-- WhatsApp Profile Bar (Header Contents) -->
      <g transform="translate(264, 72)">
        <path d="M4 14 L12 6 M4 14 L12 22" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <circle cx="28" cy="14" r="14" fill="#25D366" />
        <text x="28" y="19" fill="#FFFFFF" font-family="sans-serif" font-size="12" font-weight="900" text-anchor="middle">JD</text>
        <text x="48" y="11" fill="#FFFFFF" font-family="-apple-system, sans-serif" font-size="12" font-weight="700">Jasa Publikasi Mahasiswa</text>
        <circle cx="52" cy="22" r="3" fill="#4ADE80" />
        <text x="60" y="24" fill="#D1FAE5" font-family="-apple-system, sans-serif" font-size="9" font-weight="500">Online · Terverifikasi</text>
        <g fill="#FFFFFF" opacity="0.9" transform="translate(232, 4)">
          <path d="M4 4 h16 v16 h-16 z" fill="none" />
          <circle cx="10" cy="10" r="2" />
          <circle cx="16" cy="10" r="2" />
          <circle cx="22" cy="10" r="2" />
        </g>
      </g>

      <!-- Date Badge -->
      <g transform="translate(400, 134)">
        <rect x="-42" y="0" width="84" height="18" rx="9" fill="#FFFFFF" opacity="0.88" />
        <text x="0" y="13" fill="#4B5563" font-family="-apple-system, sans-serif" font-size="9" font-weight="700" text-anchor="middle">HARI INI</text>
      </g>

      <!-- CHAT BUBBLE 1: Client Question (Incoming Left) -->
      <g transform="translate(266, 160)">
        <path d="M10 0 h184 a12 12 0 0 1 12 12 v40 a12 12 0 0 1 -12 12 h-184 a12 12 0 0 1 -12 -12 v-40 a12 12 0 0 1 12 -12 z" fill="#FFFFFF" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.08))" />
        <path d="M0 6 L-6 10 L0 14 Z" fill="#FFFFFF" />
        <text x="10" y="18" fill="#111827" font-family="-apple-system, sans-serif" font-size="10" font-weight="500">Halo kak, artikel tugas kuliah saya</text>
        <text x="10" y="32" fill="#111827" font-family="-apple-system, sans-serif" font-size="10" font-weight="500">bisa dibantu koordinasi publikasi ke</text>
        <text x="10" y="46" fill="#111827" font-family="-apple-system, sans-serif" font-size="10" font-weight="500">jurnal terakreditasi nasional?</text>
        <text x="184" y="58" fill="#9CA3AF" font-family="-apple-system, sans-serif" font-size="8" font-weight="500">09:42</text>
      </g>

      <!-- CHAT BUBBLE 2: Admin Response (Outgoing Right) -->
      <g transform="translate(322, 238)">
        <path d="M10 0 h196 a12 12 0 0 1 12 12 v82 a12 12 0 0 1 -12 12 h-196 a12 12 0 0 1 -12 -12 v-82 a12 12 0 0 1 12 -12 z" fill="#D9FDD3" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.08))" />
        <path d="M218 6 L224 10 L218 14 Z" fill="#D9FDD3" />
        <text x="10" y="18" fill="#111827" font-family="-apple-system, sans-serif" font-size="10" font-weight="600">Halo kak! Tentu bisa sekali.</text>
        <text x="10" y="32" fill="#374151" font-family="-apple-system, sans-serif" font-size="9.5" font-weight="400">Kami bantu cek kesesuaian format,</text>
        <text x="10" y="45" fill="#374151" font-family="-apple-system, sans-serif" font-size="9.5" font-weight="400">uji plagiasi Turnitin, hingga naskah</text>
        <text x="10" y="58" fill="#374151" font-family="-apple-system, sans-serif" font-size="9.5" font-weight="400">diterima dan LoA resmi terbit ya kak.</text>

        <!-- Document Attachment Sub-Card -->
        <rect x="10" y="65" width="196" height="28" rx="6" fill="#C8F2C2" stroke="#A7E49D" stroke-width="1" />
        <rect x="16" y="70" width="18" height="18" rx="3" fill="#2563EB" />
        <text x="25" y="83" fill="#FFFFFF" font-family="sans-serif" font-size="9" font-weight="900" text-anchor="middle">W</text>
        <text x="40" y="79" fill="#065F46" font-family="-apple-system, sans-serif" font-size="8.5" font-weight="700">Format_Artikel_Jurnal.docx</text>
        <text x="40" y="89" fill="#047857" font-family="-apple-system, sans-serif" font-size="7.5">2.4 MB · Template Resmi</text>

        <text x="184" y="102" fill="#059669" font-family="-apple-system, sans-serif" font-size="8" font-weight="700">09:43 ✓✓</text>
      </g>

      <!-- CHAT BUBBLE 3: Client Satisfaction (Incoming Left) -->
      <g transform="translate(266, 358)">
        <path d="M10 0 h190 a12 12 0 0 1 12 12 v48 a12 12 0 0 1 -12 12 h-190 a12 12 0 0 1 -12 -12 v-48 a12 12 0 0 1 12 -12 z" fill="#FFFFFF" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.08))" />
        <path d="M0 6 L-6 10 L0 14 Z" fill="#FFFFFF" />
        <text x="10" y="18" fill="#111827" font-family="-apple-system, sans-serif" font-size="10" font-weight="500">Wah responsnya cepat sekali kak!</text>
        <text x="10" y="32" fill="#111827" font-family="-apple-system, sans-serif" font-size="10" font-weight="500">Tarifnya juga transparan dan sangat</text>
        <text x="10" y="46" fill="#111827" font-family="-apple-system, sans-serif" font-size="10" font-weight="500">membantu mahasiswa akhir 👍🎓</text>
        <text x="188" y="66" fill="#9CA3AF" font-family="-apple-system, sans-serif" font-size="8" font-weight="500">09:45</text>
      </g>

      <!-- Bottom Chat Input Bar -->
      <g transform="translate(256, 502)">
        <rect x="0" y="0" width="288" height="58" fill="#F0F2F5" />
        <rect x="12" y="10" width="224" height="38" rx="19" fill="#FFFFFF" />
        <circle cx="30" cy="29" r="8" fill="#9CA3AF" opacity="0.3" />
        <text x="46" y="33" fill="#9CA3AF" font-family="-apple-system, sans-serif" font-size="11">Ketik pesan balasan...</text>
        <circle cx="260" cy="29" r="18" fill="#128C7E" />
        <path d="M260 21 a3 3 0 0 1 3 3 v6 a3 3 0 0 1 -6 0 v-6 a3 3 0 0 1 3 -3 z M254 28 a6 6 0 0 0 12 0 M260 34 v4" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" fill="none" />
      </g>

      <!-- Home Indicator Line -->
      <rect x="330" y="548" width="140" height="4" rx="2" fill="#111827" opacity="0.6" />

      <!-- Screen Glass Diagonal Specular Glare -->
      <polygon points="256,32 460,32 340,560 256,560" fill="url(#glass-glare)" pointer-events="none" />
    </g>
  </g>
</svg>`;

// -------------------------------------------------------------
// 2. MOCKUP 02: PADDS SMANSAT (MacBook Pro Laptop Mockup)
// -------------------------------------------------------------
const svg02 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 580" width="900" height="580" fill="none">
  <defs>
    <filter id="mac-drop-shadow" x="-20%" y="-20%" width="140%" height="140%" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="24" stdDeviation="24" flood-color="#05070B" flood-opacity="0.36" />
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#05070B" flood-opacity="0.20" />
    </filter>
    <filter id="mac-ground-shadow" x="-20%" y="-20%" width="140%" height="140%" filterUnits="userSpaceOnUse">
      <feGaussianBlur stdDeviation="18" />
    </filter>
    <linearGradient id="mac-lid-grad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#374151" />
      <stop offset="100%" stop-color="#111827" />
    </linearGradient>
    <linearGradient id="mac-bezel-rim" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#4B5563" />
      <stop offset="50%" stop-color="#9CA3AF" />
      <stop offset="100%" stop-color="#374151" />
    </linearGradient>
    <linearGradient id="mac-base-grad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#E5E7EB" />
      <stop offset="30%" stop-color="#D1D5DB" />
      <stop offset="100%" stop-color="#9CA3AF" />
    </linearGradient>
    <linearGradient id="mac-screen-glare" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.14" />
      <stop offset="40%" stop-color="#FFFFFF" stop-opacity="0.03" />
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.0" />
    </linearGradient>
    <clipPath id="mac-screen-clip">
      <rect x="110" y="46" width="680" height="428" rx="8" />
    </clipPath>
  </defs>

  <!-- Diffused Ground Shadow on Transparent Canvas -->
  <ellipse cx="450" cy="530" rx="380" ry="18" fill="#000000" opacity="0.35" filter="url(#mac-ground-shadow)" />

  <g filter="url(#mac-drop-shadow)">
    <!-- Laptop Top Lid Backing & Outer Rim -->
    <rect x="96" y="32" width="708" height="456" rx="20" fill="url(#mac-lid-grad)" stroke="url(#mac-bezel-rim)" stroke-width="2" />
    <!-- Inner Dark Bezel Area -->
    <rect x="104" y="40" width="692" height="440" rx="14" fill="#0A0C10" />

    <!-- Top WebCam Notch & Indicator -->
    <circle cx="450" cy="43" r="2.5" fill="#1F2937" />
    <circle cx="450" cy="43" r="1.2" fill="#10B981" opacity="0.8" />

    <!-- Screen Canvas -->
    <g clip-path="url(#mac-screen-clip)">
      <!-- Browser Top Window Bar -->
      <rect x="110" y="46" width="680" height="32" fill="#1E293B" />
      <circle cx="126" cy="62" r="5" fill="#EF4444" />
      <circle cx="142" cy="62" r="5" fill="#F59E0B" />
      <circle cx="158" cy="62" r="5" fill="#10B981" />
      <rect x="220" y="51" width="460" height="22" rx="6" fill="#0F172A" />
      <text x="236" y="66" fill="#94A3B8" font-family="monospace" font-size="10">🔒 padds.sman1suwawatimur.sch.id/dashboard</text>
      <rect x="696" y="52" width="84" height="20" rx="10" fill="#15803D" />
      <text x="738" y="65" fill="#FFFFFF" font-family="-apple-system, sans-serif" font-size="8.5" font-weight="700" text-anchor="middle">SMANSAT 1</text>

      <!-- App Header Bar -->
      <rect x="110" y="78" width="680" height="48" fill="#FFFFFF" />
      <line x1="110" y1="126" x2="790" y2="126" stroke="#E2E8F0" stroke-width="1" />
      <rect x="126" y="88" width="28" height="28" rx="6" fill="#1E3A8A" />
      <text x="140" y="106" fill="#FFFFFF" font-family="sans-serif" font-size="13" font-weight="900" text-anchor="middle">P</text>
      <text x="162" y="99" fill="#0F172A" font-family="-apple-system, sans-serif" font-size="12" font-weight="800">PADDS SMANSAT</text>
      <text x="162" y="112" fill="#64748B" font-family="-apple-system, sans-serif" font-size="9">Pusat Arsip &amp; Dokumen Digital Sekolah</text>

      <!-- User Info -->
      <rect x="640" y="88" width="138" height="28" rx="14" fill="#F1F5F9" />
      <circle cx="654" cy="102" r="9" fill="#3B82F6" />
      <text x="654" y="105" fill="#FFFFFF" font-family="sans-serif" font-size="8" font-weight="700" text-anchor="middle">TU</text>
      <text x="670" y="105" fill="#1E293B" font-family="-apple-system, sans-serif" font-size="9" font-weight="700">Admin Tata Usaha</text>

      <!-- Left Sidebar Menu -->
      <rect x="110" y="126" width="148" height="348" fill="#F8FAFC" />
      <line x1="258" y1="126" x2="258" y2="474" stroke="#E2E8F0" stroke-width="1" />

      <!-- Sidebar Items -->
      <g transform="translate(120, 136)">
        <rect x="0" y="0" width="128" height="28" rx="6" fill="#1E3A8A" />
        <text x="12" y="18" fill="#FFFFFF" font-family="-apple-system, sans-serif" font-size="10" font-weight="700">📊 Ringkasan Arsip</text>

        <rect x="0" y="34" width="128" height="26" rx="6" fill="transparent" />
        <text x="12" y="51" fill="#475569" font-family="-apple-system, sans-serif" font-size="10">📁 Manajemen Surat</text>

        <rect x="0" y="64" width="128" height="26" rx="6" fill="transparent" />
        <text x="12" y="81" fill="#475569" font-family="-apple-system, sans-serif" font-size="10">🔍 Pencarian Pintar</text>

        <rect x="0" y="94" width="128" height="26" rx="6" fill="transparent" />
        <text x="12" y="111" fill="#475569" font-family="-apple-system, sans-serif" font-size="10">📈 Laporan Retensi</text>

        <rect x="0" y="124" width="128" height="26" rx="6" fill="transparent" />
        <text x="12" y="141" fill="#475569" font-family="-apple-system, sans-serif" font-size="10">🔲 QR Code Arsip</text>

        <rect x="0" y="154" width="128" height="26" rx="6" fill="transparent" />
        <text x="12" y="171" fill="#475569" font-family="-apple-system, sans-serif" font-size="10">⚙️ Pengaturan Modul</text>
      </g>

      <!-- Right Dashboard Content -->
      <rect x="258" y="126" width="532" height="348" fill="#FFFFFF" />

      <!-- Welcome Banner -->
      <g transform="translate(276, 142)">
        <rect x="0" y="0" width="496" height="52" rx="10" fill="#EFF6FF" stroke="#BFDBFE" stroke-width="1" />
        <text x="16" y="22" fill="#1E3A8A" font-family="-apple-system, sans-serif" font-size="12" font-weight="800">Sistem Arsip &amp; Dokumen Digital Terintegrasi</text>
        <text x="16" y="38" fill="#3B82F6" font-family="-apple-system, sans-serif" font-size="9.5">6 Modul Utama: Dashboard, Pencatatan Surat, Klasifikasi, Retensi, Log, dan QR Code</text>
      </g>

      <!-- 3 Metrics KPI Cards -->
      <g transform="translate(276, 204)">
        <rect x="0" y="0" width="156" height="58" rx="8" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1" />
        <text x="14" y="18" fill="#64748B" font-family="-apple-system, sans-serif" font-size="8.5" font-weight="700" text-transform="uppercase">TOTAL DOKUMEN</text>
        <text x="14" y="42" fill="#0F172A" font-family="-apple-system, sans-serif" font-size="18" font-weight="900">1.428</text>
        <rect x="100" y="10" width="44" height="18" rx="9" fill="#DCFCE7" />
        <text x="122" y="22" fill="#15803D" font-family="sans-serif" font-size="8" font-weight="700" text-anchor="middle">+12 Baru</text>

        <rect x="170" y="0" width="156" height="58" rx="8" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1" />
        <text x="184" y="18" fill="#64748B" font-family="-apple-system, sans-serif" font-size="8.5" font-weight="700" text-transform="uppercase">STATUS RETENSI</text>
        <text x="184" y="42" fill="#0F172A" font-family="-apple-system, sans-serif" font-size="18" font-weight="900">98.4%</text>
        <rect x="274" y="10" width="44" height="18" rx="9" fill="#EFF6FF" />
        <text x="296" y="22" fill="#1D4ED8" font-family="sans-serif" font-size="8" font-weight="700" text-anchor="middle">Aman</text>

        <rect x="340" y="0" width="156" height="58" rx="8" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1" />
        <text x="354" y="18" fill="#64748B" font-family="-apple-system, sans-serif" font-size="8.5" font-weight="700" text-transform="uppercase">QR VERIFIED</text>
        <text x="354" y="42" fill="#0F172A" font-family="-apple-system, sans-serif" font-size="18" font-weight="900">100%</text>
        <rect x="444" y="10" width="44" height="18" rx="9" fill="#FEF3C7" />
        <text x="466" y="22" fill="#B45309" font-family="sans-serif" font-size="8" font-weight="700" text-anchor="middle">Aktif</text>
      </g>

      <!-- Live Archive Table -->
      <g transform="translate(276, 274)">
        <rect x="0" y="0" width="496" height="190" rx="8" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1" />
        <rect x="0" y="0" width="496" height="28" rx="8" fill="#F1F5F9" />
        <text x="16" y="18" fill="#475569" font-family="-apple-system, sans-serif" font-size="8.5" font-weight="700">NO. REGISTER</text>
        <text x="110" y="18" fill="#475569" font-family="-apple-system, sans-serif" font-size="8.5" font-weight="700">PERIHAL DOKUMEN / SURAT</text>
        <text x="320" y="18" fill="#475569" font-family="-apple-system, sans-serif" font-size="8.5" font-weight="700">KATEGORI</text>
        <text x="424" y="18" fill="#475569" font-family="-apple-system, sans-serif" font-size="8.5" font-weight="700">STATUS</text>

        <!-- Row 1 -->
        <line x1="0" y1="28" x2="496" y2="28" stroke="#E2E8F0" stroke-width="1" />
        <text x="16" y="48" fill="#0F172A" font-family="monospace" font-size="9">SK-2024/089</text>
        <text x="110" y="48" fill="#0F172A" font-family="-apple-system, sans-serif" font-size="9" font-weight="600">Surat Keputusan Kelulusan Siswa TA 2024</text>
        <text x="320" y="48" fill="#64748B" font-family="-apple-system, sans-serif" font-size="9">Kesiswaan</text>
        <rect x="420" y="36" width="66" height="18" rx="9" fill="#DCFCE7" />
        <text x="453" y="48" fill="#166534" font-family="sans-serif" font-size="8" font-weight="700" text-anchor="middle">Tersimpan</text>

        <!-- Row 2 -->
        <line x1="0" y1="62" x2="496" y2="62" stroke="#E2E8F0" stroke-width="1" />
        <text x="16" y="82" fill="#0F172A" font-family="monospace" font-size="9">SM-2024/112</text>
        <text x="110" y="82" fill="#0F172A" font-family="-apple-system, sans-serif" font-size="9" font-weight="600">Surat Masuk Dinas Pendidikan Prov. Gorontalo</text>
        <text x="320" y="82" fill="#64748B" font-family="-apple-system, sans-serif" font-size="9">Kedinasan</text>
        <rect x="420" y="70" width="66" height="18" rx="9" fill="#EFF6FF" />
        <text x="453" y="82" fill="#1E40AF" font-family="sans-serif" font-size="8" font-weight="700" text-anchor="middle">Arsip Aktif</text>

        <!-- Row 3 -->
        <line x1="0" y1="96" x2="496" y2="96" stroke="#E2E8F0" stroke-width="1" />
        <text x="16" y="116" fill="#0F172A" font-family="monospace" font-size="9">BA-2024/045</text>
        <text x="110" y="116" fill="#0F172A" font-family="-apple-system, sans-serif" font-size="9" font-weight="600">Berita Acara Rapat Evaluasi Kurikulum Merdeka</text>
        <text x="320" y="116" fill="#64748B" font-family="-apple-system, sans-serif" font-size="9">Kurikulum</text>
        <rect x="420" y="104" width="66" height="18" rx="9" fill="#FEF3C7" />
        <text x="453" y="116" fill="#92400E" font-family="sans-serif" font-size="8" font-weight="700" text-anchor="middle">Verifikasi</text>

        <!-- Row 4 -->
        <line x1="0" y1="130" x2="496" y2="130" stroke="#E2E8F0" stroke-width="1" />
        <text x="16" y="150" fill="#0F172A" font-family="monospace" font-size="9">SK-2024/014</text>
        <text x="110" y="150" fill="#0F172A" font-family="-apple-system, sans-serif" font-size="9" font-weight="600">Surat Pengesahan Sarana &amp; Laboratorium</text>
        <text x="320" y="150" fill="#64748B" font-family="-apple-system, sans-serif" font-size="9">Sarpras</text>
        <rect x="420" y="138" width="66" height="18" rx="9" fill="#F3E8FF" />
        <text x="453" y="150" fill="#6B21A8" font-family="sans-serif" font-size="8" font-weight="700" text-anchor="middle">QR Ready</text>
      </g>

      <polygon points="110,46 360,46 220,474 110,474" fill="url(#mac-screen-glare)" pointer-events="none" />
    </g>

    <!-- Laptop Base (Keyboard Deck & Trackpad Lip) -->
    <path d="M40 484 L860 484 L810 508 L90 508 Z" fill="url(#mac-base-grad)" stroke="#6B7280" stroke-width="1" />
    <rect x="90" y="508" width="720" height="8" rx="3" fill="#D1D5DB" />
    <path d="M410 508 h80 c0 4 -4 8 -8 8 h-64 c-4 0 -8 -4 -8 -8 z" fill="#9CA3AF" />
  </g>
</svg>`;

// -------------------------------------------------------------
// 3. MOCKUP 03: Pengelolaan Usaha Keluarga & Ritel Fisik (POS Tablet Mockup)
// -------------------------------------------------------------
const svg03 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 600" width="840" height="600" fill="none">
  <defs>
    <filter id="pos-drop-shadow" x="-25%" y="-20%" width="150%" height="150%" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="24" stdDeviation="24" flood-color="#05070B" flood-opacity="0.36" />
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#05070B" flood-opacity="0.22" />
    </filter>
    <filter id="pos-ground-shadow" x="-20%" y="-20%" width="140%" height="140%" filterUnits="userSpaceOnUse">
      <feGaussianBlur stdDeviation="18" />
    </filter>
    <linearGradient id="pos-chassis-grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#4B5563" />
      <stop offset="30%" stop-color="#6B7280" />
      <stop offset="70%" stop-color="#1F2937" />
      <stop offset="100%" stop-color="#111827" />
    </linearGradient>
    <linearGradient id="pos-screen-glare" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.15" />
      <stop offset="45%" stop-color="#FFFFFF" stop-opacity="0.03" />
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.0" />
    </linearGradient>
    <linearGradient id="pos-stand-grad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#6B7280" />
      <stop offset="100%" stop-color="#374151" />
    </linearGradient>
    <clipPath id="pos-screen-clip">
      <rect x="116" y="44" width="608" height="420" rx="14" />
    </clipPath>
  </defs>

  <!-- Diffused Ground Shadow on Transparent Canvas -->
  <ellipse cx="420" cy="554" rx="280" ry="18" fill="#000000" opacity="0.32" filter="url(#pos-ground-shadow)" />

  <!-- Tablet Desktop Stand Base Behind -->
  <path d="M370 460 L470 460 L490 540 L350 540 Z" fill="url(#pos-stand-grad)" />
  <rect x="330" y="536" width="180" height="12" rx="6" fill="#1F2937" stroke="#4B5563" stroke-width="1" />

  <g filter="url(#pos-drop-shadow)">
    <!-- Tablet Outer Aluminum Chassis -->
    <rect x="100" y="28" width="640" height="452" rx="26" fill="url(#pos-chassis-grad)" stroke="#9CA3AF" stroke-width="1.5" />
    <rect x="108" y="36" width="624" height="436" rx="20" fill="#0F1117" />

    <!-- Screen Canvas -->
    <g clip-path="url(#pos-screen-clip)">
      <!-- POS Top Bar -->
      <rect x="116" y="44" width="608" height="44" fill="#0F172A" />
      <circle cx="138" cy="66" r="10" fill="#F9B51B" />
      <text x="138" y="70" fill="#171717" font-family="sans-serif" font-size="10" font-weight="900" text-anchor="middle">🏪</text>
      <text x="156" y="64" fill="#FFFFFF" font-family="-apple-system, sans-serif" font-size="12" font-weight="800">TOKO KELUARGA &amp; RITEL FISIK</text>
      <text x="156" y="77" fill="#94A3B8" font-family="-apple-system, sans-serif" font-size="9">Sistem Kasir, Stok FIFO &amp; Operasional Harian</text>

      <!-- Shift Pill -->
      <rect x="560" y="54" width="150" height="24" rx="12" fill="#1E293B" stroke="#334155" stroke-width="1" />
      <circle cx="574" cy="66" r="4" fill="#10B981" />
      <text x="640" y="70" fill="#F8FAFC" font-family="-apple-system, sans-serif" font-size="9" font-weight="700" text-anchor="middle">Kasir: Taufik (Shift Pagi)</text>

      <!-- Split View Body -->
      <rect x="116" y="88" width="350" height="376" fill="#F8FAFC" />

      <!-- Left Header -->
      <g transform="translate(130, 102)">
        <rect x="0" y="0" width="322" height="28" rx="6" fill="#E2E8F0" />
        <text x="12" y="18" fill="#1E293B" font-family="-apple-system, sans-serif" font-size="9.5" font-weight="800">📦 MONITORING RAK &amp; METODE FIFO</text>

        <!-- Product 1: Beras 5kg -->
        <g transform="translate(0, 36)">
          <rect x="0" y="0" width="322" height="60" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1" />
          <rect x="10" y="10" width="40" height="40" rx="6" fill="#FEF3C7" />
          <text x="30" y="35" font-size="18" text-anchor="middle">🍚</text>
          <text x="60" y="24" fill="#0F172A" font-family="-apple-system, sans-serif" font-size="10.5" font-weight="700">Beras Premium 5kg</text>
          <text x="60" y="38" fill="#64748B" font-family="-apple-system, sans-serif" font-size="8.5">Stok Fisik: 42 Sak · Posisi Rak Depan</text>
          <rect x="60" y="42" width="100" height="14" rx="7" fill="#DCFCE7" />
          <text x="110" y="52" fill="#166534" font-family="sans-serif" font-size="7.5" font-weight="700" text-anchor="middle">FIFO: Batch Masuk Awal</text>
          <text x="312" y="34" fill="#0F172A" font-family="-apple-system, sans-serif" font-size="11" font-weight="800" text-anchor="end">Rp 75.000</text>
        </g>

        <!-- Product 2: Minyak Goreng 2L -->
        <g transform="translate(0, 104)">
          <rect x="0" y="0" width="322" height="60" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1" />
          <rect x="10" y="10" width="40" height="40" rx="6" fill="#FEE2E2" />
          <text x="30" y="35" font-size="18" text-anchor="middle">🌻</text>
          <text x="60" y="24" fill="#0F172A" font-family="-apple-system, sans-serif" font-size="10.5" font-weight="700">Minyak Goreng Pouch 2L</text>
          <text x="60" y="38" fill="#64748B" font-family="-apple-system, sans-serif" font-size="8.5">Stok Fisik: 36 Pcs · Expired Check Aman</text>
          <rect x="60" y="42" width="100" height="14" rx="7" fill="#DCFCE7" />
          <text x="110" y="52" fill="#166534" font-family="sans-serif" font-size="7.5" font-weight="700" text-anchor="middle">FIFO: Rak Terdepan</text>
          <text x="312" y="34" fill="#0F172A" font-family="-apple-system, sans-serif" font-size="11" font-weight="800" text-anchor="end">Rp 35.000</text>
        </g>

        <!-- Product 3: Gula Pasir 1kg -->
        <g transform="translate(0, 172)">
          <rect x="0" y="0" width="322" height="60" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1" />
          <rect x="10" y="10" width="40" height="40" rx="6" fill="#E0F2FE" />
          <text x="30" y="35" font-size="18" text-anchor="middle">🍬</text>
          <text x="60" y="24" fill="#0F172A" font-family="-apple-system, sans-serif" font-size="10.5" font-weight="700">Gula Pasir Kristal 1kg</text>
          <text x="60" y="38" fill="#64748B" font-family="-apple-system, sans-serif" font-size="8.5">Stok Fisik: 50 Pcs · Rotasi Barang Rutin</text>
          <rect x="60" y="42" width="94" height="14" rx="7" fill="#FEF3C7" />
          <text x="107" y="52" fill="#B45309" font-family="sans-serif" font-size="7.5" font-weight="700" text-anchor="middle">Stok Rak Siap Jual</text>
          <text x="312" y="34" fill="#0F172A" font-family="-apple-system, sans-serif" font-size="11" font-weight="800" text-anchor="end">Rp 16.000</text>
        </g>

        <!-- Service & Cashier Operational Note -->
        <g transform="translate(0, 240)">
          <rect x="0" y="0" width="322" height="74" rx="8" fill="#F1F5F9" stroke="#CBD5E1" stroke-width="1" />
          <text x="12" y="18" fill="#1E293B" font-family="-apple-system, sans-serif" font-size="9" font-weight="800">KOMITMEN OPERASIONAL RITEL:</text>
          <text x="12" y="34" fill="#475569" font-family="-apple-system, sans-serif" font-size="8.5">✓ Pelayanan ramah, sigap, dan cekatan terhadap pembeli</text>
          <text x="12" y="48" fill="#475569" font-family="-apple-system, sans-serif" font-size="8.5">✓ Ketelitian uang kembalian dan pembukuan kas harian</text>
          <text x="12" y="62" fill="#475569" font-family="-apple-system, sans-serif" font-size="8.5">✓ Kedisiplinan restock rak toko setiap pergantian shift</text>
        </g>
      </g>

      <!-- Right Panel: Live Cashier Checkout (258px wide) -->
      <line x1="466" y1="88" x2="466" y2="464" stroke="#E2E8F0" stroke-width="1" />
      <rect x="466" y="88" width="258" height="376" fill="#FFFFFF" />

      <g transform="translate(480, 102)">
        <rect x="0" y="0" width="230" height="28" rx="6" fill="#1E293B" />
        <text x="115" y="18" fill="#FFFFFF" font-family="-apple-system, sans-serif" font-size="9.5" font-weight="800" text-anchor="middle">🧾 STRUK TRANSAKSI AKTIF</text>

        <!-- Receipt Box -->
        <rect x="0" y="36" width="230" height="186" rx="8" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1" />
        <text x="12" y="54" fill="#64748B" font-family="monospace" font-size="8.5">NO: TRX-2024-8829</text>
        <text x="218" y="54" fill="#64748B" font-family="monospace" font-size="8.5" text-anchor="end">09:48 WIB</text>
        <line x1="12" y1="62" x2="218" y2="62" stroke="#CBD5E1" stroke-dasharray="3,3" stroke-width="1" />

        <text x="12" y="78" fill="#0F172A" font-family="-apple-system, sans-serif" font-size="9" font-weight="600">2x Minyak Goreng 2L</text>
        <text x="218" y="78" fill="#0F172A" font-family="-apple-system, sans-serif" font-size="9" font-weight="700" text-anchor="end">70.000</text>

        <text x="12" y="96" fill="#0F172A" font-family="-apple-system, sans-serif" font-size="9" font-weight="600">1x Beras Premium 5kg</text>
        <text x="218" y="96" fill="#0F172A" font-family="-apple-system, sans-serif" font-size="9" font-weight="700" text-anchor="end">75.000</text>

        <text x="12" y="114" fill="#0F172A" font-family="-apple-system, sans-serif" font-size="9" font-weight="600">2x Gula Pasir 1kg</text>
        <text x="218" y="114" fill="#0F172A" font-family="-apple-system, sans-serif" font-size="9" font-weight="700" text-anchor="end">32.000</text>

        <line x1="12" y1="124" x2="218" y2="124" stroke="#CBD5E1" stroke-dasharray="3,3" stroke-width="1" />

        <text x="12" y="142" fill="#0F172A" font-family="-apple-system, sans-serif" font-size="10" font-weight="800">TOTAL BELANJA:</text>
        <text x="218" y="142" fill="#15803D" font-family="-apple-system, sans-serif" font-size="12" font-weight="900" text-anchor="end">Rp 177.000</text>

        <text x="12" y="160" fill="#64748B" font-family="-apple-system, sans-serif" font-size="8.5">Tunai Dibayar:</text>
        <text x="218" y="160" fill="#0F172A" font-family="-apple-system, sans-serif" font-size="9" font-weight="700" text-anchor="end">Rp 200.000</text>

        <text x="12" y="178" fill="#1E3A8A" font-family="-apple-system, sans-serif" font-size="9" font-weight="700">Kembalian:</text>
        <text x="218" y="178" fill="#1E3A8A" font-family="-apple-system, sans-serif" font-size="10" font-weight="900" text-anchor="end">Rp 23.000</text>

        <rect x="12" y="188" width="206" height="24" rx="12" fill="#DCFCE7" />
        <text x="115" y="204" fill="#166534" font-family="sans-serif" font-size="8.5" font-weight="800" text-anchor="middle">✓ TRANSAKSI SUKSES &amp; LUNAS</text>

        <!-- Big Checkout Action Button -->
        <g transform="translate(0, 232)">
          <rect x="0" y="0" width="230" height="42" rx="8" fill="#31543A" />
          <text x="115" y="26" fill="#FFFFFF" font-family="-apple-system, sans-serif" font-size="11" font-weight="800" text-anchor="middle">SELESAIKAN &amp; CETAK STRUK</text>
        </g>
        <g transform="translate(0, 282)">
          <rect x="0" y="0" width="230" height="32" rx="6" fill="#F1F5F9" stroke="#E2E8F0" stroke-width="1" />
          <text x="115" y="20" fill="#475569" font-family="-apple-system, sans-serif" font-size="9.5" font-weight="700" text-anchor="middle">Tutup Kasir &amp; Setor Shift</text>
        </g>
      </g>

      <polygon points="116,44 380,44 260,464 116,464" fill="url(#pos-screen-glare)" pointer-events="none" />
    </g>
  </g>
</svg>`;

async function main() {
  console.log("Writing SVG files to " + MOCKUP_DIR);
  fs.writeFileSync(path.join(MOCKUP_DIR, 'mockup_01_jasa_digital.svg'), svg01, 'utf8');
  fs.writeFileSync(path.join(MOCKUP_DIR, 'mockup_02_padds_smansat.svg'), svg02, 'utf8');
  fs.writeFileSync(path.join(MOCKUP_DIR, 'mockup_03_usaha_keluarga.svg'), svg03, 'utf8');

  console.log("Rendering High-Resolution Transparent PNGs and WebPs with sharp...");
  
  // 1. Phone mockup
  const png01 = await sharp(Buffer.from(svg01), { density: 150 })
    .png({ quality: 100, compressionLevel: 9 })
    .toBuffer();
  fs.writeFileSync(path.join(MOCKUP_DIR, 'mockup_01_jasa_digital.png'), png01);
  fs.writeFileSync(path.join(MOCKUP_DIR, 'Firefly_RemoveBackground.png'), png01);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'Firefly_RemoveBackground.png'), png01);
  const webp01 = await sharp(png01).webp({ quality: 95 }).toBuffer();
  fs.writeFileSync(path.join(MOCKUP_DIR, 'mockup_01_jasa_digital.webp'), webp01);

  // 2. MacBook mockup
  const png02 = await sharp(Buffer.from(svg02), { density: 150 })
    .png({ quality: 100, compressionLevel: 9 })
    .toBuffer();
  fs.writeFileSync(path.join(MOCKUP_DIR, 'mockup_02_padds_smansat.png'), png02);
  fs.writeFileSync(path.join(MOCKUP_DIR, 'Firefly.png'), png02);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'Firefly.png'), png02);
  const webp02 = await sharp(png02).webp({ quality: 95 }).toBuffer();
  fs.writeFileSync(path.join(MOCKUP_DIR, 'mockup_02_padds_smansat.webp'), webp02);

  // 3. POS Tablet mockup
  const png03 = await sharp(Buffer.from(svg03), { density: 150 })
    .png({ quality: 100, compressionLevel: 9 })
    .toBuffer();
  fs.writeFileSync(path.join(MOCKUP_DIR, 'mockup_03_usaha_keluarga.png'), png03);
  fs.writeFileSync(path.join(MOCKUP_DIR, 'Firefly (2).png'), png03);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'Firefly (2).png'), png03);
  const webp03 = await sharp(png03).webp({ quality: 95 }).toBuffer();
  fs.writeFileSync(path.join(MOCKUP_DIR, 'mockup_03_usaha_keluarga.webp'), webp03);

  console.log("All mockups generated successfully!");
}

main().catch(err => {
  console.error("Failed:", err);
  process.exit(1);
});
