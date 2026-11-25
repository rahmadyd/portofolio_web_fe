import { Link } from 'react-router-dom';
import { useState, useMemo } from 'react';
import Navbar from '../components/Navbar';
import { useLanguage } from '../contexts/LanguageContext';

const ProjectDetailPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { t } = useLanguage();

  const categories = [
    { value: 'all', label: t({ id: 'Semua Kategori', en: 'All Categories' }) },
    { value: 'ai-llm', label: t({ id: 'AI & LLM / RAG Systems', en: 'AI & LLM / RAG Systems' }) },
    { value: 'computer-vision', label: t({ id: 'Computer Vision & ML', en: 'Computer Vision & ML' }) },
    { value: 'web-dev', label: t({ id: 'Web Development', en: 'Web Development' }) },
    { value: 'data-analytics', label: t({ id: 'Data Analytics', en: 'Data Analytics' }) },
  ];

  const projects = [
    {
      id: 1,
      categoryKey: 'ai-llm',
      title: t({ 
        id: "InsightOps — Produk Analitik Log Telekomunikasi Milik Perusahaan", 
        en: "InsightOps — Company-Owned Telecom Log Analytics Product" 
      }),
      category: "AI/LLM · Backend & Systems",
      role: t({ id: "AI Engineer (Freelance)", en: "AI Engineer (Freelance)" }),
      duration: t({ id: "Nov 2025 – Okt 2026", en: "Nov 2025 – Oct 2026" }),
      company: t({ id: "Quorvin (Jarak Jauh)", en: "Quorvin (Remote)" }),
      description: t({
        id: "Membangun layanan proof-of-concept analisis akar masalah berbasis AI (FastAPI + Groq, gpt-oss-120b) yang mengubah log telekomunikasi lintas sistem menjadi JSON terstruktur berisi potensi akar masalah, ringkasan, dan rekomendasi yang diprioritaskan. Memodelkan 3 kategori keluhan pada 8 sistem backend dengan alur multi-hop, 8 endpoint REST API, abstraksi LogDataSource Python ABC, dan deployment Railway yang terintegrasi ke dashboard Next.js 5 halaman.",
        en: "Built a proof-of-concept AI root-cause-analysis service (FastAPI + Groq, gpt-oss-120b) that turns multi-system telco logs into structured JSON with potential root causes, a summary, and prioritized recommendations. Modeled root-cause-analysis logic for 3 complaint categories across 8 backend systems with multi-hop log flows, 8 REST API endpoints, Python ABC-based LogDataSource abstraction, and Railway deployment integrated into a 5-page Next.js dashboard."
      }),
      technologies: ["FastAPI", "Groq API", "gpt-oss-120b", "Python", "Pydantic", "Railway", "Next.js"],
      metrics: t({ 
        id: "8 endpoint REST API · Multi-hop log flows · Abstraksi Python ABC", 
        en: "8 REST endpoints · Multi-hop log flows · Python ABC abstraction" 
      }),
      image: "/insightops.png",
      links: {
        demo: "https://canva.link/1chtan3ara98cgs",
        github: null
      }
    },
    {
      id: 2,
      categoryKey: 'ai-llm',
      title: t({ 
        id: "Chatbot RAG COVID-19 Berbahasa Indonesia", 
        en: "Indonesian-Language COVID-19 RAG Chatbot" 
      }),
      category: "AI/LLM · RAG Systems",
      role: t({ id: "AI Engineer (Proyek Magang)", en: "AI Engineer (Internship Project)" }),
      duration: t({ id: "Agu 2025 – Nov 2025", en: "Aug 2025 – Nov 2025" }),
      company: "ProCodeCG",
      description: t({
        id: "Membangun chatbot RAG COVID-19 berbahasa Indonesia menggunakan LangChain, FAISS, dan Sentence Transformers (multilingual MPNet), dengan model Mistral 7B-Instruct lokal via Ollama. Merancang fallback 4 tingkat dengan timeout, filter input kata kunci, pemeriksaan keamanan keluaran, dan UI Streamlit dengan chat multi-ruang dan debug retrieval.",
        en: "Built an Indonesian-language COVID-19 RAG chatbot using LangChain, FAISS, and Sentence Transformers (multilingual MPNet), with a local Mistral 7B-Instruct model served via Ollama. Designed a 4-tier fallback with timeouts, keyword-based input filter, output safety check, and a Streamlit interface with multi-room chat and retrieval debugging."
      }),
      technologies: ["LangChain", "FAISS", "Sentence Transformers", "Mistral 7B", "Ollama", "Streamlit", "Python"],
      metrics: t({ 
        id: "Latensi retrieval <0.5 detik · Waktu respons <10 detik · 18 kasus uji", 
        en: "Retrieval latency <0.5s · End-to-end response time <10s · 18 test cases" 
      }),
      image: "/ragchatbot.png",
      links: {
        github: "https://github.com/rahmadyd/chatbot_covid19_intern_procodecg",
        demo: null
      }
    },
    {
      id: 3,
      categoryKey: 'computer-vision',
      title: t({ 
        id: "Sistem Pemantauan Lansia Real-Time — YOLOv7", 
        en: "Elderly Real-Time Monitoring System — Undergraduate Thesis — Computer Vision" 
      }),
      category: "Computer Vision · Skripsi",
      role: t({ id: "AI Engineer (Skripsi)", en: "AI Engineer (Undergraduate Thesis)" }),
      duration: "2022 – 2023",
      company: "Telkom University",
      description: t({
        id: "Mengembangkan sistem deteksi lansia vs. non-lansia secara real-time menggunakan YOLOv7 dan PyTorch, dilatih pada dataset 1.200 gambar yang dianotasi dan diaugmentasi dengan Roboflow. Mengevaluasi prediksi dengan confusion matrix dan diuji langsung melalui webcam stabil pada jarak 4–6 m, pencahayaan 24–65 lux, dan sudut 0°–30°.",
        en: "Developed a real-time elderly vs. non-elderly detection system using YOLOv7 and PyTorch, trained on a 1,200-image dataset annotated and augmented using Roboflow. Evaluated elderly vs. non-elderly predictions using a confusion matrix, achieving 94% accuracy, 100% precision, 89% recall, and 94% F1-score on the validation set. Tested live via webcam; detection was stable at 4–6 m, 24–65 lux, and 0°–30°."
      }),
      technologies: ["YOLOv7", "PyTorch", "Roboflow", "Google Colab", "Python", "Confusion Matrix"],
      metrics: t({ 
        id: "Akurasi 94% · Presisi 100% · Recall 89% · F1-Score 94%", 
        en: "94% Accuracy · 100% Precision · 89% Recall · 94% F1-score" 
      }),
      image: "/yolov7dashboard.jpeg",
      links: {
        github: "https://github.com/rahmadyd/yolov7_elderly_detect_deploy",
        demo: null
      }
    },
    {
      id: 4,
      categoryKey: 'web-dev',
      title: t({
        id: "imaginez — Web Photobooth (Privacy-First)",
        en: "imaginez — Web Photobooth (Privacy-First)"
      }),
      category: "Web Development · Full-Stack",
      role: t({ id: "Full-Stack Developer", en: "Full-Stack Developer" }),
      duration: t({ id: "2026", en: "2026" }),
      company: t({ id: "Proyek Mandiri", en: "Personal Project" }),
      description: t({
        id: "Aplikasi photobooth berbasis web modern dengan arsitektur privacy-first: foto pengguna diproses sepenuhnya di sisi perangkat (HTML5 Canvas) dan tidak pernah dikirim atau disimpan di server. Mendukung pemilihan template, live camera preview dengan aspect-ratio sinkron, upload galeri tanpa kamera, retake per slot, ekspor PNG/JPG, Web Share API, serta dashboard admin (Supabase) yang di-deploy via OpenNext ke Cloudflare Workers.",
        en: "Modern privacy-first web photobooth application: user photos are processed 100% client-side (HTML5 Canvas) and never sent or stored on servers. Features template selection, synchronized live camera preview, gallery slot filling without camera, per-slot retakes, PNG/JPG export, Web Share API, and an admin dashboard (Supabase) deployed via OpenNext to Cloudflare Workers."
      }),
      technologies: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "HTML5 Canvas", "Supabase", "Cloudflare Workers", "Zod", "Vitest", "Playwright"],
      metrics: t({
        id: "Zero-Server Photo Storage · Client-side Canvas Compositing · OpenNext Cloudflare Workers",
        en: "Zero-Server Photo Storage · Client-side Canvas Compositing · OpenNext Cloudflare Workers"
      }),
      image: "/imaginez-photobooth.svg",
      links: {
        website: "https://imaginezee.xyz",
        github: null
      }
    },
    {
      id: 5,
      categoryKey: 'web-dev',
      title: t({
        id: "Website Profil Perusahaan Quorvin",
        en: "Quorvin Company Profile Website"
      }),
      category: "Web Development",
      role: t({ id: "Frontend Developer", en: "Frontend Developer" }),
      duration: t({ id: "Jan 2026 – Feb 2026", en: "Jan 2026 – Feb 2026" }),
      company: "Quorvin",
      description: t({
        id: "Mengembangkan SPA profil perusahaan 4-halaman untuk firma konsultan AI menggunakan React 19 dan Vite dengan 11 komponen UI modular dan formulir kontak asinkron via Formspree.",
        en: "Developed 4-page SPA company profile for AI consulting firm using React 19 and Vite with 11 modular UI components and async contact form via Formspree."
      }),
      technologies: ["React 19", "Vite", "React Router v7", "Tailwind CSS", "Formspree"],
      metrics: t({
        id: "11 komponen modular · Deployed on GitHub Pages",
        en: "11 modular components · Deployed on GitHub Pages"
      }),
      image: "/quorvin.png",
      links: {
        website: "https://quorvin.biz.id/",
        github: null
      }
    },
    {
      id: 6,
      categoryKey: 'data-analytics',
      title: t({
        id: "Data Analyst Intern — Kimia Farma Dashboard",
        en: "Data Analyst Intern — Kimia Farma Dashboard"
      }),
      category: "Data Analytics",
      role: t({ id: "Data Analyst Intern", en: "Data Analyst Intern" }),
      duration: t({ id: "Jan 2025 – Feb 2025", en: "Jan 2025 – Feb 2025" }),
      company: "Rakamin Academy (Project-Based Internship)",
      description: t({
        id: "Membangun dashboard interaktif untuk stakeholder di Google BigQuery + Looker Studio melalui EDA dan optimasi query SQL untuk aksesibilitas data real-time pada dataset industri farmasi.",
        en: "Built stakeholder-facing dashboards in Google BigQuery + Looker Studio through EDA and optimized SQL queries for real-time data accessibility on pharmaceutical dataset."
      }),
      technologies: ["Python", "SQL", "Google BigQuery", "Looker Studio", "Data Visualization"],
      metrics: t({
        id: "Real-time dashboard · Optimasi SQL queries",
        en: "Real-time dashboard · Optimized SQL queries"
      }),
      image: "/Dashboardkimiafarma.png",
      links: {
        github: null,
        demo: null
      }
    }
  ];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return projects;
    return projects.filter(p => p.categoryKey === selectedCategory);
  }, [projects, selectedCategory]);

  return (
    <>
      <Navbar />
      <section className="pt-[120px] pb-[60px] bg-gradient-to-b from-hero-bg to-white min-h-screen">
        <div className="max-w-[1120px] mx-auto px-8">
          {/* Header */}
          <div className="mb-[40px]">
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-[14px] text-blue font-semibold mb-6 hover:text-blue-deep transition-colors"
            >
              ← {t({ id: 'Kembali ke Beranda', en: 'Back to Home' })}
            </Link>
            <h1 className="text-[clamp(36px,5vw,56px)] leading-[1.05] mb-3">
              {t({ id: 'Semua ', en: 'All ' })}<span className="text-blue">{t({ id: 'Proyek', en: 'Projects' })}</span>
            </h1>
            <p className="text-[17px] text-ink-soft max-w-[640px]">
              {t({ 
                id: 'Koleksi sistem LLM/RAG, Computer Vision, dan backend AI terapan yang dikembangkan dari riset, evaluasi, hingga implementasi.',
                en: 'A collection of applied LLM/RAG systems, Computer Vision, and AI backend projects developed from research and evaluation to implementation.'
              })}
            </p>
          </div>

          {/* Filter Dropdown Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-border-custom">
            <div className="text-[14.5px] text-ink-soft">
              {t({
                id: `Menampilkan ${filteredProjects.length} proyek`,
                en: `Showing ${filteredProjects.length} project${filteredProjects.length !== 1 ? 's' : ''}`
              })}
            </div>
            
            <div className="flex items-center gap-3">
              <label htmlFor="category-filter" className="text-[13.5px] font-medium text-ink-soft shrink-0">
                {t({ id: 'Kategori:', en: 'Category:' })}
              </label>
              <div className="relative min-w-[220px]">
                <select
                  id="category-filter"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full appearance-none bg-white border border-border-custom text-ink text-[14px] font-medium py-2.5 pl-4 pr-10 rounded-[10px] focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/20 cursor-pointer shadow-sm transition-all duration-200 hover:border-blue-line"
                >
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-ink-faint">
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16 bg-white border border-border-custom rounded-[12px] p-8">
              <p className="text-ink-soft text-base mb-3">
                {t({
                  id: 'Tidak ada proyek yang sesuai dengan kategori ini.',
                  en: 'No projects match this category.'
                })}
              </p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="text-[13.5px] font-semibold text-blue hover:underline"
              >
                {t({ id: 'Lihat Semua Kategori', en: 'View All Categories' })}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white border border-border-custom rounded-[12px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-custom flex flex-col"
                >
                  {/* Project Image - Clickable */}
                  <div 
                    className="relative w-full h-[280px] bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden cursor-pointer"
                    onClick={() => setSelectedImage({ src: project.image, title: project.title })}
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Zoom Icon Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3 shadow-md">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="11" cy="11" r="8"></circle>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                          <line x1="11" y1="8" x2="11" y2="14"></line>
                          <line x1="8" y1="11" x2="14" y2="11"></line>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-[28px] flex flex-col flex-1">
                    {/* Category Badge */}
                    <span className="inline-flex items-center self-start font-mono text-[11px] py-1 px-2.5 rounded-md bg-[rgba(166,24,46,0.08)] text-blue border border-blue-line mb-3">
                      {project.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-[18px] font-semibold leading-[1.3] mb-2 text-ink group-hover:text-blue transition-colors">
                      {project.title}
                    </h3>

                    {/* Role & Duration */}
                    <div className="text-[13px] text-ink-soft mb-1">
                      <span className="font-medium">{project.role}</span> · {project.company}
                    </div>
                    <div className="text-[12px] text-ink-faint font-mono mb-3">
                      {project.duration}
                    </div>

                    {/* Description */}
                    <p className="text-[14.5px] text-ink-soft mb-4 line-clamp-3 leading-relaxed flex-1">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span 
                          key={idx}
                          className="text-[11.5px] px-2.5 py-1 rounded-full bg-blue-soft text-blue font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-[11.5px] px-2.5 py-1 rounded-full bg-slate-100 text-ink-faint font-medium">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Metrics */}
                    <div className="text-[12.5px] text-ink-faint mb-4 font-mono">
                      📊 {project.metrics}
                    </div>

                    {/* Links */}
                    <div className="flex gap-2 pt-4 border-t border-border-custom mt-auto">
                      {project.links.demo && (
                        <a 
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center py-2.5 px-3 text-[13px] font-semibold rounded-[8px] bg-blue text-white transition-all duration-200 hover:bg-blue-deep hover:shadow-md"
                        >
                          {t({ id: 'Lihat Demo', en: 'View Demo' })}
                        </a>
                      )}
                      {project.links.website && (
                        <a 
                          href={project.links.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center py-2.5 px-3 text-[13px] font-semibold rounded-[8px] bg-blue text-white transition-all duration-200 hover:bg-blue-deep hover:shadow-md"
                        >
                          {t({ id: 'Kunjungi Website', en: 'Visit Website' })}
                        </a>
                      )}
                      {project.links.github && (
                        <a 
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center py-2.5 px-3 text-[13px] font-semibold rounded-[8px] bg-white border border-border-custom text-ink transition-all duration-200 hover:border-blue hover:text-blue hover:bg-blue-soft"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          {/* Glassmorphism Background */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-md animate-fadeIn"></div>
          
          {/* Modal Content */}
          <div 
            className="relative max-w-5xl w-full bg-white rounded-[20px] shadow-2xl overflow-hidden animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2.5 transition-all duration-200 hover:scale-110 hover:rotate-90 shadow-lg group"
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-ink-soft group-hover:text-blue">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Image */}
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain bg-gradient-to-br from-slate-100 to-slate-200"
            />

            {/* Title Bar */}
            <div className="bg-gradient-to-t from-black/70 via-black/40 to-transparent absolute bottom-0 left-0 right-0 p-6 pt-12">
              <h3 className="text-white text-lg font-semibold drop-shadow-lg">{selectedImage.title}</h3>
              <p className="text-white/80 text-sm mt-1">{t({ id: 'Klik di mana saja untuk menutup', en: 'Click anywhere to close' })}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectDetailPage;
