import React from 'react';

const Hero: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
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

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-slate-950">
      {/* Background Image - High Contrast & Sharp */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=90" 
          alt="Distinguished Commercial Architecture" 
          className="w-full h-full object-cover opacity-40 object-center transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 text-[10px] font-bold uppercase tracking-[0.2em] mb-8 md:mb-10 animate-in fade-in slide-in-from-left-4 duration-700">
            Distinguished Brokerage Solutions
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6 md:mb-8 animate-in fade-in slide-in-from-left-4 duration-1000">
            IMAR <br />
            <span className="text-slate-400 font-light italic">COMMERCIAL</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 md:mb-12 max-w-lg leading-relaxed font-light animate-in fade-in slide-in-from-left-4 duration-1000 delay-200">
            Expert hospitality property brokerage facilitating the acquisition and disposition of premier assets for sophisticated investors.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 animate-in fade-in slide-in-from-left-4 duration-1000 delay-300">
            <a 
              href="#contact" 
              onClick={scrollToContact}
              className="bg-white text-slate-950 px-10 md:px-14 py-4 md:py-5 rounded-sm text-xs font-bold uppercase tracking-[0.2em] hover:bg-slate-200 transition-all text-center shadow-2xl"
            >
              Direct Contact
            </a>
          </div>
        </div>

        {/* Shrunk Info Box: Reduced padding from p-12 to p-8, and space-y-12 to space-y-8 */}
        <div className="hidden lg:flex justify-end animate-in fade-in zoom-in duration-1000 delay-500">
          <div className="border border-white/20 bg-slate-900/60 p-8 max-w-sm relative overflow-hidden backdrop-blur-sm">
            <div className="relative z-10 space-y-8">
               <div>
                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em] mb-4">Eli Gunesebakan, Principal</div>
                 <div className="flex gap-8">
                    <div className="flex flex-col">
                        <span className="text-4xl font-display text-white">CCIM</span>
                        <span className="text-[8px] font-bold text-slate-500 uppercase mt-1 tracking-widest">Investment</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-4xl font-display text-white">SIOR</span>
                        <span className="text-[8px] font-bold text-slate-500 uppercase mt-1 tracking-widest">Industrial</span>
                    </div>
                 </div>
               </div>
               <div className="h-[1px] bg-white/10 w-full"></div>
               <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-display text-white">10+</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Years Active</div>
                  </div>
                  <div>
                    <div className="text-3xl font-display text-white">B.S.E</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Mechanical Eng.</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce opacity-40">
        <span className="text-[10px] font-bold text-white uppercase tracking-[0.3em] rotate-90 mb-8">Scroll</span>
        <div className="w-[1px] h-12 bg-white"></div>
      </div>
    </section>
  );
};

export default Hero;