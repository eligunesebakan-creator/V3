
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AdvisorChat from './components/AdvisorChat';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    // Simulate loading time for preloader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Investment Inquiry from ${formData.name || 'Valued Client'}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:eli@imarcommercial.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Preloader Component */}
      <div 
        className={`fixed inset-0 z-[100] bg-slate-950 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="text-center animate-pulse">
            <span className="font-display text-5xl md:text-6xl text-white tracking-widest font-bold">IMAR</span>
        </div>
      </div>

      <Navbar />
      
      <main>
        <Hero />
        
        {/* Statistics Section */}
        <section className="py-20 border-y border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-around gap-8">
            <div className="text-center min-w-[150px]">
              <div className="text-4xl font-display font-bold text-slate-900 mb-2">10+</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Years Experience</div>
            </div>
            <div className="text-center min-w-[150px]">
              <div className="text-4xl font-display font-bold text-slate-900 mb-2">CCIM</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Investment Member</div>
            </div>
            <div className="text-center min-w-[150px]">
              <div className="text-4xl font-display font-bold text-slate-900 mb-2">SIOR</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Industrial & Office</div>
            </div>
          </div>
        </section>

        <Services />

        {/* Distinguished Solutions Section */}
        <section id="insights" className="py-24 bg-white overflow-hidden scroll-mt-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="relative z-10">
                  <img 
                    src="https://image2url.com/r2/default/images/1769819786904-36f92e42-c428-4208-84ec-3708315293a6.png" 
                    alt="Distinguished Brokerage Solutions" 
                    className="rounded-sm shadow-2xl h-[300px] lg:h-[550px] w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-full h-full border border-slate-200 -z-0"></div>
              </div>
              <div className="order-1 lg:order-2 space-y-8">
                <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">Strategic Insight</span>
                <h2 className="font-display text-5xl text-slate-900 leading-tight">Distinguished Brokerage for Premier Assets.</h2>
                <p className="text-slate-600 text-lg leading-relaxed font-light">
                  Imar Commercial excels in facilitating the acquisition and disposition of premier hospitality assets, leveraging industry acumen to deliver optimal outcomes for sophisticated investors.
                </p>
                <div className="space-y-6 pt-4">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 text-slate-900">
                      <i className="fa-solid fa-chart-line"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Tailored Investment Strategies</h4>
                      <p className="text-sm text-slate-500">Meticulously aligning opportunities with unique client objectives.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 text-slate-900">
                      <i className="fa-solid fa-eye-slash"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Discreet Acquisition & Disposition</h4>
                      <p className="text-sm text-slate-500">Managing processes with utmost discretion and competitive positioning.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bio Section - Updated with provided text and image reference */}
        <section id="about" className="py-32 bg-slate-50 overflow-hidden scroll-mt-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-10">
                <div className="space-y-2">
                  <span className="text-slate-400 font-bold text-xs uppercase tracking-[0.3em]">The Principal</span>
                  <h2 className="font-display text-6xl text-slate-900">Eli Gunesebakan</h2>
                  <p className="text-blue-600 font-bold text-sm uppercase tracking-widest">CCIM, SIOR • Principal Broker</p>
                </div>
                
                <div className="space-y-6 text-slate-700 leading-relaxed font-light text-lg">
                  <p>
                    Eli is a seasoned commercial real estate broker with a robust background in engineering and a focus on investment sales, hospitality, and retail sectors. Transitioning from the oil and gas industry, Eli brings a unique perspective to commercial and industrial property transactions, adeptly navigating the complexities of the Florida real estate market.
                  </p>
                  <p>
                    Eli's proactive approach distinguishes him in the industry. He actively guides clients through every phase of the real estate process, ensuring that each transaction aligns with their strategic objectives. His expertise encompasses securing prime investment opportunities, facilitating hospitality ventures, and identifying optimal retail locations.
                  </p>
                  <p>
                    Holding a B.S.E. in Mechanical Engineering from Louisiana Tech University, Eli is a Certified Commercial Investment Member (CCIM) and a member of the Society of Industrial and Office Realtors (SIOR). Eli's dedication to client success, combined with his analytical skills and industry knowledge, makes him a trusted advisor in Florida's commercial real estate landscape.
                  </p>
                </div>
              </div>
              
              <div className="relative group">
                {/* Changed aspect-square to aspect-[4/5] to zoom out crop, and object-top to show head */}
                <div className="aspect-[4/5] max-w-[450px] w-full mx-auto overflow-hidden shadow-2xl relative z-10 border-[12px] md:border-[16px] border-white">
                  <img 
                    src="https://image2url.com/r2/default/images/1769820284506-86cfe5c6-9329-4053-9d86-0169eae58337.png" 
                    alt="Eli Gunesebakan, CCIM, SIOR • Principal Broker" 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600 -z-0 opacity-10 blur-3xl"></div>
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-slate-900 -z-0 opacity-5 blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-slate-950 text-white relative overflow-hidden scroll-mt-20">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="font-display text-5xl mb-8">Initiate a <br />Professional Dialogue.</h2>
                <p className="text-slate-400 mb-12 max-w-md text-lg font-light leading-relaxed">
                  Imar Commercial is committed to providing a refined and responsive client experience. Your correspondence will be handled with the utmost professionalism and discretion.
                </p>
                <div className="space-y-8">
                  <div className="flex items-start gap-6 group cursor-pointer">
                    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all flex-shrink-0">
                      <i className="fa-solid fa-phone text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-400 text-xs uppercase tracking-widest">Direct Line</h4>
                      <p className="text-xl text-white">305.401.4703</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6 group cursor-pointer">
                    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all flex-shrink-0">
                      <i className="fa-solid fa-envelope text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-400 text-xs uppercase tracking-widest">Confidential Email</h4>
                      <p className="text-xl text-white break-all">eli@imarcommercial.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fa-solid fa-location-dot text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-400 text-xs uppercase tracking-widest">Office HQ</h4>
                      <p className="text-lg text-white leading-snug">1000 Brickell Ave STE 715 5205,<br />Miami, FL, USA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 md:p-14 rounded-sm text-slate-900 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-slate-200 py-3 focus:border-blue-600 outline-none" 
                      placeholder="First & Last Name" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Business Email*</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-slate-200 py-3 focus:border-blue-600 outline-none" 
                      placeholder="email@company.com" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">How may we assist you?</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-slate-200 py-3 focus:border-blue-600 outline-none h-24 resize-none" 
                      placeholder="Project or Investment Inquiry"
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full bg-slate-900 text-white font-bold py-5 rounded-sm hover:bg-slate-800 transition-all uppercase tracking-[0.3em] text-xs">
                    Submit Inquiry
                  </button>
                  <p className="text-[9px] text-slate-400 text-center uppercase tracking-widest leading-relaxed">
                    Dedicated to fostering enduring client relationships through trust, transparency, and dedication.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white py-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex flex-col items-center md:items-start gap-2">
              <span className="text-2xl font-bold tracking-tighter text-slate-900 uppercase">
                IMAR <span className="font-light text-slate-400">COMMERCIAL</span>
              </span>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.4em]">Distinguished Brokerage • CCIM • SIOR</span>
            </div>
            
            <div className="flex gap-12 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <a href="#services" className="hover:text-slate-900 transition-colors">Expertise</a>
              <a href="#about" className="hover:text-slate-900 transition-colors">Bio</a>
              <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
            </div>

            <div className="flex gap-6">
              <a href="#" className="text-slate-300 hover:text-slate-900 transition-colors text-lg"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="#" className="text-slate-300 hover:text-slate-900 transition-colors text-lg"><i className="fa-brands fa-x-twitter"></i></a>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-slate-50 text-center text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em]">
            © 2026 IMAR COMMERCIAL. Licensed Florida Real Estate Broker.
          </div>
        </div>
      </footer>

      <AdvisorChat />
    </div>
  );
};

export default App;
