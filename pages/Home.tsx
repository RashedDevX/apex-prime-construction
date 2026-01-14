
import React from 'react';
import { Page } from '../types';
import { SERVICES, PROJECTS } from '../constants';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const handleNav = (p: Page) => {
    const element = document.getElementById(p);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.postimg.cc/y8nmZjJk/illustration-construction-site.jpg" 
            alt="Construction background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-zinc-950/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h2 className="text-orange-500 font-bold uppercase tracking-widest mb-4 animate-bounce">
            Premium Construction Services
          </h2>
          <h1 className="text-5xl md:text-8xl font-bold uppercase font-oswald leading-tight mb-8">
            Building The <br />
            <span className="text-orange-500">Foundations</span> <br />
            Of Excellence
          </h1>
          <p className="max-w-xl text-xl text-gray-300 mb-10 leading-relaxed">
            Delivering high-end architectural solutions and industrial excellence across the globe. From concept to concrete, we lead with precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => handleNav(Page.Projects)}
              className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 font-bold uppercase tracking-widest transition-standard"
            >
              View Projects
            </button>
            <button 
              onClick={() => handleNav(Page.Contact)}
              className="border-2 border-white hover:bg-white hover:text-zinc-900 text-white px-10 py-5 font-bold uppercase tracking-widest transition-standard"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-orange-500 font-bold uppercase tracking-widest mb-2">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold uppercase font-oswald text-zinc-900">Core Services</h3>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="group relative overflow-hidden bg-zinc-100 p-8 hover:bg-zinc-900 transition-standard border-b-4 border-transparent hover:border-orange-500">
                <i className={`fa-solid ${service.icon} text-4xl text-orange-500 mb-6 transition-standard group-hover:scale-110`}></i>
                <h4 className="text-xl font-bold uppercase font-oswald mb-4 group-hover:text-white">{service.title}</h4>
                <p className="text-gray-600 group-hover:text-gray-400 mb-6">{service.description}</p>
                <button 
                  onClick={() => handleNav(Page.Services)}
                  className="text-sm font-bold uppercase tracking-widest text-orange-500 group-hover:text-white flex items-center"
                >
                  Learn More <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Gallery */}
      <section className="py-24 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-orange-500 font-bold uppercase tracking-widest mb-2">Portfolio</h2>
              <h3 className="text-4xl md:text-5xl font-bold uppercase font-oswald">Recent Projects</h3>
            </div>
            <button 
              onClick={() => handleNav(Page.Projects)}
              className="mt-6 md:mt-0 text-sm font-bold uppercase tracking-widest border-b-2 border-orange-500 pb-2 hover:text-orange-500 transition-standard"
            >
              View All Projects
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {PROJECTS.map((project) => (
              <div key={project.id} className="relative group overflow-hidden h-[500px]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-standard duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-90 transition-standard p-10 flex flex-col justify-end">
                  <span className="text-orange-500 font-bold uppercase text-xs tracking-widest mb-2">{project.category}</span>
                  <h4 className="text-2xl font-bold uppercase font-oswald mb-4">{project.title}</h4>
                  <p className="text-gray-300 text-sm mb-6">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-orange-500 text-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <span className="block text-5xl font-black font-oswald uppercase mb-2">250+</span>
              <span className="text-sm font-bold uppercase tracking-widest">Projects Completed</span>
            </div>
            <div>
              <span className="block text-5xl font-black font-oswald uppercase mb-2">15+</span>
              <span className="text-sm font-bold uppercase tracking-widest">Years Experience</span>
            </div>
            <div>
              <span className="block text-5xl font-black font-oswald uppercase mb-2">80+</span>
              <span className="text-sm font-bold uppercase tracking-widest">Industry Awards</span>
            </div>
            <div>
              <span className="block text-5xl font-black font-oswald uppercase mb-2">100%</span>
              <span className="text-sm font-bold uppercase tracking-widest">Safety Record</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
