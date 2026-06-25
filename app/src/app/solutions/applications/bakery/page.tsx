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
          h2="From Artisan Breads and Pita to High-Volume Commercial Bakeries"
          para1="If you can bake it, we can help you improve it — from bread, buns and tortillas to cereals and bars. Our baking experts work closely with industrial bakers, bakery manufacturers and millers around the world to create products with great taste and texture — and that are healthier for both people and planet."
          para2="GC Ingredients has the right food ingredients for pita breads, whether it is die-cut or pressed pita breads. Our range of food ingredients includes dough conditioner, emulsifier, gum blends, baking powder, and yeast."
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
              description: "Extend shelf life while maintaining freshness. Sorbic Acid, Potassium Sorbate, and custom anti-microbial blends for cakes, breads, and baked goods.",
              applications: ["Bread", "Rolls", "Cakes", "Pastries"],
            },
            {
              Icon: "Wind",
              name: "Leavening Agents",
              description: "Double Acting Baking Powder, Sodium Bicarbonate, SALP, SAPP, MCP — consistent rise and texture across every production run.",
              applications: ["Bread", "Muffins", "Pita", "Biscuits"],
            },
            {
              Icon: "Droplets",
              name: "Gums, Stabilizers & Dough Conditioners",
              description: "Ellobind 7010, Ellobind 4000, 6000 & 7000, Guar Gum, Xanthan Gum — moisture retention and texture improvement. Anti-Staling Enzyme Blends and Emulsifier Blends for pita breads.",
              applications: ["Bread", "Pita", "Tortillas", "Pastries"],
            },
            {
              Icon: "Layers",
              name: "Starches & Wheat Proteins",
              description: "Corn Starches, Potato Starches, Tapioca Starches, Vital Wheat Gluten, Wheat Protein Isolate — binding, thickening, and dough strength for all bakery applications.",
              applications: ["Bread", "Pita", "Batters", "Coatings"],
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
