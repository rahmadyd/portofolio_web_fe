import { useLanguage } from '../contexts/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      company: 'Quorvin',
      role: t({ id: 'AI Engineer', en: 'AI Engineer' }),
      location: 'Remote',
      period: t({ id: 'Nov 2025 – Sekarang', en: 'Nov 2025 – Present' }),
      projects: [
        {
          title: t({ 
            id: 'InsightOps — Platform Analisis Log Telekomunikasi Berbasis AI', 
            en: 'InsightOps — AI-Powered Telecom Log Analytics Platform' 
          }),
          tech: 'FastAPI · Groq · gpt-oss-120b · Next.js · TypeScript · Shadcn UI · Recharts',
          achievements: t({
            id: [
              'Merancang dan membangun layanan AI root-cause-analysis (FastAPI + Groq, gpt-oss-120b) yang mengubah log telco multi-sistem mentah menjadi output JSON terstruktur — root cause, summary, dan rekomendasi yang diprioritaskan untuk dashboard operator.',
              'Mengurangi risiko halusinasi dengan engineering strict prompt constraints (melarang kode error yang diciptakan, membatasi model hanya pada field yang ada di log) dan menjalankan inference pada temperature=0 untuk output yang deterministik dan auditable.',
              'Memodelkan logika domain telco di 3 kategori complaint dan 8 backend system (CHN, ESB, PAY, DOM, PGW, IGW, RLS, SGW), mapping setiap tipe complaint ke multi-hop log flow-nya untuk memandu deteksi root-cause.',
              'Mendesain abstraksi log-data-source yang pluggable (Python ABC) yang memisahkan AI analyzer dari storage layer, memungkinkan migrasi dari local JSON ke production log platform tanpa menyentuh business logic.',
              'Membangun 8 REST API endpoint (FastAPI, Pydantic) untuk log retrieval, AI analysis, ticket CRUD, dan dashboard statistics, kemudian mengkonsumsinya di 5-halaman Next.js dashboard dengan 17+ reusable UI component (Shadcn UI, Recharts, Framer Motion).'
            ],
            en: [
              'Designed and built an AI root-cause-analysis service (FastAPI + Groq, gpt-oss-120b) that turns raw multi-system telco logs into structured JSON output — root cause, summary, and prioritized recommendations for operator dashboards.',
              'Reduced hallucination risk by engineering strict prompt constraints (forbidding invented error codes, restricting the model to fields present in the logs) and running inference at temperature=0 for deterministic, auditable output.',
              'Modeled telco domain logic across 3 complaint categories and 8 backend systems (CHN, ESB, PAY, DOM, PGW, IGW, RLS, SGW), mapping each complaint type to its multi-hop log flow to guide root-cause detection.',
              'Designed a pluggable log-data-source abstraction (Python ABC) that decouples the AI analyzer from the storage layer, enabling a planned migration from local JSON to a production log platform without touching business logic.',
              'Built 8 REST API endpoints (FastAPI, Pydantic) for log retrieval, AI analysis, ticket CRUD, and dashboard statistics, then consumed them in a 5-page Next.js dashboard with 17+ reusable UI components (Shadcn UI, Recharts, Framer Motion).'
            ]
          })
        }
      ]
    },
    {
      company: 'ProcodeCG',
      role: t({ id: 'AI Engineer (Internship Project)', en: 'AI Engineer (Internship Project)' }),
      location: '',
      period: t({ id: 'Agu 2025 – Nov 2025', en: 'Aug 2025 – Nov 2025' }),
      projects: [
        {
          title: t({ 
            id: 'Chatbot COVID-19 Berbasis RAG & LLM Lokal', 
            en: 'COVID-19 RAG Chatbot with Local LLM' 
          }),
          tech: 'LangChain · FAISS · Sentence Transformers · Ollama · Mistral 7B · Streamlit · Python',
          achievements: t({
            id: [
              'Memotong latency semantic search ke <0.5 detik dengan membangun pipeline chatbot RAG (LangChain, FAISS, Sentence Transformers) untuk asisten COVID-19 bilingual bahasa Indonesia.',
              'Menghilangkan silent failure saat error/timeout dengan mendesain mekanisme fallback 4-tier yang menjamin respons di setiap skenario, dan menjaga bot tetap on-domain dengan sistem guardrail input/output dua lapis.',
              'Mengurangi halusinasi dan meningkatkan akurasi faktual dengan mengintegrasikan local LLM (Mistral 7B-Instruct via Ollama) dengan context throttling.',
              'Mencapai skor kualitas 8.5/10 di 18 metrik evaluasi dengan waktu respons end-to-end <10 detik; mengirimkan interface Streamlit dengan multi-room chat, history persistence, dan retrieval debugging.'
            ],
            en: [
              'Cut semantic search latency to under 0.5s by building a RAG chatbot pipeline (LangChain, FAISS, Sentence Transformers) for a bilingual Indonesian-language COVID-19 assistant.',
              'Eliminated silent failures during errors/timeouts by designing a 4-tier fallback mechanism guaranteeing a response in every scenario, and kept the bot on-domain with a two-layer input/output guardrail system.',
              'Reduced hallucination and improved factual accuracy by integrating a local LLM (Mistral 7B-Instruct via Ollama) with context throttling.',
              'Achieved an 8.5/10 quality score across 18 evaluation metrics with <10s end-to-end response time; shipped a Streamlit interface with multi-room chat, history persistence, and retrieval debugging.'
            ]
          })
        }
      ]
    },
    {
      company: t({ 
        id: 'Alibaba Cloud Indonesia GenAI Hackathon 2025, with GoTo Group',
        en: 'Alibaba Cloud Indonesia GenAI Hackathon 2025, with GoTo Group'
      }),
      role: t({ id: 'AI Engineer Apprentice', en: 'AI Engineer Apprentice' }),
      location: '',
      period: t({ id: 'Feb 2025 – Mei 2025', en: 'Feb 2025 – May 2025' }),
      projects: [
        {
          title: t({ 
            id: 'Program GenAI Learning Path', 
            en: 'GenAI Learning Path Program' 
          }),
          tech: 'Alibaba Cloud Model Studio · Qwen Models · GenAI Fundamentals',
          achievements: t({
            id: [
              'Menyelesaikan learning path GenAI intensif 3 bulan (Digital Talent Scholarship × Alibaba Cloud × GoTo Group) yang mencakup fundamental AI, etika, dan modul GenAI terapan.',
              'Membangun proyek implementasi LLM hands-on menggunakan Alibaba Cloud Model Studio API dengan Qwen models.'
            ],
            en: [
              'Completed a 3-month intensive GenAI learning path (Digital Talent Scholarship × Alibaba Cloud × GoTo Group) covering AI fundamentals, ethics, and applied GenAI modules.',
              'Built a hands-on LLM implementation project using the Alibaba Cloud Model Studio API with Qwen models.'
            ]
          })
        }
      ]
    },
    {
      company: t({ 
        id: 'Startup Campus (MSIB Batch 3, Kampus Merdeka)',
        en: 'Startup Campus (MSIB Batch 3, Kampus Merdeka)'
      }),
      role: t({ id: 'AI Engineer Apprentice', en: 'AI Engineer Apprentice' }),
      location: '',
      period: t({ id: '2022 (~6 bulan)', en: '2022 (~6 months)' }),
      projects: [
        {
          title: t({ 
            id: 'Program Magang AI Bersertifikat Pemerintah', 
            en: 'Government-Certified AI Apprenticeship' 
          }),
          tech: 'Machine Learning · Deep Learning · Applied AI',
          achievements: t({
            id: [
              'Menyelesaikan magang AI bersertifikat pemerintah (program MSIB Kemendikbud) yang mencakup kurikulum terstruktur dalam machine learning, deep learning, dan applied AI.',
              'Meraih peringkat 3 dalam Kompetisi AI Startup Campus (2022).'
            ],
            en: [
              'Completed a government-sponsored AI apprenticeship (Kemendikbud MSIB program) covering a structured curriculum in machine learning, deep learning, and applied AI.',
              'Placed 3rd in the Startup Campus AI Competition (2022).'
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
