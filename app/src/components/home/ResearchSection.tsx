import { ArrowRight, BookOpen, Download } from "lucide-react";

const papers = [
  {
    tag: "White Paper",
    tagColor: "#1a5c38",
    title: "Clean Label Reformulation in Tortilla Manufacturing",
    excerpt:
      "How to replace synthetic preservatives and emulsifiers without sacrificing shelf life or texture — a case study across 12 production facilities.",
    readTime: "12 min read",
    image: "/images/leavening.jpg",
  },
  {
    tag: "Application Note",
    tagColor: "#2563eb",
    title: "Hydrocolloid Selection Guide for Dairy Stabilization",
    excerpt:
      "A systematic framework for choosing between xanthan, guar, carrageenan, and pectin based on pH, temperature, and fat content of your formulation.",
    readTime: "8 min read",
    image: "/images/hydrocolloids.jpg",
  },
  {
    tag: "Research Brief",
    tagColor: "#c97b2b",
    title: "Freeze-Thaw Performance of Modified Starches in Sauces",
    excerpt:
      "Comparative analysis of five starch types under repeated freeze-thaw cycles — with viscosity retention data and sensory panel results.",
    readTime: "6 min read",
    image: "/images/starches.jpg",
  },
];

export default function ResearchSection() {
  return (
    <section id="innovation" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="section-tag mb-4">
              <BookOpen className="w-3 h-3" />
              Innovation Lab
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] max-w-xl">
              Food science{" "}
              <span className="text-gradient-green">insights & research</span>
            </h2>
          </div>
          <a href="#" className="btn-secondary flex-shrink-0">
            All Resources <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {papers.map((paper) => (
            <div
              key={paper.title}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden card-hover shadow-sm flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={paper.image}
                  alt={paper.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span
                    className="text-white text-xs font-bold px-3 py-1 rounded-full"
                    style={{ background: paper.tagColor }}
                  >
                    {paper.tag}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-gray-900 font-[family-name:var(--font-plus-jakarta)] text-lg mb-3 leading-snug">
                  {paper.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">{paper.excerpt}</p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-400">{paper.readTime}</span>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="flex items-center gap-1 text-xs font-semibold text-[#1a5c38] hover:underline"
                    >
                      Read <ArrowRight className="w-3 h-3" />
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-1 text-xs font-semibold text-gray-400 hover:text-gray-700"
                    >
                      <Download className="w-3 h-3" /> PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-12 rounded-2xl bg-[#1a5c38] p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-bold text-lg font-[family-name:var(--font-plus-jakarta)]">
              Need a custom technical consultation?
            </p>
            <p className="text-green-200 text-sm mt-1">
              Our food scientists are available for formulation guidance, regulatory review, and troubleshooting.
            </p>
          </div>
          <a
            href="#contact"
            className="flex items-center gap-2 bg-white text-[#1a5c38] font-semibold px-6 py-3 rounded-lg hover:bg-green-50 transition-all text-sm flex-shrink-0 hover:-translate-y-0.5"
          >
            Book a Call <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
