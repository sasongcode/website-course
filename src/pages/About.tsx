import {
  Users,
  Award,
  Code,
  Target,
  Rocket,
  CheckCircle,
  BookOpen,
  Laptop,
  Briefcase,
  Youtube,
  Github,
} from "lucide-react";

export default function About() {
  return (
    <div className="bg-white text-zinc-800 max-w-7xl mx-auto px-6">
      {/* Hero */}
      <section className="bg-white text-zinc-900 py-20 text-center">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-700 mb-4">
            Tentang <span className="text-yellow-400">SongKoding</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Platform belajar coding online dengan materi terstruktur, berbasis project nyata, dan mentor berpengalaman.
          </p>
        </div>
      </section>

      {/* Tentang Kami */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <img
          src="../public/darkbrand.png"
          alt="Coding Class"
          className="px-4"
        />
        <div className="p-8 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Siapa Kami?</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Songkoding adalah platform edukasi teknologi yang fokus pada
            pembelajaran coding berbasis project. Kami percaya semua orang bisa
            belajar pemrograman, baik untuk karier, startup, maupun pengembangan
            diri.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center">
              <CheckCircle className="text-yellow-500 mr-2" /> Belajar dengan
              mentor berpengalaman
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-yellow-500 mr-2" /> Materi selalu
              update sesuai industri
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-yellow-500 mr-2" /> Sertifikat resmi
              setelah lulus
            </li>
          </ul>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="bg-zinc-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-yellow-500 hover:shadow-lg hover:scale-[1.02] transition">
            <Target size={36} className="text-yellow-500 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Visi Kami</h3>
            <p className="text-gray-600">
              Mencetak generasi digital Indonesia yang siap bersaing global
              dengan skill coding yang mumpuni.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-yellow-500 hover:shadow-lg hover:scale-[1.02] transition">
            <Rocket size={36} className="text-yellow-500 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Misi Kami</h3>
            <p className="text-gray-600">
              Memberikan akses belajar coding yang mudah, murah, dan sesuai
              kebutuhan industri teknologi.
            </p>
          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-12">
          Kenapa Belajar di Songkoding?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Code size={40} />,
              title: "Materi Terstruktur",
              desc: "Disusun step-by-step agar mudah dipahami.",
            },
            {
              icon: <BookOpen size={40} />,
              title: "Berbasis Project",
              desc: "Setiap kursus punya project nyata untuk portofolio.",
            },
            {
              icon: <Users size={40} />,
              title: "Komunitas Aktif",
              desc: "Bergabung dengan ribuan siswa & mentor.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg hover:-translate-y-2 transition"
            >
              <div className="text-yellow-500 mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Apa yang Kamu Dapatkan */}
      <section className="bg-zinc-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center group">
          <h2 className="text-3xl font-bold mb-12">Apa yang Kamu Dapatkan?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Laptop size={36} />,
                title: "Akses Selamanya",
                desc: "Belajar sepuasnya tanpa batas waktu.",
              },
              {
                icon: <Briefcase size={36} />,
                title: "Persiapan Karier",
                desc: "Skill coding siap untuk dunia kerja.",
              },
              {
                icon: <Award size={36} />,
                title: "Sertifikat",
                desc: "Bukti kompetensi untuk portofolio.",
              },
              {
                icon: <CheckCircle size={36} />,
                title: "Quiz & Latihan",
                desc: "Asah skill dengan latihan real-time.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-zinc-800 rounded-xl p-6 shadow hover:bg-zinc-700 hover:scale-[1.03] transition"
              >
                <div className="text-yellow-400 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistik */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/040/888/771/non_2x/ai-generated-examine-the-significance-of-debugging-tools-and-techniques-in-the-programming-workflow-and-evaluate-how-they-contribute-to-improving-code-quality-and-efficiency-free-photo.jpg')" }}
      >
        {/* efek gelap */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "2.000+", label: "Siswa Aktif" },
              { value: "30+", label: "Kursus Coding" },
              { value: "500+", label: "Project Dibuat" },
              { value: "95%", label: "Kepuasan Belajar" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow hover:scale-[1.03] transition"
              >
                <h3 className="text-4xl font-extrabold text-yellow-400 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentor */}
      <div className="text-center mt-20 mb-20 px-7">
          <h3 className="text-3xl font-bold text-zinc-700 mb-2">Mentor</h3>
          <p className="text-lg font-semibold text-zinc-600 mb-10">
            Top pengajar kita yang akan membimbing Anda.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-md p-6 hover:-translate-y-2 hover:shadow-2xl transition hover:bg-red-400 group">
              <img
                src="https://conference.sarccom.org/wp-content/uploads/2019/02/0-4.jpg"
                alt="Mentor 1"
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-red-400 group-hover:border-white"
              />
              <h4 className="text-lg font-semibold text-gray-900 group-hover:text-white transition">
                Eko Kurniawan
              </h4>
              <p className="text-gray-500 text-sm mb-2 group-hover:text-white transition">
                Frontend Developer
              </p>
              <p className="text-gray-600 text-sm mb-4 group-hover:text-white transition">
                Spesialis di React.js & Tailwind, Expert di bidang Frontend
                dalam pembuatan UI website.
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="#"
                  className="text-gray-500 group-hover:text-white transition"
                >
                  <Youtube size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-500 group-hover:text-white transition"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-md p-6 hover:-translate-y-2 hover:shadow-2xl transition hover:bg-yellow-400 group">
              <img
                src="https://adam-nugraha225.github.io/AR.PROJECT/dea-afrizal.jpg"
                alt="Mentor 2"
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-yellow-400 group-hover:border-white transition"
              />
              <h4 className="text-lg font-semibold group-hover:text-white transition">
                Dea Afrizal
              </h4>
              <p className="text-gray-500 text-sm mb-2 group-hover:text-white transition">
                Backend Developer
              </p>
              <p className="text-gray-600 text-sm mb-4 group-hover:text-white transition">
                Spesialis di Laravel & Node.js, expert dalam bahasa Javascript,
                berpengalaman membangun aplikasi skala besar.
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="#"
                  className="text-gray-500 group-hover:text-white transition"
                >
                  <Youtube size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-500 group-hover:text-white transition"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-md p-6 hover:-translate-y-2 hover:shadow-2xl transition hover:bg-green-400 group">
              <img
                src="https://sandhikagalih.github.io/img/sandhika.jpg"
                alt="Mentor 3"
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-green-400 group-hover:border-white transition"
              />
              <h4 className="text-lg font-semibold group-hover:text-white transition">
                Sandhika Galih
              </h4>
              <p className="text-gray-500 text-sm mb-2 group-hover:text-white transition">
                Fullstack Developer
              </p>
              <p className="text-gray-600 text-sm mb-4 group-hover:text-white transition">
                Menguasai MERN Stack & DevOps, fokus membimbing siswa untuk jadi
                developer profesional.
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="#"
                  className="text-gray-500 group-hover:text-white transition"
                >
                  <Youtube size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-500 group-hover:text-white transition"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
