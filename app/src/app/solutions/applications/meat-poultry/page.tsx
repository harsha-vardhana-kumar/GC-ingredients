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
  title: "Meat & Poultry Application | GC Ingredients — Ingredient Solutions for Meat Manufacturers",
  description:
    "Functional ingredient systems for processed meat and poultry manufacturers — yield improvement, texture enhancement, and shelf life extension without compromising quality.",
  keywords:
    "meat ingredients, poultry ingredients, yield improvement, meat texture, phosphates, marinades, meat preservatives, GC Ingredients meat poultry",
  openGraph: {
    title: "Meat & Poultry Application | GC Ingredients",
    description:
      "400+ meat formulations. Yield, texture, and shelf life solutions for meat processing manufacturers.",
    type: "website",
  },
};

export default function MeatPoultryPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection
          industry="Meat & Poultry"
          tag="Meat & Poultry"
          h1="Ingredient Solutions for Meat & Poultry Manufacturers"
          subtext="Functional ingredient systems for processed meat and poultry manufacturers — delivering yield improvement, texture enhancement, and shelf life extension without compromising quality."
          stats={[
            { value: "400+", label: "Meat Formulations" },
            { value: "25+", label: "Years Expertise" },
            { value: "Free", label: "Consultation" },
          ]}
          Icon="Beef"
        />

        <OverviewStrip
          highlights={[
            { Icon: "Beef", label: "Category", name: "Processed Meats" },
            { Icon: "Drumstick", label: "Category", name: "Poultry Products" },
            { Icon: "Package", label: "Category", name: "Cured & Marinated" },
          ]}
        />

        <AppOverview
          h2="Yield, Texture and Shelf Life Solutions for Meat Processing"
          para1="GC Ingredients develops functional ingredient systems specifically for meat and poultry manufacturers — focusing on yield improvement, texture consistency, and shelf life extension across processed meat, poultry, and cured product applications."
          para2="Our meat ingredient systems are engineered to perform in high-speed production environments, delivering consistent results across every batch."
          highlights={[
            "Yield improvement systems",
            "Texture and binding solutions",
            "Shelf life extension",
            "Marinade and injection systems",
          ]}
          buttonText="Explore Meat & Poultry Solutions"
          Icon="Beef"
        />

        <SolutionCards
          h2="GCI Ingredient Solutions for Meat & Poultry"
          subtext="Engineered for yield, texture, and shelf life performance in high-speed meat production."
          cards={[
            {
              Icon: "ShieldCheck",
              name: "Food Preservative Blends",
              description: "Shelf life extension systems for processed meat products.",
              applications: ["All Processed Meats"],
            },
            {
              Icon: "Layers",
              name: "Phosphates & Binders",
              description: "Yield improvement and texture enhancement for meat products.",
              applications: ["Processed Meats", "Poultry"],
            },
            {
              Icon: "FlaskConical",
              name: "Custom Marinades",
              description: "Flavor and moisture retention systems for marinated products.",
              applications: ["Poultry", "Beef", "Pork"],
            },
            {
              Icon: "Droplets",
              name: "Starches",
              description: "Binding and texture systems for processed meat and sausage applications.",
              applications: ["Processed Meats", "Sausages"],
            },
          ]}
        />

        <WhyGCI
          h2="Why Meat Processors Choose GCI"
          cards={[
            {
              Icon: "Microscope",
              title: "Meat Processing Expertise",
              description:
                "Specialized knowledge across processed meats, poultry, and cured product applications.",
            },
            {
              Icon: "Settings2",
              title: "Custom Yield Systems",
              description:
                "Formulations engineered to maximize yield without sacrificing texture or quality.",
            },
            {
              Icon: "ShieldCheck",
              title: "QC Validated Every Batch",
              description:
                "Consistent performance guaranteed through rigorous quality control at every step.",
            },
            {
              Icon: "Headphones",
              title: "Dedicated Meat Specialist",
              description:
                "Expert support across formulation, scale-up, and ongoing production troubleshooting.",
            },
          ]}
        />

        <TechnicalSupport
          h2="Our Meat & Poultry Specialists Are Ready to Help"
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
              name: "Snack Foods",
              href: "/solutions/applications/snack-foods",
              Icon: "Cookie",
              description: "High-performance ingredients for snack food production.",
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
          h2="Ready to Upgrade Your Meat & Poultry Ingredients?"
          primaryBtn="Request a Custom Meat Formula"
          secondaryBtn="Download Meat Guide"
        />
      </main>
      <Footer />
    </>
  );
}
