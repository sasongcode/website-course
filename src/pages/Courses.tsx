import { useState } from "react";
import { courses } from "../data/DataCourses";
import { Link } from "react-router-dom";
import { Star, Users } from "lucide-react";

export default function Courses() {
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [sortBy, setSortBy] = useState("populer");

  const categories = ["All", ...new Set(courses.map((c) => c.category))];

  const filteredCourses = courses.filter((course) => {
    const matchCategory =
      filterCategory === "All" || course.category === filterCategory;
    const matchSearch = course.title
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  // Sorting
  if (sortBy === "populer") {
    filteredCourses.sort((a, b) => b.students - a.students);
  } else if (sortBy === "rating") {
    filteredCourses.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === "harga") {
    filteredCourses.sort((a, b) => a.price - b.price);
  }

  return (
    <div className="max-w-7xl mx-auto px-7 py-16">
      {/* Judul */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mt-5 mb-8 text-zinc-700 drop-shadow-sm">
        Daftar <span className="text-yellow-400">Kursus</span>
      </h1>

      {/* Search */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Cari kursus..."
          className="w-full max-w-md px-5 py-3 rounded-full shadow"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Filter Kategori */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilterCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              filterCategory === category
                ? "bg-yellow-400 text-white shadow"
                : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Sorting */}
      <div className="flex justify-end mb-8">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400"
        >
          <option value="populer">Populer</option>
          <option value="rating">Rating Tertinggi</option>
          <option value="harga">Harga Termurah</option>
        </select>
      </div>

      {/* List Kursus */}
      <div className="grid md:grid-cols-3 gap-8">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col relative overflow-hidden group"
            >
              {/* Badge */}
              {course.price === 0 && (
                <span className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-md z-10">
                  Gratis
                </span>
              )}
              {course.bestSeller && (
                <span className="absolute top-3 right-3 bg-yellow-400 text-black text-xs px-2 py-1 rounded-md z-10">
                  Best Seller
                </span>
              )}

              {/* Gambar */}
              <div className="overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Konten */}
              <div className="p-5 flex flex-col flex-1">
                <h2 className="text-lg font-bold mb-2 group-hover:text-red-600 transition">
                  {course.title}
                </h2>

                {/* Rating & Students */}
                <div className="flex items-center gap-3 text-sm mb-2">
                  <div className="flex items-center text-yellow-500">
                    <Star size={16} fill="currentColor" />
                    <span className="ml-1 text-gray-700">{course.rating}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Users size={16} />
                    <span className="ml-1">
                      {course.students?.toLocaleString()} siswa
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-500 mb-3">
                  {course.level} • {course.duration}
                </p>

                {/* Harga */}
                {course.discountPrice ? (
                  <div className="mb-3">
                    <span className="text-red-600 font-bold">
                      Rp {course.discountPrice.toLocaleString()}
                    </span>{" "}
                    <span className="text-gray-400 line-through text-sm">
                      Rp {course.price.toLocaleString()}
                    </span>
                  </div>
                ) : (
                  <p className="font-medium text-zinc-600 mb-3">
                    {course.price === 0
                      ? "Gratis"
                      : `Rp ${course.price.toLocaleString()}`}
                  </p>
                )}

                <span className="text-xs bg-zinc-100 px-3 py-1 rounded-full w-fit mb-4 group-hover:bg-yellow-300 group-hover:text-zinc-800 transition">
                  {course.category}
                </span>

                {/* Tombol CTA */}
                <Link
                  to={`/courses/${course.id}`}
                  className="mt-auto px-5 py-2 rounded-lg text-sm font-semibold bg-white text-zinc-700 border border-zinc-500 hover:bg-red-500 hover:text-white hover:border-none transition text-center"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3">
            Kursus tidak ditemukan.
          </p>
        )}
      </div>
    </div>
  );
}
