import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { portfolioData } from "@/data/portfolioData";

const ContactSection = () => {
  const { toast } = useToast();
  const { email, phone, linkedin, github, medium, google_scholar, location } = portfolioData.personal_information;
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message Sent",
      description: "Thanks for your message! This is a demo form.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20 bg-[#0A192F]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-divider"></div>
          <p className="text-[#8892B0] mt-4 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll get back to you!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="bg-[#112240] rounded-lg p-6 shadow-lg border border-[#64FFDA]/10">
              <h3 className="text-xl font-bold text-[#CCD6F6] mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-[#64FFDA] mt-1 mr-4">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <p className="text-[#CCD6F6] font-medium">Location</p>
                    <p className="text-[#8892B0]">{location}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#64FFDA] mt-1 mr-4">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <p className="text-[#CCD6F6] font-medium">Email</p>
                    <a href={`mailto:${email}`} className="text-[#8892B0] hover:text-[#64FFDA] transition-colors duration-300">
                      {email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#64FFDA] mt-1 mr-4">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <p className="text-[#CCD6F6] font-medium">Phone</p>
                    <a href={`tel:${phone.replace(/\s+/g, '')}`} className="text-[#8892B0] hover:text-[#64FFDA] transition-colors duration-300">
                      {phone}
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-[#CCD6F6] font-medium mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <a 
                    href={`https://linkedin.com/in/${linkedin.split('/')[1]}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="h-10 w-10 rounded-full bg-[#0A192F] flex items-center justify-center text-[#CCD6F6] hover:text-[#64FFDA] hover:bg-[#64FFDA]/10 transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a 
                    href={`https://github.com/${github.split('/')[1]}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="h-10 w-10 rounded-full bg-[#0A192F] flex items-center justify-center text-[#CCD6F6] hover:text-[#64FFDA] hover:bg-[#64FFDA]/10 transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a 
                    href={`https://medium.com/${medium.split('/')[1]}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="h-10 w-10 rounded-full bg-[#0A192F] flex items-center justify-center text-[#CCD6F6] hover:text-[#64FFDA] hover:bg-[#64FFDA]/10 transition-all duration-300"
                    aria-label="Medium"
                  >
                    <i className="fab fa-medium"></i>
                  </a>
                  <a 
                    href="https://scholar.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="h-10 w-10 rounded-full bg-[#0A192F] flex items-center justify-center text-[#CCD6F6] hover:text-[#64FFDA] hover:bg-[#64FFDA]/10 transition-all duration-300"
                    aria-label="Google Scholar"
                  >
                    <i className="fas fa-graduation-cap"></i>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-[#112240] rounded-lg p-6 shadow-lg border border-[#64FFDA]/10">
              <h3 className="text-xl font-bold text-[#CCD6F6] mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-[#CCD6F6] mb-2">Name</label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="w-full bg-[#0A192F] border border-[#64FFDA]/20 rounded-md py-2 px-4 text-[#CCD6F6] focus:outline-none focus:border-[#64FFDA]"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-[#CCD6F6] mb-2">Email</label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    className="w-full bg-[#0A192F] border border-[#64FFDA]/20 rounded-md py-2 px-4 text-[#CCD6F6] focus:outline-none focus:border-[#64FFDA]"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-[#CCD6F6] mb-2">Subject</label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    className="w-full bg-[#0A192F] border border-[#64FFDA]/20 rounded-md py-2 px-4 text-[#CCD6F6] focus:outline-none focus:border-[#64FFDA]"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-[#CCD6F6] mb-2">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Your message"
                    className="w-full bg-[#0A192F] border border-[#64FFDA]/20 rounded-md py-2 px-4 text-[#CCD6F6] focus:outline-none focus:border-[#64FFDA]"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-[#64FFDA]/10 hover:bg-[#64FFDA]/20 text-[#64FFDA] py-2 px-4 rounded-md transition-all duration-300 flex items-center justify-center"
                >
                  <span>Send Message</span>
                  <i className="fas fa-paper-plane ml-2"></i>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
