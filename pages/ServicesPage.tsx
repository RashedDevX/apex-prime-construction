
import React from 'react';
import { SERVICES } from '../constants';

const ServicesPage: React.FC = () => {
  return (
    <div>
      <section className="bg-zinc-900 py-32 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-bold uppercase font-oswald mb-6">Our Services</h1>
          <p className="text-orange-500 font-bold uppercase tracking-[0.3em]">Engineering • Architecture • Construction</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {SERVICES.map((service, index) => (
              <div key={service.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                <div className="w-full lg:w-1/2">
                  <div className="relative group overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-[400px] object-cover" />
                    <div className="absolute inset-0 border-[16px] border-zinc-900/10 group-hover:border-orange-500/20 transition-standard"></div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <span className="text-orange-500 font-black text-6xl opacity-10 font-oswald">0{index + 1}</span>
                  <div className="flex items-center gap-4 mb-6">
                    <i className={`fa-solid ${service.icon} text-3xl text-orange-500`}></i>
                    <h2 className="text-4xl font-bold uppercase font-oswald">{service.title}</h2>
                  </div>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {service.description} We bring over two decades of technical expertise to every project, ensuring that your vision is realized with the highest safety and quality standards in the industry.
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {['Strategic Planning', 'Advanced Materials', 'Sustainability Focused', 'On-Time Delivery'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 font-bold text-sm uppercase tracking-wider text-zinc-700">
                        <i className="fa-solid fa-square-check text-orange-500"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
