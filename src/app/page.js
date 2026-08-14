import Hero from "../components/home/Hero";
import AboutPreview from "../components/home/AboutPreview";
import FeaturedProjects from "../components/home/FeaturedProjects";
import SkillsPreview from "../components/home/SkillsPreview";
import ContactCTA from "../components/home/ContactCTA";

export default function Home() {
  return (
    <main>
      <Hero />

      <AboutPreview />

      <FeaturedProjects />

      <SkillsPreview />

      <ContactCTA />
    </main>
  );
}