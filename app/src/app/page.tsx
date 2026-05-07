import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/home/HeroSection";
import MarqueeStrip from "../components/home/MarqueeStrip";
import IndustriesSection from "../components/home/IndustriesSection";
import SolutionsTabSection from "../components/home/SolutionsTabSection";
import FeaturedProductsSection from "../components/home/FeaturedProductsSection";
import WhyGCSection from "../components/home/WhyGCSection";
import ResearchSection from "../components/home/ResearchSection";
import ManufacturingSection from "../components/home/ManufacturingSection";
import StatsSection from "../components/home/StatsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import LogosSection from "../components/home/LogosSection";
import BlogPreviewSection from "../components/home/BlogPreviewSection";
import CTASection from "../components/home/CTASection";


export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeStrip />
        <IndustriesSection />
        <SolutionsTabSection />
        <FeaturedProductsSection />
        <WhyGCSection />
        <ResearchSection />
        <ManufacturingSection />
        <StatsSection />
        <TestimonialsSection />
        <LogosSection />
        <BlogPreviewSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

