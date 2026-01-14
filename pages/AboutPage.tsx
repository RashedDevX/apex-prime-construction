
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div>
      <section className="bg-zinc-900 py-32 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-bold uppercase font-oswald mb-6">About Us</h1>
          <p className="text-orange-500 font-bold uppercase tracking-[0.3em]">Excellence • Integrity • Innovation</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-orange-500 font-bold uppercase tracking-widest mb-2">Our Legacy</h2>
              <h3 className="text-5xl font-bold uppercase font-oswald text-zinc-900 mb-8">Building Better Since 1995</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Apex Prime Construction was founded with a single mission: to redefine the construction landscape through superior craftsmanship and uncompromising integrity. Over the past 25 years, we have grown from a small family business into an industry leader.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our approach combines traditional skills with cutting-edge technology to deliver projects that are not only structurally sound but also architectural marvels. We take pride in our diverse portfolio that spans across commercial hubs, luxury residences, and industrial powerhouses.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="p-6 bg-zinc-50 border-l-4 border-orange-500">
                  <h4 className="font-bold uppercase text-zinc-900 mb-2">Mission</h4>
                  <p className="text-sm text-gray-500">To build sustainable environments where businesses and families thrive.</p>
                </div>
                <div className="p-6 bg-zinc-50 border-l-4 border-orange-500">
                  <h4 className="font-bold uppercase text-zinc-900 mb-2">Vision</h4>
                  <p className="text-sm text-gray-500">To be the world's most trusted partner in high-end construction.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000" 
                alt="Construction Site" 
                className="w-full rounded-sm shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-orange-500 p-8 hidden md:block">
                <p className="text-zinc-900 text-4xl font-black font-oswald uppercase">25</p>
                <p className="text-zinc-900 font-bold uppercase tracking-widest text-sm">Years of Success</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-bold uppercase font-oswald mb-16">Meet Our Leadership</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: 'Marcus Sterling', role: 'Chief Executive Officer', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400' },
              { name: 'Sarah Jenkins', role: 'Head Architect', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' },
              { name: 'David Chen', role: 'Director of Engineering', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' }
            ].map((member, i) => (
              <div key={i} className="group">
                <div className="relative mb-6 overflow-hidden">
                  <img src={member.img} alt={member.name} className="w-full grayscale group-hover:grayscale-0 transition-standard duration-500" />
                  <div className="absolute inset-0 border-8 border-orange-500 opacity-0 group-hover:opacity-100 transition-standard"></div>
                </div>
                <h4 className="text-2xl font-bold uppercase font-oswald">{member.name}</h4>
                <p className="text-orange-500 font-bold text-sm uppercase tracking-widest mt-2">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
