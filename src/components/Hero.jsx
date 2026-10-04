import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="pt-[168px] pb-[100px] hero-bg md:pt-[140px] md:pb-[70px] relative overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          {/* Left Column - Content */}
          <div className="max-w-[680px]">
          <span className="inline-flex items-center gap-2 font-mono text-[12.5px] tracking-[0.06em] text-blue bg-[rgba(166,24,46,0.08)] border border-blue-line py-1.5 px-3 rounded-full mb-[22px] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow animate-blink"></span>
            {t({ id: 'Tersedia untuk peluang baru', en: 'Available for new opportunities' })}
          </span>
          <h1 className="text-[clamp(36px,5vw,56px)] leading-[1.05] mb-5">
            Rahmad Hidayad,<br />
            <span className="text-blue">{t({ id: 'AI Engineer', en: 'AI Engineer' })}</span> | {t({ id: 'LLM/RAG Systems & Computer Vision', en: 'LLM/RAG Systems & Computer Vision' })}
          </h1>
          <p className="text-[17px] text-ink-soft max-w-[520px] mb-[30px]">
            {t({ 
              id: 'AI Engineer dengan pengalaman end-to-end mengirimkan sistem LLM/RAG dan computer vision production-grade — dari pengembangan model dan evaluasi hingga deployment. Fokus pada sistem AI yang reliable, measurable, dan production-ready.',
              en: 'AI Engineer with hands-on, end-to-end experience shipping production-grade LLM/RAG and computer vision systems — from model development and evaluation to deployment. Focused on reliable, measurable, production-ready AI systems.'
            })}
          </p>
          <div className="flex gap-[14px] flex-wrap mb-[36px]">
            <a 
              href="/projects" 
              className="py-[13px] px-6 rounded-[10px] font-semibold text-[14.5px] inline-flex items-center gap-2 transition-all duration-200 border-[1.5px] border-transparent bg-blue text-white hover:bg-blue-deep hover:-translate-y-0.5 hover:shadow-[0_10px_20px_-8px_rgba(166,24,46,0.5)]"
            >
              {t({ id: 'Lihat Proyek', en: 'View Projects' })} →
            </a>
            <a 
              href="https://drive.google.com/file/d/1CPxnHxpTfvju57w369eGJA_v-x97r2B7/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="group py-[13px] px-6 rounded-[10px] font-semibold text-[14.5px] inline-flex items-center gap-2 transition-all duration-200 border-[1.5px] border-border-custom text-ink bg-white hover:border-yellow-deep hover:text-blue-deep hover:bg-yellow-soft hover:-translate-y-0.5 hover:shadow-[0_10px_20px_-10px_rgba(138,15,35,0.35)] relative overflow-hidden"
            >
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 stroke-current transition-transform duration-250 group-hover:translate-x-0.5">
                <path d="M12 2v13m0 0l-4-4m4 4l4-4M4 19h16" />
              </svg>
              {t({ id: 'Download CV', en: 'Download CV' })}
            </a>
          </div>
          <div className="flex gap-[10px] flex-wrap">
            <a 
              href="mailto:rahmad.hidayad.work@gmail.com"
              className="group text-[13.5px] font-medium text-ink-soft flex items-center gap-[7px] py-[9px] px-[14px] rounded-[9px] bg-white border border-border-custom transition-all duration-200 hover:text-blue hover:border-blue-line hover:bg-white-soft hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px] stroke-ink-faint shrink-0 transition-stroke duration-200 group-hover:stroke-blue">
                <path d="M3.5 6.5h17v11h-17z" />
                <path d="M3.5 7l8.5 6 8.5-6" />
              </svg>
              rahmad.hidayad.work@gmail.com
            </a>
            <a 
              href="https://github.com/rahmadyd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group text-[13.5px] font-medium text-ink-soft flex items-center gap-[7px] py-[9px] px-[14px] rounded-[9px] bg-white border border-border-custom transition-all duration-200 hover:text-blue hover:border-blue-line hover:bg-white-soft hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px] stroke-ink-faint shrink-0 transition-stroke duration-200 group-hover:stroke-blue">
                <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5v-1.94c-2.78.62-3.37-1.36-3.37-1.36-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .28.18.61.69.5A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
              </svg>
              github.com/rahmadyd
            </a>
            <a 
              href="https://linkedin.com/in/rahmadyd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group text-[13.5px] font-medium text-ink-soft flex items-center gap-[7px] py-[9px] px-[14px] rounded-[9px] bg-white border border-border-custom transition-all duration-200 hover:text-blue hover:border-blue-line hover:bg-white-soft hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px] stroke-ink-faint shrink-0 transition-stroke duration-200 group-hover:stroke-blue">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <path d="M7.5 10.5v6M7.5 7.5v.01M12 16.5v-3.5c0-1.4 1-2.5 2.25-2.5S16.5 11.6 16.5 13v3.5M12 10.5v6" />
              </svg>
              linkedin.com/in/rahmadyd
            </a>
          </div>
        </div>

        {/* Right Column - Space Illustration */}
        <div className="hidden lg:flex items-center justify-center relative h-[600px] w-full">
          {/* Space Background with Stars */}
          <div className="absolute inset-0">
            {/* Stars - Small white dots (spread more) */}
            <div className="absolute top-[8%] left-[10%] w-1 h-1 rounded-full bg-white animate-twinkle"></div>
            <div className="absolute top-[18%] right-[15%] w-1 h-1 rounded-full bg-white animate-twinkle animation-delay-1000"></div>
            <div className="absolute top-[40%] left-[5%] w-1 h-1 rounded-full bg-white animate-twinkle animation-delay-2000"></div>
            <div className="absolute bottom-[35%] right-[8%] w-1 h-1 rounded-full bg-white animate-twinkle animation-delay-3000"></div>
            <div className="absolute top-[70%] left-[20%] w-1 h-1 rounded-full bg-white animate-twinkle animation-delay-1000"></div>
            <div className="absolute bottom-[12%] right-[35%] w-1 h-1 rounded-full bg-white animate-twinkle animation-delay-2000"></div>
            <div className="absolute top-[32%] right-[45%] w-1 h-1 rounded-full bg-white animate-twinkle animation-delay-500"></div>
            <div className="absolute bottom-[45%] left-[35%] w-1 h-1 rounded-full bg-white animate-twinkle animation-delay-1500"></div>
            
            {/* Stars - Medium (colored, more visible) */}
            <div className="absolute top-[12%] right-[5%] w-2 h-2 rounded-full bg-cyan-300 shadow-lg shadow-cyan-300/50 animate-twinkle animation-delay-500"></div>
            <div className="absolute top-[58%] right-[25%] w-2 h-2 rounded-full bg-purple-300 shadow-lg shadow-purple-300/50 animate-twinkle animation-delay-1500"></div>
            <div className="absolute bottom-[20%] left-[15%] w-2 h-2 rounded-full bg-pink-300 shadow-lg shadow-pink-300/50 animate-twinkle animation-delay-2500"></div>
            
            {/* Sparkle stars (cross shape) - BIGGER */}
            <div className="absolute top-[22%] left-[25%]">
              <div className="relative w-4 h-4">
                <div className="absolute inset-0 w-full h-0.5 bg-white rounded-full top-1/2 -translate-y-1/2 shadow-lg shadow-white/50"></div>
                <div className="absolute inset-0 w-0.5 h-full bg-white rounded-full left-1/2 -translate-x-1/2 shadow-lg shadow-white/50"></div>
                <div className="absolute inset-0 bg-white rounded-full blur-md opacity-70 animate-pulse-slow"></div>
              </div>
            </div>
            
            <div className="absolute bottom-[38%] right-[38%]">
              <div className="relative w-3.5 h-3.5">
                <div className="absolute inset-0 w-full h-0.5 bg-cyan-200 rounded-full top-1/2 -translate-y-1/2 shadow-lg shadow-cyan-200/50"></div>
                <div className="absolute inset-0 w-0.5 h-full bg-cyan-200 rounded-full left-1/2 -translate-x-1/2 shadow-lg shadow-cyan-200/50"></div>
                <div className="absolute inset-0 bg-cyan-200 rounded-full blur-md opacity-70 animate-pulse-slow animation-delay-2000"></div>
              </div>
            </div>
          </div>

          {/* Large Purple Planet (top-left, more space) */}
          <div className="absolute top-[5%] left-[5%] w-40 h-40 animate-float-slow">
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-purple-400 via-purple-600 to-indigo-700 shadow-2xl shadow-purple-500/40">
              {/* Craters */}
              <div className="absolute top-[20%] left-[25%] w-7 h-7 rounded-full bg-purple-800/40"></div>
              <div className="absolute bottom-[30%] right-[28%] w-9 h-9 rounded-full bg-purple-900/30"></div>
              <div className="absolute top-[45%] left-[15%] w-5 h-5 rounded-full bg-indigo-900/50"></div>
              {/* Strong glow */}
              <div className="absolute -inset-4 rounded-full bg-purple-400/30 blur-2xl"></div>
              <div className="absolute top-[10%] right-[15%] w-16 h-16 rounded-full bg-purple-200/30 blur-xl"></div>
            </div>
          </div>
          
          {/* Earth-like Blue Planet (bottom-right, spread out) */}
          <div className="absolute bottom-[8%] right-[5%] w-28 h-28 animate-float-slow animation-delay-2000">
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-cyan-300 via-blue-500 to-blue-700 shadow-2xl shadow-cyan-400/40">
              {/* Continents */}
              <div className="absolute top-[15%] right-[20%] w-9 h-7 rounded-full bg-emerald-400/50 blur-[1px]"></div>
              <div className="absolute bottom-[25%] left-[18%] w-11 h-8 rounded-full bg-emerald-500/40 blur-[1px]"></div>
              <div className="absolute top-[40%] left-[25%] w-7 h-6 rounded-full bg-white/25 blur-sm"></div>
              {/* Strong atmosphere glow */}
              <div className="absolute -inset-3 rounded-full bg-cyan-300/40 blur-xl"></div>
            </div>
          </div>
          
          {/* Saturn-like Planet with Ring (middle-right) */}
          <div className="absolute top-[35%] right-[18%] animate-float-slow animation-delay-3000">
            <div className="relative w-24 h-24">
              {/* Planet body */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-300 via-pink-400 to-purple-500 shadow-xl shadow-pink-400/30">
                {/* Bands */}
                <div className="absolute top-[35%] left-0 right-0 h-1.5 bg-pink-500/40"></div>
                <div className="absolute top-[55%] left-0 right-0 h-1.5 bg-purple-600/40"></div>
              </div>
              {/* Ring - BIGGER & MORE VISIBLE */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-12">
                <div className="absolute inset-0 rounded-full border-[4px] border-pink-200/70 rotate-[-18deg] shadow-lg shadow-pink-200/30"></div>
                <div className="absolute inset-2 rounded-full border-[3px] border-pink-300/50 rotate-[-18deg]"></div>
              </div>
              {/* Glow */}
              <div className="absolute -inset-2 rounded-full bg-pink-300/30 blur-lg"></div>
            </div>
          </div>

          {/* Small Moon (left-center) */}
          <div className="absolute top-[55%] left-[18%] w-12 h-12 rounded-full bg-gradient-to-br from-slate-300 to-slate-500 shadow-xl animate-float-slow animation-delay-1000">
            <div className="absolute top-[25%] left-[30%] w-2.5 h-2.5 rounded-full bg-slate-600/50"></div>
            <div className="absolute bottom-[30%] right-[25%] w-2 h-2 rounded-full bg-slate-700/40"></div>
            <div className="absolute -inset-1 rounded-full bg-slate-400/20 blur-md"></div>
          </div>

          {/* UFO with Beam! */}
          <div className="absolute bottom-[35%] left-[42%] animate-float-slow animation-delay-1500">
            {/* UFO Body */}
            <div className="relative w-16 h-8">
              {/* Top dome */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-4 rounded-t-full bg-gradient-to-b from-cyan-300/80 to-cyan-400/60 backdrop-blur-sm shadow-lg shadow-cyan-400/50"></div>
              {/* Bottom disc */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-3 rounded-full bg-gradient-to-b from-cyan-400/70 to-cyan-500/50 backdrop-blur-sm shadow-xl shadow-cyan-400/60"></div>
              {/* Lights on disc */}
              <div className="absolute bottom-1 left-[20%] w-1.5 h-1.5 rounded-full bg-yellow-300 shadow-lg shadow-yellow-300/70 animate-pulse-slow"></div>
              <div className="absolute bottom-1 left-[45%] w-1.5 h-1.5 rounded-full bg-yellow-300 shadow-lg shadow-yellow-300/70 animate-pulse-slow animation-delay-500"></div>
              <div className="absolute bottom-1 right-[20%] w-1.5 h-1.5 rounded-full bg-yellow-300 shadow-lg shadow-yellow-300/70 animate-pulse-slow animation-delay-1000"></div>
              
              {/* Light Beam - VISIBLE! */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-20 h-32 bg-gradient-to-b from-cyan-300/40 via-cyan-200/20 to-transparent blur-sm pointer-events-none"></div>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-16 h-28 bg-gradient-to-b from-cyan-400/50 via-cyan-300/25 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Shooting Star */}
          <div className="absolute top-[25%] right-[50%] animate-shooting-star">
            <div className="relative w-2 h-2 rounded-full bg-white shadow-lg shadow-white/70">
              <div className="absolute inset-0 w-20 h-[2px] bg-gradient-to-l from-white via-cyan-200 to-transparent -translate-x-full top-1/2 -translate-y-1/2"></div>
            </div>
          </div>

          {/* Nebula Background (more visible) */}
          <div className="absolute top-[5%] right-[10%] w-64 h-64 rounded-full bg-gradient-to-br from-purple-500/15 via-pink-500/15 to-transparent blur-3xl"></div>
          <div className="absolute bottom-[10%] left-[10%] w-72 h-72 rounded-full bg-gradient-to-tl from-cyan-500/15 via-blue-500/15 to-transparent blur-3xl"></div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;
