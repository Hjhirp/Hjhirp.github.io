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
                className={`filter-btn py-2 px-4 rounded-md text-sm font-medium transition-colors duration-300 ${
                  activeFilter === category.id ? 'active' : ''
                }`}
                onClick={() => handleFilterClick(category.id)}
              >
                {category.name}
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
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <i className={`fas fa-${project.icon || 'code'} text-[#64FFDA] text-xl`}></i>
                  </div>
                  <div className="flex gap-2">
                    <a 
                      href="#" 
                      className="text-[#CCD6F6] hover:text-[#64FFDA] transition-colors duration-300" 
                      aria-label="View project repository"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a 
                      href="#" 
                      className="text-[#CCD6F6] hover:text-[#64FFDA] transition-colors duration-300" 
                      aria-label="View live demo"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#CCD6F6] mb-2 group-hover:text-[#64FFDA] transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="text-[#8892B0] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech_stack.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-[#112240] py-1 px-2 rounded text-xs text-[#64FFDA]">
                      {tech}
                    </span>
                  ))}
                </div>
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
