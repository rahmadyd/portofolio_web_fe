import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ProjectDetailPage = () => {
  const projects = [
    {
      id: 1,
      title: "InsightOps — AI-Powered Telecom Log Analytics Platform",
      image: "/insightops.png",
      link: "https://canva.link/1chtan3ara98cgs"
    },
    {
      id: 2,
      title: "RAG Chatbot COVID-19 Indonesia",
      image: "/ragchatbot.png",
      link: "https://github.com/rahmadyd/chatbot_covid19_intern_procodecg"
    },
    {
      id: 3,
      title: "Website Profil Perusahaan Quorvin",
      image: "/quorvin.png",
      link: "https://quorvin.biz.id/"
    },
    {
      id: 4,
      title: "Elderly Real-Time Monitoring System — YOLOv7",
      image: "/yolov7dashboard.jpeg",
      link: "https://github.com/rahmadyd/yolov7_elderly_detect_deploy"
    },
    {
      id: 5,
      title: "Data Analyst Intern — Kimia Farma Dashboard",
      image: "/Dashboardkimiafarma.png",
      link: "#"
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
              Koleksi proyek yang telah saya kerjakan.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white border border-border-custom rounded-[12px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-custom"
              >
                {/* Project Image */}
                <div className="relative w-full h-[240px] bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden">
                  {project.image.includes('placeholder') ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl text-slate-400 mb-2">🤖</div>
                        <p className="text-slate-500 text-sm font-medium">Coming Soon</p>
                      </div>
                    </div>
                  ) : (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </div>

                {/* Project Title */}
                <div className="p-[20px]">
                  <h3 className="text-[16px] font-semibold leading-[1.3] text-ink group-hover:text-blue transition-colors">
                    {project.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetailPage;
