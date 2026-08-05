const Experience = () => {
  return (
    <section className="py-[110px]" id="experience">
      <div className="max-w-[1120px] mx-auto px-8">
        <div className="mb-[44px] max-w-[600px] reveal">
          <span className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.04em] text-blue bg-[rgba(166,24,46,0.08)] border border-blue-line py-[6px] px-[13px] rounded-full mb-[18px]">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow shrink-0"></span>
            Pengalaman
          </span>
          <h2 className="text-[clamp(26px,3.2vw,34px)]">Pengalaman Kerja</h2>
        </div>
        <div className="reveal">
          <div className="flex flex-col md:flex-row justify-between items-start flex-wrap gap-4 mb-10 pb-6 border-b border-border-custom">
            <div>
              <h3 className="text-[22px] font-heading font-semibold text-ink">Quorvin</h3>
              <div className="text-blue font-semibold text-[14.5px] mt-1">Frontend Developer (Berbasis Proyek) · Remote</div>
            </div>
            <span className="font-mono text-[12.5px] text-ink-faint bg-white-soft border border-border-custom py-[6px] px-3 rounded-full mt-2 md:mt-0">Jan 2026 – Feb 2026</span>
          </div>

          <div className="border border-border-custom rounded-custom p-[28px] mb-5 relative transition-all duration-250 hover:shadow-custom hover:border-blue-line group">
            <span className="font-mono text-[12px] text-yellow-deep mb-2 block">Proyek 01</span>
            <h4 className="text-[18px] mb-1.5">InsightOps — Penganalisis Log Telekomunikasi Berbasis AI</h4>
            <div className="font-mono text-[12px] text-ink-faint mb-4">Next.js (App Router) · TypeScript · Tailwind CSS · Shadcn UI · Recharts · Framer Motion</div>
            <ul className="list-none flex flex-col gap-2.5">
              <li className="text-[14.5px] text-ink-soft pl-[18px] relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-blue">
                Membangun 5 halaman dasbor operasional telekomunikasi dan 17+ komponen UI reusable menggunakan Next.js App Router dan Shadcn UI.
              </li>
              <li className="text-[14.5px] text-ink-soft pl-[18px] relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-blue">
                Mengintegrasikan antarmuka dengan 7 endpoint REST API (FastAPI) untuk pengelolaan tiket CRUD dan visualisasi analisis akar masalah berbasis AI.
              </li>
              <li className="text-[14.5px] text-ink-soft pl-[18px] relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-blue">
                Mengimplementasikan sistem autentikasi, visualisasi data interaktif berbasis Recharts, serta animasi interaktif menggunakan Framer Motion.
              </li>
            </ul>
          </div>

          <div className="border border-border-custom rounded-custom p-[28px] mb-5 relative transition-all duration-250 hover:shadow-custom hover:border-blue-line group">
            <span className="font-mono text-[12px] text-yellow-deep mb-2 block">Proyek 02</span>
            <h4 className="text-[18px] mb-1.5">Website Profil Perusahaan Quorvin</h4>
            <div className="font-mono text-[12px] text-ink-faint mb-4">React 19 · Vite · React Router v7 · Tailwind CSS / Vanilla CSS · Formspree · GitHub Pages</div>
            <ul className="list-none flex flex-col gap-2.5">
              <li className="text-[14.5px] text-ink-soft pl-[18px] relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-blue">
                Mengembangkan website profil perusahaan berbasis SPA 4 halaman untuk konsultan AI dan Pengembangan Web menggunakan React 19 dan Vite.
              </li>
              <li className="text-[14.5px] text-ink-soft pl-[18px] relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-blue">
                Merancang 11 komponen UI modular dengan sistem desain berbasis CSS Variables, penanganan formulir kontak asinkron via Formspree, dan navigasi adaptif.
              </li>
              <li className="text-[14.5px] text-ink-soft pl-[18px] relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-blue">
                Mengatur alur deployment ke GitHub Pages dengan domain khusus, penanganan navigasi SPA, serta optimasi SEO (Open Graph, sitemap, robots.txt).
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
