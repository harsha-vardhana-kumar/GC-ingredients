import type { Metadata } from "next";
import Navbar from "../../../../components/layout/Navbar";
import Footer from "../../../../components/layout/Footer";
import HeroSection from "../../../../components/application-detail/HeroSection";
import OverviewStrip from "../../../../components/application-detail/OverviewStrip";
import AppOverview from "../../../../components/application-detail/AppOverview";
import SolutionCards from "../../../../components/application-detail/SolutionCards";
import WhyGCI from "../../../../components/application-detail/WhyGCI";
import TechnicalSupport from "../../../../components/application-detail/TechnicalSupport";
import RelatedApps from "../../../../components/application-detail/RelatedApps";
import CTASection from "../../../../components/application-detail/CTASection";
export const metadata: Metadata = {
  title: "Prepared Foods Application | GC Ingredients — Ingredient Solutions for Prepared Food Manufacturers",
  description:
    "Functional ingredient systems for ready meal, frozen food, and meal kit manufacturers — consistent quality, extended shelf life, and reliable performance at production scale.",
  keywords:
    "prepared food ingredients, frozen food stabilizers, ready meal ingredients, meal kit ingredients, freeze-thaw stability, food preservatives, GC Ingredients prepared foods",
  openGraph: {
    title: "Prepared Foods Application | GC Ingredients",
    description:
      "400+ prepared food formulations. Stability, shelf life, and consistency for prepared food manufacturers.",
    type: "website",
  },
};

export default function PreparedFoodsPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection
          industry="Prepared Foods"
          tag="Prepared Foods"
          h1="Ingredient Solutions for Prepared Food Manufacturers"
          subtext="Functional ingredient systems for ready meal, frozen food, and meal kit manufacturers — delivering consistent quality, extended shelf life, and reliable performance at production scale."
          stats={[
            { value: "400+", label: "Prepared Food Formulations" },
            { value: "25+", label: "Years Expertise" },
            { value: "Free", label: "Consultation" },
          ]}
          Icon="ChefHat"
        />

        <OverviewStrip
          highlights={[
            { Icon: "ChefHat", label: "Category", name: "Ready Meals" },
            { Icon: "Snowflake", label: "Category", name: "Frozen Foods" },
            { Icon: "Package", label: "Category", name: "Meal Kits" },
          ]}
        />

        <AppOverview
          h2="Stability, Shelf Life and Consistency for Prepared Food Production"
          para1="Prepared food manufacturers face unique ingredient challenges — products must perform consistently across freezing, reheating, and extended shelf life conditions. GC Ingredients develops ingredient systems specifically designed for these demanding requirements."
          para2="From freeze-thaw stabilizers for frozen meals to texture systems for ready meals and shelf life solutions for meal kits — our formulations are built for the full prepared food category."
          highlights={[
            "Freeze-thaw stability systems",
            "Extended shelf life solutions",
            "Texture consistency across reheating",
            "Sauce and gravy stabilizers",
          ]}
          buttonText="Explore Prepared Food Solutions"
          Icon="ChefHat"
        />

        <SolutionCards
          h2="GCI Ingredient Solutions for Prepared Foods"
          subtext="Built for the freeze-thaw, reheat, and shelf life demands of modern prepared food production."
          cards={[
            {
              Icon: "Droplets",
              name: "Hydrocolloids",
              description: "Stability and texture systems for ready meals, sauces, and gravies.",
              applications: ["Ready Meals", "Sauces", "Gravies"],
            },
            {
              Icon: "Layers",
              name: "Starches",
              description: "Thickening and freeze-thaw stability for frozen food applications.",
              applications: ["Frozen Foods", "Sauces"],
            },
            {
              Icon: "ShieldCheck",
              name: "Food Preservative Blends",
              description: "Extended shelf life solutions for all prepared food categories.",
              applications: ["All Prepared Foods"],
            },
            {
              Icon: "FlaskConical",
              name: "Custom Blends",
              description: "Application-specific systems engineered for your exact requirements.",
              applications: ["Meal Kits", "Ready Meals"],
            },
          ]}
        />

        <WhyGCI
          h2="Why Prepared Food Manufacturers Choose GCI"
          cards={[
            {
              Icon: "Microscope",
              title: "Prepared Food Expertise",
              description:
                "Deep knowledge across ready meals, frozen foods, and meal kit manufacturing challenges.",
            },
            {
              Icon: "Snowflake",
              title: "Freeze-Thaw Specialists",
              description:
                "Stabilizer systems engineered to maintain texture and quality through freeze-thaw cycles.",
            },
            {
              Icon: "ShieldCheck",
              title: "QC Validated Every Batch",
              description:
                "Consistent performance guaranteed through rigorous quality control at every step.",
            },
            {
              Icon: "Headphones",
              title: "Dedicated Prepared Food Specialist",
              description:
                "Expert support across formulation, scale-up, and production troubleshooting.",
            },
          ]}
        />

        <TechnicalSupport
          h2="Our Prepared Food Specialists Are Ready to Help"
          stats={[
            { value: "24hr", label: "Response Time" },
            { value: "Free", label: "Consultation" },
            { value: "On-Site", label: "Support Available" },
          ]}
        />

        <RelatedApps
          apps={[
            {
              name: "Dairy",
              href: "/solutions/applications/dairy",
              Icon: "Milk",
              description: "Hydrocolloid and stabilizer systems for dairy manufacturers.",
            },
            {
              name: "Meat & Poultry",
              href: "/solutions/applications/meat-poultry",
              Icon: "Beef",
              description: "Functional ingredient systems for processed meat and poultry manufacturers.",
            },
            {
              name: "Snack Foods",
              href: "/solutions/applications/snack-foods",
              Icon: "Cookie",
              description: "High-performance ingredients for snack food production.",
            },
          ]}
        />

        <CTASection
          h2="Ready to Upgrade Your Prepared Food Ingredients?"
          primaryBtn="Request a Custom Prepared Food Formula"
          secondaryBtn="Download Prepared Foods Guide"
        />
      </main>
      <Footer />
    </>
  );
}
