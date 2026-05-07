import type { Metadata } from "next";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import HeroSection from "../../components/solutions/HeroSection";
import WhatWeOfferStrip from "../../components/solutions/WhatWeOfferStrip";
import SolutionCategories from "../../components/solutions/SolutionCategories";
import ApplicationsGrid from "../../components/solutions/ApplicationsGrid";
import HowItWorks from "../../components/solutions/HowItWorks";
import WhyGCISolutions from "../../components/solutions/WhyGCISolutions";
import TechnicalSupportStrip from "../../components/solutions/TechnicalSupportStrip";
import CTASection from "../../components/solutions/CTASection";

export const metadata: Metadata = {
  title: "Solutions | GC Ingredients — A to Z Ingredient Solutions",
  description:
    "Explore GC Ingredients' complete range of food ingredient solutions — from bakery and tortilla systems to nutrition formulations. Custom blends, in-house manufacturing, and expert technical support.",
  keywords:
    "GC Ingredients solutions, food ingredient solutions, bakery ingredients, tortilla ingredients, custom ingredient blends, food manufacturer ingredients, Primaria Nutrition",
  openGraph: {
    title: "Solutions | GC Ingredients — A to Z Ingredient Solutions for Food Manufacturers",
    description:
      "From custom blend development to full-scale production supply — GC Ingredients delivers end-to-end ingredient systems designed around your product, your process, and your goals.",
    type: "website",
  },
};

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhatWeOfferStrip />
        <SolutionCategories />
        <ApplicationsGrid />
        <HowItWorks />
        <WhyGCISolutions />
        <TechnicalSupportStrip />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
