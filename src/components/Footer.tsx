import { Facebook, Twitter, Instagram, Github, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-300 pt-14 pb-8 mt-16 font-semibold">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Brand & Deskripsi */}
        <div>
          <div className="flex items-center gap-2 mb-4">
              <img
                src="/songkodingg.png"
                alt="Logo SongKoding"
                className="h-10 w-auto object-contain"
              />
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            Platform belajar coding online dengan materi terstruktur,
            berbasis project nyata, dan mentor berpengalaman.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">Navigasi</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-yellow-300 transition">• Home</Link></li>
            <li><Link to="/courses" className="hover:text-yellow-300 transition">• Courses</Link></li>
            <li><Link to="/about" className="hover:text-yellow-300 transition">• About</Link></li>
            {/* <li><Link to="/faq" className="hover:text-yellow-300 transition">• FAQ</Link></li> */}
            <li><Link to="/contact" className="hover:text-yellow-300 transition">• Contact</Link></li>
            <li><Link to="/blog" className="hover:text-yellow-300 transition">• Blog</Link></li>
          </ul>
        </div>

        {/* Resources / Bantuan */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">Bantuan</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-300 transition">Panduan Pengguna</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Kebijakan Privasi</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Syarat & Ketentuan</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Dukungan</a></li>
          </ul>
        </div>

        {/* Sosial Media */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">Ikuti Kami</h3>
          <div className="flex gap-3 mb-4">
            <a href="#" className="p-2 bg-zinc-800 rounded-full hover:bg-yellow-400 hover:text-zinc-900 transition hover:-translate-y-1">
              <Facebook size={18} />
            </a>
            <a href="#" className="p-2 bg-zinc-800 rounded-full hover:bg-yellow-400 hover:text-zinc-900 transition hover:-translate-y-1">
              <Twitter size={18} />
            </a>
            <a href="#" className="p-2 bg-zinc-800 rounded-full hover:bg-yellow-400 hover:text-zinc-900 transition hover:-translate-y-1">
              <Instagram size={18} />
            </a>
            <a href="#" className="p-2 bg-zinc-800 rounded-full hover:bg-yellow-400 hover:text-zinc-900 transition hover:-translate-y-1">
              <Github size={18} />
            </a>
          </div>

          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={17} /> songkoding@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +62 831 2522 1273
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-zinc-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} SongKoding. Dibuat dengan ❤️ oleh Ahmad Damar Sasongko.
      </div>
    </footer>
  );
}