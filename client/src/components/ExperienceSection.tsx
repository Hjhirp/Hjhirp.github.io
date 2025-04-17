import { portfolioData } from "@/data/portfolioData";

const ExperienceSection = () => {
  const { professional_experience } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-[#0A192F]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Professional Experience</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {professional_experience.map((job, index) => (
            <div 
              key={index} 
              className={`${index !== professional_experience.length - 1 ? 'mb-12' : ''} relative`}
            >
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#64FFDA] hidden md:block"></div>
              <div className="ml-0 md:ml-8 relative">
                <div className="absolute -left-10 top-0 h-6 w-6 rounded-full bg-[#64FFDA] hidden md:flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-[#0A192F]"></div>
                </div>
                <div className="bg-[#112240] rounded-lg p-6 shadow-lg border border-[#64FFDA]/10">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#CCD6F6]">{job.title}</h3>
                      <p className="text-[#64FFDA]">{job.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="bg-[#64FFDA]/10 text-[#64FFDA] py-1 px-3 rounded-full text-sm">{job.dates}</span>
                    </div>
                  </div>
                  <p className="text-[#8892B0] mb-4">{job.location}</p>
                  <div className="mb-4">
                    <p className="font-medium text-[#CCD6F6] mb-2">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      {job.stack.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-[#CCD6F6] mb-2">Responsibilities:</p>
                    <ul className="list-disc pl-5 space-y-2 text-[#8892B0]">
                      {job.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
