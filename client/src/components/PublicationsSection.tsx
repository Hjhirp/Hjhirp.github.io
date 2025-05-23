import { portfolioData } from "@/data/portfolioData";

const PublicationsSection = () => {
  const { publications } = portfolioData;

  return (
    <section id="publications" className="py-20 bg-[#0A192F]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Publications</h2>
          <div className="section-divider"></div>
          <p className="text-[#8892B0] mt-4 max-w-3xl mx-auto">
            My research papers and academic contributions in the fields of machine learning, artificial intelligence, and computer science.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-8">
          {publications.map((publication, index) => (
            <div 
              key={index} 
              className="bg-[#112240] rounded-lg p-6 shadow-lg border border-[#64FFDA]/10 hover:shadow-[#64FFDA]/20 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-[#64FFDA] text-3xl mt-1">
                  <i className={`fas fa-${publication.medium_mention ? 'pencil-alt' : 'file-alt'}`}></i>
                </div>
                <div className="flex-1">
                  <a 
                    href={publication.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xl font-bold text-[#CCD6F6] mb-2 hover:text-[#64FFDA] transition-colors duration-300 inline-flex items-center gap-2"
                  >
                    {publication.title.replace(/\*\*/g, '')}
                    <i className="fas fa-external-link-alt text-sm"></i>
                  </a>
                  
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mt-2 mb-4">
                    <p className="text-[#8892B0]">{publication.authors}</p>
                    <div className="flex items-center gap-2">
                      {publication.medium_mention && (
                        <span className="bg-[#0A192F] py-1 px-3 rounded-full text-xs text-[#64FFDA] border border-[#64FFDA]/20">
                          <i className="fab fa-medium mr-1"></i> Medium
                        </span>
                      )}
                      <span className="bg-[#64FFDA]/10 text-[#64FFDA] py-1 px-3 rounded-full text-sm">
                        {publication.date}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <p className="text-[#8892B0] pl-4 border-l-2 border-[#64FFDA]/30">
                      {publication.details}
                    </p>
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

export default PublicationsSection;