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
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${plusJakarta.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}



