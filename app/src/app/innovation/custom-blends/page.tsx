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
          h2="High Performing Custom Food Blends — Liquid and Dry"
          para1="Our custom blends are high performing and of superior quality. We offer both liquid and dry blending. We can develop a blend for your specific needs, or you can choose one of our existing blends for your formulation. To discuss your specific need, please reach out to us."
          para2="From anti-microbial blends for corn tortillas to meat & poultry systems, bakery gum blends, cake blends, and flavor masking agents — our custom blend development capability covers every food category we serve."
          highlights={[
            "Spec-to-formula custom development",
            "Both liquid and dry blending available",
            "Production-scale validation included",
            "Full technical documentation provided",
          ]}
          buttonText="Start Your Custom Blend Project"
          Icon="Settings2"
        />

        <DetailCards
          sectionTag="What We Develop"
          h2="Custom Blend Development Capabilities"
          subtext="From anti-microbial systems to bakery gum blends and flavor masking agents — every category covered."
          cards={[
            {
              Icon: "ShieldCheck",
              iconColor: "green",
              title: "Anti-Microbial Blends for Corn Tortillas",
              description:
                "GC Concentrate, GC Max, GC Protect, GC Strong — liquid and dry anti-microbial systems engineered for corn-based tortilla manufacturing.",
            },
            {
              Icon: "Wind",
              iconColor: "orange",
              title: "Baking Powder",
              description:
                "Single Acting Baking Powder, Double Acting Baking Powder, and Double Acting Baking Powder (Aluminum Free).",
            },
            {
              Icon: "Package",
              iconColor: "green",
              title: "Tortilla Batch Packs",
              description:
                "Burrito/Food Service/California Style (thin, translucent), Gordita/Casera/Homestyle (thick, fluffy), Keto Friendly/Low Carb Tortilla (net carbs < 5g), Clean Label Tortilla Batch Packs, Flavored Tortillas.",
            },
            {
              Icon: "Cake",
              iconColor: "orange",
              title: "Cake Blends & Meat Blends",
              description:
                "Cake: GCI Kake, GCI Glaze. Meat & Poultry: Ellogum 2000, Ellobind 5000 — buffered hydrocolloid systems to extend shelf life and replace phosphates/lactates.",
            },
            {
              Icon: "Layers",
              iconColor: "green",
              title: "Bakery Gum Blends & Dough Conditioners",
              description:
                "Ellogum 1000, Ellobind 4000, Ellobind 6000, Ellobind 7000 — specialized gum blends and dough conditioners for all bakery applications.",
            },
            {
              Icon: "FlaskConical",
              iconColor: "orange",
              title: "Flavor Masking Agents",
              description:
                "Preservative Flavor Masking Agent and Bitter Masking Agent — mask off-notes from preservatives or bitter compounds in your formulation.",
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
