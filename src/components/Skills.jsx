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
        id: [
          'LangChain', 
          'RAG Systems', 
          'Semantic Search', 
          'FAISS', 
          'Sentence Transformers', 
          'Mistral 7B', 
          'Qwen (Alibaba Cloud Model Studio)', 
          'Groq API', 
          'Ollama', 
          'Prompt Engineering', 
          'Input/Output Guardrails (berbasis aturan)', 
          'JSON Output Parsing'
        ],
        en: [
          'LangChain', 
          'RAG Systems', 
          'Semantic Search', 
          'FAISS', 
          'Sentence Transformers', 
          'Mistral 7B', 
          'Qwen (Alibaba Cloud Model Studio)', 
          'Groq API', 
          'Ollama', 
          'Prompt Engineering', 
          'Rule-based Input/Output Guardrails', 
          'JSON Output Parsing'
        ]
      })
    },
    {
      title: t({ id: 'Computer Vision & ML', en: 'Computer Vision & ML' }),
      icon: "👁️",
      bgColor: "bg-yellow-soft",
      textColor: "text-yellow-deep",
      skills: t({
        id: [
          'YOLOv7', 
          'YOLOv8', 
          'SAHI', 
          'PyTorch', 
          'Roboflow', 
          'Google Colab', 
          'Presisi/Recall/F1'
        ],
        en: [
          'YOLOv7', 
          'YOLOv8', 
          'SAHI', 
          'PyTorch', 
          'Roboflow', 
          'Google Colab', 
          'Precision/Recall/F1'
        ]
      })
    },
    {
      title: t({ id: 'Backend & Deployment', en: 'Backend & Deployment' }),
      icon: "⚡",
      bgColor: "bg-yellow-soft",
      textColor: "text-yellow-deep",
      skills: t({
        id: [
          'Python', 
          'FastAPI', 
          'Pydantic', 
          'REST API Integration', 
          'Streamlit', 
          'Railway', 
          'Git/GitHub'
        ],
        en: [
          'Python', 
          'FastAPI', 
          'Pydantic', 
          'REST API Integration', 
          'Streamlit', 
          'Railway', 
          'Git/GitHub'
        ]
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
              id: 'Keahlian teknis mencakup AI & LLM, Computer Vision, serta Backend & Deployment.',
              en: 'Technical skills covering AI & LLM, Computer Vision, and Backend & Deployment.'
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
