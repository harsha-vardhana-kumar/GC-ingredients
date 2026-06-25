"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react";

const fadeUp: any = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const industries = [
  { value: "", label: "Select your area of interest…" },
  { value: "bakery", label: "Bakery" },
  { value: "tortilla", label: "Tortilla" },
  { value: "dairy", label: "Dairy" },
  { value: "meat", label: "Meat & Poultry" },
  { value: "snack", label: "Snack Foods" },
  { value: "plant-visit", label: "Plant Visit" },
  { value: "other", label: "Other" },
];

interface FormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  subject: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  company?: string;
  email?: string;
  phone?: string;
  industry?: string;
  subject?: string;
  message?: string;
}

type SubmitStatus = "idle" | "sending" | "success" | "error";

const infoCards = [
  {
    icon: MapPin,
    iconColor: "#e8650a",
    iconBg: "#fdf4ed",
    label: "Plant 1",
    detail: "3401 Atlanta Industrial Pkwy NW",
    sub: "Atlanta, GA 30331",
  },
  {
    icon: MapPin,
    iconColor: "#e8650a",
    iconBg: "#fdf4ed",
    label: "Plant 2 / Delivery",
    detail: "3450 Atlanta Industrial Pkwy NW",
    sub: "Atlanta, GA 30331",
  },
  {
    icon: Phone,
    iconColor: "#1a5c38",
    iconBg: "#f0f7f3",
    label: "Call Us",
    detail: "(678) 974-0600",
    sub: "Customer Service: (770) 695-1333",
  },
  {
    icon: Mail,
    iconColor: "#1a5c38",
    iconBg: "#f0f7f3",
    label: "Email Us",
    detail: "info@gcingredients.com",
    sub: "custservice@gcingredients.com",
  },
];

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactFormSection() {
  const [form, setForm] = useState<FormData>({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    industry: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  const validate = (data: FormData): FormErrors => {
    const errs: FormErrors = {};
    if (!data.fullName.trim()) errs.fullName = "Full name is required.";
    if (!data.company.trim()) errs.company = "Company name is required.";
    if (!data.email.trim()) errs.email = "Email is required.";
    else if (!validateEmail(data.email)) errs.email = "Enter a valid email address.";
    if (!data.industry) errs.industry = "Please select your industry.";
    if (!data.subject.trim()) errs.subject = "Subject is required.";
    if (!data.message.trim()) errs.message = "Message is required.";
    else if (data.message.trim().length < 20) errs.message = "Please provide at least 20 characters.";
    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors(validate({ ...form, [name]: value }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(form));
  };

  const getFieldState = (name: keyof FormData) => {
    if (!touched[name]) return "default";
    if (errors[name]) return "error";
    if (form[name]) return "valid";
    return "default";
  };

  const inputClass = (name: keyof FormData) => {
    const state = getFieldState(name);
    const base =
      "w-full px-4 py-3.5 rounded-lg text-base font-[family-name:var(--font-inter)] text-[#111827] placeholder:text-[#9ca3af] transition-all duration-200 outline-none border";
    if (state === "error")
      return `${base} border-red-400 bg-red-50/30 focus:border-red-500 focus:ring-2 focus:ring-red-200`;
    if (state === "valid")
      return `${base} border-[#1a5c38] bg-[#f0f9f4] focus:border-[#1a5c38] focus:ring-2 focus:ring-[#1a5c38]/20`;
    return `${base} border-[#6b7280]/40 bg-white focus:border-[#1a5c38] focus:ring-2 focus:ring-[#1a5c38]/20`;
  };

  const handleSubmit = () => {
    const allTouched = Object.fromEntries(Object.keys(form).map((k) => [k, true]));
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitStatus("sending");
    // Simulate async submission
    setTimeout(() => {
      setSubmitStatus("success");
      setForm({ fullName: "", company: "", email: "", phone: "", industry: "", subject: "", message: "" });
      setTouched({});
      setErrors({});
    }, 1500);
  };

  return (
    <section className="py-20 bg-[#f8f5ef] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 xl:gap-16 items-start">
          {/* ── LEFT: Form Card ─────────────────────────────────────── */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 border border-gray-100"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Card header tag */}
            <div className="section-tag mb-6">Send Us a Message</div>

            {/* Success state */}
            {submitStatus === "success" && (
              <motion.div
                className="flex items-start gap-4 bg-green-50 border border-green-200 rounded-xl p-5 mb-8"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <CheckCircle2 className="w-6 h-6 text-[#1a5c38] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1a5c38] font-[family-name:var(--font-plus-jakarta)]">
                    Message sent successfully!
                  </p>
                  <p className="text-[#2d7a4f] text-sm mt-1">
                    Our technical team will get back to you within 24 business hours.
                  </p>
                </div>
              </motion.div>
            )}

            <div className="grid sm:grid-cols-2 gap-5">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-[#111827] mb-1.5 font-[family-name:var(--font-inter)]">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={form.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Jane Smith"
                  className={inputClass("fullName")}
                  aria-describedby={errors.fullName ? "fullName-error" : undefined}
                />
                {touched.fullName && errors.fullName && (
                  <p id="fullName-error" className="flex items-center gap-1 text-red-500 text-xs mt-1.5">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                  </p>
                )}
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-[#111827] mb-1.5 font-[family-name:var(--font-inter)]">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={form.company}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Acme Foods Inc."
                  className={inputClass("company")}
                  aria-describedby={errors.company ? "company-error" : undefined}
                />
                {touched.company && errors.company && (
                  <p id="company-error" className="flex items-center gap-1 text-red-500 text-xs mt-1.5">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.company}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#111827] mb-1.5 font-[family-name:var(--font-inter)]">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="jane@acmefoods.com"
                  className={inputClass("email")}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {touched.email && errors.email && (
                  <p id="email-error" className="flex items-center gap-1 text-red-500 text-xs mt-1.5">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-[#111827] mb-1.5 font-[family-name:var(--font-inter)]">
                  Phone Number <span className="text-[#6b7280] font-normal text-xs ml-1">(optional)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="+1 (555) 000-0000"
                  className={inputClass("phone")}
                />
              </div>

              {/* Industry / Area of Interest */}
              <div>
                <label htmlFor="industry" className="block text-sm font-semibold text-[#111827] mb-1.5 font-[family-name:var(--font-inter)]">
                  Area of Interest <span className="text-red-500">*</span>
                </label>
                <select
                  id="industry"
                  name="industry"
                  value={form.industry}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${inputClass("industry")} cursor-pointer appearance-none`}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 12px center",
                    paddingRight: "40px",
                  }}
                  aria-describedby={errors.industry ? "industry-error" : undefined}
                >
                  {industries.map((opt) => (
                    <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                {touched.industry && errors.industry && (
                  <p id="industry-error" className="flex items-center gap-1 text-red-500 text-xs mt-1.5">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.industry}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-[#111827] mb-1.5 font-[family-name:var(--font-inter)]">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Custom blend inquiry"
                  className={inputClass("subject")}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                />
                {touched.subject && errors.subject && (
                  <p id="subject-error" className="flex items-center gap-1 text-red-500 text-xs mt-1.5">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.subject}
                  </p>
                )}
              </div>

              {/* Message — full width */}
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold text-[#111827] mb-1.5 font-[family-name:var(--font-inter)]">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Tell us about your ingredient needs, production volume, or any technical requirements…"
                  className={`${inputClass("message")} resize-none`}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                <div className="flex items-start justify-between mt-1">
                  {touched.message && errors.message ? (
                    <p id="message-error" className="flex items-center gap-1 text-red-500 text-xs">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                    </p>
                  ) : (
                    <span />
                  )}
                  <span className="text-xs text-[#9ca3af]">{form.message.length} chars</span>
                </div>
              </div>
            </div>

            {/* Submit */}
            <button
              id="contact-submit-btn"
              onClick={handleSubmit}
              disabled={submitStatus === "sending"}
              className="mt-6 w-full flex items-center justify-center gap-2.5 font-semibold text-base px-6 py-4 rounded-xl text-white transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ background: submitStatus === "sending" ? "#2d7a4f" : "#1a5c38" }}
              onMouseEnter={(e) => {
                if (submitStatus !== "sending") (e.currentTarget as HTMLButtonElement).style.background = "#2d7a4f";
              }}
              onMouseLeave={(e) => {
                if (submitStatus !== "sending") (e.currentTarget as HTMLButtonElement).style.background = "#1a5c38";
              }}
            >
              {submitStatus === "sending" ? (
                <>
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                  </svg>
                  Sending…
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>
          </motion.div>

          {/* ── RIGHT: Info Cards ────────────────────────────────────── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#1a5c38] mb-2">
                Get in Touch
              </h3>
              <p className="text-[#6b7280] leading-relaxed">
                Our technical team typically responds within 24 hours.
              </p>
            </motion.div>

            <div className="space-y-4">
              {infoCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.label}
                    className="bg-white rounded-xl p-6 shadow-md border border-gray-100 card-hover flex items-start gap-4"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    custom={i * 0.1}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: card.iconBg }}
                    >
                      <Icon className="w-5 h-5" style={{ color: card.iconColor }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#6b7280] mb-1 font-[family-name:var(--font-inter)]">
                        {card.label}
                      </p>
                      <p className="font-semibold text-[#111827] text-sm font-[family-name:var(--font-inter)]">
                        {card.detail}
                      </p>
                      <p className="text-[#6b7280] text-xs mt-0.5">{card.sub}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Hint note */}
            <motion.p
              className="mt-6 text-sm text-[#6b7280] italic leading-relaxed border-l-2 border-[#1a5c38]/30 pl-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
              Prefer a direct conversation? Use the form and mention your availability —
              we&apos;ll call you.
            </motion.p>
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="mt-8 rounded-xl overflow-hidden shadow-md border border-gray-100 h-64 relative"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.6562095033734!2d-84.50989022378943!3d33.79532857325515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f51a4f0b2f5b87%3A0x6b8bc134b2f6990d!2s3450%20Atlanta%20Industrial%20Pkwy%20NW%2C%20Atlanta%2C%20GA%2030331!5e0!3m2!1sen!2sus!4v1714000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
