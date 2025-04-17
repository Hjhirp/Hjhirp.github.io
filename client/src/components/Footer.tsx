const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-[#020C1B] border-t border-[#112240]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-[#8892B0]">© {currentYear} Harshal Hirpara. All Rights Reserved.</p>
          </div>
          <div>
            <p className="text-[#8892B0]">
              Built with <span className="text-[#64FFDA]">❤️</span> by Harshal Hirpara
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
