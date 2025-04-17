import { portfolioData } from "@/data/portfolioData";

const SkillsSection = () => {
  const { skill_categories } = portfolioData;

  return (
    <section id="skills" className="py-20 bg-[#0A192F]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Skills Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skill_categories.map((category, index) => (
              <div key={index} className="bg-[#112240] rounded-lg p-6 shadow-lg border border-[#64FFDA]/10">
                <h3 className="text-xl font-bold text-[#CCD6F6] mb-4 flex items-center">
                  <i className={`fas fa-${category.icon} text-[#64FFDA] mr-2`}></i>
                  {category.name}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="flex justify-between mb-1">
                        <span className="text-[#CCD6F6]">{skill.name}</span>
                        <span className="text-[#64FFDA]">{skill.proficiency}%</span>
                      </div>
                      <div className="progress-bar">
                        <div 
                          className="progress-value" 
                          style={{ width: `${skill.proficiency}%` }}
                          aria-valuenow={skill.proficiency}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
