import { Layout } from "./components/Layout";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import { useEffect, useState } from "react";

function App() {
  const [backToTopVisible, setBackToTopVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setBackToTopVisible(true);
      } else {
        setBackToTopVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Layout>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </Layout>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 h-10 w-10 bg-[#64FFDA] text-[#0A192F] rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-[#64FFDA]/80 z-50 ${
          backToTopVisible ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        aria-label="Back to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  );
}

export default App;
