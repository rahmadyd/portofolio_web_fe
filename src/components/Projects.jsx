const Projects = () => {
  return (
    <section className="py-[110px] bg-white-soft border-y border-border-custom" id="projects">
      <div className="max-w-[1120px] mx-auto px-8">
        <div className="mb-[44px] max-w-[600px] reveal">
          <span className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.04em] text-blue bg-[rgba(166,24,46,0.08)] border border-blue-line py-[6px] px-[13px] rounded-full mb-[18px]">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow shrink-0"></span>
            Proyek Lain
          </span>
          <h2 className="text-[clamp(26px,3.2vw,34px)]">Proyek Riset & Komunitas</h2>
          <p className="text-ink-soft mt-2.5 text-[15.5px]">Proyek di luar pekerjaan formal, termasuk tugas akhir dan program nasional.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px]">
          <div className="bg-white border border-border-custom rounded-custom p-[28px] flex flex-col gap-3.5 transition-all duration-250 hover:-translate-y-1 hover:shadow-custom reveal">
            <span className="self-start font-mono text-[11px] py-1 px-2.5 rounded-md bg-[rgba(166,24,46,0.08)] text-blue border border-blue-line">Tugas Akhir · Computer Vision</span>
            <h4 className="text-[17px] leading-[1.3]">Sistem Monitoring Lansia dengan YOLOv7 & Webcam</h4>
            <span className="text-[12.5px] text-ink-faint font-mono">2022 – 2023</span>
            <p className="text-[14.5px] text-ink-soft">Dasbor pemantauan real-time dibangun dengan React (Vite), Tailwind CSS, dan FastAPI. Model
            deep learning dikonversi ke format ONNX dengan arsitektur decoupled canvas rendering untuk
            meminimalkan beban memori klien dan penggunaan CPU backend.</p>
          </div>
          <div className="bg-white border border-border-custom rounded-custom p-[28px] flex flex-col gap-3.5 transition-all duration-250 hover:-translate-y-1 hover:shadow-custom reveal">
            <span className="self-start font-mono text-[11px] py-1 px-2.5 rounded-md bg-[rgba(166,24,46,0.08)] text-blue border border-blue-line">Program Nasional Telkom Indonesia</span>
            <h4 className="text-[17px] leading-[1.3]">Innovillage 2021 — Pariwisata Berbasis Web Pantai Panjang</h4>
            <span className="text-[12.5px] text-ink-faint font-mono">Okt 2021 – Des 2021 · Bengkulu</span>
            <p className="text-[14.5px] text-ink-soft">Merancang high-fidelity UI di Figma sebagai acuan tim pengembang, menerjemahkan kebutuhan
            lapangan ke tata letak aplikasi yang informatif, dan membuat materi visual media sosial
            untuk dokumentasi dan publikasi.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
