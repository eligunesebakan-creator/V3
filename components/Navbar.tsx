import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Close mobile menu on click
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for sticky header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white py-4 shadow-xl' : 'bg-transparent py-6 md:py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-3 group cursor-pointer relative z-50">
            <div className={`w-10 h-10 rounded-sm flex items-center justify-center transition-colors ${isScrolled || isMobileMenuOpen ? 'bg-slate-950 text-white' : 'bg-white text-slate-950'}`}>
              <span className="font-bold text-lg">I</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className={`text-xl md:text-2xl font-bold tracking-tighter transition-colors ${isScrolled || isMobileMenuOpen ? 'text-slate-900' : 'text-white'}`}>
                IMAR <span className="font-light text-slate-400">COMMERCIAL</span>
              </span>
              <span className={`text-[9px] font-bold uppercase tracking-[0.5em] transition-colors ${isScrolled || isMobileMenuOpen ? 'text-slate-400' : 'text-white/60'}`}>
                Premier Hospitality Assets
              </span>
            </div>
          </a>
          
          {/* Desktop Menu */}
          <div className={`hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-widest ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}>
            <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-blue-500 transition-colors">Expertise</a>
            <a href="#insights" onClick={(e) => scrollToSection(e, 'insights')} className="hover:text-blue-500 transition-colors">Insights</a>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-blue-500 transition-colors">Bio</a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')} 
              className={`px-8 py-3 rounded-sm transition-all border ${isScrolled ? 'border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white' : 'border-white/50 text-white hover:bg-white hover:text-slate-900'}`}
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className={`md:hidden relative z-50 text-2xl focus:outline-none transition-colors ${isScrolled || isMobileMenuOpen ? 'text-slate-900' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars-staggered"></i>}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 md:hidden flex flex-col justify-center items-center gap-8 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="text-2xl font-display font-bold text-slate-900 hover:text-blue-600 transition-colors">Expertise</a>
        <a href="#insights" onClick={(e) => scrollToSection(e, 'insights')} className="text-2xl font-display font-bold text-slate-900 hover:text-blue-600 transition-colors">Insights</a>
        <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-2xl font-display font-bold text-slate-900 hover:text-blue-600 transition-colors">Bio</a>
        <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-2xl font-display font-bold text-slate-900 hover:text-blue-600 transition-colors">Contact</a>
      </div>
    </>
  );
};

export default Navbar;