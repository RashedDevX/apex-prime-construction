
import React from 'react';

interface FooterProps {
  onNavigate: (page: any) => void;
}

const Footer: React.FC<FooterProps> = () => {
  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-zinc-950 text-white border-t-4 border-orange-500">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-orange-500 flex items-center justify-center rounded-sm mr-3">
                <i className="fa-solid fa-helmet-safety text-zinc-900 text-xl"></i>
              </div>
              <span className="text-3xl font-bold tracking-tighter uppercase font-oswald">
                Apex<span className="text-orange-500">Prime</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Leading the industry in precision engineering and high-end construction since 1995. We don't just build structures; we build legacies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-zinc-800 flex items-center justify-center hover:bg-orange-500 transition-standard">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-zinc-800 flex items-center justify-center hover:bg-orange-500 transition-standard">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-zinc-800 flex items-center justify-center hover:bg-orange-500 transition-standard">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 font-oswald uppercase text-orange-500">Quick Links</h4>
            <ul className="space-y-4">
              <li><button onClick={() => handleNavClick('home')} className="text-gray-400 hover:text-white transition-standard">Home</button></li>
              <li><button onClick={() => handleNavClick('services')} className="text-gray-400 hover:text-white transition-standard">Our Services</button></li>
              <li><button onClick={() => handleNavClick('projects')} className="text-gray-400 hover:text-white transition-standard">Latest Projects</button></li>
              <li><button onClick={() => handleNavClick('about')} className="text-gray-400 hover:text-white transition-standard">Who We Are</button></li>
              <li><button onClick={() => handleNavClick('contact')} className="text-gray-400 hover:text-white transition-standard">Get a Quote</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 font-oswald uppercase text-orange-500">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <i className="fa-solid fa-location-dot mt-1 mr-3 text-orange-500"></i>
                <span>123 Industrial Way, Skyline District, NY 10012</span>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-phone mr-3 text-orange-500"></i>
                <span>+1 (555) 0123-4567</span>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-envelope mr-3 text-orange-500"></i>
                <span>contact@apexprime.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Apex Prime Construction Co. All rights reserved.</p>
          <p className="mt-4 md:mt-0 font-medium text-orange-500 uppercase tracking-widest">
            Developed by RashedDevX
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
