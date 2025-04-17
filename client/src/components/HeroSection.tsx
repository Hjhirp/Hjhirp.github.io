import { portfolioData } from "@/data/portfolioData";
import { useScrollToSection } from "@/hooks/useScrollToSection";

const HeroSection = () => {
  const { name, location } = portfolioData.personal_information;
  const summary = portfolioData.summary[0];
  const scrollToSection = useScrollToSection();

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="lg:w-7/12 order-2 lg:order-1">
            <p className="text-[#64FFDA] font-mono mb-4">Hi, my name is</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#CCD6F6] font-heading mb-4">
              {name}
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8892B0] mb-6 font-heading">
              Machine Learning Engineer
            </h2>
            <p className="text-[#8892B0] mb-8 text-lg leading-relaxed">
              {summary}
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="btn-primary"
              >
                <span>Get in touch</span>
                <i className="fas fa-arrow-right"></i>
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="btn-secondary"
              >
                See my work
              </button>
            </div>
          </div>
          <div className="lg:w-5/12 order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden border-4 border-[#64FFDA] shadow-xl shadow-[#64FFDA]/20">
                {/* Default profile image with placeholder icon since we can't use the provided image */}
                <div className="h-full w-full bg-[#112240] flex items-center justify-center">
                  <i className="fas fa-user-circle text-9xl text-[#64FFDA]/50"></i>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#112240] py-2 px-4 rounded-lg shadow-lg">
                <p className="text-[#64FFDA] font-mono text-sm">{location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
