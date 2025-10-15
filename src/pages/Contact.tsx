import { Mail, Phone, MapPin, Send, Github, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-700 mb-4">
            Hubungi <span className="text-yellow-400">Kami</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Punya pertanyaan atau butuh bantuan? Kami siap membantu Anda kapan saja.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info Kontak */}
          <div className="space-y-8">
            {[
              {
                icon: <Mail size={26} />,
                title: "Email",
                text: "songkoding@gmail.com",
              },
              {
                icon: <Phone size={26} />,
                title: "Telepon / WhatsApp",
                text: "+62 831 2522 1273",
              },
              {
                icon: <MapPin size={26} />,
                title: "Alamat",
                text: "Jl. Karangdoro - Genteng Road, Banyuwangi",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 bg-white/70 backdrop-blur-md rounded-xl shadow-md hover:shadow-xl transition"
              >
                <div className="bg-yellow-400 text-white p-3 rounded-lg shadow">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-zinc-800">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </div>
            ))}

            {/* Sosmed */}
            <div className="flex gap-6 pt-4">
              <a
                href="https://www.instagram.com/abcdmrzo/"
                target="_blank"
                className="p-3 rounded-full bg-zinc-900 text-white hover:bg-yellow-400 hover:scale-110 transition shadow-lg"
              >
                <Instagram size={22} />
              </a>
              <a
                href="https://www.github.com/Marzoo21"
                target="_blank"
                className="p-3 rounded-full bg-zinc-900 text-white hover:bg-yellow-400 hover:scale-110 transition shadow-lg"
              >
                <Github size={22} />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-zinc-800 mb-6">
              Kirim Pesan
            </h3>
            <form className="space-y-6">
              {/* Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  placeholder="Masukkan nama Anda"
                  className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Masukkan email Anda"
                  className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition"
                />
              </div>

              {/* Textarea */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pesan
                </label>
                <textarea
                  rows={4}
                  placeholder="Tulis pesan Anda..."
                  className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition"
                ></textarea>
              </div>

              {/* Tombol */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-yellow-400 text-white font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 hover:scale-105 transition shadow-md"
              >
                <Send size={18} />
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
