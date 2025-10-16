import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { benefits, packs } from "../data/DataPackage";
import {
  Star,
  Users,
  CheckCircle,
  BookOpen,
  Laptop,
  Award,
  Github,
  Clock,
  Youtube,
  UserRoundPlus,
  Layers,
  ChevronUp,
  ChevronDown,
  MessageCircle,
  Crown,
  CircleCheck,
  Calendar,
  ArrowBigRight,
  TrendingUp,
  MessageCircleQuestionMark,
  Rocket,
  AwardIcon,
  Instagram,
} from "lucide-react";
import { testimonies } from "../data/DataTesti";
import { useEffect, useState } from "react";
import { faqs } from "../data/DataFAQ";
import { blogs } from "../data/DataBlogs";
import { courses } from "../data/DataCourses";

type Stat = {
  icon: React.ElementType;
  label: string;
};

type packs = {
  name: string;
  price: string;
  features: string[];
};

export default function Home() {
  const stats: Stat[] = [
    { icon: Users, label: "2500+ Siswa" },
    { icon: BookOpen, label: "30+ Kursus" },
    { icon: Laptop, label: "Belajar Online" },
    { icon: Award, label: "Mentor Berpengalaman" },
  ];

  const fullText =
    "Semua yang Kamu Butuhkan Untuk Belajar Coding Web Development, Dalam Satu Platform. 🚀";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 80); // kecepatan ketik (ms)
    return () => clearInterval(interval);
  }, []);

  const beforeHighlight =
    "Semua yang Kamu Butuhkan Untuk Belajar Coding Web Development, ";
  const highlight = "Dalam Satu Platform 🚀";

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-28">
      {/* Hero Section */}
      <section
        className="relative w-full h-screen flex flex-col items-center justify-center text-center text-white bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://cms-assets.themuse.com/media/lead/01212022-1047259374-coding-classes_scanrail.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40">
          <motion.h1
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans font-bold leading-snug mb-7 whitespace-pre-wrap tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {displayedText.length <= beforeHighlight.length ? (
              displayedText
            ) : displayedText.length <=
              beforeHighlight.length + highlight.length ? (
              <>
                {beforeHighlight}
                <span className="text-yellow-400">
                  {displayedText.slice(beforeHighlight.length)}
                </span>
              </>
            ) : (
              <>
                {beforeHighlight}
                <span className="text-yellow-400">
                  {displayedText.slice(
                    beforeHighlight.length,
                    beforeHighlight.length + highlight.length
                  )}
                </span>
                {displayedText.slice(beforeHighlight.length + highlight.length)}
              </>
            )}
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-lg font-semibold text-gray-200 max-w-4xl mx-auto px-12 mb-3 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 6, duration: 0.8 }}
          >
            Bukan cuma satu kursus. Di SongKoding, kamu langsung dapet kumpulan
            kursus pemrograman web modern yang disusun dari A sampai Z.
          </motion.p>

          <motion.h3
            className="text-sm sm:text-base md:text-lg font-bold max-w-2xl mx-auto mb-8 leading-relaxed tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 7, duration: 0.8 }}
          >
            Gak perlu beli atau langganan di banyak tempat. Tinggal duduk, klik,
            dan belajar.
          </motion.h3>

          <motion.div
            className="flex flex-wrap gap-3 justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 8, duration: 0.6, type: "spring" }}
          >
            <a
              href="#package"
              className="flex items-center gap-2 px-5 py-2.5 bg-yellow-400 font-medium text-sm md:text-base text-black rounded-full shadow hover:bg-yellow-600 hover:scale-[0.98] transition-all"
            >
              <UserRoundPlus size={18} />
              Gabung Program
            </a>
            <Link
              to="/courses"
              className="flex items-center gap-2 px-5 py-2.5 font-medium text-sm md:text-base border border-white text-white rounded-full shadow hover:bg-white hover:text-black hover:scale-[0.98] transition"
            >
              <Layers size={16} />
              Lihat Kursus
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section Stats */}
      <section className="grid md:grid-cols-4 gap-6 text-center px-12 py-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition"
          >
            <stat.icon size={40} className="mx-auto text-zinc-600 mb-3" />
            <p className="font-bold text-zinc-700">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Programmer Gagal */}
      <section className="max-w-6xl mx-auto px-6 py-18">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Gambar di kiri */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://img.clipart-library.com/24/1c68315a-4483-4bb0-9c35-a1ceb064642d.png"
              alt="Programmer Gagal"
              className="w-full md:w-[500px] h-auto object-cover rounded-3xl shadow-lg"
            />
          </div>

          {/* Card di kanan */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-800">
              Kenapa Banyak yang Gagal Jadi{" "}
              <span className="text-yellow-400">Programmer</span>?
            </h2>

            {/* Kalimat 1 */}
            <div className="flex items-start space-x-3">
              <span className="bg-yellow-400 w-4 h-2 rounded-full mt-3"></span>
              <p className="text-gray-600 text-md leading-relaxed">
                <span className="text-lg font-semibold">
                  Materinya berceceran di mana-mana.
                </span>{" "}
                Tutorial gratis banyak, tapi nggak jelas urutannya. Malah makin
                bingung dan nggak tahu harus mulai dari mana.
              </p>
            </div>

            {/* Kalimat 2 */}
            <div className="flex items-start space-x-3">
              <span className="bg-yellow-400 w-4 h-2 rounded-full mt-3"></span>
              <p className="text-gray-600 text-md leading-relaxed">
                <span className="text-lg font-semibold">
                  Sering mulai ragu sama diri sendiri.
                </span>{" "}
                “Apa aku cukup pintar buat jadi programmer? Apalagi nggak punya
                background IT. Sering stuck dan ngerasa sendirian.”
              </p>
            </div>

            {/* Kalimat 3 */}
            <div className="flex items-start space-x-3">
              <span className="bg-yellow-400 w-5 h-2 rounded-full mt-3"></span>
              <p className="text-gray-600 text-md leading-relaxed">
                <span className="text-lg font-semibold">
                  Bukan cuma yang kuliah IT atau ikut bootcamp mahal yang berhak
                  jadi programmer.
                </span>{" "}
                Semua orang harusnya punya kesempatan belajar coding dengan cara
                yang lengkap, jelas, dan terjangkau.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kenapa Pilih Kami */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20 text-center">
        <h3 className="flex justify-center items-center gap-2 text-3xl font-bold text-zinc-700 mb-12">
          Kenapa Pilih <span className="text-yellow-400">SongKoding</span>
          <MessageCircleQuestionMark
            size={25}
            className="mt-2 text-green-600"
          />
        </h3>
        <div className="grid md:grid-cols-3 gap-8 px-5">
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl hover:-translate-y-2 transition">
            <CheckCircle className="mx-auto text-green-500 w-10 h-10 mb-4" />
            <h4 className="text-lg font-semibold mb-2">Materi Berkualitas</h4>
            <p className="text-gray-600 text-sm">
              Disusun oleh mentor berpengalaman dengan pendekatan praktis.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl hover:-translate-y-2 transition">
            <BookOpen className="mx-auto text-indigo-500 w-10 h-10 mb-4" />
            <h4 className="text-lg font-semibold mb-2">Berbasis Project</h4>
            <p className="text-gray-600 text-sm">
              Belajar dengan contoh nyata yang siap digunakan di dunia kerja.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl hover:-translate-y-2 transition">
            <Clock className="mx-auto text-yellow-500 w-10 h-10 mb-4" />
            <h4 className="text-lg font-semibold mb-2">Fleksibel</h4>
            <p className="text-gray-600 text-sm">
              Akses kursus kapan saja, dimana saja sesuai kecepatanmu.
            </p>
          </div>
        </div>
      </div>

      {/* Kursus Terpopuler */}
      <section className="mt-16">
        <h2 className="flex justify-center gap-2 text-3xl font-bold text-center mb-12 text-zinc-700">
          Kursus <span className="text-red-600">Terpopuler</span>
          <TrendingUp size={25} className="mt-2" />
        </h2>

        <div className="grid md:grid-cols-3 gap-8 px-7">
          {courses
            .filter((c) => c.popular)
            .slice(0, 3)
            .map((course, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl shadow hover:shadow-lg hover:-translate-y-2 transition flex flex-col justify-between group"
              >
                <div>
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-40 object-contain mb-4"
                  />
                  <h3 className="font-bold text-lg mb-2 text-zinc-800 group-hover:text-red-600">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Pelajari {course.title} dari dasar sampai mahir.
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Users size={15} />
                      {course.students?.toLocaleString()} siswa
                    </span>
                    <span className="flex items-center gap-1 text-yellow-500 font-semibold">
                      <Star size={15} />
                      {course.rating}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Tombol lihat semua */}
        <div className="text-center mt-12">
          <Link
            to="/courses"
            className="inline-block px-5 py-2 border-2 border-red-600 hover:bg-red-600 text-red-600 hover:text-white font-semibold rounded-3xl shadow transition"
          >
            Lihat Semua Kursus
          </Link>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        <h2 className="flex justify-center gap-2 text-3xl font-bold text-center mb-12 text-zinc-700">
          Visi Misi <span className="text-yellow-400">SongKoding</span>
          <Rocket size={30} className="mt-2 text-red-600" />
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition hover:bg-zinc-400 group">
            <h3 className="text-2xl font-bold text-zinc-700 mb-4 group-hover:text-white">
              Visi Kami
            </h3>
            <p className="text-lg text-zinc-600 leading-relaxed max-w-xl group-hover:text-white">
              Menjadi platform belajar coding terdepan yang dapat diakses semua
              orang, tanpa batasan usia maupun latar belakang.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 hover:bg-yellow-400 transition group">
            <h3 className="text-2xl font-bold text-zinc-700 mb-4 group-hover:text-white transition">
              Misi Kami
            </h3>
            <ul className="list-disc text-left text-gray-600 ml-5 space-y-2 group-hover:text-white transition">
              <li>Menyediakan materi berkualitas dengan harga terjangkau.</li>
              <li>Menghadirkan pengalaman belajar berbasis project nyata.</li>
              <li>Mendukung komunitas untuk belajar bersama dan berkembang.</li>
            </ul>
          </div>
        </div>

        {/* Mentor Section */}
        <div className="text-center mb-20 py-24">
          <h3 className="flex justify-center gap-2 text-3xl font-bold text-zinc-700 mb-2">
            Mentor
            <AwardIcon size={27} className="mt-2" />
          </h3>
          <p className="text-lg font-semibold text-zinc-600 mb-10">
            Top pengajar kita yang akan membimbing Anda.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-md p-6 hover:-translate-y-2 hover:shadow-2xl transition hover:bg-red-500 group">
              <img
                src="https://conference.sarccom.org/wp-content/uploads/2019/02/0-4.jpg"
                alt="Mentor 1"
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-red-500 group-hover:border-white"
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

              {/* icon */}
              <div className="flex justify-center gap-2">
                <a
                  href="https://www.youtube.com/@ProgrammerZamanNow" target="_blank"
                  className="p-2 rounded-full transition hover:scale-125 text-gray-500 group-hover:bg-red-400 group-hover:text-white"
                >
                  <Youtube size={18} />
                </a>
                <a
                  href="https://www.instagram.com/programmerzamannow" target="_blank"
                  className="p-2 rounded-full transition hover:scale-125 text-gray-500 group-hover:bg-red-400 group-hover:text-white"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.github.com/@ProgrammerZamanNow" target="_blank"
                  className="p-2 rounded-full transition hover:scale-125 text-gray-500 group-hover:bg-red-400 group-hover:text-white"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-md p-6 hover:-translate-y-2 hover:shadow-2xl transition hover:bg-sky-500 group">
              <img
                src="https://adam-nugraha225.github.io/AR.PROJECT/dea-afrizal.jpg"
                alt="Mentor 2"
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-sky-500 group-hover:border-white transition"
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

              {/* icon */}
              <div className="flex justify-center gap-2">
                <a
                  href="https://www.youtube.com/@deaafrizal" target="_blank"
                  className="p-2 rounded-full transition hover:scale-125 text-gray-500 group-hover:bg-sky-400 group-hover:text-white"
                >
                  <Youtube size={18} />
                </a>
                <a
                  href="https://www.instagram.com/dea.afrizal" target="_blank"
                  className="p-2 rounded-full transition hover:scale-125 text-gray-500 group-hover:bg-sky-400 group-hover:text-white"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.github.com/deaafrizal" target="_blank"
                  className="p-2 rounded-full transition hover:scale-125 text-gray-500 group-hover:bg-sky-400 group-hover:text-white"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-md p-6 hover:-translate-y-2 hover:shadow-2xl transition hover:bg-green-500 group">
              <img
                src="https://sandhikagalih.github.io/img/sandhika.jpg"
                alt="Mentor 3"
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-green-500 group-hover:border-white transition"
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

              {/* icon */}
              <div className="flex justify-center gap-2">
                <a
                  href="https://www.youtube.com/@sandhikagalihWPU" target="_blank"
                  className="p-2 rounded-full transition hover:scale-125 text-gray-500 group-hover:bg-green-400 group-hover:text-white"
                >
                  <Youtube size={18} />
                </a>
                <a
                  href="https://www.instagram.com/sandhikagalih" target="_blank"
                  className="p-2 rounded-full transition hover:scale-125 text-gray-500 group-hover:bg-green-400 group-hover:text-white"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.github.com/sandhikagalih" target="_blank"
                  className="p-2 rounded-full transition hover:scale-125 text-gray-500 group-hover:bg-green-400 group-hover:text-white"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="relative text-center text-white py-20 shadow-lg overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://woz-u.com/wp-content/uploads/2022/06/Evolution-of-Coding-scaled.jpg"
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>

          {/* Konten */}
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold font-mono leading-relaxed mb-6">
              Jangan buang waktu lagi{" "}
              <span className="text-yellow-400">belajar tanpa arah.</span>
            </h2>
            <p className="mb-10 text-lg md:text-xl">
              Di SongKoding, kamu bisa langsung fokus upgrade skill, bangun
              portofolio, dan siap masuk industri.
            </p>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-8 py-3 bg-yellow-400 text-black rounded-lg 
              shadow hover:bg-yellow-500 font-semibold hover:scale-[0.98] transition"
            >
              <UserRoundPlus size={20} />
              Gabung Program
            </Link>
          </div>
        </section>

        {/* Testimoni About */}
        <div className="text-center py-12">
          <h3 className="text-3xl font-bold text-zinc-800 mb-2">
            Apa Kata Mereka
          </h3>
          <p className="text-lg mb-10 font-semibold">
            Pengalaman siswa setelah belajar di{" "}
            <span className="text-yellow-400">SongKoding</span>.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonies.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex justify-center mb-4 text-yellow-400">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      size={18}
                      fill={idx < t.rating ? "currentColor" : "none"}
                      stroke="currentColor"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{t.comment}"</p>
                <h4 className="font-semibold text-zinc-800">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paket Section */}
      <section id="package" className="bg-zinc-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* 1. Heading */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Akses Semua Kursus dalam{" "}
              <span className="text-yellow-400">Satu Platform</span>
            </h2>
            <p className="text-lg font-semibold text-gray-400 px-24">
              Kamu bebas belajar semua topik, dari dasar hingga lanjutan. Cukup
              satu platform — gak perlu langganan ke mana-mana. sudah termasuk:
            </p>
          </div>

          {/* 2. Benefits */}
          <div className="flex flex-col items-start gap-3 mb-12 mx-auto w-fit">
            {benefits.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-gray-300 text-lg font-semibold"
              >
                <CircleCheck
                  className="text-yellow-400 flex-shrink-0"
                  size={20}
                />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* 3. Card Harga */}
          <div className="grid md:grid-cols-3 gap-8">
            {packs.map((pack) => (
              <div
                key={pack.id}
                className={`relative flex flex-col rounded-2xl font-semibold py-12 px-5 border shadow-lg transition ${
                  pack.popular
                    ? "bg-gradient-to-b from-zinc-700 via-zinc-900 to-zinc-900 border-2 border-yellow-400 scale-110"
                    : "bg-gradient-to-b from-zinc-700 via-zinc-900 to-zinc-900 border-2 border-white"
                }`}
              >
                {/* Badge Diskon */}
                {pack.discount && (
                  <span className="absolute top-3 left-3 bg-orange-400 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    Hemat {pack.discount}%
                  </span>
                )}

                {/* Badge Populer */}
                {pack.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-base font-bold px-4 py-1 rounded-full shadow">
                    Paling Worth It!
                  </span>
                )}

                {/* Nama Paket */}
                <h3 className="text-2xl font-bold mb-2">{pack.name}</h3>
                <p className="text-sm text-gray-400 mb-6">{pack.desc}</p>

                {/* Harga */}
                <div className="mb-8 text-start">
                  {pack.oldPrice && (
                    <p className="text-red-400 line-through text-sm mb-1 font-mono">
                      {pack.oldPrice}
                    </p>
                  )}
                  <p className="text-3xl font-bold font-mono text-yellow-400">
                    {pack.price}{" "}
                    <span className="text-sm text-gray-400">
                      {pack.duration}
                    </span>
                  </p>
                </div>

                {/* Tombol */}
                <Link
                  to={`/package/${pack.id}`}
                  className="mt-auto flex items-center justify-center gap-2 w-full bg-yellow-400 text-black 
                  font-semibold px-6 py-2 rounded-lg hover:bg-yellow-500 hover:scale-[0.98] transition"
                >
                  <Crown size={18} />
                  Gabung Sekarang
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-zinc-800 mb-3">
              Blog <span className="text-sky-500">SongKoding</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beberapa blog yang bisa anda baca dan pelajari terkait coding.
            </p>
          </div>

          {/* Grid Card */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs
              .filter((blog) => [8, 4, 6].includes(blog.id))
              .map((blog) => (
                // 8, 4, 6 adalah id blog
                <div
                  key={blog.id}
                  className="bg-white border rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-44 object-cover"
                  />
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-xs text-sky-600 font-medium mb-2">
                      {blog.category}
                    </span>
                    <h3 className="text-lg font-semibold text-zinc-800 mb-2 line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                      {blog.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} /> {blog.date}
                      </span>
                    </div>

                    <Link
                      to={`/blog/${blog.id}`}
                      className="flex justify-center gap-2 mt-auto items-center bg-sky-500 hover:bg-sky-600 text-white text-sm py-2 px-4 rounded-lg font-medium transition"
                    >
                      Baca Selangkapnya
                      <ArrowBigRight size={18} />
                    </Link>
                    {/* Tombol lihat semua */}
                  </div>
                </div>
              ))}
          </div>
        </div>
        {/* Tombol lihat semua */}
        <div className="text-center">
          <Link
            to="/courses"
            className="inline-block px-6 py-3 border-2 border-sky-500 hover:bg-sky-500 text-sky-500 hover:text-white font-semibold rounded-3xl shadow transition"
          >
            Lihat Semua Kursus
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-18">
        <div className="max-w-7xl mx-auto px-6">
          {/* Grid untuk kiri (judul) dan kanan (gambar) */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* === Kiri === */}
            <div className="ml-10">
              <span className="inline-block bg-yellow-400 text-black font-semibold px-4 py-2 rounded-full mb-4">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-800">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 mb-6 font-semibold">
                Belum menemukan jawaban? Kamu bisa tanyakan langsung kepada kami
                dengan klik button dibawah ini
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-zinc-800 hover:scale-[0.98] transition"
              >
                <MessageCircle size={20} />
                Hubungi Kami
              </Link>
            </div>

            {/* === Kanan (gambar) === */}
            <div className="flex justify-center md:justify-end">
              <img
                src="../public/tanya.png"
                alt="Orang Bertanya"
                className="max-w-xs md:max-w-sm lg:max-w-md w-full h-auto rounded-xl object-contain"
              />
            </div>
          </div>

          {/* List Pertanyaan */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl backdrop-blur-lg bg-white/70 border border-white/40 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex justify-between items-center w-full px-6 py-5 text-left hover:underline"
                >
                  <h4
                    className={`text-lg font-semibold transition-colors group-hover:underline ${
                      openIndex === i ? "text-zinc-800" : "text-zinc-800"
                    }`}
                  >
                    {faq.question}
                  </h4>
                  {openIndex === i ? (
                    <ChevronUp className="text-gray-600" />
                  ) : (
                    <ChevronDown className="text-gray-400" />
                  )}
                </button>

                {/* Answer */}
                <div
                  className={`px-6 pb-5 transition-all duration-500 ease-in-out ${
                    openIndex === i
                      ? "max-h-40 opacity-100 translate-y-0"
                      : "max-h-0 opacity-0 -translate-y-2 overflow-hidden"
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
