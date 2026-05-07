"use client";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";


interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

interface NavChild extends NavItem {
  items?: NavItem[];
}

interface NavLink {
  label: string;
  href: string;
  type: 'direct' | 'dropdown' | 'mega';
  children?: NavChild[];
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/", type: "direct" },
  {
    label: "Company",
    href: "/about",
    type: "dropdown",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Our History", href: "/company/history" },
      { label: "Leadership", href: "/company/leadership" },
      { label: "CSR", href: "/company/csr" },
    ]
  },
  {
    label: "Solutions",
    href: "/solutions",
    type: "mega",
    children: [
      { label: "Overview", href: "/solutions" },
      { 
        label: "Bakery & Tortilla", 
        href: "/solutions/bakery-tortilla",
        items: [
          { label: "Food Preservative Blends", href: "/solutions/bakery-tortilla#food-preservative-blends" },
          { label: "Tortilla Batch Packs", href: "/solutions/bakery-tortilla#tortilla-batch-packs" },
          { label: "Leavening Agents", href: "/solutions/bakery-tortilla#leavening-agents" },
          { label: "Gums & Stabilizers", href: "/solutions/bakery-tortilla#gums-stabilizers" },
          { label: "Starches", href: "/solutions/bakery-tortilla#starches" },
          { label: "Wheat Protein", href: "/solutions/bakery-tortilla#wheat-protein" },
        ]
      },
      { label: "Nutrition Solutions", href: "https://primarianutrition.com/", isExternal: true },
      {
        label: "Applications",
        href: "/solutions/applications",
        items: [
          { label: "Bakery", href: "/solutions/applications/bakery" },
          { label: "Tortilla", href: "/solutions/applications/tortilla" },
          { label: "Dairy", href: "/solutions/applications/dairy" },
          { label: "Meat & Poultry", href: "/solutions/applications/meat-poultry" },
          { label: "Snack Foods", href: "/solutions/applications/snack-foods" },
          { label: "Prepared Foods", href: "/solutions/applications/prepared-foods" },
        ]
      }
    ]
  },
  {
    label: "Innovation",
    href: "/innovation",
    type: "dropdown",
    children: [
      { label: "R&D Overview", href: "/innovation/rd-overview" },
      { label: "Custom Blends", href: "/innovation/custom-blends" },
      { label: "Food Science Team", href: "/innovation/food-science-team" },
      { label: "Product Development", href: "/innovation/product-development" },
    ]
  },
  {
    label: "Manufacturing",
    href: "/manufacturing",
    type: "dropdown",
    children: [
      { label: "Facilities Overview", href: "/manufacturing" },
      { label: "Quality Control", href: "/manufacturing#quality-control" },
      { label: "Certifications", href: "/manufacturing#certifications" },
      { label: "Supply Chain", href: "/manufacturing#supply-chain" },
    ]
  },
  {
    label: "Articles",
    href: "/articles",
    type: "dropdown",
    children: [
      { label: "Blog & Insights", href: "/articles#blog" },
      { label: "Case Studies", href: "/articles#case-studies" },
      { label: "Events", href: "/articles#events" },
      { label: "Technical Documents", href: "/articles#technical-documents" },
    ]
  },
  { label: "Contact", href: "/contact", type: "direct" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
        : "bg-white/80 backdrop-blur-sm"
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/images/gcingredients_logo.webp"
              alt="GC Ingredients"
              width={200}
              height={50}
              className="h-14 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop Nav */}

          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? "_blank" : undefined}
                  rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-1 px-3 py-2 text-[15px] font-medium text-gray-700 hover:text-gc-green rounded-md transition-colors whitespace-nowrap"
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                  )}
                </a>

                {/* Standard Dropdown */}
                {link.children && activeDropdown === link.label && link.type === 'dropdown' && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        target={child.isExternal ? "_blank" : undefined}
                        rel={child.isExternal ? "noopener noreferrer" : undefined}
                        className="flex items-center justify-between px-4 py-2.5 text-[15px] text-gray-600 hover:text-gc-green hover:bg-green-50 transition-colors"
                      >
                        <span>{child.label}</span>
                        {child.isExternal && <span className="text-xs">↗</span>}
                      </a>
                    ))}
                  </div>
                )}

                {/* Mega Menu */}
                {link.children && activeDropdown === link.label && link.type === 'mega' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[700px] bg-white rounded-xl shadow-xl border border-gray-100 p-6 z-50 flex gap-6">
                     <div className="flex flex-col gap-3 w-1/3 border-r border-gray-100 pr-6">
                       {link.children.filter(c => !c.items).map(child => (
                          <a
                            key={child.label}
                            href={child.href}
                            target={child.isExternal ? "_blank" : undefined}
                            rel={child.isExternal ? "noopener noreferrer" : undefined}
                            className="flex items-center justify-between px-4 py-3 text-[15px] font-medium text-gray-800 hover:text-gc-green hover:bg-green-50 rounded-lg transition-colors border border-gray-100 shadow-sm"
                          >
                            <span>{child.label}</span>
                            {child.isExternal && <span className="text-xs text-gray-500">↗</span>}
                          </a>
                       ))}
                     </div>
                     <div className="flex-1 grid grid-cols-2 gap-6">
                        {link.children.filter(c => c.items).map(section => (
                          <div key={section.label}>
                            <a href={section.href} className="text-[15px] font-bold text-gray-900 border-b border-gray-100 pb-2 mb-3 block hover:text-gc-green transition-colors">
                              {section.label}
                            </a>
                            <div className="flex flex-col gap-2">
                              {section.items?.map(item => (
                                <a
                                  key={item.label}
                                  href={item.href}
                                  className="text-[14px] text-gray-600 hover:text-gc-green transition-colors"
                                >
                                  {item.label}
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                     </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden xl:flex items-center gap-3">
            <a href="#contact" className="btn-primary text-[15px] py-2! px-4!">
              Request Sample
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="xl:hidden border-t border-gray-100 py-4 max-h-[70vh] overflow-y-auto">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <div className="flex items-center justify-between px-4 py-2.5">
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? "_blank" : undefined}
                      rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                      className="text-[15px] font-semibold text-gray-900"
                      onClick={() => !link.children && setMobileOpen(false)}
                    >
                      {link.label}
                    </a>
                  </div>
                  
                  {link.children && link.type === 'dropdown' && (
                    <div className="bg-gray-50/50 py-1 ml-4 border-l-2 border-gray-100">
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          target={child.isExternal ? "_blank" : undefined}
                          rel={child.isExternal ? "noopener noreferrer" : undefined}
                          className="flex items-center justify-between px-6 py-2 text-[15px] text-gray-600 hover:text-gc-green"
                          onClick={() => setMobileOpen(false)}
                        >
                          <span>{child.label}</span>
                          {child.isExternal && <span className="text-xs">↗</span>}
                        </a>
                      ))}
                    </div>
                  )}

                  {link.children && link.type === 'mega' && (
                    <div className="bg-gray-50/50 py-2 ml-4 border-l-2 border-gray-100 space-y-4">
                      {link.children.map((child) => (
                        <div key={child.label} className="px-6">
                           <a
                              href={child.href}
                              target={child.isExternal ? "_blank" : undefined}
                              rel={child.isExternal ? "noopener noreferrer" : undefined}
                              className={`flex items-center justify-between text-[15px] transition-colors ${child.items ? "font-semibold text-gray-800 mb-2" : "text-gray-600 hover:text-gc-green"}`}
                              onClick={() => !child.items && setMobileOpen(false)}
                           >
                              <span>{child.label}</span>
                              {child.isExternal && <span className="text-xs">↗</span>}
                           </a>
                           {child.items && (
                             <div className="flex flex-col gap-2 pl-4 border-l border-gray-200 mt-2">
                               {child.items.map((item) => (
                                 <a
                                   key={item.label}
                                   href={item.href}
                                   className="text-[14px] text-gray-500 hover:text-gc-green"
                                   onClick={() => setMobileOpen(false)}
                                 >
                                    {item.label}
                                 </a>
                               ))}
                             </div>
                           )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 px-4 pb-4">
              <a href="#contact" className="btn-primary w-full justify-center py-3 text-[15px]" onClick={() => setMobileOpen(false)}>
                Request Sample
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

