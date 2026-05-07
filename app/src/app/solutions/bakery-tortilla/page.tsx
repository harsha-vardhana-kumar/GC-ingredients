import type { Metadata } from "next";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import HeroSection from "../../../components/bakery-tortilla/HeroSection";
import IntroStrip from "../../../components/bakery-tortilla/IntroStrip";
import ProductCategoryTabs from "../../../components/bakery-tortilla/ProductCategoryTabs";
import WhyGCIBakery from "../../../components/bakery-tortilla/WhyGCIBakery";
import ApplicationsSplit from "../../../components/bakery-tortilla/ApplicationsSplit";
import TechnicalSupport from "../../../components/bakery-tortilla/TechnicalSupport";
import ProcessSteps from "../../../components/bakery-tortilla/ProcessSteps";
import RelatedProducts from "../../../components/bakery-tortilla/RelatedProducts";
import CTASection from "../../../components/bakery-tortilla/CTASection";

export const metadata: Metadata = {
  title: "Bakery & Tortilla Solutions | GC Ingredients",
  description:
    "GC Ingredients delivers scientifically advanced bakery and tortilla ingredient systems — food preservative blends, tortilla batch packs, leavening agents, gums, starches, and wheat protein. Custom formulations for food manufacturers.",
  keywords:
    "bakery ingredients, tortilla ingredients, food preservative blends, tortilla batch packs, leavening agents, gums stabilizers, starches, wheat protein, custom bakery formulations GC Ingredients",
  openGraph: {
    title: "Bakery & Tortilla Solutions | GC Ingredients — Custom Ingredient Systems",
    description:
      "From food preservative blends to custom leavening agents — GC Ingredients delivers end-to-end ingredient systems built specifically for bakery and tortilla manufacturers.",
    type: "website",
  },
};

export default function BakeryTortillaPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <IntroStrip />
        <ProductCategoryTabs />
        <WhyGCIBakery />
        <ApplicationsSplit />
        <TechnicalSupport />
        <ProcessSteps />
        <RelatedProducts />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
