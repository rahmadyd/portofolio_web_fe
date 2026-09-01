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
                  id: 'AI Engineer dengan pengalaman production-grade systems.', 
                  en: 'AI Engineer with production-grade systems experience.' 
                })}
              </h2>
            </div>
            <div className="flex flex-col gap-[18px]">
              <p className="text-ink-soft text-[16.5px]">
                {t({
                  id: 'Saya lulusan Teknik Komputer Telkom University dengan pengalaman end-to-end mengirimkan sistem LLM/RAG dan computer vision production-grade. Membangun AI root-cause-analysis backend (FastAPI + Groq) dengan desain prompt yang mitigasi halusinasi, pipeline semantic search yang serve retrieval dalam <0.5 detik, dan model real-time object detection yang mencapai akurasi 94%.',
                  en: "I'm a Computer Engineering graduate from Telkom University with hands-on, end-to-end experience shipping production-grade LLM/RAG and computer vision systems. Built an AI root-cause-analysis backend (FastAPI + Groq) with hallucination-mitigating prompt design, a semantic search pipeline serving retrieval in under 0.5s, and a real-time object detection model reaching 94% accuracy."
                })}
              </p>
              <p className="text-ink-soft text-[16.5px]">
                {t({
                  id: 'Untuk AI/ML engineering, saya merancang sistem RAG menggunakan LangChain, FAISS, Sentence Transformers, mengintegrasikan LLM lokal (Mistral 7B via Ollama) dengan context throttling untuk mengurangi halusinasi, dan membangun guardrail system dua lapis untuk menjaga domain integrity. Saya juga experienced dengan YOLOv7 (PyTorch) untuk computer vision, mencapai akurasi 94% melalui systematic A/B testing dan edge-computing optimization.',
                  en: 'For AI/ML engineering, I design RAG systems using LangChain, FAISS, Sentence Transformers, integrate local LLMs (Mistral 7B via Ollama) with context throttling to reduce hallucination, and build two-layer guardrail systems for domain integrity. Also experienced with YOLOv7 (PyTorch) for computer vision, reaching 94% accuracy through systematic A/B testing and edge-computing optimization.'
                })}
              </p>
              <p className="text-ink-soft text-[16.5px]">
                {t({
                  id: 'Comfortable di full stack: Python untuk AI/ML, TypeScript/React/Next.js untuk frontend, Node.js/FastAPI untuk backend, PostgreSQL untuk database, dan Docker untuk deployment. Fokus pada sistem AI yang reliable, measurable, dan production-ready dengan evaluasi metrik yang jelas.',
                  en: 'Comfortable across the full stack: Python for AI/ML, TypeScript/React/Next.js for frontend, Node.js/FastAPI for backend, PostgreSQL for database, and Docker for deployment. Focused on reliable, measurable, production-ready AI systems with clear evaluation metrics.'
                })}
              </p>
            </div>
            <p className="mt-6 pl-5 border-l-2 border-yellow font-heading text-[17px] text-ink font-medium">
              {t({
                id: '"Sistem AI yang baik bukan hanya cerdas, tapi reliable, measurable, dan auditable."',
                en: '"Good AI systems are not just smart, but reliable, measurable, and auditable."'
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
