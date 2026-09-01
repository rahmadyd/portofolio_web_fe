import { useLanguage } from '../contexts/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      category: t({ id: 'Tugas Akhir · Computer Vision', en: 'Capstone Project · Computer Vision' }),
      title: t({ 
        id: 'Sistem Monitoring Lansia Real-Time', 
        en: 'Elderly Real-Time Monitoring System' 
      }),
      date: '2022 – 2023',
      tech: 'YOLOv7 · PyTorch · Computer Vision · Real-Time Detection',
      points: t({
        id: [
          'Mencapai akurasi deteksi 94% dengan melatih dan mengoptimalkan model YOLOv7 (PyTorch) melalui systematic A/B testing di berbagai arsitektur, hyperparameter, dan strategi augmentasi.',
          'Memungkinkan inferensi real-time low-latency pada input webcam live dengan menerapkan optimasi edge-computing untuk deteksi keberadaan dan aktivitas lansia.'
        ],
        en: [
          'Reached 94% detection accuracy by training and optimizing a YOLOv7 (PyTorch) model through systematic A/B testing across architectures, hyperparameters, and augmentation strategies.',
          'Enabled low-latency real-time inference on live webcam input by applying edge-computing optimization for elderly presence and activity detection.'
        ]
      })
    },
    {
      category: t({ 
        id: 'Project-Based Internship · Data Analytics', 
        en: 'Project-Based Internship · Data Analytics' 
      }),
      title: t({ 
        id: 'Data Analyst Intern — Rakamin Academy, Dataset Kimia Farma', 
        en: 'Data Analyst Intern — Rakamin Academy, Kimia Farma dataset' 
      }),
      date: t({ id: 'Jan 2025 – Feb 2025', en: 'Jan 2025 – Feb 2025' }),
      tech: 'Python · SQL · Google BigQuery · Looker Studio · EDA · Data Visualization',
      points: t({
        id: [
          'Mengungkap insight bisnis kunci untuk pengambilan keputusan stakeholder melalui EDA (analisis statistik, profiling data, eksplorasi visual) pada dataset industri terstruktur.',
          'Membangun dashboard untuk stakeholder di Google BigQuery + Looker Studio, mengoptimalkan query SQL untuk aksesibilitas data real-time.'
        ],
        en: [
          'Surfaced key business insights for stakeholder decision-making through EDA (statistical analysis, data profiling, visual exploration) on a structured industry dataset.',
          'Built stakeholder-facing dashboards in Google BigQuery + Looker Studio, optimizing SQL queries for real-time data accessibility.'
        ]
      })
    }
  ];

  return (
    <section className="py-[110px] bg-white-soft border-y border-border-custom" id="projects">
      <div className="max-w-[1120px] mx-auto px-8">
        <div className="mb-[44px] max-w-[600px] reveal">
          <span className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.04em] text-blue bg-[rgba(166,24,46,0.08)] border border-blue-line py-[6px] px-[13px] rounded-full mb-[18px]">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow shrink-0"></span>
            {t({ id: 'Proyek', en: 'Projects' })}
          </span>
          <h2 className="text-[clamp(26px,3.2vw,34px)]">
            {t({ id: 'Proyek & Penelitian', en: 'Projects & Research' })}
          </h2>
          <p className="text-ink-soft mt-2.5 text-[15.5px]">
            {t({ 
              id: 'Tugas akhir dan project-based internship yang memperdalam keahlian AI/ML dan data analytics.',
              en: 'Capstone and project-based internships that deepen AI/ML and data analytics expertise.'
            })}
          </p>
        </div>
        <div className="space-y-[20px]">
          {projects.map((project, index) => (
            <div key={index} className="bg-white border border-border-custom rounded-custom p-[28px] transition-all duration-250 hover:-translate-y-1 hover:shadow-custom reveal">
              <div className="mb-3.5">
                <span className="self-start font-mono text-[11px] py-1 px-2.5 rounded-md bg-[rgba(166,24,46,0.08)] text-blue border border-blue-line">
                  {project.category}
                </span>
              </div>
              <h4 className="text-[17px] leading-[1.3] mb-2">{project.title}</h4>
              <span className="text-[12.5px] text-ink-faint font-mono block mb-2">{project.date}</span>
              <div className="text-[11.5px] text-ink-faint font-mono mb-4 opacity-80">{project.tech}</div>
              <ul className="space-y-2.5">
                {project.points.map((point, idx) => (
                  <li key={idx} className="text-[14.5px] text-ink-soft flex gap-2.5 items-start">
                    <span className="text-blue mt-1 shrink-0">•</span>
                    <span className="flex-1">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
