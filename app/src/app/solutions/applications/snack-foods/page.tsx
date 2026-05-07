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
  title: "Snack Foods Application | GC Ingredients — Ingredient Solutions for Snack Manufacturers",
  description:
    "Ingredient systems engineered for high-speed snack food production — crispy texture, consistent flavor, and extended shelf life across chips, crackers, and extruded snack applications.",
  keywords:
    "snack food ingredients, chip ingredients, cracker ingredients, extruded snacks, snack preservatives, leavening agents, snack seasonings, GC Ingredients snack",
  openGraph: {
    title: "Snack Foods Application | GC Ingredients",
    description:
      "300+ snack formulations. High-performance ingredients for snack food manufacturers.",
    type: "website",
  },
};

export default function SnackFoodsPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection
          industry="Snack Foods"
          tag="Snack Foods"
          h1="Ingredient Solutions for Snack Food Manufacturers"
          subtext="Ingredient systems engineered for high-speed snack food production — delivering crispy texture, consistent flavor, and extended shelf life across chips, crackers, and extruded snack applications."
          stats={[
            { value: "300+", label: "Snack Formulations" },
            { value: "25+", label: "Years Expertise" },
            { value: "Free", label: "Consultation" },
          ]}
          Icon="Cookie"
        />

        <OverviewStrip
          highlights={[
            { Icon: "Cookie", label: "Category", name: "Chips & Crackers" },
            { Icon: "Layers", label: "Category", name: "Extruded Snacks" },
            { Icon: "ShieldCheck", label: "Category", name: "Shelf Life Systems" },
          ]}
        />

        <AppOverview
          h2="High-Performance Ingredients for High-Speed Snack Production"
          para1="Snack food manufacturing demands ingredient systems that perform consistently at high production speeds — delivering the crispy texture, bold flavor, and extended shelf life consumers expect. GC Ingredients provides formulations purpose-built for snack food applications."
          para2="From starch systems for extruded snacks to leavening agents for crackers and preservative blends for chips — our solutions cover the full snack food spectrum."
          highlights={[
            "Crispy texture systems",
            "Extended shelf life",
            "High-speed production compatible",
            "Flavour and seasoning systems",
          ]}
          buttonText="Explore Snack Food Solutions"
          Icon="Cookie"
        />

        <SolutionCards
          h2="GCI Ingredient Solutions for Snack Foods"
          subtext="Purpose-built for high-speed production with consistent texture and shelf life performance."
          cards={[
            {
              Icon: "Layers",
              name: "Starches",
              description: "Texture and expansion systems for snack food applications.",
              applications: ["Extruded Snacks", "Chips", "Crackers"],
            },
            {
              Icon: "Wind",
              name: "Leavening Agents",
              description: "Crunch and rise systems engineered for snack food manufacturing.",
              applications: ["Crackers", "Puffed Snacks"],
            },
            {
              Icon: "ShieldCheck",
              name: "Food Preservative Blends",
              description: "Extended shelf life solutions for all snack food categories.",
              applications: ["All Snack Categories"],
            },
            {
              Icon: "FlaskConical",
              name: "Custom Seasonings",
              description: "Flavour systems engineered for snack food applications.",
              applications: ["Chips", "Crackers", "Popcorn"],
            },
          ]}
        />

        <WhyGCI
          h2="Why Snack Food Manufacturers Choose GCI"
          cards={[
            {
              Icon: "Microscope",
              title: "Snack Category Expertise",
              description:
                "Specialized knowledge across chips, crackers, extruded snacks, and popcorn applications.",
            },
            {
              Icon: "Settings2",
              title: "Custom Texture Systems",
              description:
                "Formulations engineered to deliver the crispy texture and mouthfeel your brand demands.",
            },
            {
              Icon: "ShieldCheck",
              title: "QC Validated Every Batch",
              description:
                "Consistent performance guaranteed through rigorous quality control at every step.",
            },
            {
              Icon: "Headphones",
              title: "Dedicated Snack Specialist",
              description:
                "Expert support across formulation, scale-up, and high-speed production environments.",
            },
          ]}
        />

        <TechnicalSupport
          h2="Our Snack Food Specialists Are Ready to Help"
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
              name: "Tortilla",
              href: "/solutions/applications/tortilla",
              Icon: "UtensilsCrossed",
              description: "Complete ingredient systems for flour and corn tortilla manufacturers.",
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
          h2="Ready to Upgrade Your Snack Food Ingredients?"
          primaryBtn="Request a Custom Snack Formula"
          secondaryBtn="Download Snack Guide"
        />
      </main>
      <Footer />
    </>
  );
}
