
import React, { useState } from 'react';
import { saveToDatabase } from '../services/database.config';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<{ type: 'success' | 'error' | 'none', msg: string }>({ type: 'none', msg: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const success = await saveToDatabase('contact_submissions', {
      ...formData,
      timestamp: new Date().toISOString()
    });

    setLoading(false);
    if (success) {
      setStatus({ type: 'success', msg: 'Your message has been received! Our team will contact you shortly.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setStatus({ type: 'error', msg: 'Something went wrong. Please try again later.' });
    }

    setTimeout(() => setStatus({ type: 'none', msg: '' }), 5000);
  };

  return (
    <div>
      <section className="bg-zinc-900 py-32 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-bold uppercase font-oswald mb-6">Contact Us</h1>
          <p className="text-orange-500 font-bold uppercase tracking-[0.3em]">Let's Build Something Great Together</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-zinc-900 p-10 text-white">
                <h3 className="text-2xl font-bold uppercase font-oswald mb-8 text-orange-500">Office Info</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-zinc-800 flex items-center justify-center text-orange-500">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div>
                      <h4 className="font-bold uppercase tracking-widest text-sm mb-1">Our Location</h4>
                      <p className="text-gray-400">123 Industrial Way, Skyline District, New York, NY 10012</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-zinc-800 flex items-center justify-center text-orange-500">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div>
                      <h4 className="font-bold uppercase tracking-widest text-sm mb-1">Call Us</h4>
                      <p className="text-gray-400">+1 (555) 0123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-zinc-800 flex items-center justify-center text-orange-500">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div>
                      <h4 className="font-bold uppercase tracking-widest text-sm mb-1">Email Us</h4>
                      <p className="text-gray-400">info@apexprime.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-10 border-2 border-zinc-100">
                <h3 className="text-2xl font-bold uppercase font-oswald mb-6">Business Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Mon - Fri</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Sunday</span>
                    <span className="text-orange-500 font-bold">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white p-10 shadow-2xl border border-gray-100">
                <h3 className="text-3xl font-bold uppercase font-oswald mb-8 text-zinc-900">Request a Consultation</h3>
                
                {status.type !== 'none' && (
                  <div className={`p-4 mb-8 font-bold uppercase tracking-widest text-sm ${
                    status.type === 'success' ? 'bg-green-100 text-green-800 border-l-4 border-green-600' : 'bg-red-100 text-red-800 border-l-4 border-red-600'
                  }`}>
                    {status.msg}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Full Name</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 p-4 focus:ring-2 focus:ring-orange-500 outline-none transition-standard"
                        placeholder="e.g. John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Email Address</label>
                      <input 
                        required
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 p-4 focus:ring-2 focus:ring-orange-500 outline-none transition-standard"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Subject</label>
                    <input 
                      required
                      type="text" 
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 p-4 focus:ring-2 focus:ring-orange-500 outline-none transition-standard"
                      placeholder="e.g. Project Inquiry"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Message</label>
                    <textarea 
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 p-4 focus:ring-2 focus:ring-orange-500 outline-none transition-standard"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white p-5 font-bold uppercase tracking-[0.2em] transition-standard disabled:opacity-50"
                  >
                    {loading ? 'Processing...' : 'Send Message Now'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Mockup */}
      <section className="h-96 bg-zinc-200 relative overflow-hidden">
         <img 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1600" 
            alt="Map Background" 
            className="w-full h-full object-cover grayscale opacity-50"
         />
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-zinc-900 text-white px-8 py-4 font-bold uppercase tracking-widest border-b-4 border-orange-500">
               <i className="fa-solid fa-map-pin mr-2 text-orange-500"></i> View in Google Maps
            </div>
         </div>
      </section>
    </div>
  );
};

export default ContactPage;
