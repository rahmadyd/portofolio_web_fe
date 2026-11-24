import { useLanguage } from '../contexts/LanguageContext';

const Education = () => {
  const { t } = useLanguage();

  return (
    <section className="py-[110px]" id="more">
      <div className="max-w-[1120px] mx-auto px-8 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-[60px]">
        <div className="reveal">
          <div className="mb-[44px] max-w-[600px]">
            <span className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.04em] text-blue bg-[rgba(166,24,46,0.08)] border border-blue-line py-[6px] px-[13px] rounded-full mb-[18px]">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow shrink-0"></span>
              {t({ id: 'Pendidikan', en: 'Education' })}
            </span>
            <h2 className="text-[clamp(26px,3.2vw,34px)]">
              {t({ id: 'Latar Belakang Akademik', en: 'Academic Background' })}
            </h2>
          </div>
          <div className="border border-border-custom rounded-custom p-[26px] mb-5">
            <h4 className="text-[17px] mb-1">
              {t({ 
                id: 'Sarjana Teknik — Teknik Komputer', 
                en: 'Bachelor of Engineering — Computer Engineering' 
              })}
            </h4>
            <div className="text-blue font-semibold text-[14px] mb-2.5">
              {t({ id: 'Telkom University, Indonesia', en: 'Telkom University, Indonesia' })}
            </div>
            <div className="font-mono text-[12px] text-ink-faint mb-3">
              {t({ id: '2019 – 2023 · IPK 3,20 / 4,00', en: '2019 – 2023 · GPA 3.20 / 4.00' })}
            </div>
            <p className="text-[13.5px] text-ink-soft">
              {t({ 
                id: 'Konsentrasi: Rekayasa Perangkat Lunak, AI, Data Engineering.', 
                en: 'Concentration: Software Engineering, AI, Data Engineering.' 
              })}
            </p>
          </div>
        </div>

        <div className="reveal">
          <div className="mb-[34px]">
            <h3 className="text-[15px] mb-4 flex items-center gap-2 before:content-[''] before:w-4 before:h-0.5 before:bg-yellow before:inline-block">
              {t({ id: 'Pelatihan & Pengembangan Profesional', en: 'Professional Training & Development' })}
            </h3>
            <div className="py-3.5 border-b border-border-custom">
              <div className="flex justify-between items-start gap-3 mb-1">
                <span className="text-[14px] text-ink font-semibold">
                  {t({ 
                    id: 'Peserta GenAI Learning Path — Alibaba Cloud Indonesia GenAI Hackathon 2025', 
                    en: 'GenAI Learning Path Participant — Alibaba Cloud Indonesia GenAI Hackathon 2025' 
                  })}
                </span>
                <span className="font-mono text-[12px] text-ink-faint whitespace-nowrap">Feb 2025 – Mei 2025</span>
              </div>
              <p className="text-[13px] text-ink-soft leading-relaxed mt-1">
                {t({
                  id: 'Program Digital Talent Scholarship × Alibaba Cloud × GoTo Group: menyelesaikan learning path GenAI terstruktur selama 3 bulan yang mencakup dasar-dasar AI, etika AI, keterampilan teknis mikro, dan konsep GenAI terapan. Membangun proyek implementasi LLM langsung menggunakan model Qwen melalui API Alibaba Cloud Model Studio.',
                  en: 'Digital Talent Scholarship × Alibaba Cloud × GoTo Group program: completed a 3-month structured GenAI learning path covering AI fundamentals, AI ethics, technical micro-skills, and applied GenAI concepts. Built hands-on LLM implementation projects using Qwen models via Alibaba Cloud Model Studio API.'
                })}
              </p>
            </div>
          </div>
          <div className="mb-[34px]">
            <h3 className="text-[15px] mb-4 flex items-center gap-2 before:content-[''] before:w-4 before:h-0.5 before:bg-yellow before:inline-block">
              {t({ id: 'Pencapaian', en: 'Achievements' })}
            </h3>
            <div className="flex justify-between gap-3 py-3.5 border-b border-border-custom">
              <span className="text-[14px] text-ink font-medium">
                {t({ 
                  id: 'AI Apprenticeship, Startup Campus (MSIB Angkatan 3, 2022) — Juara 3, Kompetisi AI Startup Campus', 
                  en: 'AI Apprenticeship, Startup Campus (MSIB Batch 3, 2022) — 3rd Place, Startup Campus AI Competition' 
                })}
              </span>
              <span className="font-mono text-[12px] text-ink-faint whitespace-nowrap">2022</span>
            </div>
            <div className="flex justify-between gap-3 py-3.5 border-b border-border-custom">
              <span className="text-[14px] text-ink font-medium">
                {t({ 
                  id: '150 Besar — Innovillage Telkom Indonesia', 
                  en: 'Top 150 — Innovillage Telkom Indonesia' 
                })}
              </span>
              <span className="font-mono text-[12px] text-ink-faint whitespace-nowrap">2022</span>
            </div>
            <div className="flex justify-between gap-3 py-3.5">
              <span className="text-[14px] text-ink font-medium">
                {t({ 
                  id: '120 Besar — Innovillage Telkom Indonesia', 
                  en: 'Top 120 — Innovillage Telkom Indonesia' 
                })}
              </span>
              <span className="font-mono text-[12px] text-ink-faint whitespace-nowrap">2021</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
