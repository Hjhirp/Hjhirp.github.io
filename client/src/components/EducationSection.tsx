import { portfolioData } from "@/data/portfolioData";

const EducationSection = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 bg-[#112240]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Education</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {education.map((edu, index) => (
            <div key={index} className="bg-[#0A192F] rounded-lg p-6 shadow-lg border border-[#64FFDA]/10">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-[#CCD6F6] font-heading">{edu.degree}</h3>
                  <p className="text-[#64FFDA]">{edu.institution}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-[#64FFDA]/10 text-[#64FFDA] py-1 px-3 rounded-full text-sm">
                    {edu.expected_graduation_date || edu.graduation_date}
                  </span>
                </div>
              </div>
              <p className="text-[#8892B0] mb-4">{edu.location} | GPA: {edu.gpa}</p>
              
              {edu.thesis && (
                <div className="mb-4">
                  <h4 className="text-[#CCD6F6] font-medium mb-2">Thesis:</h4>
                  <p className="text-[#8892B0] italic">"{edu.thesis}"</p>
                </div>
              )}
              
              <div className="mb-4">
                <h4 className="text-[#CCD6F6] font-medium mb-2">Relevant Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.relevant_coursework.map((course, courseIndex) => (
                    <span key={courseIndex} className="bg-[#112240] py-1 px-3 rounded-full text-xs text-[#64FFDA]">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
              
              {edu.achievements && edu.achievements.length > 0 && (
                <div>
                  <h4 className="text-[#CCD6F6] font-medium mb-2">Achievements:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-[#8892B0]">
                    {edu.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
