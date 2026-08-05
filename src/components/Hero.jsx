const Hero = () => {
  return (
    <section className="pt-[168px] pb-[100px] hero-bg md:pt-[140px] md:pb-[70px]">
      <div className="max-w-[1120px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-[12.5px] tracking-[0.06em] text-blue bg-[rgba(166,24,46,0.08)] border border-blue-line py-1.5 px-3 rounded-full mb-[22px] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow animate-blink"></span>
              Tersedia untuk peluang baru
            </span>
            <h1 className="text-[clamp(36px,5vw,56px)] leading-[1.05] mb-5">
              Rahmad Hidayad,<br />
              <span className="text-blue">Frontend Developer</span> yang rapi dalam detail.
            </h1>
            <p className="text-[17px] text-ink-soft max-w-[480px] mb-[30px]">
              Membangun antarmuka web dari dashboard operasional sampai landing page perusahaan —
              pakai React, Next.js, dan Tailwind CSS. Fokus pada kode yang bersih dan pengalaman pengguna yang
              enak dipakai.
            </p>
            <div className="flex gap-[14px] flex-wrap mb-[36px]">
              <a 
                href="/projects" 
                className="py-[13px] px-6 rounded-[10px] font-semibold text-[14.5px] inline-flex items-center gap-2 transition-all duration-200 border-[1.5px] border-transparent bg-blue text-white hover:bg-blue-deep hover:-translate-y-0.5 hover:shadow-[0_10px_20px_-8px_rgba(166,24,46,0.5)]"
              >
                Lihat Proyek →
              </a>
              <a 
                href="https://drive.google.com/file/d/1R12vyXr_1g7Y6CKyUCyQy2RcabWNE5H0/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="group py-[13px] px-6 rounded-[10px] font-semibold text-[14.5px] inline-flex items-center gap-2 transition-all duration-200 border-[1.5px] border-border-custom text-ink bg-white hover:border-yellow-deep hover:text-blue-deep hover:bg-yellow-soft hover:-translate-y-0.5 hover:shadow-[0_10px_20px_-10px_rgba(138,15,35,0.35)] relative overflow-hidden"
              >
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 stroke-current transition-transform duration-250 group-hover:translate-x-0.5">
                  <path d="M12 2v13m0 0l-4-4m4 4l4-4M4 19h16" />
                </svg>
                Download CV
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

          {/* Hero Image */}
          <div className="relative flex justify-center items-center">
            <div className="absolute inset-0 bg-gradient-to-br from-blue to-blue-deep rounded-[20px] blur-2xl opacity-20"></div>
            <img 
              src="/foto.png" 
              alt="Rahmad Hidayad" 
              className="relative w-full max-w-[400px] h-auto rounded-[20px] shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
