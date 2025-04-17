export const useScrollToSection = () => {
  const scrollToSection = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    
    if (targetElement) {
      const yOffset = -80; // Navbar height offset
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };
  
  return scrollToSection;
};
