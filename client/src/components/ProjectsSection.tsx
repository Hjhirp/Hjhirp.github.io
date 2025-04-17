import { useState } from "react";
import { portfolioData, projectCategories } from "@/data/portfolioData";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState(6);
  
  // Filter projects based on the selected category
  const filteredProjects = activeFilter === "all"
    ? portfolioData.projects
    : portfolioData.projects.filter(project => 
        project.category && project.category.includes(activeFilter)
      );
  
  // Projects to display based on the visibility limit
  const displayedProjects = filteredProjects.slice(0, visibleProjects);
  
  // Handle filter button click
  const handleFilterClick = (categoryId: string) => {
    setActiveFilter(categoryId);
    setVisibleProjects(6); // Reset visible projects when changing filter
  };
  
  // Handle "See more projects" button click
  const handleLoadMore = () => {
    setVisibleProjects(prev => prev + 6);
  };

  return (
    <section id="projects" className="py-20 bg-[#112240]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Projects</h2>
          <div className="section-divider"></div>
          <p className="text-[#8892B0] mt-4 max-w-2xl mx-auto">
            A collection of my most significant machine learning and AI projects showcasing various technologies and problem domains.
          </p>
        </div>
        
        {/* Project Filter */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-2" role="group" aria-label="Project category filter">
            {projectCategories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${
                  activeFilter === category.id ? 'active' : ''
                }`}
                onClick={() => handleFilterClick(category.id)}
              >
                <i className={`fas fa-${category.icon}`}></i>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <div 
              key={index}
              className="group bg-[#0A192F] rounded-lg overflow-hidden shadow-lg border border-[#64FFDA]/10 transition-all duration-300 hover:shadow-[#64FFDA]/10 hover:shadow-xl"
              data-category={project.category?.join(' ')}
            >
              <div className="p-6">
                <div className="flex justify-center items-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-[#112240] flex items-center justify-center border-2 border-[#64FFDA]/30 shadow-lg shadow-[#64FFDA]/10">
                    <i className={`fas fa-${project.icon || 'code'} text-[#64FFDA] text-3xl`}></i>
                  </div>
                </div>
                
                {/* Project image placeholder - will be replaced with actual images */}
                <div className="mb-6 rounded-md overflow-hidden border border-[#64FFDA]/10 bg-[#0A192F]/50 h-48 flex items-center justify-center">
                  <i className="fas fa-image text-4xl text-[#64FFDA]/30"></i>
                </div>
                <h3 className="text-xl font-bold text-[#CCD6F6] mb-2 group-hover:text-[#64FFDA] transition-colors duration-300 mt-4">
                  {project.name}
                </h3>
                <p className="text-[#8892B0] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech_stack.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-[#112240] py-1 px-2 rounded-md text-xs text-[#64FFDA] font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.category && (
                  <div className="mt-4 pt-4 border-t border-[#64FFDA]/10">
                    <div className="flex flex-wrap gap-2">
                      {project.category.map((cat, catIndex) => {
                        const category = projectCategories.find(c => c.id === cat);
                        return (
                          <span key={catIndex} className="bg-[#0A192F] py-1 px-2 rounded-full text-xs text-[#8892B0] border border-[#8892B0]/20 flex items-center gap-1">
                            {category?.icon && <i className={`fas fa-${category.icon} text-[#64FFDA]/60`}></i>}
                            <span>{category?.name || cat}</span>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {/* Show load more button if there are more projects to display */}
          {filteredProjects.length > visibleProjects && (
            <div className="md:col-span-2 lg:col-span-3 flex justify-center mt-8">
              <button 
                onClick={handleLoadMore}
                className="btn-secondary flex items-center gap-2"
              >
                <span>See more projects</span>
                <i className="fas fa-chevron-down"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
