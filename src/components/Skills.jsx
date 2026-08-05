const Skills = () => {
  return (
    <section className="py-[110px] bg-white-soft border-y border-border-custom" id="skills">
      <div className="max-w-[1120px] mx-auto px-8">
        <div className="mb-[44px] max-w-[600px] reveal">
          <span className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.04em] text-blue bg-[rgba(166,24,46,0.08)] border border-blue-line py-[6px] px-[13px] rounded-full mb-[18px]">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow shrink-0"></span>
            Keahlian
          </span>
          <h2 className="text-[clamp(26px,3.2vw,34px)]">Perkakas yang dipakai sehari-hari</h2>
          <p className="text-ink-soft mt-2.5 text-[15.5px]">Dari bahasa pemrograman inti sampai perkakas kolaborasi yang mempercepat alur kerja.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <div className="bg-white border border-border-custom rounded-custom p-[26px] transition-all duration-250 hover:-translate-y-1 hover:shadow-custom hover:border-blue-line reveal">
            <div className="w-[38px] h-[38px] rounded-[9px] flex items-center justify-center bg-yellow-soft mb-4 font-heading font-bold text-yellow-deep">
              &lt;/&gt;
            </div>
            <h3 className="text-[16px] mb-3 font-semibold text-ink">Bahasa Pemrograman</h3>
            <div className="flex flex-wrap gap-2">
              <span className="text-[13px] py-1.5 px-3 rounded-[7px] bg-white-soft text-ink-soft border border-border-custom font-medium">JavaScript</span>
              <span className="text-[13px] py-1.5 px-3 rounded-[7px] bg-white-soft text-ink-soft border border-border-custom font-medium">TypeScript</span>
              <span className="text-[13px] py-1.5 px-3 rounded-[7px] bg-white-soft text-ink-soft border border-border-custom font-medium">Python</span>
            </div>
          </div>
          <div className="bg-white border border-border-custom rounded-custom p-[26px] transition-all duration-250 hover:-translate-y-1 hover:shadow-custom hover:border-blue-line reveal">
            <div className="w-[38px] h-[38px] rounded-[9px] flex items-center justify-center bg-yellow-soft mb-4 font-heading font-bold text-yellow-deep">
              ◧
            </div>
            <h3 className="text-[16px] mb-3 font-semibold text-ink">Pengembangan Frontend</h3>
            <div className="flex flex-wrap gap-2">
              <span className="text-[13px] py-1.5 px-3 rounded-[7px] bg-white-soft text-ink-soft border border-border-custom font-medium">React JS</span>
              <span className="text-[13px] py-1.5 px-3 rounded-[7px] bg-white-soft text-ink-soft border border-border-custom font-medium">Next.js</span>
              <span className="text-[13px] py-1.5 px-3 rounded-[7px] bg-white-soft text-ink-soft border border-border-custom font-medium">React Native</span>
              <span className="text-[13px] py-1.5 px-3 rounded-[7px] bg-white-soft text-ink-soft border border-border-custom font-medium">Tailwind CSS</span>
            </div>
          </div>
          <div className="bg-white border border-border-custom rounded-custom p-[26px] transition-all duration-250 hover:-translate-y-1 hover:shadow-custom hover:border-blue-line reveal">
            <div className="w-[38px] h-[38px] rounded-[9px] flex items-center justify-center bg-yellow-soft mb-4 font-heading font-bold text-yellow-deep">
              ⚙
            </div>
            <h3 className="text-[16px] mb-3 font-semibold text-ink">Perkakas & Teknologi</h3>
            <div className="flex flex-wrap gap-2">
              <span className="text-[13px] py-1.5 px-3 rounded-[7px] bg-white-soft text-ink-soft border border-border-custom font-medium">Git</span>
              <span className="text-[13px] py-1.5 px-3 rounded-[7px] bg-white-soft text-ink-soft border border-border-custom font-medium">Firebase</span>
              <span className="text-[13px] py-1.5 px-3 rounded-[7px] bg-white-soft text-ink-soft border border-border-custom font-medium">Vercel</span>
              <span className="text-[13px] py-1.5 px-3 rounded-[7px] bg-white-soft text-ink-soft border border-border-custom font-medium">Figma</span>
              <span className="text-[13px] py-1.5 px-3 rounded-[7px] bg-white-soft text-ink-soft border border-border-custom font-medium">Claude Code</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
