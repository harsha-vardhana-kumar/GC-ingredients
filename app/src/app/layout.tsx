import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GC Ingredients | Functional Food Ingredient Systems",
  description:
    "Advanced functional ingredient systems for bakery, tortilla, dairy, and meat processing industries. Trusted by 100+ food manufacturers across 30+ countries.",
  keywords:
    "food ingredients, functional ingredients, bakery ingredients, food science, hydrocolloids, leavening agents, preservatives",
  openGraph: {
    title: "GC Ingredients | Functional Food Ingredient Systems",
    description:
      "Trusted ingredient solutions for global food manufacturers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://gcingredients.com/#organization",
        name: "GC Ingredients",
        url: "https://gcingredients.com/",
        logo: "https://gcingredients.com/images/gcingredients_logo.webp",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-678-974-0600",
          contactType: "customer service",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://gcingredients.com/#localBusiness",
        name: "GC Ingredients",
        image: "https://gcingredients.com/images/gcingredients_logo.webp",
        telephone: "+1-678-974-0600",
        address: {
          "@type": "PostalAddress",
          streetAddress: "3450 Atlanta Industrial Parkway NW",
          addressLocality: "Atlanta",
          addressRegion: "GA",
          postalCode: "30331",
          addressCountry: "US",
        },
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${plusJakarta.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}



