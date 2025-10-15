import {
  Star,
  Clock,
  BookOpen,
  Users,
  CheckCircle,
  Undo2,
} from "lucide-react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { courses } from "../data/DataCourses";

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === Number(id));
  const navigate = useNavigate();

  if (!course) {
    return (
      <p className="text-red-500 text-center mt-10">Kursus Tidak Ditemukan.</p>
    );
  }

  const handleJoin = () => {
    navigate(`/courses/checkout/${course.id}`);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <Link
          to="/courses"
          className="inline-flex items-center px-4 py-2 rounded-lg border border-gray-300 text-gray-600 bg-white hover:bg-gray-100 transition"
        >
          <Undo2 size={18} className="mr-2" />
          Kembali
        </Link>
      </div>

      {/* Hero Split Layout */}
      <div className="max-w-6xl mx-auto px-4 lg:px-0 mb-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Gambar */}
          <div className="flex items-center justify-center p-6">
            <img
              src={course.image}
              alt={course.title}
              className="w-full max-h-72 object-contain"
            />
          </div>

          {/* Info Utama */}
          <div className="p-8 flex flex-col justify-center">
            <div className="flex gap-2 mb-4">
              <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                {course.category}
              </span>
              <span className="bg-yellow-400 text-black text-xs px-3 py-1 rounded-full">
                {course.level}
              </span>
            </div>

            <h1 className="text-3xl font-bold mb-3 text-gray-800">
              {course.title}
            </h1>
            <p className="text-gray-600 mb-6">{course.mean}</p>

            <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-6">
              <span className="flex items-center">
                <Clock size={18} className="mr-2 text-red-600" />
                {course.duration}
              </span>
              <span className="flex items-center text-yellow-500">
                <Star size={18} fill="currentColor" />
                <span className="ml-1 font-semibold">{course.rating}</span>
              </span>
              <span className="flex items-center">
                <Users size={18} className="mr-2 text-red-600" />
                {course.students?.toLocaleString()} siswa
              </span>
            </div>

            {/* Harga & CTA */}
            <div className="bg-gray-50 border rounded-xl p-6 text-center shadow-md">
              <p className="text-3xl font-bold text-red-500 mb-2">
                {course.price === 0
                  ? "Gratis"
                  : course.discountPrice
                  ? `Rp ${course.discountPrice.toLocaleString()}`
                  : `Rp ${course.price.toLocaleString()}`}
              </p>

              {course.discountPrice && (
                <p className="text-sm text-gray-500 line-through mb-4">
                  Rp {course.price.toLocaleString()}
                </p>
              )}

              <div className="text-sm text-gray-700 mb-6 grid sm:grid-cols-2 gap-3 text-left">
                {[
                  "Akses penuh selamanya",
                  "Project nyata untuk latihan",
                  "Sertifikat penyelesaian",
                  "Update materi gratis",
                ].map((benefit, i) => (
                  <p key={i} className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-green-500" />
                    {benefit}
                  </p>
                ))}
              </div>

              <button
                onClick={handleJoin}
                className="w-full bg-red-500 hover:bg-yellow-400 hover:scale-[0.98] text-white py-3 rounded-lg font-semibold transition"
              >
                {course.price === 0 ? "Ikuti Kursus Gratis" : "Beli Kursus"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Section */}
      <div className="max-w-6xl mx-auto px-4 lg:px-0 space-y-12">
        {/* Tentang Kursus */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-red-600">
            Tentang Kursus
          </h2>
          <div className="h-1 w-16 bg-red-500 rounded mb-5"></div>
          <p className="text-gray-700 leading-relaxed text-justify">
            {course.desc}
          </p>
        </section>

        {/* Materi Kursus */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-red-600">
            Materi Kursus
          </h2>
          <div className="h-1 w-16 bg-red-500 rounded mb-5"></div>
          <ul className="space-y-3">
            {[
              "Pendahuluan",
              "Materi dasar",
              "Studi Kasus",
              "Latihan & Quiz",
              "Sertifikat Penyelesaian",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 p-3 bg-white rounded-lg border shadow-sm hover:bg-red-50 transition"
              >
                <BookOpen size={18} className="text-yellow-500" /> {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
