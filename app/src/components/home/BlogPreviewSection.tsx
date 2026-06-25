import { ArrowRight, Calendar, Clock } from "lucide-react";
import Image from "next/image";


const posts = [
  {
    category: "Bakery Science",
    categoryColor: "#c97b2b",
    title: "The Rise of Clean Label Bread: How to Replace 8 Additives Without Losing Texture",
    excerpt:
      "A practical reformulation roadmap for bakery manufacturers seeking to remove E-number preservatives, synthetic emulsifiers, and artificial improvers.",
    date: "March 18, 2026",
    readTime: "9 min read",
    image: "/images/leavening.jpg",
  },
  {
    category: "Food Tech",
    categoryColor: "#1a5c38",
    title: "Xanthan Gum vs. Guar Gum: Choosing the Right Hydrocolloid for Your Application",
    excerpt:
      "An application-focused comparison of two of the most widely used hydrocolloids — covering viscosity, synergy, cost, and label positioning.",
    date: "March 10, 2026",
    readTime: "6 min read",
    image: "/images/hydrocolloids.jpg",
  },
  {
    category: "Regulatory",
    categoryColor: "#7c3aed",
    title: "Mexico's New Labeling Regulations: What Food Manufacturers Need to Know in 2026",
    excerpt:
      "A breakdown of NOM-051 amendments affecting front-of-pack labeling, ingredient declarations, and health claim restrictions for processed foods.",
    date: "February 28, 2026",
    readTime: "7 min read",
    image: "/images/preservatives.jpg",
  },
];

export default function BlogPreviewSection() {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="section-tag mb-4">LATEST UPDATES</div>
            <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] max-w-xl">
              Latest updates from <span className="text-gradient-green">GC Ingredients and Primaria Nutrition</span>
            </h2>
          </div>
          <a href="#" className="btn-secondary flex-shrink-0">
            All Articles <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <article
              key={post.title}
              className={`group rounded-2xl overflow-hidden card-hover border border-gray-100 shadow-sm ${
                i === 0 ? "md:col-span-1" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title} title={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span
                  className="absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: post.categoryColor }}
                >
                  {post.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="font-bold text-gray-900 font-[family-name:var(--font-plus-jakarta)] text-lg leading-snug mb-3 group-hover:text-[#1a5c38] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{post.excerpt}</p>

                <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
