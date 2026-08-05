const About = () => {
  return (
    <section className="py-[110px] border-t border-border-custom" id="about">
      <div className="max-w-[1120px] mx-auto px-8">
        <div className="max-w-[680px]">
          <div className="reveal">
            <div className="mb-[44px] max-w-[600px]">
              <span className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.04em] text-blue bg-[rgba(166,24,46,0.08)] border border-blue-line py-[6px] px-[13px] rounded-full mb-[18px]">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow shrink-0"></span>
                Tentang
              </span>
              <h2 className="text-[clamp(26px,3.2vw,34px)]">Dari mahasiswa teknik, fokus di frontend.</h2>
            </div>
            <div className="flex flex-col gap-[18px]">
              <p className="text-ink-soft text-[16.5px]">
                Saya <strong className="text-ink font-semibold">lulusan Teknik Komputer Telkom University</strong> yang menekuni pengembangan
                web modern — membangun aplikasi dengan React dan Next.js, mengelola basis data, dan
                mengintegrasikan API dari sisi antarmuka sampai ke detail interaksi kecilnya.
              </p>
              <p className="text-ink-soft text-[16.5px]">
                Pengalaman saya mencakup pembuatan dashboard operasional dengan puluhan komponen reusable,
                website perusahaan berbasis SPA, hingga proyek riset yang menuntut ketelitian dalam optimasi
                performa di sisi klien.
              </p>
              <p className="text-ink-soft text-[16.5px]">
                Saat ini saya juga memperdalam <strong className="text-ink font-semibold">UI/UX design</strong> agar keputusan desain yang saya
                ambil di kode selalu punya alasan yang jelas — bukan sekadar ikut template.
              </p>
            </div>
            <p className="mt-6 pl-5 border-l-2 border-yellow font-heading text-[17px] text-ink font-medium">
              "Kode yang bersih adalah bentuk lain dari desain yang baik."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
