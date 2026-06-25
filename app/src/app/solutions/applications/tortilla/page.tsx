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
  title: "Tortilla Application | GC Ingredients — Ingredient Solutions for Tortilla Manufacturers",
  description:
    "Complete ingredient systems for flour and corn tortilla manufacturers — softness, rollability, and shelf life performance your customers expect.",
  keywords:
    "tortilla ingredients, flour tortilla, corn tortilla, tortilla batch packs, food preservatives, leavening agents, gums stabilizers, GC Ingredients tortilla",
  openGraph: {
    title: "Tortilla Application | GC Ingredients",
    description:
      "500+ tortilla formulations. Purpose-built for flour and corn tortilla manufacturers.",
    type: "website",
  },
};

export default function TortillaPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection
          industry="Tortilla"
          tag="Tortilla"
          h1="Ingredient Solutions for Tortilla Manufacturers"
          subtext="Complete ingredient systems for flour and corn tortilla manufacturers — delivering softness, rollability, and shelf life performance your customers expect."
          stats={[
            { value: "500+", label: "Tortilla Formulations" },
            { value: "25+", label: "Years Expertise" },
            { value: "Free", label: "Consultation" },
          ]}
          Icon="UtensilsCrossed"
        />

        <OverviewStrip
          highlights={[
            { Icon: "UtensilsCrossed", label: "Category", name: "Flour Tortillas" },
            { Icon: "Sandwich", label: "Category", name: "Corn Tortillas" },
            { Icon: "Utensils", label: "Category", name: "Wraps & Flatbreads" },
          ]}
        />

        <AppOverview
          h2="Purpose-Built for Flour and Corn Tortilla Production"
          para1="At GC Ingredients, we offer custom batch packs or individual ingredients to meet all your flour tortilla needs. Our products are safe and easy to handle and we can ship to your location with competitive lead times."
          para2="GC Ingredients has also successfully developed various liquid preservative systems and gum blend systems for corn based tortillas. Whether you are making corn tortillas or corn chips, or whether you are stone grinding corn or using corn flour, we have a solution for you to obtain the desired shelf life, the right texture, and a clean flavor."
          highlights={[
            "Softness and rollability systems",
            "Extended shelf life blends",
            "Complete batch pack solutions",
            "Flour and corn tortilla systems",
          ]}
          buttonText="Explore Tortilla Ingredient Solutions"
          Icon="UtensilsCrossed"
        />

        <SolutionCards
          h2="GCI Ingredient Solutions for Tortilla"
          subtext="Trusted by tortilla manufacturers across North America for consistency and reliability."
          cards={[
            {
              Icon: "Package",
              name: "Flour Tortilla Ingredients",
              description: "Double Acting Baking Powder, Ellobind 7010, Guar Gum, Corn Starches, Xanthan Gum, Potato Starches, Tapioca Starches, Vital Wheat Gluten, Sorbic Acid, Wheat Protein Isolate, Potassium Sorbate.",
              applications: ["Flour Tortillas", "Wraps", "Flatbreads"],
            },
            {
              Icon: "ShieldCheck",
              name: "Corn Tortilla — Liquid (55 gal, 275 gal IBC, Tanker)",
              description: "GC Max, GC Protect, GC Strong, GC Concentrate — anti-microbial liquid preservative systems for corn flour tortillas.",
              applications: ["Corn Tortillas", "Corn Chips"],
            },
            {
              Icon: "Droplets",
              name: "Corn Tortilla — Dry Form",
              description: "Guar Gum, Enzyme Gum Blend EGB 07, Xanthan Gum, Dry Preservative Blend, Sodium CMC Gum, Anti-Staling Enzyme Softening Blend.",
              applications: ["Corn Tortillas", "Stone Ground", "Corn Flour"],
            },
            {
              Icon: "Wind",
              name: "Tortilla Batch Packs",
              description: "Burrito / Food Service / California Style, Gordita / Casera, Homestyle, Keto Friendly / Low Carb, Flavored Tortillas, Clean Label Tortilla Batch Packs.",
              applications: ["Flour Tortillas", "Flatbreads"],
            },
          ]}
        />

        <WhyGCI
          h2="Why Tortilla Manufacturers Choose GCI"
          cards={[
            {
              Icon: "Microscope",
              title: "Tortilla Category Specialist",
              description:
                "Deep expertise across flour tortilla, corn tortilla, and flatbread applications.",
            },
            {
              Icon: "Package",
              title: "Complete Batch Pack Systems",
              description:
                "Pre-measured, ready-to-use batch packs that simplify production and reduce error.",
            },
            {
              Icon: "ShieldCheck",
              title: "QC Validated Every Batch",
              description:
                "Consistent performance guaranteed through rigorous quality control at every step.",
            },
            {
              Icon: "Headphones",
              title: "Dedicated Tortilla Specialist",
              description:
                "Specialist support throughout formulation, scale-up, and ongoing production.",
            },
          ]}
        />

        <TechnicalSupport
          h2="Our Tortilla Specialists Are Ready to Help"
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
          h2="Ready to Upgrade Your Tortilla Ingredients?"
          primaryBtn="Request a Custom Tortilla Formula"
          secondaryBtn="Download Tortilla Guide"
        />
      </main>
      <Footer />
    </>
  );
}
