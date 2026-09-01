import { useLanguage } from '../contexts/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();

  const skillsCategories = [
    {
      title: t({ id: 'AI & LLM', en: 'AI & LLM' }),
      icon: "🤖",
      bgColor: "bg-yellow-soft",
      textColor: "text-yellow-deep",
      skills: t({
        id: ['LangChain', 'RAG Systems', 'Semantic Search', 'FAISS', 'Sentence Transformers', 'Mistral 7B', 'Groq API', 'Ollama', 'LLM Guardrails', 'Prompt Engineering'],
        en: ['LangChain', 'RAG Systems', 'Semantic Search', 'FAISS', 'Sentence Transformers', 'Mistral 7B', 'Groq API', 'Ollama', 'LLM Guardrails', 'Prompt Engineering']
      })
    },
    {
      title: t({ id: 'Computer Vision', en: 'Computer Vision' }),
      icon: "👁️",
      bgColor: "bg-yellow-soft",
      textColor: "text-yellow-deep",
      skills: t({
        id: ['YOLOv7', 'PyTorch', 'Real-Time Detection', 'Model Optimization', 'Performance Evaluation'],
        en: ['YOLOv7', 'PyTorch', 'Real-Time Detection', 'Model Optimization', 'Performance Evaluation']
      })
    },
    {
      title: t({ id: 'Data Engineering', en: 'Data Engineering' }),
      icon: "📊",
      bgColor: "bg-yellow-soft",
      textColor: "text-yellow-deep",
      skills: t({
        id: ['Python', 'SQL (PostgreSQL)', 'Google BigQuery', 'Looker Studio', 'EDA', 'Data Pipelines', 'Big Data Analytics'],
        en: ['Python', 'SQL (PostgreSQL)', 'Google BigQuery', 'Looker Studio', 'EDA', 'Data Pipelines', 'Big Data Analytics']
      })
    },
    {
      title: t({ id: 'Backend & API', en: 'Backend & API' }),
      icon: "⚡",
      bgColor: "bg-yellow-soft",
      textColor: "text-yellow-deep",
      skills: t({
        id: ['Node.js', 'FastAPI', 'Pydantic', 'REST API Integration', 'Docker', 'Streamlit'],
        en: ['Node.js', 'FastAPI', 'Pydantic', 'REST API Integration', 'Docker', 'Streamlit']
      })
    },
    {
      title: t({ id: 'Frontend & UI', en: 'Frontend & UI' }),
      icon: "◧",
      bgColor: "bg-yellow-soft",
      textColor: "text-yellow-deep",
      skills: t({
        id: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'Recharts', 'Framer Motion'],
        en: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'Recharts', 'Framer Motion']
      })
    },
    {
      title: t({ id: 'Tools', en: 'Tools' }),
      icon: "⚙",
      bgColor: "bg-yellow-soft",
      textColor: "text-yellow-deep",
      skills: t({
        id: ['Git/GitHub', 'Postman', 'Model Evaluation Metrics'],
        en: ['Git/GitHub', 'Postman', 'Model Evaluation Metrics']
      })
    }
  ];

  return (
    <section className="py-[110px] bg-white-soft border-y border-border-custom" id="skills">
      <div className="max-w-[1120px] mx-auto px-8">
        <div className="mb-[44px] max-w-[600px] reveal">
          <span className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.04em] text-blue bg-[rgba(166,24,46,0.08)] border border-blue-line py-[6px] px-[13px] rounded-full mb-[18px]">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow shrink-0"></span>
            {t({ id: 'Keahlian', en: 'Skills' })}
          </span>
          <h2 className="text-[clamp(26px,3.2vw,34px)]">
            {t({ id: 'Skill', en: 'Skills' })}
          </h2>
          <p className="text-ink-soft mt-2.5 text-[15.5px]">
            {t({ 
              id: 'Tech stack dari AI/ML engineering sampai full-stack development.',
              en: 'Tech stack from AI/ML engineering to full-stack development.'
            })}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillsCategories.map((category, index) => (
            <div key={index} className="bg-white border border-border-custom rounded-custom p-[26px] transition-all duration-250 hover:-translate-y-1 hover:shadow-custom hover:border-blue-line reveal">
              <div className={`w-[38px] h-[38px] rounded-[9px] flex items-center justify-center ${category.bgColor} mb-4 font-heading font-bold ${category.textColor} text-lg`}>
                {category.icon}
              </div>
              <h3 className="text-[16px] mb-3 font-semibold text-ink">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="text-[13px] py-1.5 px-3 rounded-[7px] bg-white-soft text-ink-soft border border-border-custom font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
