import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

interface CourseProps {
  id: number;
  title: string;
//   desc: string;
  level: string;
  duration: string;
  rating: number;
  price: number;
  image: string;
}

export default function CourseCard({
  id,
  title,
//   desc,
  level,
  duration,
  rating,
  price,
  image,
}: CourseProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group flex flex-col"
    >
      {/* Gambar */}
      <div className="relative bg-gray-50 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="h-32 md:h-40 object-contain p-4 transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Konten */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-1 group-hover:text-indigo-600 transition">
            {title}
          </h3>
          {/* <p className="text-sm text-gray-600 mb-2 line-clamp-2">{desc}</p> */}
          <p className="text-xs text-indigo-600 font-medium">
            {level} • {duration}
          </p>
        </div>

        {/* Rating + Price */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center text-yellow-500">
            <Star size={16} fill="currentColor" />
            <span className="ml-1 text-sm">{rating}</span>
          </div>
          <p className="font-bold text-indigo-600">
            {price === 0 ? "Gratis" : `Rp ${price.toLocaleString()}`}
          </p>
        </div>

        {/* Tombol Read More */}
        <div className="mt-5 flex justify-end">
          <Link
            to={`/courses/${id}`}
            className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Read More
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
