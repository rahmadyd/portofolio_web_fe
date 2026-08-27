const Projects = () => {
  const projects = [
    {
      category: "Tugas Akhir · Computer Vision",
      title: "Sistem Monitoring Lansia dengan YOLOv7 & Webcam",
      date: "2022 – 2023",
      points: [
        "Mengembangkan sistem monitoring lansia secara real-time menggunakan YOLOv7 (PyTorch) untuk mendeteksi keberadaan dan aktivitas manusia menggunakan webcam.",
        "Mencapai akurasi deteksi sebesar 94% pada tahap evaluasi menggunakan bahasa pemrograman Python.",
        "Melakukan uji coba A/B testing pada model deteksi lansia."
      ]
    },
    {
      category: "Project-Based Internship · Big Data",
      title: "Proyek Big Data Analytics – Kimia Farma",
      date: "Jan 2025",
      points: [
        "Melakukan exploratory data analysis pada dataset terstruktur untuk mengidentifikasi pola dan tren dasar.",
        "Menyusun dashboard dan visualisasi data untuk menyajikan hasil analisis."
      ]
    },
    {
      category: "Program Nasional Telkom Indonesia",
      title: "Innovillage 2022 — Proyek Mitigasi Banjir (I-Was)",
      date: "Okt 2022 – Des 2022 · Bengkulu",
      points: [
        "Memimpin proses perencanaan dan dokumentasi pada proyek mitigasi banjir berbasis komunitas.",
        "Mengelola penyusunan anggaran (RAB) serta laporan perkembangan mingguan proyek."
      ]
    },
    {
      category: "Program Nasional Telkom Indonesia",
      title: "Innovillage 2021 — Pariwisata Berbasis Web Pantai Panjang",
      date: "Okt 2021 – Des 2021 · Bengkulu",
      points: [
        "Merancang antarmuka pengguna (UI) website destinasi wisata menggunakan Figma sebagai acuan visual pengembangan.",
        "Menerjemahkan kebutuhan proyek lapangan ke dalam desain tampilan website yang informatif dan mudah dipahami.",
        "Mendesain materi visual Instagram Story menggunakan Canva untuk dokumentasi dan publikasi kegiatan proyek."
      ]
    },
    {
      category: "Program Akademik · Workshop",
      title: "Abdimas — Workshop Sistem Deteksi Objek Robotika",
      date: "Jun 2023 · Ismile Laboratorium",
      points: [
        "Mengoordinasikan media partner serta administrasi \"Workshop For Development Of Object Detection System Robotics With AREI (Association Robot Education Indonesia)\" dengan lebih dari 70 peserta."
      ]
    }
  ];

  return (
    <section className="py-[110px] bg-white-soft border-y border-border-custom" id="projects">
      <div className="max-w-[1120px] mx-auto px-8">
        <div className="mb-[44px] max-w-[600px] reveal">
          <span className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.04em] text-blue bg-[rgba(166,24,46,0.08)] border border-blue-line py-[6px] px-[13px] rounded-full mb-[18px]">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow shrink-0"></span>
            Proyek Riset & Komunitas
          </span>
          <h2 className="text-[clamp(26px,3.2vw,34px)]">Proyek di Luar Pekerjaan Formal</h2>
          <p className="text-ink-soft mt-2.5 text-[15.5px]">Tugas akhir, project-based internship, dan program nasional yang memperdalam keahlian AI/ML dan web development.</p>
        </div>
        <div className="space-y-[20px]">
          {projects.map((project, index) => (
            <div key={index} className="bg-white border border-border-custom rounded-custom p-[28px] transition-all duration-250 hover:-translate-y-1 hover:shadow-custom reveal">
              <div className="mb-3.5">
                <span className="self-start font-mono text-[11px] py-1 px-2.5 rounded-md bg-[rgba(166,24,46,0.08)] text-blue border border-blue-line">
                  {project.category}
                </span>
              </div>
              <h4 className="text-[17px] leading-[1.3] mb-2">{project.title}</h4>
              <span className="text-[12.5px] text-ink-faint font-mono block mb-4">{project.date}</span>
              <ul className="space-y-2">
                {project.points.map((point, idx) => (
                  <li key={idx} className="text-[14.5px] text-ink-soft flex gap-2.5">
                    <span className="text-blue mt-1.5 shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
