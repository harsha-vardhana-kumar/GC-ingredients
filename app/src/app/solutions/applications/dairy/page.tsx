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
  title: "Dairy Application | GC Ingredients — Ingredient Solutions for Dairy Manufacturers",
  description:
    "Advanced hydrocolloid and stabilizer systems for dairy manufacturers — texture consistency, moisture control, and stability across cheese, yogurt, and dairy beverage applications.",
  keywords:
    "dairy ingredients, hydrocolloids, dairy stabilizers, cheese ingredients, yogurt texture, ice cream stabilizers, GC Ingredients dairy",
  openGraph: {
    title: "Dairy Application | GC Ingredients",
    description:
      "300+ dairy formulations. Stabilizer and texture systems built specifically for dairy manufacturers.",
    type: "website",
  },
};

export default function DairyPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection
          industry="Dairy"
          tag="Dairy"
          h1="Ingredient Solutions for Dairy Manufacturers"
          subtext="Advanced hydrocolloid and stabilizer systems for dairy manufacturers — delivering texture consistency, moisture control, and stability across cheese, yogurt, and dairy beverage applications."
          stats={[
            { value: "300+", label: "Dairy Formulations" },
            { value: "25+", label: "Years Expertise" },
            { value: "Free", label: "Consultation" },
          ]}
          Icon="Milk"
        />

        <OverviewStrip
          highlights={[
            { Icon: "Milk", label: "Category", name: "Cheese & Yogurt" },
            { Icon: "GlassWater", label: "Category", name: "Dairy Beverages" },
            { Icon: "IceCream2", label: "Category", name: "Frozen Dairy" },
          ]}
        />

        <AppOverview
          h2="Stabilizer and Texture Systems Built for Dairy"
          para1="Dairy manufacturing demands ingredient systems that deliver consistent viscosity, texture, and stability across a wide range of processing conditions. GC Ingredients provides hydrocolloid and stabilizer solutions engineered specifically for dairy applications."
          para2="From cheese texture systems to yogurt viscosity control and ice cream stabilizers — our formulations are built around your specific dairy application and processing environment."
          highlights={[
            "Viscosity and texture control",
            "Moisture management systems",
            "Freeze-thaw stability",
            "Clean label compatible options",
          ]}
          buttonText="Explore Dairy Ingredient Solutions"
          Icon="Milk"
        />

        <SolutionCards
          h2="GCI Ingredient Solutions for Dairy"
          subtext="Engineered for the viscosity, texture, and stability demands of dairy manufacturing."
          cards={[
            {
              Icon: "Droplets",
              name: "Hydrocolloids",
              description: "Viscosity and texture control for dairy products.",
              applications: ["Yogurt", "Dairy Beverages", "Sauces"],
            },
            {
              Icon: "Layers",
              name: "Gums & Stabilizers",
              description: "Structure and moisture control across dairy categories.",
              applications: ["Cheese", "Ice Cream", "Yogurt"],
            },
            {
              Icon: "FlaskConical",
              name: "Custom Blends",
              description: "Application-specific dairy systems built around your requirements.",
              applications: ["All Dairy Categories"],
            },
            {
              Icon: "Thermometer",
              name: "Starches",
              description: "Thickening and stability systems for dairy beverages and desserts.",
              applications: ["Dairy Beverages", "Desserts"],
            },
          ]}
        />

        <WhyGCI
          h2="Why Dairy Manufacturers Choose GCI"
          cards={[
            {
              Icon: "Microscope",
              title: "Dairy Application Expertise",
              description:
                "Deep technical knowledge across cheese, yogurt, frozen dairy, and dairy beverage categories.",
            },
            {
              Icon: "Settings2",
              title: "Custom Dairy Formulations",
              description:
                "Every stabilizer and hydrocolloid system engineered for your specific dairy application.",
            },
            {
              Icon: "ShieldCheck",
              title: "QC Validated Every Batch",
              description:
                "Consistent performance guaranteed through rigorous quality control at every step.",
            },
            {
              Icon: "Headphones",
              title: "Dedicated Dairy Specialist",
              description:
                "Specialist support throughout formulation, scale-up, and ongoing production.",
            },
          ]}
        />

        <TechnicalSupport
          h2="Our Dairy Specialists Are Ready to Help"
          stats={[
            { value: "24hr", label: "Response Time" },
            { value: "Free", label: "Consultation" },
            { value: "On-Site", label: "Support Available" },
          ]}
        />

        <RelatedApps
          apps={[
            {
              name: "Bakery",
              href: "/solutions/applications/bakery",
              Icon: "Croissant",
              description: "Custom ingredient systems for artisan and commercial bakery manufacturers.",
            },
            {
              name: "Meat & Poultry",
              href: "/solutions/applications/meat-poultry",
              Icon: "Beef",
              description: "Functional ingredient systems for processed meat and poultry manufacturers.",
            },
            {
              name: "Prepared Foods",
              href: "/solutions/applications/prepared-foods",
              Icon: "ChefHat",
              description: "Functional ingredient systems for ready meals and frozen foods.",
            },
          ]}
        />

        <CTASection
          h2="Ready to Upgrade Your Dairy Ingredients?"
          primaryBtn="Request a Custom Dairy Formula"
          secondaryBtn="Download Dairy Guide"
        />
      </main>
      <Footer />
    </>
  );
}
