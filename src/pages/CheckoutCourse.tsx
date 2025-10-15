import { Link, useParams, useNavigate } from "react-router-dom";
import { courses } from "../data/DataCourses";
import { useState, useRef } from "react";
import { CircleCheckBig, Undo2 } from "lucide-react";

export default function Checkout() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === Number(id));
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);

  const [form, setForm] = useState({
    email: "",
    name: "",
    whatsapp: "",
  });

  if (!course) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-red-500">
          Kursus tidak ditemukan
        </h2>
        <p className="text-gray-600">Silakan kembali ke halaman kursus.</p>
      </div>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    const stored = JSON.parse(localStorage.getItem("myCourses") || "[]");
    const exist = stored.find((c: any) => c.id === course.id);

    if (!exist) {
      stored.push({ ...course, progress: 0 });
      localStorage.setItem("myCourses", JSON.stringify(stored));
    }

    if (course.price === 0) {
      alert(`Pendaftaran & checkout berhasil untuk kursus: ${course.title}`);
    } else {
      alert(`Checkout & checkout berhasil untuk kursus: ${course.title}`);
    }

    navigate("/courses");
  };

  const handleCheckoutClick = () => {
    if (formRef.current && formRef.current.reportValidity()) {
      handleSubmit();
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">
      {/* Form Data Diri */}
      <form
        ref={formRef}
        className="bg-white p-8 rounded-2xl shadow-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-zinc-700 mb-4">
          Informasi Pelanggan
        </h2>

        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Nama Lengkap
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Masukkan nama lengkap anda..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Masukkan email anda..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Nomor WhatsApp
          </label>
          <input
            type="text"
            name="whatsapp"
            value={form.whatsapp}
            onChange={handleChange}
            placeholder="+62 831..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        <p className="text-sm text-gray-500">
          <strong>Note:</strong> Pastikan email & nomor WhatsApp benar, karena
          akan digunakan untuk konfirmasi {course.price === 0 ? "pendaftaran" : "pembayaran"}.
        </p>
      </form>

      {/* Detail Kursus */}
      <div className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
        <h2 className="text-2xl font-bold text-zinc-700">Detail Kursus</h2>
        <div className="flex items-center gap-4">
          <img
            src={course.image}
            alt="Course"
            className="w-20 h-20 object-contain"
          />
          <div>
            <h3 className="text-lg font-bold text-zinc-800">{course.title}</h3>
            <p className="text-sm text-gray-600">{course.desc}</p>
          </div>
        </div>

        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex justify-between">
            <span>Harga</span>
            <span>
              {course.price === 0
                ? "Gratis"
                : course.discountPrice
                ? `Rp ${course.discountPrice.toLocaleString()}`
                : `Rp ${course.price.toLocaleString()}`}
            </span>
          </div>
          {course.discountPrice && (
            <div className="flex justify-between text-gray-500">
              <span>Harga Asli</span>
              <span className="line-through">
                Rp {course.price.toLocaleString()}
              </span>
            </div>
          )}
          <div className="flex justify-between text-zinc-800 font-semibold text-lg pt-3 border-t">
            <span>Total</span>
            <span>
              {course.price === 0
                ? "Gratis"
                : `Rp ${(course.discountPrice || course.price).toLocaleString()}`}
            </span>
          </div>
        </div>

        {/* Tombol dinamis */}
        <button
          onClick={handleCheckoutClick}
          className="w-full flex items-center justify-center gap-2 px-5 py-2.5 bg-red-500 font-medium text-white rounded-lg shadow hover:bg-yellow-400 transition"
        >
          <CircleCheckBig size={18} />
          {course.price === 0 ? "Ikuti Kursus Gratis" : "Checkout Sekarang"}
        </button>

        <Link
          to="/courses"
          className="inline-block text-sm text-red-500 hover:bg-red-50 border px-2 py-1 rounded-lg border-red-600"
        >
          <Undo2 size={16} className="inline-block mr-1 mb-1" />
          Batalkan & Kembali
        </Link>
      </div>
    </div>
  );
}