'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    alert(`Thank you, ${formData.name}! Your message has been sent successfully.`);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="flex flex-col w-full bg-white min-h-screen">
      {/* Page Header */}
      <div className="bg-black py-16 text-center text-white px-4 border-b border-black">
        <h1 className="font-oswald text-5xl md:text-7xl font-bold uppercase tracking-wider mb-3">
          Get In Touch
        </h1>
        <p className="font-sora text-[#FFD9A0] text-xs md:text-sm uppercase tracking-widest font-semibold max-w-lg mx-auto">
          Have questions about designing a custom skateboard? Reach out to our crew.
        </p>
      </div>

      {/* Main Grid */}
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-black border-b border-black">
        {/* Left Column: Info */}
        <div className="p-8 sm:p-16 lg:p-24 flex flex-col justify-center gap-10">
          <div>
            <h2 className="font-oswald text-4xl font-bold uppercase mb-4">Contact Info</h2>
            <p className="font-sora text-sm text-gray-600 leading-relaxed max-w-md">
              We are located in the heart of the city skate scene. Visit our retail storefront or call our support lines during business hours.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-black text-[#FFD9A0] rounded-full flex items-center justify-center flex-shrink-0">
                <Icon icon="solar:map-point-linear" className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-oswald font-bold uppercase text-lg">Main Storefront</h4>
                <p className="font-sora text-sm text-gray-500 mt-1">
                  128 Skate Boulevard, Urban District, NY 10001
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-black text-[#FFD9A0] rounded-full flex items-center justify-center flex-shrink-0">
                <Icon icon="solar:phone-linear" className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-oswald font-bold uppercase text-lg">Call Us</h4>
                <p className="font-sora text-sm text-gray-500 mt-1">
                  +1 (234) 567-8900 (Mon - Sat, 10 AM - 8 PM)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-black text-[#FFD9A0] rounded-full flex items-center justify-center flex-shrink-0">
                <Icon icon="solar:letter-linear" className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-oswald font-bold uppercase text-lg">Email Support</h4>
                <p className="font-sora text-sm text-gray-500 mt-1">
                  crew@skatestore.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="p-8 sm:p-16 lg:p-24 bg-gray-50">
          <h2 className="font-oswald text-4xl font-bold uppercase mb-8">Send Us A Message</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-sora text-xs font-bold uppercase tracking-wider text-gray-600">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full border border-black p-4 text-sm font-sora focus:outline-none focus:bg-[#FFD9A0]/10 text-black bg-white"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-sora text-xs font-bold uppercase tracking-wider text-gray-600">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full border border-black p-4 text-sm font-sora focus:outline-none focus:bg-[#FFD9A0]/10 text-black bg-white"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-sora text-xs font-bold uppercase tracking-wider text-gray-600">Subject</label>
              <input 
                type="text" 
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="How can we help?"
                className="w-full border border-black p-4 text-sm font-sora focus:outline-none focus:bg-[#FFD9A0]/10 text-black bg-white"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-sora text-xs font-bold uppercase tracking-wider text-gray-600">Message</label>
              <textarea 
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your thoughts here..."
                className="w-full border border-black p-4 text-sm font-sora focus:outline-none focus:bg-[#FFD9A0]/10 text-black bg-white resize-none"
              />
            </div>

            <Button 
              type="submit" 
              className="bg-black text-white hover:bg-neutral-800 rounded-full px-12 py-7 font-sora font-bold text-xs uppercase tracking-widest transition-all duration-300 w-full sm:w-auto"
            >
              Submit Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
