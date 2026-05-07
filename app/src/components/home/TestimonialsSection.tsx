"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "GC Ingredients helped us reformulate our entire tortilla line away from synthetic preservatives. The PreservePlus system matched our original shelf life spec exactly — and our clean label claim opened three new retailer accounts.",
    name: "María García",
    title: "VP of R&D, Grupo Maseca",
    company: "Grupo Maseca",
    rating: 5,
    avatar: "MG",
    avatarColor: "#1a5c38",
  },
  {
    quote:
      "The technical support from GC is unlike anything we've experienced with other suppliers. They had a food scientist on-site within 48 hours when we had a texture issue. Problem solved in one visit.",
    name: "James O'Brien",
    title: "Head of Procurement, Flowers Foods",
    company: "Flowers Foods",
    rating: 5,
    avatar: "JO",
    avatarColor: "#e8650a",
  },
  {
    quote:
      "We've grown from 2 SKUs to 14 using GC's modular ingredient systems. Their ability to scale formulations without quality drift is exceptional. True partners in every sense of the word.",
    name: "Sarah Kim",
    title: "Director of Innovation, Dr. Oetker",
    company: "Dr. Oetker",
    rating: 5,
    avatar: "SK",
    avatarColor: "#2563eb",
  },
  {
    quote:
      "What sets GC apart is the depth of their formulation library. We found a working prototype for our freeze-thaw stable sauce in under 3 weeks — something our previous supplier couldn't achieve in 6 months.",
    name: "Carlos Mendoza",
    title: "Technical Director, Grupo Bimbo",
    company: "Grupo Bimbo",
    rating: 5,
    avatar: "CM",
    avatarColor: "#7c3aed",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  const t = testimonials[index];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="section-tag mx-auto mb-4">Testimonials</div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827]">
            What our partners <span className="text-gradient-green">say</span>
          </h2>
        </div>

        <div className="relative bg-[#f8f5ef] rounded-3xl p-8 lg:p-14">
          {/* Large quote icon */}
          <Quote className="w-12 h-12 text-[#1a5c38]/10 absolute top-8 left-8" />

          {/* Stars */}
          <div className="flex gap-1 mb-6 justify-center">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} className="w-5 h-5 text-[#e8650a] fill-[#e8650a]" />
            ))}
          </div>

          {/* Quote */}
          <blockquote className="text-xl lg:text-2xl text-gray-800 font-[family-name:var(--font-plus-jakarta)] text-center leading-relaxed mb-10 max-w-3xl mx-auto">
            &ldquo;{t.quote}&rdquo;
          </blockquote>

          {/* Author */}
          <div className="flex items-center justify-center gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
              style={{ background: t.avatarColor }}
            >
              {t.avatar}
            </div>
            <div>
              <div className="font-bold text-gray-900">{t.name}</div>
              <div className="text-gray-500 text-sm">{t.title}</div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border-2 border-gray-200 hover:border-[#1a5c38] hover:text-[#1a5c38] flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`rounded-full transition-all ${
                    i === index ? "w-6 h-2.5 bg-[#1a5c38]" : "w-2.5 h-2.5 bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border-2 border-gray-200 hover:border-[#1a5c38] hover:text-[#1a5c38] flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
