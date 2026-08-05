import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  return (
    <section className="pt-[168px] pb-[100px] hero-bg md:pt-[140px] md:pb-[70px] min-h-screen">
      <div className="max-w-[1120px] mx-auto px-8 text-center">
        <h1 className="text-[clamp(32px,4vw,48px)] leading-[1.1] mb-6">
          Semua <span className="text-blue">Proyek</span>
        </h1>
        <p className="text-[17px] text-ink-soft max-w-[540px] mx-auto mb-10">
          Halaman ini masih dalam tahap pengembangan. Nantinya, semua proyek yang pernah saya kerjakan akan ditampilkan di sini.
        </p>
        <Link 
          to="/"
          className="inline-flex items-center gap-2 py-[11px] px-6 rounded-[9px] font-semibold text-[14.5px] transition-all duration-200 border-[1.5px] border-border-custom bg-white text-ink hover:border-blue hover:text-blue hover:-translate-y-0.5 shadow-sm"
        >
          ← Kembali ke Beranda
        </Link>
      </div>
    </section>
  );
};

export default ProjectsPage;
