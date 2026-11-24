import { useLanguage } from '../contexts/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      category: t({ id: 'Skripsi · Computer Vision', en: 'Thesis · Computer Vision' }),
      title: t({ 
        id: 'Sistem Pemantauan Lansia Real-Time', 
        en: 'Elderly Real-Time Monitoring System' 
      }),
      date: '2022 – 2023',
      tech: 'YOLOv7 · PyTorch · Roboflow · Confusion Matrix · Webcam Real-Time',
      points: t({
        id: [
          'Mengembangkan sistem deteksi lansia vs. non-lansia secara real-time menggunakan YOLOv7 dan PyTorch, dilatih pada dataset 1.200 gambar yang dianotasi dan diaugmentasi dengan Roboflow.',
          'Mengevaluasi prediksi lansia vs. non-lansia dengan confusion matrix, mencapai akurasi 94%, presisi 100%, recall 89%, dan F1-score 94% pada set validasi.',
          'Diuji langsung melalui webcam; deteksi stabil pada jarak 4–6 m, pencahayaan 24–65 lux, dan sudut 0°–30°.'
        ],
        en: [
          'Developed a real-time elderly vs. non-elderly detection system using YOLOv7 and PyTorch, trained on a dataset of 1,200 images annotated and augmented with Roboflow.',
          'Evaluated predictions using a confusion matrix, achieving 94% accuracy, 100% precision, 89% recall, and 94% F1-score on the validation set.',
          'Tested live via webcam; detection was stable at 4–6 m distance, 24–65 lux illumination, and 0°–30° angles.'
        ]
      })
    },
    {
      category: t({ id: 'Produk Perusahaan · AI & LLM', en: 'Company Product · AI & LLM' }),
      title: t({ 
        id: 'InsightOps — Produk Analitik Log Telekomunikasi', 
        en: 'InsightOps — Telecom Log Analytics Product' 
      }),
      date: 'Nov 2025 – Okt 2026',
      tech: 'FastAPI · Groq · gpt-oss-120b · Python · Pydantic · Railway · Next.js',
      points: t({
        id: [
          'Membangun layanan proof-of-concept analisis akar masalah berbasis AI (FastAPI + Groq, gpt-oss-120b) yang mengubah log telekomunikasi lintas sistem menjadi JSON terstruktur berisi potensi akar masalah, ringkasan, dan rekomendasi yang diprioritaskan.',
          'Memodelkan logika analisis akar masalah untuk 3 kategori keluhan pada 8 sistem backend, dengan menyisipkan alur log multi-hop ke prompt dan batasan prompt untuk meminimalkan keluaran tanpa dasar.',
          'Membangun 8 endpoint REST API (FastAPI, Pydantic) serta merancang abstraksi LogDataSource Python ABC, di-deploy di Railway dan diintegrasikan ke dashboard Next.js 5 halaman.'
        ],
        en: [
          'Built an AI-powered root-cause analysis proof-of-concept service (FastAPI + Groq, gpt-oss-120b) converting multi-system telecom logs into structured JSON with root causes, summaries, and prioritized recommendations.',
          'Modeled root-cause analysis logic for 3 complaint categories across 8 backend systems, inserting multi-hop log flows with strict prompt constraints to minimize ungrounded outputs.',
          'Engineered 8 REST API endpoints (FastAPI, Pydantic) and designed a Python ABC LogDataSource abstraction, deployed on Railway and integrated into a 5-page Next.js dashboard.'
        ]
      })
    },
    {
      category: t({ id: 'Proyek Magang · Sistem RAG', en: 'Internship Project · RAG Systems' }),
      title: t({ 
        id: 'Chatbot RAG COVID-19 Berbahasa Indonesia', 
        en: 'Indonesian COVID-19 RAG Chatbot' 
      }),
      date: 'Agu 2025 – Nov 2025',
      tech: 'LangChain · FAISS · Sentence Transformers · Mistral 7B · Ollama · Streamlit',
      points: t({
        id: [
          'Membangun chatbot RAG COVID-19 berbahasa Indonesia menggunakan LangChain, FAISS, dan Sentence Transformers (multilingual MPNet), dengan model Mistral 7B-Instruct lokal via Ollama.',
          'Merancang fallback 4 tingkat dengan timeout, filter input kata kunci, dan pemeriksaan keamanan keluaran agar bot tetap sesuai topik.',
          'Dievaluasi dengan 18 kasus uji manual (16 lolos penuh, 1 lolos sebagian, 1 gagal) dengan latensi retrieval <0,5 detik dan respons end-to-end <10 detik pada antarmuka Streamlit.'
        ],
        en: [
          'Built an Indonesian COVID-19 RAG chatbot using LangChain, FAISS, and Sentence Transformers (multilingual MPNet) with local Mistral 7B-Instruct via Ollama.',
          'Designed a 4-tier fallback mechanism with timeouts, keyword input filters, and output safety checks to keep responses strictly on-topic.',
          'Evaluated against 18 manual test cases (16 full pass, 1 partial, 1 fail) achieving retrieval latency <0.5s and end-to-end response <10s on a Streamlit interface.'
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
              id: 'Koleksi proyek sistem LLM/RAG, Computer Vision, dan backend AI yang dibangun dari riset hingga implementasi.',
              en: 'A collection of LLM/RAG systems, Computer Vision, and AI backend projects built from research to implementation.'
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
