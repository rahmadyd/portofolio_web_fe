import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import { useLanguage } from '../contexts/LanguageContext';

const ProjectDetailPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: t({ 
        id: "InsightOps — Produk Analitik Log Telekomunikasi Milik Perusahaan", 
        en: "InsightOps — Proprietary Telecom Log Analytics Product" 
      }),
      category: "AI/LLM · Backend & Systems",
      role: t({ id: "AI Engineer (Freelance)", en: "AI Engineer (Freelance)" }),
      duration: "Nov 2025 – Okt 2026",
      company: "Quorvin (Jarak Jauh)",
      description: t({
        id: "Membangun layanan proof-of-concept analisis akar masalah berbasis AI (FastAPI + Groq, gpt-oss-120b) yang mengubah log telekomunikasi lintas sistem menjadi JSON terstruktur berisi potensi akar masalah, ringkasan, dan rekomendasi yang diprioritaskan. Memodelkan 3 kategori keluhan pada 8 sistem backend dengan alur multi-hop, 8 endpoint REST API, abstraksi LogDataSource Python ABC, dan deployment Railway yang terintegrasi ke dashboard Next.js 5 halaman.",
        en: "Built an AI root-cause analysis proof-of-concept service (FastAPI + Groq, gpt-oss-120b) converting multi-system telecom logs into structured JSON with root causes, summaries, and prioritized recommendations. Modeled 3 complaint categories across 8 backend systems with multi-hop flows, 8 REST endpoints, Python ABC LogDataSource abstraction, and Railway deployment integrated into a 5-page Next.js dashboard."
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
      title: t({ 
        id: "Chatbot RAG COVID-19 Berbahasa Indonesia", 
        en: "Indonesian COVID-19 RAG Chatbot" 
      }),
      category: "AI/LLM · RAG Systems",
      role: t({ id: "AI Engineer (Proyek Magang)", en: "AI Engineer (Internship Project)" }),
      duration: "Agu 2025 – Nov 2025",
      company: "ProCodeCG",
      description: t({
        id: "Membangun chatbot RAG COVID-19 berbahasa Indonesia menggunakan LangChain, FAISS, dan Sentence Transformers (multilingual MPNet), dengan model Mistral 7B-Instruct lokal via Ollama. Merancang fallback 4 tingkat dengan timeout, filter input kata kunci, pemeriksaan keamanan keluaran, dan UI Streamlit dengan chat multi-ruang dan debug retrieval.",
        en: "Built an Indonesian COVID-19 RAG chatbot using LangChain, FAISS, and Sentence Transformers (multilingual MPNet) with local Mistral 7B-Instruct via Ollama. Designed a 4-tier fallback with timeouts, keyword input filters, output safety checks, and a Streamlit UI with multi-room chat and retrieval debugging."
      }),
      technologies: ["LangChain", "FAISS", "Sentence Transformers", "Mistral 7B", "Ollama", "Streamlit", "Python"],
      metrics: t({ 
        id: "Latensi retrieval <0.5 detik · Waktu respons <10 detik · 18 kasus uji", 
        en: "Retrieval latency <0.5s · Response time <10s · 18 test cases" 
      }),
      image: "/ragchatbot.png",
      links: {
        github: "https://github.com/rahmadyd/chatbot_covid19_intern_procodecg",
        demo: null
      }
    },
    {
      id: 3,
      title: t({ 
        id: "Sistem Pemantauan Lansia Real-Time — YOLOv7", 
        en: "Elderly Real-Time Monitoring System — YOLOv7" 
      }),
      category: "Computer Vision · Skripsi",
      role: t({ id: "AI Engineer (Skripsi)", en: "AI Engineer (Thesis)" }),
      duration: "2022 – 2023",
      company: "Telkom University",
      description: t({
        id: "Mengembangkan sistem deteksi lansia vs. non-lansia secara real-time menggunakan YOLOv7 dan PyTorch, dilatih pada dataset 1.200 gambar yang dianotasi dan diaugmentasi dengan Roboflow. Mengevaluasi prediksi dengan confusion matrix dan diuji langsung melalui webcam stabil pada jarak 4–6 m, pencahayaan 24–65 lux, dan sudut 0°–30°.",
        en: "Developed a real-time elderly vs. non-elderly detection system using YOLOv7 and PyTorch, trained on a dataset of 1,200 images annotated and augmented with Roboflow. Evaluated with a confusion matrix and tested live via webcam stably at 4–6m distance, 24–65 lux lighting, and 0°–30° angles."
      }),
      technologies: ["YOLOv7", "PyTorch", "Roboflow", "Google Colab", "Python", "Confusion Matrix"],
      metrics: t({ 
        id: "Akurasi 94% · Presisi 100% · Recall 89% · F1-Score 94%", 
        en: "94% Accuracy · 100% Precision · 89% Recall · 94% F1-Score" 
      }),
      image: "/yolov7dashboard.jpeg",
      links: {
        github: "https://github.com/rahmadyd/yolov7_elderly_detect_deploy",
        demo: null
      }
    },
    {
      id: 4,
      title: t({ 
        id: "Mentoring Deteksi Kualitas Beras — YOLOv8 & SAHI", 
        en: "Rice Quality Detection Mentoring — YOLOv8 & SAHI" 
      }),
      category: "Computer Vision · Mentoring",
      role: t({ id: "Mentor AI (Freelance)", en: "AI Mentor (Freelance)" }),
      duration: "Jan 2024 – Des 2024",
      company: t({ id: "Jarak Jauh", en: "Remote" }),
      description: t({
        id: "Membimbing mahasiswa tingkat akhir dalam mengembangkan sistem deteksi kualitas beras menggunakan YOLOv8 dan SAHI (Slicing Aided Hyper Inference) untuk objek berukuran kecil, serta memandu alur anotasi dan augmentasi dataset dengan Roboflow.",
        en: "Mentored final-year students in developing a rice quality detection system using YOLOv8 and SAHI (Slicing Aided Hyper Inference) for small-scale objects, while guiding dataset annotation and augmentation workflows with Roboflow."
      }),
      technologies: ["YOLOv8", "SAHI", "Roboflow", "PyTorch", "Python", "Computer Vision"],
      metrics: t({ 
        id: "Mentoring Tugas Akhir · Small Object Detection (SAHI)", 
        en: "Capstone Mentoring · Small Object Detection (SAHI)" 
      }),
      image: "/yolov7dashboard.jpeg",
      links: {
        github: null,
        demo: null
      }
    }
  ];

  return (
    <>
      <Navbar />
      <section className="pt-[120px] pb-[60px] bg-gradient-to-b from-hero-bg to-white min-h-screen">
        <div className="max-w-[1120px] mx-auto px-8">
          {/* Header */}
          <div className="mb-[60px]">
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

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white border border-border-custom rounded-[12px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-custom"
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
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
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
                <div className="p-[28px]">
                  {/* Category Badge */}
                  <span className="inline-flex items-center font-mono text-[11px] py-1 px-2.5 rounded-md bg-[rgba(166,24,46,0.08)] text-blue border border-blue-line mb-3">
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
                  <p className="text-[14.5px] text-ink-soft mb-4 line-clamp-3 leading-relaxed">
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
                  <div className="flex gap-2 pt-4 border-t border-border-custom">
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
