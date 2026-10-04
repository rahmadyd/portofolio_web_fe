import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../components/Navbar';

const ProjectDetailPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      id: 1,
      title: "InsightOps — AI-Powered Telecom Log Analytics Platform",
      category: "AI/LLM · Frontend",
      role: "AI Engineer & Frontend Developer",
      duration: "Nov 2025 - Present",
      company: "Quorvin",
      description: "Built AI root-cause analysis service with FastAPI + Groq that processes multi-system telco logs into structured JSON with 5-page Next.js dashboard.",
      technologies: ["Next.js", "TypeScript", "FastAPI", "Groq API", "Shadcn UI", "Recharts", "Framer Motion"],
      metrics: "17+ reusable components · 8 REST endpoints",
      image: "/insightops.png",
      links: {
        demo: "https://canva.link/1chtan3ara98cgs",
        github: null
      }
    },
    {
      id: 2,
      title: "RAG Chatbot COVID-19 Indonesia",
      category: "AI/LLM · RAG",
      role: "AI Engineer (Internship Project)",
      duration: "Aug 2025 - Nov 2025",
      company: "ProcodeCG",
      description: "Built RAG chatbot pipeline with LangChain, FAISS, and Sentence Transformers achieving <0.5s semantic search latency with 4-tier fallback mechanism.",
      technologies: ["LangChain", "FAISS", "Sentence Transformers", "Mistral 7B", "Streamlit", "Ollama"],
      metrics: "8.5/10 quality score · <10s response time",
      image: "/ragchatbot.png",
      links: {
        github: "https://github.com/rahmadyd/chatbot_covid19_intern_procodecg",
        demo: null
      }
    },
    {
      id: 3,
      title: "Website Profil Perusahaan Quorvin",
      category: "Web Development",
      role: "Frontend Developer",
      duration: "Jan 2026 - Feb 2026",
      company: "Quorvin",
      description: "Developed 4-page SPA company profile for AI consulting firm using React 19 and Vite with 11 modular UI components and async contact form via Formspree.",
      technologies: ["React 19", "Vite", "React Router v7", "Tailwind CSS", "Formspree"],
      metrics: "11 modular components · Deployed on GitHub Pages",
      image: "/quorvin.png",
      links: {
        website: "https://quorvin.biz.id/",
        github: null
      }
    },
    {
      id: 4,
      title: "Elderly Real-Time Monitoring System — YOLOv7",
      category: "Computer Vision · AI",
      role: "AI Engineer (Capstone Project)",
      duration: "2022 - 2023",
      company: "Telkom University",
      description: "Reached 94% detection accuracy by training and optimizing YOLOv7 (PyTorch) through systematic A/B testing with real-time webcam inference using edge-computing optimization.",
      technologies: ["YOLOv7", "PyTorch", "React", "FastAPI", "ONNX", "Tailwind CSS"],
      metrics: "94% accuracy · Real-time detection",
      image: "/yolov7dashboard.jpeg",
      links: {
        github: "https://github.com/rahmadyd/yolov7_elderly_detect_deploy",
        demo: null
      }
    },
    {
      id: 5,
      title: "Data Analyst Intern — Kimia Farma Dashboard",
      category: "Data Analytics",
      role: "Data Analyst Intern",
      duration: "Jan 2025 - Feb 2025",
      company: "Rakamin Academy (Project-Based Internship)",
      description: "Built stakeholder-facing dashboards in Google BigQuery + Looker Studio through EDA and optimized SQL queries for real-time data accessibility on pharmaceutical dataset.",
      technologies: ["Python", "SQL", "Google BigQuery", "Looker Studio", "Data Visualization"],
      metrics: "Real-time dashboard · Optimized SQL queries",
      image: "/Dashboardkimiafarma.png",
      links: {
        // Dashboard is private (company data) - GitHub repo with documentation coming soon
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
              ← Back to Home
            </Link>
            <h1 className="text-[clamp(36px,5vw,56px)] leading-[1.05] mb-3">
              All <span className="text-blue">Projects</span>
            </h1>
            <p className="text-[17px] text-ink-soft max-w-[640px]">
              A collection of production-grade AI/ML systems, web applications, and data analytics projects I've shipped — from concept to deployment.
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
                        View Demo
                      </a>
                    )}
                    {project.links.website && (
                      <a 
                        href={project.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2.5 px-3 text-[13px] font-semibold rounded-[8px] bg-blue text-white transition-all duration-200 hover:bg-blue-deep hover:shadow-md"
                      >
                        Visit Website
                      </a>
                    )}
                    {project.links.dashboard && (
                      <a 
                        href={project.links.dashboard}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2.5 px-3 text-[13px] font-semibold rounded-[8px] bg-blue text-white transition-all duration-200 hover:bg-blue-deep hover:shadow-md"
                      >
                        View Dashboard
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
              <p className="text-white/80 text-sm mt-1">Click anywhere to close</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectDetailPage;
