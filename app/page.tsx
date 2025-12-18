
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ValueSection from "@/components/ValueSection";
import ProjectSlider from "@/components/ProjectSlider";
import Gallery from "@/components/Gallery";
import TeamSection from "@/components/TeamSection";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-white selection:text-black">
      <Header />
      <Hero />
      <About />
      <ValueSection />
      <ProjectSlider />
      <Gallery />
      <TeamSection />
      <Testimonials />
      <ContactSection />
    </main>
  );
}
