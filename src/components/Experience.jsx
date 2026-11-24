import { useLanguage } from '../contexts/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      company: 'Quorvin',
      role: t({ id: 'AI Engineer (Freelance)', en: 'AI Engineer (Freelance)' }),
      location: t({ id: 'Jarak Jauh', en: 'Remote' }),
      period: t({ id: 'Nov 2025 – Okt 2026', en: 'Nov 2025 – Oct 2026' }),
      projects: [
        {
          title: t({ 
            id: 'InsightOps — Produk Analitik Log Telekomunikasi Milik Perusahaan', 
            en: 'InsightOps — Company-Owned Telecom Log Analytics Product' 
          }),
          tech: 'FastAPI · Groq · gpt-oss-120b · Python · Pydantic · Railway · Next.js',
          achievements: t({
            id: [
              'Membangun layanan proof-of-concept analisis akar masalah berbasis AI (FastAPI + Groq, gpt-oss-120b) yang mengubah log telekomunikasi lintas sistem menjadi JSON terstruktur berisi potensi akar masalah, ringkasan, dan rekomendasi yang diprioritaskan.',
              'Memodelkan logika analisis akar masalah untuk 3 kategori keluhan pada 8 sistem backend, dengan menyisipkan alur log multi-hop tiap kategori ke dalam prompt dan hanya mengirim log yang gagal, serta batasan prompt untuk meminimalkan keluaran tanpa dasar.',
              'Membangun 8 endpoint REST API (FastAPI, Pydantic) untuk pengambilan log, analisis AI, CRUD tiket, dan statistik dashboard, serta merancang abstraksi LogDataSource berbasis Python ABC (JSON lokal sudah diimplementasikan; Splunk direncanakan).',
              'Men-deploy backend di Railway (data sampel yang dianonimkan) sebagai proof of concept dan mengintegrasikannya ke dashboard Next.js 5 halaman milik InsightOps, produk yang ditujukan bagi calon klien.'
            ],
            en: [
              'Built a proof-of-concept AI root-cause-analysis service (FastAPI + Groq, gpt-oss-120b) that turns multi-system telco logs into structured JSON with potential root causes, a summary, and prioritized recommendations.',
              'Modeled root-cause-analysis logic for 3 complaint categories across 8 backend systems, injecting the multi-hop log flow of each category into the prompt and sending only failed logs, with prompt constraints to limit unsupported outputs.',
              'Built 8 REST API endpoints (FastAPI, Pydantic) for log retrieval, AI analysis, ticket CRUD, and dashboard statistics, and designed a Python ABC-based LogDataSource abstraction (local JSON implemented; Splunk planned).',
              'Deployed the backend on Railway (anonymized sample data) as a proof of concept and integrated it into the 5-page Next.js dashboard of InsightOps, a product intended for prospective clients.'
            ]
          })
        }
      ]
    },
    {
      company: 'ProCodeCG',
      role: t({ id: 'AI Engineer (Proyek Magang)', en: 'AI Engineer (Internship Project)' }),
      location: '',
      period: t({ id: 'Agu 2025 – Nov 2025', en: 'Aug 2025 – Nov 2025' }),
      projects: [
        {
          title: t({ 
            id: 'Chatbot RAG COVID-19 Berbahasa Indonesia', 
            en: 'Indonesian-Language COVID-19 RAG Chatbot' 
          }),
          tech: 'LangChain · FAISS · Sentence Transformers (multilingual MPNet) · Mistral 7B · Ollama · Streamlit · Python',
          achievements: t({
            id: [
              'Membangun chatbot RAG COVID-19 berbahasa Indonesia menggunakan LangChain, FAISS, dan Sentence Transformers (multilingual MPNet), dengan model Mistral 7B-Instruct lokal yang dijalankan melalui Ollama.',
              'Merancang fallback 4 tingkat (jawaban preset untuk pertanyaan dasar, jawaban berbasis templat, generasi LLM, fallback akhir) dengan timeout, ditambah filter input berbasis kata kunci dan pemeriksaan keamanan keluaran agar bot tetap sesuai topik.',
              'Dievaluasi dengan 18 kasus uji yang dirancang manual (16 lolos penuh, 1 lolos sebagian, 1 gagal); latensi retrieval di bawah 0,5 detik dan waktu respons end-to-end di bawah 10 detik.',
              'Membangun antarmuka Streamlit dengan chat multi-ruang, penyimpanan riwayat, dan halaman debug retrieval.'
            ],
            en: [
              'Built an Indonesian-language COVID-19 RAG chatbot using LangChain, FAISS, and Sentence Transformers (multilingual MPNet), with a local Mistral 7B-Instruct model served via Ollama.',
              'Designed a 4-tier fallback (preset answers for basic questions, templated answers, LLM generation, final fallback) with timeouts, plus a keyword-based input filter and an output safety check to keep the bot on-topic.',
              'Evaluated with 18 manually designed test cases (16 full passes, 1 partial pass, 1 failure); observed retrieval latency below 0.5s and end-to-end response time below 10s.',
              'Built a Streamlit interface with multi-room chat, history persistence, and a retrieval debug page.'
            ]
          })
        }
      ]
    },
    {
      company: t({ id: 'Freelance', en: 'Freelance' }),
      role: t({ id: 'Mentor AI', en: 'Freelance AI Mentor' }),
      location: t({ id: 'Jarak Jauh', en: 'Remote' }),
      period: t({ id: 'Jan 2024 – Des 2024', en: 'Jan 2024 – Dec 2024' }),
      projects: [
        {
          title: t({ 
            id: 'Mentoring Computer Vision — Deteksi Kualitas Beras', 
            en: 'Rice-Quality Detection System Mentoring' 
          }),
          tech: 'YOLOv8 · SAHI · Roboflow · PyTorch · Computer Vision',
          achievements: t({
            id: [
              'Membimbing mahasiswa tingkat akhir dalam mengembangkan sistem deteksi kualitas beras menggunakan YOLOv8 dan SAHI.',
              'Memandu alur anotasi dan augmentasi dataset menggunakan Roboflow.'
            ],
            en: [
              'Mentored final-year students in developing a rice-quality detection system using YOLOv8 and SAHI.',
              'Guided dataset annotation and augmentation workflows using Roboflow.'
            ]
          })
        }
      ]
    }
  ];

  return (
    <section className="py-[110px]" id="experience">
      <div className="max-w-[1120px] mx-auto px-8">
        <div className="mb-[44px] max-w-[600px] reveal">
          <span className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.04em] text-blue bg-[rgba(166,24,46,0.08)] border border-blue-line py-[6px] px-[13px] rounded-full mb-[18px]">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow shrink-0"></span>
            {t({ id: 'Pengalaman', en: 'Experience' })}
          </span>
          <h2 className="text-[clamp(26px,3.2vw,34px)]">
            {t({ id: 'Pengalaman Kerja', en: 'Work Experience' })}
          </h2>
        </div>
        
        <div className="reveal">
          {experiences.map((exp, idx) => (
            <div key={idx}>
              <div className="flex flex-col md:flex-row justify-between items-start flex-wrap gap-4 mb-10 pb-6 border-b border-border-custom">
                <div>
                  <h3 className="text-[22px] font-heading font-semibold text-ink">{exp.company}</h3>
                  <div className="text-blue font-semibold text-[14.5px] mt-1">
                    {exp.role}{exp.location && ` · ${exp.location}`}
                  </div>
                </div>
                <span className="font-mono text-[12.5px] text-ink-faint bg-white-soft border border-border-custom py-[6px] px-3 rounded-full mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>

              {exp.projects.map((project, pIdx) => (
                <div key={pIdx} className="border border-border-custom rounded-custom p-[28px] mb-5 relative transition-all duration-250 hover:shadow-custom hover:border-blue-line group">
                  {exp.projects.length > 1 && (
                    <span className="font-mono text-[12px] text-yellow-deep mb-2 block">
                      {t({ id: 'Proyek', en: 'Project' })} {String(pIdx + 1).padStart(2, '0')}
                    </span>
                  )}
                  <h4 className="text-[18px] mb-1.5">{project.title}</h4>
                  <div className="font-mono text-[12px] text-ink-faint mb-4">{project.tech}</div>
                  <ul className="list-none flex flex-col gap-2.5">
                    {project.achievements.map((achievement, aIdx) => (
                      <li key={aIdx} className="text-[14.5px] text-ink-soft pl-[18px] relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-blue">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
