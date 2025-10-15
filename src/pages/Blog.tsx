import { Calendar, } from "lucide-react";
import { Link } from "react-router-dom";
import { blogs } from "../data/DataBlogs";

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 relative z-10">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-zinc-700 mb-3">
          Blog <span className="text-sky-500">SongKoding</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Temukan blog tentang Tips & Trik Coding, Tips Menjadi Developer, dan Inspirasi Belajar.
        </p>
      </div>

      {/* Grid Card */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
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
                className="mt-auto text-center bg-sky-500 hover:bg-sky-600 text-white text-sm py-2 px-4 rounded-lg font-medium transition"
              >
                Baca Selengkapnya
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
