import { useState, useEffect } from "react";
import { useScrollToSection } from "@/hooks/useScrollToSection";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarShadow, setNavbarShadow] = useState(false);
  const scrollToSection = useScrollToSection();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavLinkClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarShadow(true);
      } else {
        setNavbarShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full bg-[#0A192F]/90 backdrop-blur-md z-50 transition-all duration-300 border-b border-[#112240]/50 ${
        navbarShadow ? "shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a
            href="#hero"
            className="text-[#64FFDA] font-medium font-bold text-2xl"
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick("hero");
            }}
          >
            Harshal<span className="text-[#CCD6F6]">.dev</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {["about", "experience", "projects", "skills", "education", "publications", "contact"].map(
              (section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="text-[#CCD6F6] hover:text-[#64FFDA] transition-colors duration-300 font-medium capitalize"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick(section);
                  }}
                >
                  {section}
                </a>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-[#CCD6F6] hover:text-[#64FFDA] transition-colors duration-300"
            aria-label="Toggle navigation menu"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          mobileMenuOpen ? "block" : "hidden"
        } md:hidden bg-[#112240] border-t border-[#64FFDA]/10 transition-all duration-300`}
      >
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
          {["about", "experience", "projects", "skills", "education", "publications", "contact"].map(
            (section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-[#CCD6F6] hover:text-[#64FFDA] transition-colors duration-300 py-2 capitalize"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick(section);
                }}
              >
                {section}
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
