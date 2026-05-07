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
  title: "Bakery Application | GC Ingredients — Ingredient Solutions for Bakery Manufacturers",
  description:
    "Purpose-built ingredient systems for commercial and artisan bakery manufacturers — extended shelf life, clean label options, custom leavening, and texture control.",
  keywords:
    "bakery ingredients, bread ingredients, food preservatives, leavening agents, gums stabilizers, starches, bakery formulations, GC Ingredients bakery",
  openGraph: {
    title: "Bakery Application | GC Ingredients",
    description:
      "25+ years of bakery ingredient expertise. Custom formulations for artisan and commercial bakery manufacturers.",
    type: "website",
  },
};

export default function BakeryPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection
          industry="Bakery"
          tag="Bakery"
          h1="Ingredient Solutions for Bakery Manufacturers"
          subtext="Purpose-built ingredient systems for commercial and artisan bakery manufacturers — delivering consistent texture, extended shelf life, and reliable production performance."
          stats={[
            { value: "2,500+", label: "Bakery Formulations" },
            { value: "25+", label: "Years Expertise" },
            { value: "Free", label: "Consultation" },
          ]}
          Icon="Croissant"
        />

        <OverviewStrip
          highlights={[
            { Icon: "Croissant", label: "Category", name: "Bread, Rolls & Pastries" },
            { Icon: "Cookie", label: "Category", name: "Cookies & Crackers" },
            { Icon: "Cake", label: "Category", name: "Cakes & Desserts" },
          ]}
        />

        <AppOverview
          h2="From Artisan Breads to High-Volume Commercial Bakeries"
          para1="GC Ingredients has been developing ingredient systems for bakery manufacturers for over 25 years. Our deep application knowledge covers everything from artisan sourdough formulations to high-speed commercial bread production lines."
          para2="Whether you need extended shelf life, cleaner labels, improved texture, or consistent rise — our food scientists build custom solutions around your exact bakery application."
          highlights={[
            "Extended shelf life solutions",
            "Clean label options",
            "Custom leavening systems",
            "Texture and moisture control",
          ]}
          buttonText="Explore Bakery Ingredient Solutions"
          Icon="Croissant"
        />

        <SolutionCards
          h2="GCI Ingredient Solutions for Bakery"
          subtext="Application-specific formulations engineered for consistent bakery production performance."
          cards={[
            {
              Icon: "ShieldCheck",
              name: "Food Preservative Blends",
              description: "Extend shelf life up to 30+ days while maintaining freshness and quality.",
              applications: ["Bread", "Rolls", "Pastries", "Wraps"],
            },
            {
              Icon: "Wind",
              name: "Leavening Agents",
              description: "Consistent rise and texture across every production run.",
              applications: ["Bread", "Muffins", "Cakes", "Biscuits"],
            },
            {
              Icon: "Droplets",
              name: "Gums & Stabilizers",
              description: "Moisture retention and texture improvement for bakery products.",
              applications: ["Bread", "Tortillas", "Pastries"],
            },
            {
              Icon: "Layers",
              name: "Starches",
              description: "Binding and thickening for bakery batters and fillings.",
              applications: ["Batters", "Coatings", "Fillings"],
            },
          ]}
        />

        <WhyGCI
          h2="Why Bakery Manufacturers Choose GCI"
          cards={[
            {
              Icon: "Microscope",
              title: "25+ Years Bakery Expertise",
              description:
                "Decades of specialized knowledge across artisan and commercial bakery applications.",
            },
            {
              Icon: "Settings2",
              title: "Custom Formulations Only",
              description:
                "Every solution is engineered specifically for your bakery products and production environment.",
            },
            {
              Icon: "ShieldCheck",
              title: "QC Validated Every Batch",
              description:
                "Rigorous quality control ensures consistent performance batch after batch.",
            },
            {
              Icon: "Headphones",
              title: "Dedicated Bakery Specialist",
              description:
                "Your assigned bakery specialist is available throughout your product development process.",
            },
          ]}
        />

        <TechnicalSupport
          h2="Our Bakery Specialists Are Ready to Help"
          stats={[
            { value: "24hr", label: "Response Time" },
            { value: "Free", label: "Consultation" },
            { value: "On-Site", label: "Support Available" },
          ]}
        />

        <RelatedApps
          apps={[
            {
              name: "Tortilla",
              href: "/solutions/applications/tortilla",
              Icon: "UtensilsCrossed",
              description: "Complete ingredient systems for flour and corn tortilla manufacturers.",
            },
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
          ]}
        />

        <CTASection
          h2="Ready to Upgrade Your Bakery Ingredients?"
          primaryBtn="Request a Custom Bakery Formula"
          secondaryBtn="Download Bakery Guide"
        />
      </main>
      <Footer />
    </>
  );
}
