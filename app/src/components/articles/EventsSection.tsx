"use client";
import { motion } from "framer-motion";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

const events = [
  {
    month: "JUL",
    day: "14",
    title: "IFT Annual Event 2025",
    location: "Chicago, IL",
    dateRange: "July 14–16, 2025",
    desc: "The world's largest annual food science and technology event. Visit the GCI booth to discuss custom ingredient solutions.",
    status: "Upcoming",
    href: "/articles/ift-2025",
  },
  {
    month: "JUN",
    day: "9",
    title: "Bakery Tech Expo 2025",
    location: "Las Vegas, NV",
    dateRange: "June 9–11, 2025",
    desc: "North America's premier bakery technology and ingredients trade show. Meet our bakery specialists in person.",
    status: "Upcoming",
    href: "/articles/bakery-tech-expo-2025",
  },
  {
    month: "MAY",
    day: "5",
    title: "Food Ingredients North America 2025",
    location: "Philadelphia, PA",
    dateRange: "May 5–7, 2025",
    desc: "A leading food ingredients sourcing and networking event. GCI will be showcasing our latest bakery and tortilla solutions.",
    status: "Upcoming",
    href: "/articles/fina-2025",
  },
];

export default function EventsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
          <div className="section-tag mx-auto mb-4">Upcoming Events</div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
            Meet GC Ingredients at <span className="text-[#1a5c38]">Industry Events</span>
          </h2>
          <p className="text-[#6b7280] max-w-xl mx-auto text-lg">
            Find us at major food industry trade shows and conferences — where our team is ready to discuss your ingredient challenges in person.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {events.map((ev, i) => (
            <motion.div
              key={ev.title}
              className="bg-[#f8f5ef] rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.07)] hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="w-20 h-20 rounded-2xl bg-[#0d3a22] flex flex-col items-center justify-center mb-5"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 + 0.2 }}
              >
                <div className="text-green-300 text-xs font-bold uppercase tracking-wider">{ev.month}</div>
                <div className="text-white text-2xl font-bold font-[family-name:var(--font-plus-jakarta)]">{ev.day}</div>
              </motion.div>
              <h3 className="font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-3 text-base leading-snug">{ev.title}</h3>
              <div className="flex flex-wrap gap-3 text-sm text-[#6b7280] mb-3">
                <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#e8650a]" /> {ev.location}</span>
                <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-[#1a5c38]" /> {ev.dateRange}</span>
              </div>
              <p className="text-[#6b7280] text-sm leading-relaxed mb-5 flex-1">{ev.desc}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#e8650a]/10 text-[#e8650a]">{ev.status}</span>
                <a href={ev.href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1a5c38] border border-[#1a5c38] hover:bg-[#1a5c38] hover:text-white px-3 py-1.5 rounded-xl transition-all group">
                  Register Interest <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
