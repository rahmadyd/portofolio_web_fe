# Portofolio Web — Rahmad Hidayad

Situs portofolio pribadi yang menampilkan proyek, pengalaman, dan keahlian frontend development.

## 🚀 Fitur

- **Landing Page** — Hero section dengan CTA, tentang diri, keahlian, pengalaman kerja, dan pendidikan
- **Halaman Proyek** — Koleksi lengkap proyek dengan deskripsi, teknologi, dan link ke repository/demo
- **Responsive Design** — Optimal untuk desktop, tablet, dan mobile
- **Smooth Navigation** — React Router untuk navigasi antar halaman
- **Modern Styling** — Tailwind CSS dengan design system custom

## 🛠️ Tech Stack

- **Frontend Framework** — React 19
- **Build Tool** — Vite
- **Routing** — React Router v7
- **Styling** — Tailwind CSS
- **Deployment** — GitHub Pages / Vercel

## 📂 Struktur Proyek

```
src/
├── components/          # Komponen React utama
│   ├── Hero.jsx        # Section hero dengan CTA
│   ├── About.jsx       # Tentang diri
│   ├── Skills.jsx      # Keahlian teknis
│   ├── Experience.jsx  # Pengalaman kerja
│   ├── Projects.jsx    # Proyek featured
│   ├── Education.jsx   # Pendidikan & sertifikasi
│   ├── Navbar.jsx      # Navigasi
│   └── Footer.jsx      # Footer
├── pages/
│   └── ProjectDetailPage.jsx  # Halaman detail semua proyek
├── App.jsx             # Router setup
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## 🎯 Proyek yang Ditampilkan

1. **InsightOps** — Dasbor AI untuk analisis log telekomunikasi (Next.js, Recharts)
2. **Website Quorvin** — Company profile website (React 19, SPA)
3. **YOLOv7 Monitoring** — Sistem monitoring lansia berbasis computer vision (React, FastAPI)
4. **Innovillage 2021** — UI/UX design untuk website pariwisata

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm atau yarn

### Installation

```bash
# Clone repository
git clone https://github.com/rahmadyd/portofolio_web_fe.git
cd portofolio_web_fe

# Install dependencies
npm install

# Run development server
npm run dev

# Build untuk production
npm run build

# Preview build
npm run preview
```

Development server akan berjalan di `http://localhost:5173`

## 📝 Customization

### Ubah Konten
- **Hero** — Edit `src/components/Hero.jsx` untuk mengubah headline, deskripsi, dan CTA
- **Projects** — Edit `src/pages/ProjectDetailPage.jsx` untuk menambah/ubah proyek
- **Skills & Experience** — Edit components terkait di `src/components/`

### Ubah Styling
- Color palette dihubungkan via CSS Variables di `tailwind.config.js`
- Modifikasi warna, spacing, dan typography di sana untuk refactoring global

## 📸 Screenshots

Halaman landing menampilkan:
- Hero section dengan foto profil
- Ringkasan singkat tentang keahlian
- Koleksi proyek dengan filter dan detail
- Timeline pengalaman kerja
- Latar belakang pendidikan

## 🔗 Links

- **Portfolio** — [rahmad-hidayad.com](https://rahmad-hidayad.com) (coming soon)
- **GitHub** — [@rahmadyd](https://github.com/rahmadyd)
- **LinkedIn** — [rahmadyd](https://linkedin.com/in/rahmadyd)
- **Email** — rahmad.hidayad.work@gmail.com

## 📄 License

Silakan gunakan sebagai referensi atau template untuk portofolio Anda sendiri.

---

**Built with ❤️ using React & Vite**
