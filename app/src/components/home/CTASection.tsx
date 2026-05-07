"use client";
import { useState } from "react";
import { ArrowRight, Send, CheckCircle2 } from "lucide-react";

export default function CTASection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "", company: "", email: "", interest: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#0d3a22] relative overflow-hidden">
      {/* BG decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1a5c38]/50 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#e8650a]/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2 text-[#e8650a] text-xs font-bold uppercase tracking-widest mb-5 px-3 py-1.5 rounded-full border border-[#e8650a]/30 bg-[#e8650a]/10"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#e8650a] animate-pulse" />
              Get in Touch
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-white mb-6 leading-tight">
              Let&apos;s build your next{" "}
              <span className="text-[#e8650a]">ingredient system</span>{" "}
              together.
            </h2>

            <p className="text-green-200 text-lg leading-relaxed mb-10">
              Whether you need a sample, a formulation consultation, or a full project scoping session — 
              our food scientists are ready to help.
            </p>

            <div className="space-y-5">
              {[
                { title: "Sample Request", desc: "Receive lab samples of any product line within 5 business days." },
                { title: "Technical Consultation", desc: "1-hour call with a dedicated food scientist — no sales pitch." },
                { title: "Custom Formulation Quote", desc: "Full project scoping, timeline, and cost-in-use estimate." },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#e8650a] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-semibold text-sm">{item.title}</div>
                    <div className="text-green-300 text-sm mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-8 h-8 text-[#1a5c38]" />
                </div>
                <h3 className="text-2xl font-bold font-[family-name:var(--font-plus-jakarta)] text-gray-900 mb-2">
                  Message Received!
                </h3>
                <p className="text-gray-500 max-w-xs">
                  A member of our technical team will follow up within 1 business day.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold font-[family-name:var(--font-plus-jakarta)] text-gray-900 mb-6">
                  Send us a message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Smith"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1a5c38] focus:ring-2 focus:ring-[#1a5c38]/10 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Company *</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Your Company"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1a5c38] focus:ring-2 focus:ring-[#1a5c38]/10 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Business Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1a5c38] focus:ring-2 focus:ring-[#1a5c38]/10 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Area of Interest</label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-[#1a5c38] transition-all"
                    >
                      <option value="">Select an option…</option>
                      <option>Bakery Systems</option>
                      <option>Tortilla Systems</option>
                      <option>Dairy Solutions</option>
                      <option>Meat Processing</option>
                      <option>Custom Formulation</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Message</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project, current formulation challenges, or the sample you need…"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1a5c38] focus:ring-2 focus:ring-[#1a5c38]/10 transition-all resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center">
                    <Send className="w-4 h-4" />
                    Send Message
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    No spam. Your information is never shared with third parties.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
