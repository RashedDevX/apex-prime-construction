
import React, { useState } from 'react';
import { PROJECTS } from '../constants';

const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Commercial', 'Industrial', 'Residential'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div>
      <section className="bg-zinc-900 py-32 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-bold uppercase font-oswald mb-6">Our Portfolio</h1>
          <p className="text-orange-500 font-bold uppercase tracking-[0.3em]">Masterpieces of Modern Engineering</p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 font-bold uppercase tracking-widest text-sm transition-standard ${
                  filter === cat ? 'bg-orange-500 text-zinc-900' : 'bg-zinc-800 text-white hover:bg-zinc-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white group overflow-hidden shadow-lg border-b-4 border-transparent hover:border-orange-500 transition-standard">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-standard duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-orange-500 text-zinc-900 px-3 py-1 font-bold text-xs uppercase tracking-widest">
                    {project.category}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold uppercase font-oswald mb-4 group-hover:text-orange-600 transition-standard">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <button className="text-sm font-bold uppercase tracking-widest text-zinc-900 border-b-2 border-zinc-900 pb-1 hover:text-orange-500 hover:border-orange-500 transition-standard">
                    Project Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
