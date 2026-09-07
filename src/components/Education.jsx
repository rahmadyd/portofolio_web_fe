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
                id: 'S1 Teknik Komputer', 
                en: 'Bachelor of Engineering — Computer Engineering' 
              })}
            </h4>
            <div className="text-blue font-semibold text-[14px] mb-2.5">
              {t({ id: 'Telkom University', en: 'Telkom University' })}
            </div>
            <div className="font-mono text-[12px] text-ink-faint mb-3">
              {t({ id: '2019 – 2023 · IPK 3.20 / 4.00', en: '2019 – 2023 · GPA 3.20 / 4.00' })}
            </div>
            <p className="text-[13.5px] text-ink-soft mb-2">
              {t({ 
                id: 'Fokus peminatan: Rekayasa Perangkat Lunak & AI.', 
                en: 'Concentration: Software Engineering & AI.' 
              })}
            </p>
            <p className="text-[13.5px] text-ink-soft">
              {t({
                id: 'Mata kuliah relevan: Algoritma dan Pemrograman, Pemrograman Berorientasi Objek, Sistem Basis Data, Rekayasa Perangkat Lunak dan Kecerdasan Buatan.',
                en: 'Relevant courses: Algorithms and Programming, Object-Oriented Programming, Database Systems, Software Engineering, and Artificial Intelligence.'
              })}
            </p>
          </div>
        </div>

        <div className="reveal">
          <div className="mb-[34px]">
            <h3 className="text-[15px] mb-4 flex items-center gap-2 before:content-[''] before:w-4 before:h-0.5 before:bg-yellow before:inline-block">
              {t({ id: 'Sertifikasi', en: 'Certifications' })}
            </h3>
            <div className="flex justify-between gap-3 py-3.5 border-b border-border-custom">
              <span className="text-[14px] text-ink font-medium">
                {t({ 
                  id: 'Big Data Analytics — Project-Based Internship', 
                  en: 'Big Data Analytics — Project-Based Internship' 
                })}
              </span>
              <span className="font-mono text-[12px] text-ink-faint whitespace-nowrap">2025</span>
            </div>
            <div className="flex justify-between gap-3 py-3.5">
              <span className="text-[14px] text-ink font-medium">
                {t({ 
                  id: 'IT Support — Fresh Graduate Academy (Digital Talent Scholarship)', 
                  en: 'IT Support — Fresh Graduate Academy (Digital Talent Scholarship)' 
                })}
              </span>
              <span className="font-mono text-[12px] text-ink-faint whitespace-nowrap">2024</span>
            </div>
          </div>
          <div className="mb-[34px]">
            <h3 className="text-[15px] mb-4 flex items-center gap-2 before:content-[''] before:w-4 before:h-0.5 before:bg-yellow before:inline-block">
              {t({ id: 'Penghargaan & Prestasi', en: 'Awards & Achievements' })}
            </h3>
            <div className="flex justify-between gap-3 py-3.5 border-b border-border-custom">
              <span className="text-[14px] text-ink font-medium">
                {t({ 
                  id: 'Medali Emas — BCS World Virtual Choir (Kompetisi Internasional)', 
                  en: 'Gold Medalist — BCS World Virtual Choir (International Competition)' 
                })}
              </span>
              <span className="font-mono text-[12px] text-ink-faint whitespace-nowrap">2020</span>
            </div>
            <div className="flex justify-between gap-3 py-3.5 border-b border-border-custom">
              <span className="text-[14px] text-ink font-medium">
                {t({ 
                  id: 'Top 120 — Innovillage 2021 (Telkom Indonesia)', 
                  en: 'Top 120 — Innovillage 2021 (Telkom Indonesia)' 
                })}
              </span>
              <span className="font-mono text-[12px] text-ink-faint whitespace-nowrap">2021</span>
            </div>
            <div className="flex justify-between gap-3 py-3.5">
              <span className="text-[14px] text-ink font-medium">
                {t({ 
                  id: 'Top 150 — Innovillage 2022 (Telkom Indonesia)', 
                  en: 'Top 150 — Innovillage 2022 (Telkom Indonesia)' 
                })}
              </span>
              <span className="font-mono text-[12px] text-ink-faint whitespace-nowrap">2022</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
