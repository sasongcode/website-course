import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-800/60 backdrop-blur-lg shadow-md"
          : "bg-zinc-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        {/* Brand Logo */}
        <Link to="/">
          <img 
            src="../public/songkodingg.png" 
            alt="Brand"
            className="h-10 w-auto object-contain"
            />
        </Link>
        {/* Menu desktop */}
        <div className="hidden md:flex space-x-6 font-semibold">
          {[
            { to: "/", label: "Home" },
            { to: "/courses", label: "Courses" },
            { to: "/about", label: "About" },
            // { to: "/faq", label: "FAQ" },
            { to: "/contact", label: "Contact" },
            { to: "/blog", label: "Blog" },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400"
                  : "hover:underline transition"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Toggle button (mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-zinc-800 text-white px-6 py-4 space-y-4 font-semibold">
          {[
            { to: "/", label: "Home" },
            { to: "/courses", label: "Courses" },
            { to: "/about", label: "About" },
            // { to: "/faq", label: "FAQ" },
            { to: "/contact", label: "Contact" },
            { to: "/blog", label: "Blog"},
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "block text-yellow-400"
                  : "block hover:underline transition"
              }
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}