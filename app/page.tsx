
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ValueSection from "@/components/ValueSection";
import ProjectSlider from "@/components/ProjectSlider";
import Gallery from "@/components/Gallery";
import TeamSection from "@/components/TeamSection";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";

/**
 * Home Component
 *
 * This is the main entry point for the landing page of the portfolio.
 * It composes various sections of the website into a single scrollable view.
 *
 * Sections included:
 * - Header: Navigation bar
 * - Hero: Top section with parallax effect
 * - About: Information about the photographer/studio
 * - ValueSection: Core values and philosophy
 * - ProjectSlider: Interactive slider showcasing project categories
 * - Gallery: Grid layout of selected works
 * - TeamSection: Introduction to the team members
 * - Testimonials: Client reviews
 * - ContactSection: Contact information and footer
 */
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
