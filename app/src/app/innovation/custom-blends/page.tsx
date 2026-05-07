import type { Metadata } from "next";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import HeroSection from "../../../components/innovation-detail/HeroSection";
import HighlightStrip from "../../../components/innovation-detail/HighlightStrip";
import MainContent from "../../../components/innovation-detail/MainContent";
import DetailCards from "../../../components/innovation-detail/DetailCards";
import ProcessSteps from "../../../components/innovation-detail/ProcessSteps";
import StatsBand from "../../../components/innovation-detail/StatsBand";
import RelatedPages from "../../../components/innovation-detail/RelatedPages";
import CTASection from "../../../components/innovation-detail/CTASection";
export const metadata: Metadata = {
  title: "Custom Blends | GC Ingredients Innovation",
  description:
    "Every GCI formulation is built specifically around your product, your process, and your cost targets. From single ingredient optimization to complete multi-component blend systems.",
  keywords:
    "custom ingredient blends, custom food formulation, ingredient optimization, multi-component blends, reformulation support, GC Ingredients custom blends",
  openGraph: {
    title: "Custom Blends | GC Ingredients",
    description:
      "No off-the-shelf. 2,500+ custom blends developed across 6 food categories.",
    type: "website",
  },
};

export default function CustomBlendsPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection
          pageName="Custom Blends"
          tag="Custom Blend Development"
          h1="No Off-the-Shelf. Every Blend Built for You."
          subtext="From a single ingredient optimization to a complete multi-component blend system — every GCI formulation is built specifically around your product, your process, and your cost targets."
          stats={[
            { value: "2,500+", label: "Custom Blends" },
            { value: "6", label: "Food Categories" },
            { value: "Free", label: "Consultation" },
          ]}
          Icon="Settings2"
          primaryBtn="Start Your Custom Project"
          secondaryBtn="Talk to a Scientist"
          primaryHref="/contact"
          secondaryHref="/innovation/food-science-team"
        />

        <HighlightStrip
          highlights={[
            {
              Icon: "Settings2",
              label: "Fully Custom",
              description: "Built around your exact specification and process",
            },
            {
              Icon: "FlaskConical",
              label: "Any Category",
              description: "Bakery, dairy, meat, snacks and more",
            },
            {
              Icon: "Rocket",
              label: "Fast to Market",
              description: "From brief to validated sample quickly",
            },
          ]}
        />

        <MainContent
          sectionTag="Custom Development"
          h2="Custom Formulations Built Around Your Exact Requirements"
          para1="At GC Ingredients, every ingredient system we develop is custom — built specifically around your product specification, your production process, and your cost targets. We do not believe in one-size-fits-all solutions because your product is not one-size-fits-all."
          para2="Our custom blend development capability covers everything from single-ingredient optimization to complete multi-component blend systems across all food categories we serve."
          highlights={[
            "Spec-to-formula custom development",
            "Iterative testing and refinement process",
            "Production-scale validation included",
            "Full technical documentation provided",
          ]}
          buttonText="Start Your Custom Blend Project"
          Icon="Settings2"
        />

        <DetailCards
          sectionTag="What We Develop"
          h2="Custom Blend Development Capabilities"
          subtext="From single-ingredient optimization to complete multi-component formula development."
          cards={[
            {
              Icon: "Target",
              iconColor: "green",
              title: "Single Ingredient Optimization",
              description:
                "Improving the performance of one key ingredient in your existing formula for texture, shelf life, or cost.",
            },
            {
              Icon: "Layers",
              iconColor: "orange",
              title: "Multi-Component Blends",
              description:
                "Custom multi-ingredient systems built for your specific application and production process.",
            },
            {
              Icon: "FlaskConical",
              iconColor: "green",
              title: "Complete Formula Development",
              description:
                "Full product formula development from concept brief to production-ready ingredient system.",
            },
            {
              Icon: "RefreshCw",
              iconColor: "orange",
              title: "Reformulation Support",
              description:
                "Expert support for clean label transitions, cost reduction, or performance improvement projects.",
            },
          ]}
        />

        <ProcessSteps
          sectionTag="How It Works"
          h2="From Brief to Validated Formula in 4 Steps"
          steps={[
            {
              number: "01",
              Icon: "MessageSquare",
              title: "Project Brief",
              description:
                "You share your product spec, process details, and performance targets with our team",
            },
            {
              number: "02",
              Icon: "Search",
              title: "Research",
              description:
                "Our scientists research ingredient options and formulation approaches for your application",
            },
            {
              number: "03",
              Icon: "FlaskConical",
              title: "Development",
              description:
                "Custom formulation development and iterative bench-scale testing cycles",
            },
            {
              number: "04",
              Icon: "Truck",
              title: "Delivery",
              description:
                "Validated formula delivered with full technical documentation and CoA",
            },
          ]}
        />

        <StatsBand
          stats={[
            { value: "2,500+", numericValue: 2500, suffix: "+", label: "Custom Blends Developed" },
            { value: "6", numericValue: 6, suffix: "", label: "Food Categories Covered" },
            { value: "25+", numericValue: 25, suffix: "+", label: "Years Formulation Experience" },
            { value: "Free", label: "Initial Consultation" },
          ]}
        />

        <RelatedPages
          pages={[
            {
              name: "R&D Overview",
              href: "/innovation/rd-overview",
              Icon: "Microscope",
              description:
                "500+ annual trials — the R&D engine behind every GCI custom blend.",
            },
            {
              name: "Product Development",
              href: "/innovation/product-development",
              Icon: "Rocket",
              description:
                "End-to-end product development from concept to production-ready delivery.",
            },
            {
              name: "Food Science Team",
              href: "/innovation/food-science-team",
              Icon: "Users",
              description:
                "Meet the scientists and specialists behind every GCI solution.",
            },
          ]}
        />

        <CTASection
          h2="Have a Formulation Challenge? Let's Solve It."
          primaryBtn="Start Your Custom Project"
          secondaryBtn="Download Custom Blend Guide"
        />
      </main>
      <Footer />
    </>
  );
}
