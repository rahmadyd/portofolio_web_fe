import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ProjectDetailPage = () => {
  const projects = [
    {
      id: 1,
      title: "InsightOps — Penganalisis Log Telekomunikasi Berbasis AI",
      category: "Frontend Developer · Quorvin",
      date: "Jan 2026 – Feb 2026",
      image: "/insightops.png",
      description: "Membangun 5 halaman dasbor operasional telekomunikasi dan 17+ komponen UI reusable menggunakan Next.js App Router dan Shadcn UI. Mengintegrasikan antarmuka dengan 7 endpoint REST API (FastAPI) untuk pengelolaan tiket CRUD dan visualisasi analisis akar masalah berbasis AI.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Recharts", "Framer Motion", "FastAPI"],
      links: {
        demo: "https://canva.link/1chtan3ara98cgs"
      }
    },
    {
      id: 2,
      title: "Website Profil Perusahaan Quorvin",
      category: "Frontend Developer · Quorvin",
      date: "Jan 2026 – Feb 2026",
      image: "/quorvin.png",
      description: "Mengembangkan website profil perusahaan berbasis Single Page Application (SPA) 4 halaman untuk konsultan AI dan Pengembangan Web menggunakan React 19 dan Vite. Merancang 11 komponen UI modular dengan sistem desain berbasis CSS Variables dan penanganan formulir kontak asinkron via Formspree.",
      technologies: ["React 19", "Vite", "React Router v7", "Tailwind CSS", "Formspree", "GitHub Pages"],
      links: {
        website: "https://quorvin.biz.id/"
      }
    },
    {
      id: 3,
      title: "Sistem Monitoring Lansia dengan YOLOv7 & Webcam",
      category: "Tugas Akhir · Computer Vision",
      date: "2022 – 2023",
      image: "/yolov7dashboard.jpeg",
      description: "Membangun dasbor pemantauan dinamis menggunakan React (Vite), Tailwind CSS, dan FastAPI untuk visualisasi deteksi secara real-time. Mengonversi model deep learning ke format ONNX dan mengimplementasikan arsitektur decoupled canvas rendering untuk meminimalkan beban memori sisi klien serta mengoptimalkan penggunaan CPU backend.",
      technologies: ["React", "Vite", "Tailwind CSS", "FastAPI", "YOLOv7", "ONNX"],
      links: {
        github: "https://github.com/rahmadyd/yolov7_elderly_detect_deploy"
      }
    },
    {
      id: 4,
      title: "Innovillage 2021 — Pariwisata Berbasis Web Pantai Panjang",
      category: "Program Nasional Telkom Indonesia",
      date: "Okt 2021 – Des 2021",
      image: "/uipantaipanjang.jpeg",
      description: "Mengkonceptualisasikan antarmuka pengguna (high-fidelity UI) menggunakan Figma sebagai acuan visual utama bagi tim pengembang perangkat lunak. Menerjemahkan kebutuhan operasional lapangan yang kompleks ke dalam tata letak aplikasi web yang informatif dan mudah diakses pengguna.",
      technologies: ["Figma", "UI/UX Design", "Web Design", "Canva"],
      links: {
        figma: "https://www.figma.com"
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
              ← Kembali ke Beranda
            </Link>
            <h1 className="text-[clamp(36px,5vw,56px)] leading-[1.05] mb-3">
              Semua <span className="text-blue">Proyek</span>
            </h1>
            <p className="text-[17px] text-ink-soft max-w-[640px]">
              Koleksi proyek yang telah saya kerjakan, dari pengalaman profesional hingga tugas akhir dan program nasional.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="group bg-white border border-border-custom rounded-[12px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-custom"
              >
                {/* Project Image */}
                <div className="relative w-full h-[300px] bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden">
                  {project.image.includes('placeholder') ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl text-slate-400 mb-2">📸</div>
                        <p className="text-slate-500 text-sm">Gambar Proyek</p>
                      </div>
                    </div>
                  ) : (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Project Content */}
                <div className="p-[28px]">
                  <span className="inline-flex items-center font-mono text-[11px] py-1 px-2.5 rounded-md bg-[rgba(166,24,46,0.08)] text-blue border border-blue-line mb-3">
                    {project.category}
                  </span>

                  <h3 className="text-[18px] font-semibold leading-[1.3] mb-2 text-ink group-hover:text-blue transition-colors">
                    {project.title}
                  </h3>

                  <span className="text-[12.5px] text-ink-faint font-mono block mb-3">
                    {project.date}
                  </span>

                  <p className="text-[14.5px] text-ink-soft mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span 
                        key={idx}
                        className="text-[12px] px-2.5 py-1 rounded-full bg-blue-soft text-blue font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[12px] px-2.5 py-1 rounded-full bg-slate-100 text-ink-faint font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2 pt-4 border-t border-border-custom">
                    {project.links.github && (
                      <a 
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2 px-3 text-[13px] font-semibold rounded-[8px] bg-white border border-border-custom text-ink transition-all duration-200 hover:border-blue hover:text-blue hover:bg-blue-soft"
                      >
                        GitHub
                      </a>
                    )}
                    {project.links.demo && (
                      <a 
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2 px-3 text-[13px] font-semibold rounded-[8px] bg-white border border-border-custom text-ink transition-all duration-200 hover:border-blue hover:text-blue hover:bg-blue-soft"
                      >
                        Demo
                      </a>
                    )}
                    {project.links.website && (
                      <a 
                        href={project.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2 px-3 text-[13px] font-semibold rounded-[8px] bg-white border border-border-custom text-ink transition-all duration-200 hover:border-blue hover:text-blue hover:bg-blue-soft"
                      >
                        Website
                      </a>
                    )}
                    {project.links.figma && (
                      <a 
                        href={project.links.figma}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2 px-3 text-[13px] font-semibold rounded-[8px] bg-white border border-border-custom text-ink transition-all duration-200 hover:border-blue hover:text-blue hover:bg-blue-soft"
                      >
                        Figma
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetailPage;
