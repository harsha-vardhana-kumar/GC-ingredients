"use client";
import { ArrowLeft, ArrowRight, Phone, Globe, ShieldCheck, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Purposefully made solutions for you",
    description: "Over 20 years of excellence – strategically providing high-quality formulations and superior technical support to the food and nutrition industry.",
    image: "/images/hero-meat.png",
    badge: "GC Ingredients"
  },
  {
    id: 2,
    title: "Bakery / Tortilla Solutions",
    description: "Your partner GCI – strategically providing high-quality formulations and superior technical support to the food and nutrition industry.",
    image: "/images/hero-bakery.png",
    badge: "Bakery & Tortilla"
  },
  {
    id: 3,
    title: "Launches Primaria Nutrition",
    description: "Nutrition solutions. Over 20 years of excellence – strategically providing high-quality formulations and superior technical support to the food and nutrition industry.",
    image: "/images/hero-dairy.png",
    badge: "Primaria Nutrition"
  }
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideNext = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const slidePrev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      slideNext();
    }, 4500); // Slightly more than 4s to allow for transition
    return () => clearInterval(timer);
  }, [slideNext]);

  return (
    <section className="relative w-full h-[90vh] lg:h-[100vh] min-h-[600px] overflow-hidden bg-black">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title} title={slide.title}
            fill
            priority={index === 0}
            className="object-cover"
          />
          {/* Overlay Gradient */}
          <div 
            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.4)_50%,transparent_100%)] z-10"
          />
        </div>
      ))}

      {/* Main Content Container */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-gc-green/20 backdrop-blur-md border border-gc-green/30 rounded-full text-white text-xs font-bold tracking-widest uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-gc-orange" />
                Food Ingredient Systems
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-display text-white leading-[1.1] mb-6">
                {slides[current].title.split(' ').map((word, i) => (
                  <span key={i} className="inline-block mr-2 lg:mr-4">
                    {word}
                  </span>
                ))}
              </h1>

              <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-10 max-w-xl font-medium">
                {slides[current].description}
              </p>

              <div className="flex flex-wrap gap-5">
                <a 
                  href="#solutions" 
                  className="px-8 py-4 bg-gc-green text-white rounded-lg font-bold flex items-center gap-2 hover:bg-gc-green-light transition-all shadow-lg hover:shadow-gc-green/30"
                >
                  Explore Solutions <ChevronRight className="w-5 h-5" />
                </a>
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-lg font-bold flex items-center gap-2 hover:bg-white/20 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Contact Technical Team
                </a>
              </div>
            </motion.div>
        </div>
      </div>

      {/* Navigation Controls - Desktop (Visible on hover hidden on mobile) */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-30 px-6 sm:flex justify-between items-center pointer-events-none hidden group">
        <button 
          onClick={(e) => { e.stopPropagation(); slidePrev(); }}
          className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all pointer-events-auto shadow-xl"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); slideNext(); }}
          className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all pointer-events-auto shadow-xl"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Dots Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > current ? 1 : -1);
              setCurrent(index);
            }}
            className={`transition-all duration-300 rounded-full h-2 ${
              index === current ? "w-10 bg-gc-orange" : "w-2 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Floating Badges */}
      <div className="absolute bottom-20 right-10 z-30 hidden lg:flex flex-col gap-4">
        <motion.div 
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-2xl shadow-2xl flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-full bg-gc-green/20 flex items-center justify-center border border-gc-green/30">
            <Globe className="w-5 h-5 text-gc-green" />
          </div>
          <div>
            <div className="text-white font-bold text-sm">30+ Countries</div>
            <div className="text-white/60 text-xs uppercase tracking-wider font-bold">Serving Global Markets</div>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1.5 }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-2xl shadow-2xl flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-full bg-gc-orange/20 flex items-center justify-center border border-gc-orange/30">
            <ShieldCheck className="w-5 h-5 text-gc-orange" />
          </div>
          <div>
            <div className="text-white font-bold text-sm">ISO Certified</div>
            <div className="text-white/60 text-xs uppercase tracking-wider font-bold">Quality Standardized</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
