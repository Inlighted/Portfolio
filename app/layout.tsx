import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import CursorGlow from "@/components/CursorGlow";
import Loader from "@/components/Loader";
import PageTransition from "@/components/PageTransition";
import { profile } from "@/data/profile";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — AI/ML Engineer & Data Engineer`,
    template: `%s | ${profile.name}`,
  },
  description: profile.tagline,
  keywords: [
    "AI Engineer",
    "Machine Learning Engineer",
    "Data Engineer",
    "Python Developer",
    "SQL",
    "Power BI",
    "GenAI",
    "RAG",
    "LLM",
    "Azure",
    profile.name,
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} — AI/ML Engineer & Data Engineer`,
    description: profile.tagline,
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — AI/ML Engineer & Data Engineer`,
    description: profile.tagline,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  email: `mailto:${profile.email}`,
  url: siteUrl,
  jobTitle: "AI/ML Engineer & Data Engineer",
  address: { "@type": "PostalAddress", addressLocality: "Las Vegas", addressRegion: "NV", addressCountry: "US" },
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: [
    "Machine Learning",
    "Generative AI",
    "Data Engineering",
    "Python",
    "SQL",
    "Power BI",
    "Microsoft Azure",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${display.variable} ${body.variable} font-body antialiased`}>
        <ThemeProvider>
          <Loader />
          <ScrollProgress />
          <CursorGlow />
          <a
            href="#home"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-violet-600 focus:px-4 focus:py-2 focus:text-white"
          >
            Skip to content
          </a>
          <Navbar />
          <main>
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
