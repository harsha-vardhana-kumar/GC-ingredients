"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ArrowRight, Download } from "lucide-react";
import Image from "next/image";

type Category = "All" | "Blog & Insights" | "Case Studies" | "Events" | "Technical Documents";

export interface Article {
  id: string;
  category: Exclude<Category, "All">;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  href: string;
  isDownload?: boolean;
}

const articles: Article[] = [
  { id: "a1", category: "Blog & Insights", title: "Understanding Leavening Agents in Modern Tortilla Production", excerpt: "A deep dive into how leavening agent chemistry impacts tortilla texture, rise, and shelf stability in high-volume manufacturing.", date: "April 2025", readTime: "6 min read", href: "/articles/leavening-agents-tortilla" },
  { id: "a2", category: "Blog & Insights", title: "Clean Label Preservation: What Food Manufacturers Need to Know", excerpt: "Exploring the transition to clean label preservation systems without sacrificing shelf life or product integrity.", date: "March 2025", readTime: "5 min read", href: "/articles/clean-label-preservation" },
  { id: "a3", category: "Blog & Insights", title: "Hydrocolloids 101: A Practical Guide for Food Formulators", excerpt: "A formulator's guide to selecting the right hydrocolloid system for texture, stability, and cost performance.", date: "February 2025", readTime: "7 min read", href: "/articles/hydrocolloids-guide" },
  { id: "a4", category: "Case Studies", title: "How We Helped a Texas Tortilla Manufacturer Extend Shelf Life by 40%", excerpt: "A detailed look at the challenge, formulation approach, and results achieved for a regional tortilla producer.", date: "March 2025", readTime: "4 min read", href: "/articles/tortilla-shelf-life-case-study" },
  { id: "a5", category: "Case Studies", title: "Custom Leavening System Reduces Costs by 18% for Regional Bakery", excerpt: "How a custom leavening reformulation delivered consistent rise while significantly lowering ingredient cost.", date: "February 2025", readTime: "5 min read", href: "/articles/leavening-cost-case-study" },
  { id: "a6", category: "Case Studies", title: "Reformulation Success: Clean Label Transition for Snack Food Brand", excerpt: "A national snack brand achieved full clean label compliance with zero impact on taste or texture.", date: "January 2025", readTime: "4 min read", href: "/articles/clean-label-snack-case-study" },
  { id: "a7", category: "Events", title: "GCI at IFT Annual Event 2025 — Chicago", excerpt: "Visit the GCI booth at the world's largest annual food science event to discuss custom ingredient solutions.", date: "July 2025", readTime: "Upcoming", href: "/articles/ift-2025" },
  { id: "a8", category: "Events", title: "Bakery Tech Expo 2025 — Las Vegas", excerpt: "North America's premier bakery technology trade show. Meet our bakery ingredient specialists in person.", date: "June 2025", readTime: "Upcoming", href: "/articles/bakery-tech-expo-2025" },
  { id: "a9", category: "Events", title: "Food Ingredients North America 2025", excerpt: "A leading food ingredients sourcing event where GCI showcases our latest bakery and tortilla solutions.", date: "May 2025", readTime: "Upcoming", href: "/articles/fina-2025" },
  { id: "a10", category: "Technical Documents", title: "Technical Guide: Tortilla Batch Pack Selection", excerpt: "Complete guide for selecting the right batch pack system for flour and corn tortilla production.", date: "Download PDF", readTime: "2.4 MB", href: "#", isDownload: true },
  { id: "a11", category: "Technical Documents", title: "White Paper: Functional Starches in Bakery Applications", excerpt: "In-depth research on starch functionality and selection criteria for bakery manufacturers.", date: "Download PDF", readTime: "1.8 MB", href: "#", isDownload: true },
  { id: "a12", category: "Technical Documents", title: "Product Sheet: GCI Leavening Agent Systems", excerpt: "Complete product sheet covering all GCI leavening agent systems and their applications.", date: "Download PDF", readTime: "890 KB", href: "#", isDownload: true },
];

const tabs: { label: Category; count: number }[] = [
  { label: "All", count: 24 },
  { label: "Blog & Insights", count: 10 },
  { label: "Case Studies", count: 6 },
  { label: "Events", count: 4 },
  { label: "Technical Documents", count: 4 },
];

const categoryColors: Record<Exclude<Category, "All">, { bg: string; text: string }> = {
  "Blog & Insights": { bg: "#1a5c38", text: "white" },
  "Case Studies": { bg: "#e8650a", text: "white" },
  "Events": { bg: "#0d3a22", text: "white" },
  "Technical Documents": { bg: "#6b7280", text: "white" },
};

function ArticleCard({ article, index }: { article: Article; index: number }) {
  const colors = categoryColors[article.category];
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(0,0,0,0.12)] transition-all duration-300 group flex flex-col"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative h-48 overflow-hidden">
        <motion.div className="absolute inset-0" whileHover={{ scale: 1.05 }} transition={{ duration: 0.45 }}>
          <Image src="/images/rd_lab1.png" alt={article.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </motion.div>
        <span className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: colors.bg, color: colors.text }}>
          {article.category}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-2 text-[15px] leading-snug line-clamp-2">
          {article.title}
        </h3>
        <p className="text-[#6b7280] text-sm leading-relaxed mb-4 line-clamp-2 flex-1">{article.excerpt}</p>
        <div className="flex items-center gap-4 text-xs text-[#9ca3af] mb-4">
          <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {article.date}</span>
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
        </div>
        {article.isDownload ? (
          <a href={article.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#e8650a] hover:text-[#1a5c38] transition-colors group/dl">
            <Download className="w-3.5 h-3.5" /> Download PDF
          </a>
        ) : (
          <a href={article.href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1a5c38] hover:text-[#e8650a] transition-colors group/link">
            Read More <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
          </a>
        )}
      </div>
    </motion.div>
  );
}

interface FilterTabsAndGridProps {
  searchQuery: string;
}

export default function FilterTabsAndGrid({ searchQuery }: FilterTabsAndGridProps) {
  const [activeTab, setActiveTab] = useState<Category>("All");

  const filtered = articles.filter((a) => {
    const matchesTab = activeTab === "All" || a.category === activeTab;
    const q = searchQuery.toLowerCase();
    const matchesSearch = !q || a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q) || a.category.toLowerCase().includes(q);
    return matchesTab && matchesSearch;
  });

  return (
    <>
      {/* Sticky filter tabs */}
      <div className="sticky top-[72px] z-40 bg-white border-b border-[#ede8df]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-0 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                className={`relative flex items-center gap-2 px-4 sm:px-6 py-4 text-sm font-semibold whitespace-nowrap transition-colors shrink-0 ${
                  activeTab === tab.label ? "text-[#1a5c38]" : "text-[#6b7280] hover:text-[#1a5c38]"
                }`}
              >
                {tab.label}
                <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${activeTab === tab.label ? "bg-[#e8650a] text-white" : "bg-gray-100 text-[#6b7280]"}`}>
                  {tab.count}
                </span>
                {activeTab === tab.label && (
                  <motion.div
                    layoutId="tab-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1a5c38]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="section-tag mx-auto mb-4">Latest Articles</div>
            <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827]">
              Everything You Need to <span className="text-[#1a5c38]">Stay Informed</span>
            </h2>
          </motion.div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab + searchQuery}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {filtered.length > 0 ? (
                filtered.map((article, i) => (
                  <ArticleCard key={article.id} article={article} index={i} />
                ))
              ) : (
                <motion.div className="col-span-full text-center py-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="text-5xl mb-4">🔍</div>
                  <p className="text-[#6b7280] text-lg">No articles found matching &ldquo;{searchQuery}&rdquo;</p>
                  <p className="text-[#9ca3af] text-sm mt-1">Try a different search term or browse all categories.</p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
