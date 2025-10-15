import { Calendar, Undo2, User } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { blogs } from "../data/DataBlogs";

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogs.find((a) => a.id === Number(id));

  if (!blog) {
    return (
      <p className="text-center text-red-500 mt-10">Artikel tidak ditemukan.</p>
    );
  }

  // Pecah konten jadi paragraf
  const paragraphs = blog.content.trim().split("\n\n");

  // Artikel terkait
  const relatedBlogs = blogs
    .filter((a) => a.id !== blog.id)
    .slice(0, 2);

  return (
    <div className="bg-white py-12 px-6 lg:px-12 max-w-5xl mx-auto">
      <div className="mb-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-sky-600 hover:bg-sky-100 border px-4 py-2 rounded-lg border-sky-400"
        >
          <Undo2 size={16} /> Kembali ke Blog
        </Link>
      </div>

      {/* Gambar */}
      <div className="mb-6">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 object-contain rounded-lg bg-gray-50"
        />
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        {blog.title}
      </h1>
      <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
        <span className="flex items-center gap-1">
          <Calendar size={16} /> {blog.date}
        </span>
        <span className="flex items-center gap-1">
          <User size={16} /> {blog.author}
        </span>
      </div>

      {/* Konten Artikel */}
      <article className="text-gray-800 leading-relaxed text-lg space-y-6 mb-16">
        {paragraphs.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </article>

      {/* Artikel Terkait */}
      <div className="border-t-4 pt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Baca Juga :</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {relatedBlogs.map((rel) => (
            <Link
              key={rel.id}
              to={`/blog/${rel.id}`}
              className="bg-gray-50 rounded-xl shadow transform transition duration-300 hover:scale-[1.02] hover:shadow-xl overflow-hidden flex flex-col"
            >
              <img
                src={rel.image}
                alt={rel.title}
                className="h-44 w-full object-cover"
              />
              <div className="p-5 flex flex-col flex-grow">
                <p className="text-sm text-gray-500 mb-1">{rel.date}</p>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {rel.title}
                </h3>
                <p className="text-sm text-gray-600">{rel.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
