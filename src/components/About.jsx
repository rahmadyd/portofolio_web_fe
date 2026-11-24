import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="py-[110px] border-t border-border-custom" id="about">
      <div className="max-w-[1120px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-start">
          <div className="reveal">
            <div className="mb-[44px] max-w-[600px]">
              <span className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.04em] text-blue bg-[rgba(166,24,46,0.08)] border border-blue-line py-[6px] px-[13px] rounded-full mb-[18px]">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow shrink-0"></span>
                {t({ id: 'Tentang', en: 'About' })}
              </span>
              <h2 className="text-[clamp(26px,3.2vw,34px)]">
                {t({ 
                  id: 'AI Engineer | Computer Vision & Sistem LLM/RAG', 
                  en: 'AI Engineer | LLM/RAG Systems' 
                })}
              </h2>
            </div>
            <div className="flex flex-col gap-[18px]">
              <p className="text-ink-soft text-[16.5px]">
                {t({
                  id: 'AI Engineer dengan pengalaman langsung membangun sistem LLM/RAG, mulai dari perancangan prompt dan evaluasi hingga deployment. Membangun backend proof-of-concept analisis akar masalah (root-cause analysis) untuk log telekomunikasi (FastAPI + Groq) dan chatbot RAG berbahasa Indonesia (LangChain, FAISS, Mistral 7B via Ollama), serta pengalaman computer vision (skripsi YOLOv7, mentoring YOLOv8). Berfokus pada aplikasi LLM yang andal dengan Python.',
                  en: 'AI Engineer with hands-on experience building LLM/RAG systems, from prompt design and evaluation through deployment. Built a proof-of-concept root-cause-analysis backend for telco logs (FastAPI + Groq) and an Indonesian-language RAG chatbot (LangChain, FAISS, Mistral 7B via Ollama), with additional computer vision experience (YOLOv7 thesis, YOLOv8 mentoring). Focused on reliable LLM applications in Python.'
                })}
              </p>
              <p className="text-ink-soft text-[16.5px]">
                {t({
                  id: 'Lulusan Sarjana Teknik — Teknik Komputer dari Telkom University (IPK 3,20/4,00) dengan konsentrasi Rekayasa Perangkat Lunak, AI, dan Data Engineering. Terus memperdalam keahlian terapan melalui pelatihan seperti Peserta GenAI Learning Path di Alibaba Cloud Indonesia GenAI Hackathon 2025 (mengimplementasikan model Qwen via Alibaba Cloud Model Studio API).',
                  en: 'Bachelor of Engineering in Computer Engineering graduate from Telkom University, Indonesia (GPA 3.20/4.00, Concentration: Software Engineering, AI, Data Engineering). Participated in the GenAI Learning Path at Alibaba Cloud Indonesia GenAI Hackathon 2025, building a hands-on LLM implementation project using Qwen models through the Alibaba Cloud Model Studio API.'
                })}
              </p>
              <p className="text-ink-soft text-[16.5px]">
                {t({
                  id: 'Berfokus pada pengembangan aplikasi AI yang andal dan terukur — mulai dari evaluasi metrik performa (Presisi, Recall, F1-Score, Confusion Matrix, hingga latensi sistem end-to-end), perancangan input/output guardrails berbasis aturan, hingga deployment backend REST API dengan Python, FastAPI, dan Railway.',
                  en: 'Focused on developing reliable, measurable AI applications — from evaluating performance metrics (Precision, Recall, F1-Score, Confusion Matrix, and end-to-end response latency), designing rule-based input/output guardrails, to deploying backend REST APIs with Python, FastAPI, and Railway.'
                })}
              </p>
            </div>
            <p className="mt-6 pl-5 border-l-2 border-yellow font-heading text-[17px] text-ink font-medium">
              {t({
                id: '"Berfokus pada aplikasi LLM yang andal dengan Python dan sistem computer vision yang akurat."',
                en: '"Focused on reliable LLM applications in Python and accurate computer vision systems."'
              })}
            </p>
          </div>

          {/* Photo */}
          <div className="reveal relative flex justify-center items-start lg:justify-end">
            <div className="relative w-full max-w-[400px] lg:sticky lg:top-[120px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue to-blue-deep rounded-[20px] blur-2xl opacity-20"></div>
              <img 
                src="/foto.png" 
                alt="Rahmad Hidayad" 
                className="relative w-full h-auto rounded-[20px] shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
