import { portfolioData } from "@/data/portfolioData";

const AboutSection = () => {
  const bio = portfolioData.bio;
  
  // Split bio into paragraphs
  const paragraphs = bio.split('\n\n').filter(p => p.trim() !== '');
  
  // Extract the quote from the first paragraph if it exists
  const quote = paragraphs[0].startsWith('"') ? paragraphs[0] : '';
  // Remove the quote from paragraphs if it exists
  const bioContent = quote ? paragraphs.slice(1) : paragraphs;

  return (
    <section id="about" className="py-20 bg-[#112240]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {quote && (
            <div className="mb-6 text-center">
              <p className="text-[#CCD6F6] text-xl font-medium italic mb-4">{quote}</p>
            </div>
          )}
          
          <div className="space-y-4 text-[#8892B0] leading-relaxed">
            {bioContent.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
