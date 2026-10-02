# Agent Skills Registry & Execution Layer

Dokumentasi resmi dan panduan pemanggilan 15 Agent Skills terintegrasi di lingkungan Google AI Studio Build. Registry ini bertindak sebagai **Knowledge & Instruction Layer** bagi coding agent saat mengembangkan, memperbaiki, me-review, dan mengoptimalkan website.

---

## 1. Arsitektur Integrasi & Compatibility Layer

| Layer | Lokasi Path | Status | Deskripsi |
|---|---|---|---|
| **Primary System Path** | `/skills/custom_skills/<skill-id>/SKILL.md` | **Tersedia (Valid)** | Berada langsung di sistem root `/skills/`, berdampingan dengan `/skills/system_skills/` bawaan runtime. |
| **Agent Standards Path** | `/.agents/skills/<skill-id>/SKILL.md` | **Tersedia (Valid)** | Mengikuti spesifikasi universal `.agents/skills` untuk kompatibilitas lintas runner agent. |
| **Machine Manifest** | `/skills-manifest.json` | **Tersedia (Valid)** | Metadata JSON terstruktur berisi metadata, trigger context, dan path. |

> **Catatan Kompatibilitas Native vs Compatibility Layer**:
> - **Native System Skills**: System prompt runtime AI Studio mendefinisikan daftar default pada awal inisialisasi lingkungan di `/skills/system_skills/`.
> - **Custom Skills & Compatibility Layer**: Seluruh 15 skill baru disimpan secara lengkap di `/skills/custom_skills/` dan `/.agents/skills/`. Coding agent dapat langsung membaca file `SKILL.md` terkait menggunakan tool `view_file` sebelum menjalankan task sesuai konteks pemicunya.

---

## 2. Katalog 15 Agent Skills

### Kategori A: Design Engineering, UI Architecture & Color Systems

#### 1. Emil Design Engineering
- **ID**: `emil-design-eng`
- **Path**: `/skills/custom_skills/emil-design-eng/SKILL.md`
- **Sumber**: [emilkowalski/skills](https://github.com/emilkowalski/skills/blob/main/skills/emil-design-eng/SKILL.md)
- **Fungsi Utama**: Filosofi polish UI, spring animations, micro-interactions, layout transitions, detail tak terlihat yang membuat software terasa responsif, taktil, dan premium.
- **Kapan Digunakan**: Menambahkan interaktivitas komponen, tombol interaktif, animasi layout halus, spring physics, dan transisi mikro.

#### 2. Anthropic Frontend Design
- **ID**: `anthropic-frontend-design`
- **Path**: `/skills/custom_skills/anthropic-frontend-design/SKILL.md`
- **Sumber**: [anthropics/skills](https://github.com/anthropics/skills/tree/main/skills/frontend-design)
- **Fungsi Utama**: Konstitusi desain visual berkarakter, hierarki tipografi tegas, pemilihan warna tematik, anti-templat default, dan tata letak editorial/landing page berkelas.
- **Kapan Digunakan**: Membangun landing page baru, menetapkan arah artistik, menentukan ritme ruang & layout makro.

#### 3. ag-kit Frontend Design
- **ID**: `ag-kit-frontend-design`
- **Path**: `/skills/custom_skills/ag-kit-frontend-design/SKILL.md`
- **Sumber**: [vudovn/ag-kit](https://github.com/vudovn/ag-kit/blob/main/.agents/skills/frontend-design/SKILL.md)
- **Fungsi Utama**: Panduan frontend anti-slop praktis, komponen web modern, audit-first saat redesign, dan strict pre-flight check untuk website produksi.
- **Kapan Digunakan**: Redesign halaman web, refactoring komponen UI, penataan form/input, dan validasi kelayakan interface sebelum rilis.
- **Harmonisasi Komplementer**:
  - *Anthropic Frontend Design* memandu visi artistik, tipografi makro, dan karakter visual unik.
  - *ag-kit Frontend Design* memandu engineering komponen, audit pre-flight, dan implementasi anti-slop secara teknis. Keduanya saling melengkapi tanpa saling meniadakan.

#### 4. Tailwind Design System
- **ID**: `tailwind-design-system`
- **Path**: `/skills/custom_skills/tailwind-design-system/SKILL.md`
- **Sumber**: [wshobson/agents](https://github.com/wshobson/agents/blob/main/plugins/frontend-mobile-development/skills/tailwind-design-system/SKILL.md)
- **Fungsi Utama**: Arsitektur design system Tailwind CSS v4, konfigurasi CSS-first (`@theme`), design tokens, varian komponen responsif, dan konsistensi kelas utilitas.
- **Kapan Digunakan**: Standarisasi skema utility class, styling komponen baru, migrasi/penyesuaian token tema Tailwind, dan maintainability styling.

#### 5. Color Palette
- **ID**: `color-palette`
- **Path**: `/skills/custom_skills/color-palette/SKILL.md`
- **Sumber**: [jezweb/claude-skills](https://github.com/jezweb/claude-skills/blob/main/plugins/design-assets/skills/color-palette/SKILL.md)
- **Fungsi Utama**: Pembuatan palet warna harmonis lengkap dari satu brand hex (skala 50–950), semantic tokens, varian dark mode, serta validasi kontras aksesibilitas WCAG (AA/AAA).
- **Kapan Digunakan**: Menentukan kombinasi warna baru, meremajakan tema gelap/terang, memastikan keterbacaan teks dan rasio kontras warna terhadap latar belakang.

---

### Kategori B: GSAP Animation Suite (Tanggung Jawab Terpisah)

#### 6. GSAP Core
- **ID**: `gsap-core`
- **Path**: `/skills/custom_skills/gsap-core/SKILL.md`
- **Sumber**: [greensock/gsap-skills](https://github.com/greensock/gsap-skills/tree/main/skills/gsap-core)
- **Fungsi Utama**: Fondasi animasi tweening GSAP (`gsap.to()`, `gsap.from()`, `gsap.fromTo()`), kurva easing, duration, stagger, defaults, serta `gsap.matchMedia()` untuk responsivitas dan preferensi reduced motion.
- **Kapan Digunakan**: Animasi elemen individual, transisi dasar DOM/SVG, dan penanganan aksesibilitas motion.

#### 7. GSAP Timeline
- **ID**: `gsap-timeline`
- **Path**: `/skills/custom_skills/gsap-timeline/SKILL.md`
- **Sumber**: [greensock/gsap-skills](https://github.com/greensock/gsap-skills/tree/main/skills/gsap-timeline)
- **Fungsi Utama**: Koreografi urutan animasi multi-elemen menggunakan `gsap.timeline()`, position parameter (`"<"`, `"+=0.2"`), nesting timelines, dan kontrol playback (play, pause, reverse).
- **Kapan Digunakan**: Animasi sekuensial yang kompleks (misal intro hero, entrance card bertahap, alur animasi cerita).

#### 8. GSAP ScrollTrigger
- **ID**: `gsap-scrolltrigger`
- **Path**: `/skills/custom_skills/gsap-scrolltrigger/SKILL.md`
- **Sumber**: [greensock/gsap-skills](https://github.com/greensock/gsap-skills/tree/main/skills/gsap-scrolltrigger)
- **Fungsi Utama**: Animasi berbasis scroll posisi pengguna, efek pinning (elemen menempel saat scroll), scrub (animasi terikat langsung ke pergerakan scroll bar), dan deteksi trigger viewport.
- **Kapan Digunakan**: Animasi saat section masuk ke viewport, parallax scroll, pinning section cerita, dan progress bar scroll.

#### 9. GSAP Plugins
- **ID**: `gsap-plugins`
- **Path**: `/skills/custom_skills/gsap-plugins/SKILL.md`
- **Sumber**: [greensock/gsap-skills](https://github.com/greensock/gsap-skills/blob/main/skills/gsap-plugins/SKILL.md)
- **Fungsi Utama**: Registrasi dan pemanfaatan plugin spesifik: Flip (transisi posisi/dimensi layout), Draggable, Inertia, Observer, SplitText/ScrambleText, CustomEase, CustomWiggle, CustomBounce.
- **Kapan Digunakan**: Kebutuhan animasi teks terpisah (*split text*), drag-and-drop, transisi state layout FLIP, atau kurva easing kustom.

#### 10. GSAP React
- **ID**: `gsap-react`
- **Path**: `/skills/custom_skills/gsap-react/SKILL.md`
- **Sumber**: [greensock/gsap-skills](https://github.com/greensock/gsap-skills/tree/main/skills/gsap-react)
- **Fungsi Utama**: Pola integrasi resmi GSAP pada React / Next.js menggunakan hook `useGSAP`, scoping selector dengan `scope`, dan otomatisasi cleanup animasi agar terhindar dari memory leak atau animasi ganda saat unmount/re-render.
- **Kapan Digunakan**: Menulis atau memperbarui animasi GSAP di dalam komponen React fungsional.

#### 11. GSAP Performance
- **ID**: `gsap-performance`
- **Path**: `/skills/custom_skills/gsap-performance/SKILL.md`
- **Sumber**: [greensock/gsap-skills](https://github.com/greensock/gsap-skills/tree/main/skills/gsap-performance)
- **Fungsi Utama**: Optimasi frame-rate 60/120 FPS, memprioritaskan GPU transform (`x`, `y`, `scale`, `rotation`) dibanding layout trigger (`top`, `left`, `width`, `height`), pencegahan layout thrashing, pengelolaan `will-change`, dan batching update.
- **Kapan Digunakan**: Mengatasi animasi yang patah-patah (*jank*), mengaudit beban GPU/CPU animasi, dan menjamin kehalusan motion di perangkat low-end.

---

### Kategori C: Performance Optimization & Caching Infrastructure

#### 12. Cloudflare Web Performance
- **ID**: `cloudflare-web-perf`
- **Path**: `/skills/custom_skills/cloudflare-web-perf/SKILL.md`
- **Sumber**: [cloudflare/skills](https://github.com/cloudflare/skills/blob/main/skills/web-perf/SKILL.md)
- **Fungsi Utama**: Optimasi performa infrastruktur web, protokol HTTP/2 dan HTTP/3, strategi caching browser & edge, kompresi aset (Brotli/Gzip), preload/prefetch, serta arsitektur jaringan pengiriman konten.
- **Kapan Digunakan**: Konfigurasi header cache, optimasi pengiriman aset statis, pemangkasan latency TTFB (Time to First Byte).

#### 13. Performance Optimization
- **ID**: `performance-optimization`
- **Path**: `/skills/custom_skills/performance-optimization/SKILL.md`
- **Sumber**: [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills/blob/main/skills/performance-optimization/SKILL.md)
- **Fungsi Utama**: Metrik Core Web Vitals (LCP, INP, CLS), pemangkasan ukuran bundel JavaScript/CSS, code splitting, lazy loading gambar dan komponen, deduplikasi dependensi, serta penghilangan render-blocking resources.
- **Kapan Digunakan**: Analisis skor Lighthouse, mempercepat rendering halaman pertama kali, mengurangi input delay, dan mengecilkan ukuran dist build.

---

### Kategori D: Quality Assurance, Review & Prompt Engineering

#### 14. Web Design Reviewer
- **ID**: `web-design-reviewer`
- **Path**: `/skills/custom_skills/web-design-reviewer/SKILL.md`
- **Sumber**: [github/awesome-copilot](https://github.com/github/awesome-copilot/main/skills/web-design-reviewer/SKILL.md)
- **Fungsi Utama**: Inspeksi visual kode, pendeteksian isu responsive di breakpoint mobile/tablet/desktop, audit konsistensi visual, cek aksesibilitas (kontras & atribut ARIA), serta perbaikan langsung di source code.
- **Kapan Digunakan**: Audit desain berkala, verifikasi sebelum perilisan, review tampilan setelah modifikasi besar, dan penelusuran bug layout.

#### 15. Prompt Engineer
- **ID**: `prompt-engineer`
- **Path**: `/skills/custom_skills/prompt-engineer/SKILL.md`
- **Sumber**: [Jeffallan/claude-skills](https://github.com/Jeffallan/claude-skills/blob/main/skills/prompt-engineer/SKILL.md)
- **Fungsi Utama**: Penyusunan, refactoring, dan evaluasi instruksi prompt untuk LLM, perancangan schema output JSON terstruktur, teknik few-shot & chain-of-thought, guardrails, serta meta-prompting efisien.
- **Kapan Digunakan**: Menyusun instruksi sistem atau prompt internal untuk fitur AI, menyempurnakan struktur instruksi agent, atau merancang template pengolahan teks pintar.

---

## 3. Matriks & Aturan Pemilihan Skill (Routing Matrix)

Agent **TIDAK BOLEH** memanggil seluruh 15 skill sekaligus pada satu task. Agent wajib menyeleksi kombinasi skill berdasarkan konteks kebutuhan spesifik berikut:

| Skenario / Konteks Pekerjaan | Skill yang Wajib Dipilih | Skill yang Tidak Perlu Dipanggil |
|---|---|---|
| **Merancang Layout / Halaman Baru** | `anthropic-frontend-design`, `ag-kit-frontend-design`, `tailwind-design-system`, `color-palette` | GSAP skills, Prompt Engineer |
| **Menambahkan Animasi Interaktif Ringan (Button, Modal, Dropdown)** | `emil-design-eng`, `tailwind-design-system` | GSAP Timeline/ScrollTrigger, Cloudflare Web Perf |
| **Membuat Animasi Sekuensial / Timeline Kompleks** | `gsap-core`, `gsap-timeline`, `gsap-react` | Cloudflare Web Perf, Prompt Engineer |
| **Membuat Efek Scroll / Parallax / Pinning** | `gsap-core`, `gsap-scrolltrigger`, `gsap-react`, `gsap-performance` | Color Palette, Prompt Engineer |
| **Mengatasi Animasi Patah / Laggy (Jank)** | `gsap-performance`, `performance-optimization` | Color Palette, Web Design Reviewer |
| **Audit Kualitas Desain & Responsivitas** | `web-design-reviewer`, `ag-kit-frontend-design` | Cloudflare Web Perf, Prompt Engineer |
| **Optimasi Kecepatan Loading & Core Web Vitals** | `performance-optimization`, `cloudflare-web-perf` | GSAP Plugins, Color Palette |
| **Membuat / Memperbaiki Palet Warna Brand** | `color-palette`, `tailwind-design-system` | GSAP Suite, Cloudflare Web Perf |
| **Menyusun / Mengevaluasi Instruksi LLM / Prompt AI** | `prompt-engineer` | GSAP Suite, Tailwind Design System |
| **Full Redesign & Polish Menyeluruh** | `anthropic-frontend-design`, `ag-kit-frontend-design`, `emil-design-eng`, `web-design-reviewer`, `tailwind-design-system` | Cloudflare Web Perf, Prompt Engineer |

---

## 4. Validasi Integritas File

Semua 15 file `SKILL.md` telah diverifikasi secara programatik:
- **Status Akses**: 100% Berhasil diunduh dan tersimpan di kedua direktori (`/skills/custom_skills/` dan `/.agents/skills/`).
- **Integritas Konten**: Tidak ada file kosong atau terpotong (ukuran berkisar antara 4.1 KB hingga 88.4 KB).
- **Format Frontmatter**: Seluruh file memiliki header YAML terstandarisasi (`name`, `description`).
- **Isolasi Namespace**: Nama unik untuk setiap skill (`anthropic-frontend-design` vs `ag-kit-frontend-design`) mencegah tumpang tindih instruksi.
- **Dampak Source Code**: 0 perubahan pada source code aplikasi (`src/components/`, `src/App.tsx`, dll.), menjaga keutuhan fungsional portofolio yang sedang berjalan.
