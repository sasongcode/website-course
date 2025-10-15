import { useParams, Link, useNavigate } from "react-router-dom";
import { packs } from "../data/DataPackage";
import { useState, useRef } from "react";
import { CircleCheckBig, LogOut } from "lucide-react";

export default function CheckoutPackage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const plan = packs.find((p) => p.id.toString() === id);

  const formRef = useRef<HTMLFormElement>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    company: "",
  });

  if (!plan) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-red-500">
          Paket tidak ditemukan
        </h2>
        <p className="text-gray-600">Silakan kembali ke halaman paket.</p>
        <Link
          to="/packages"
          className="inline-block mt-6 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold rounded-lg shadow"
        >
          Kembali ke Paket
        </Link>
      </div>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`
✅ Checkout berhasil untuk paket: ${plan.name}

Email: ${form.email}
Nama: ${form.name}
WhatsApp: ${form.whatsapp}
    `);
    navigate("/"); // setelah alert, kembali ke home
  };

  const handleCheckoutClick = () => {
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">
      {/* === Form Data Diri === */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-zinc-700 mb-4">
          Informasi Pelanggan
        </h2>

        {/* Nama */}
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Nama Lengkap
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Masukkan nama lengkap..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Masukkan email..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
            required
          />
        </div>

        {/* WhatsApp */}
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
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
            required
          />
        </div>

        <p className="text-sm text-gray-500">
          <strong>Note:</strong> Email & WhatsApp harus aktif untuk konfirmasi
          pembayaran.
        </p>
      </form>

      {/* Detail Paket */}
      <div className="bg-white p-8 rounded-2xl shadow-lg space-y-6 flex flex-col justify-between">
        <h2 className="text-2xl font-bold text-zinc-700">Detail Paket</h2>

        <div className="flex items-center gap-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2721/2721291.png"
            alt="Plan"
            className="w-16 h-16"
          />
          <div>
            <h3 className="text-lg font-bold text-zinc-800">{plan.name}</h3>
            <p className="text-sm text-gray-600">
              Paket premium untuk menunjang pembelajaran & karir coding kamu 🚀
            </p>
          </div>
        </div>

        {/* Harga & Diskon */}
        <div className="space-y-3 text-sm text-gray-600">
          <div className="flex justify-between">
            <span>Harga Normal</span>
            <span className="line-through text-red-500 font-mono">{plan.oldPrice}</span>
          </div>
          <div className="flex justify-between">
            <span>Diskon</span>
            <span className="text-green-600 font-semibold font-mono">
              {plan.discount}%
            </span>
          </div>
          <div className="flex justify-between">
            <span>Harga + Diskon</span>
            <span className="font-semibold text-yellow-500 font-mono">{plan.price}</span>
          </div>
          <div className="flex justify-between border-t pt-2 text-zinc-800">
            <span className="mt-2">Total Bayar</span>
            <span className="font-bold text-2xl text-zinc-900 font-mono">
              {plan.price}
            </span>
          </div>
        </div>

        {/* Tombol */}
        <div className="flex gap-5">
          <Link
            to="/"
            className="w-full flex items-center gap-2 px-5 py-2.5 bg-gray-200 font-medium text-sm md:text-base text-zinc-800 rounded-lg shadow hover:bg-gray-300 transition hover:scale-[1.02]"
          >
            <LogOut size={18} />
            Kembali
          </Link>
          <button
            type="button"
            onClick={handleCheckoutClick}
            className="w-full flex items-center gap-2 px-5 py-2.5 bg-yellow-400 font-medium text-sm md:text-base text-white rounded-lg shadow hover:bg-yellow-500 transition hover:scale-[1.02]"
          >
            <CircleCheckBig size={18} />
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
