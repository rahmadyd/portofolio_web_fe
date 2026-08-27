const About = () => {
  return (
    <section className="py-[110px] border-t border-border-custom" id="about">
      <div className="max-w-[1120px] mx-auto px-8">
        <div className="max-w-[680px]">
          <div className="reveal">
            <div className="mb-[44px] max-w-[600px]">
              <span className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.04em] text-blue bg-[rgba(166,24,46,0.08)] border border-blue-line py-[6px] px-[13px] rounded-full mb-[18px]">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow shrink-0"></span>
                Tentang
              </span>
              <h2 className="text-[clamp(26px,3.2vw,34px)]">Software Developer yang mendalami AI/ML Engineering.</h2>
            </div>
            <div className="flex flex-col gap-[18px]">
              <p className="text-ink-soft text-[16.5px]">
                Saya <strong className="text-ink font-semibold">lulusan Teknik Komputer Telkom University</strong> dengan pengalaman mengembangkan aplikasi web modern dan sistem AI yang production-ready. Di frontend, saya build dengan <strong className="text-ink font-semibold">React, Next.js App Router, TypeScript, dan Tailwind CSS</strong> untuk menciptakan interface yang responsive dan performant. Di backend, saya gunakan <strong className="text-ink font-semibold">Node.js dengan REST API dan FastAPI</strong> untuk integration yang seamless.
              </p>
              <p className="text-ink-soft text-[16.5px]">
                Untuk AI/ML engineering, saya merancang dan implementasi sistem RAG menggunakan <strong className="text-ink font-semibold">LangChain, FAISS, Sentence Transformers</strong>, serta mengintegrasikan LLM lokal dengan <strong className="text-ink font-semibold">Ollama (Mistral 7B)</strong> untuk solusi yang cost-efficient dan private. Dari dashboard telekomunikasi dengan Recharts hingga chatbot COVID-19 berbasis semantic search, saya terbiasa menggabungkan user experience yang intuitif dengan logika AI yang robust.
              </p>
              <p className="text-ink-soft text-[16.5px]">
                Tech stack saya: <strong className="text-ink font-semibold">Python & PyTorch</strong> untuk ML, <strong className="text-ink font-semibold">React/Next.js/TypeScript</strong> untuk frontend, <strong className="text-ink font-semibold">Node.js/PostgreSQL</strong> untuk backend. Untuk data processing, saya gunakan <strong className="text-ink font-semibold">Google BigQuery dan Looker Studio</strong>, serta deploy dengan <strong className="text-ink font-semibold">Vercel, Docker, dan GitHub</strong>. Saya juga experienced dengan computer vision menggunakan <strong className="text-ink font-semibold">YOLOv7 untuk object detection</strong> real-time.
              </p>
            </div>
            <p className="mt-6 pl-5 border-l-2 border-yellow font-heading text-[17px] text-ink font-medium">
              "Build once, think twice — code dengan intention, deploy dengan confidence."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
