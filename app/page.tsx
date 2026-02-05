import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import { Button } from "@/components/ui/button"
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";

export default function Home() {
  
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}
