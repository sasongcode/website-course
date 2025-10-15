"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqs } from "../data/DataFAQ";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 relative">
      {/* Background effect */}
      <div className="absolute inset-0 bg-white -z-10"></div>

      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-5xl font-extrabold text-zinc-700 mb-4">
          Pertanyaan Umum di
          <br />
          <span className="text-yellow-400">SongKoding📩</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Beberapa pertanyaan umum yang sering ditanyakan pengguna.
        </p>
      </div>

      {/* FAQ List */}
      <div className="grid md:grid-cols-2 gap-8">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={`rounded-2xl backdrop-blur-lg bg-white/70 border border-white/40 shadow-xl transition-all 
              duration-300 hover:shadow-2xl hover:-translate-y-1 group`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex justify-between items-center w-full px-6 py-5 text-left hover:underline"
            >
              <h4
                className={`text-lg font-semibold transition-colors group-hover:underline ${
                  openIndex === i ? "text-zinc-800" : "text-zinc-800"
                }`}
              >
                {faq.question}
              </h4>
              {openIndex === i ? (
                <ChevronUp className="text-gray-600" />
              ) : (
                <ChevronDown className="text-gray-400" />
              )}
            </button>

            {/* Answer */}
            <div
              className={`px-6 pb-5 transition-all duration-500 ease-in-out ${
                openIndex === i
                  ? "max-h-40 opacity-100 translate-y-0"
                  : "max-h-0 opacity-0 -translate-y-2 overflow-hidden"
              }`}
            >
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}