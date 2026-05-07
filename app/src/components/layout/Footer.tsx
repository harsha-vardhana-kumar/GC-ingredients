import { Mail, Phone, MapPin, Globe, MessageSquare, Video, ArrowRight, Clock } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our History", href: "/company/history" },
    { label: "Leadership", href: "/company/leadership" },
    { label: "CSR", href: "/company/csr" }
  ],
  Solutions: [
    { label: "Overview", href: "/solutions" },
    { label: "Bakery & Tortilla Solutions", href: "/solutions/bakery-tortilla" },
    { label: "Nutrition Solutions", href: "https://primarianutrition.com/" },
    { label: "Applications", href: "/applications" }
  ],
  "Quick Links": [
    { label: "Innovation", href: "/innovation" },
    { label: "Manufacturing", href: "/manufacturing" },
    { label: "Articles", href: "/articles" },
    { label: "Case Studies", href: "/articles#case-studies" },
    { label: "Contact", href: "/contact" }
  ]
};

export default function Footer() {
  return (
    <footer className="bg-[#0d3a22] text-white">
      {/* CTA Banner */}
      <div className="bg-[#1a5c38] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-plus-jakarta)] mb-1">
                Ready to formulate something exceptional?
              </h3>
              <p className="text-green-200 text-sm">
                Talk to our food scientists and get a custom ingredient recommendation.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <a
                href="#contact"
                className="flex items-center gap-2 bg-[#e8650a] hover:bg-[#f07a2a] text-white font-semibold px-6 py-3 rounded-lg transition-all hover:-translate-y-0.5 text-sm"
              >
                Request a Sample <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 border border-white/30 hover:border-white hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-lg transition-all text-sm"
              >
                Talk to an Expert
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="mb-6">
              <Image 
                src="/images/gcingredients_logo.webp" 
                alt="GC Ingredients" 
                width={200} 
                height={50} 
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-green-200 text-sm leading-relaxed mb-5 max-w-xs">
              Functional food ingredient systems trusted by manufacturers across 30+ countries for over two decades.
            </p>
            {/* Socials */}
            <div className="flex gap-3 mt-5">
              {[Globe, MessageSquare, Video].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#e8650a] flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm mb-4 text-white">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? "_blank" : undefined}
                      rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                      className="text-green-200 hover:text-white text-sm transition-colors hover:translate-x-0.5 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-2 text-green-200 text-sm">
                <MapPin className="w-4 h-4 text-[#e8650a] shrink-0 mt-0.5" />
                <span>Address placeholder</span>
              </div>
              <div className="flex items-center gap-2 text-green-200 text-sm">
                <Phone className="w-4 h-4 text-[#e8650a] shrink-0" />
                <span>+1 (XXX) XXX-XXXX</span>
              </div>
              <div className="flex items-center gap-2 text-green-200 text-sm">
                <Mail className="w-4 h-4 text-[#e8650a] shrink-0" />
                <span>info@gcingredients.com</span>
              </div>
              <div className="flex items-center gap-2 text-green-200 text-sm">
                <Clock className="w-4 h-4 text-[#e8650a] shrink-0" />
                <span>Mon–Fri: 8AM – 5PM CST</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-green-300 text-xs">
            © {new Date().getFullYear()} GC Ingredients. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((t) => (
              <a key={t} href="#" className="text-green-300 hover:text-white text-xs transition-colors">
                {t}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-300 text-xs">ISO 9001:2015 Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

