import type { Metadata } from "next";
import About from "@/components/sections/about";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import LanguageSwitcher from "@/components/ui/language-switcher";
import FloatContact from "@/components/ui/float-contact";

export const metadata: Metadata = {
  title: "Home - Innovative Software Solutions",
  description: "Transform your ideas into reality with cutting-edge software solutions. We specialize in web development, mobile apps, cloud solutions, AI, and cybersecurity.",
  openGraph: {
    title: "Silicon Infiniti - Innovative Software Solutions",
    description: "Transform your ideas into reality with cutting-edge software solutions. We build the future with innovation.",
    type: "website",
  },
};

export default function Home() {
  // JSON-LD structured data for WebSite and WebPage
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Silicon Infiniti",
    url: "https://siliconinfiniti.com",
    description: "Innovative software solutions company specializing in web development, mobile apps, cloud solutions, AI, and cybersecurity.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://siliconinfiniti.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Home - Silicon Infiniti",
    description: "Transform your ideas into reality with cutting-edge software solutions.",
    url: "https://siliconinfiniti.com",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      <div>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Footer />
        <LanguageSwitcher />
        <FloatContact />
      </div>
    </>
  );
}
