import About from "@/components/sections/about";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import LanguageSwitcher from "@/components/ui/language-switcher";
import FloatContact from "@/components/ui/float-contact";

export default function Home() {

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Footer />
      <LanguageSwitcher />
      <FloatContact />
    </div>
  );
}
