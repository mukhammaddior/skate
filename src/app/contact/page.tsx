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

  const [isPending, setIsPending] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsPending(true);
    setSuccessMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        setSuccessMessage(data.message);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert(data.error || 'Failed to submit message');
      }
    } catch (error) {
      alert('Error submitting message. Please try again.');
    } finally {
      setIsPending(false);
    }
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

          {successMessage && (
            <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-xl font-sora text-sm mb-6 flex items-center gap-2">
              <Icon icon="solar:check-circle-bold" className="w-5 h-5 text-green-500" />
              <span>{successMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-sora text-xs font-bold uppercase tracking-wider text-gray-600">Full Name</label>
                <input 
                  type="text" 
                  required
                  disabled={isPending}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full border border-black p-4 text-sm font-sora focus:outline-none focus:bg-[#FFD9A0]/10 text-black bg-white disabled:opacity-50"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-sora text-xs font-bold uppercase tracking-wider text-gray-600">Email Address</label>
                <input 
                  type="email" 
                  required
                  disabled={isPending}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full border border-black p-4 text-sm font-sora focus:outline-none focus:bg-[#FFD9A0]/10 text-black bg-white disabled:opacity-50"
                />
              </div>
            </div>

             <div className="flex flex-col gap-2">
              <label className="font-sora text-xs font-bold uppercase tracking-wider text-gray-600">Subject</label>
              <input 
                type="text" 
                disabled={isPending}
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="How can we help?"
                className="w-full border border-black p-4 text-sm font-sora focus:outline-none focus:bg-[#FFD9A0]/10 text-black bg-white disabled:opacity-50"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-sora text-xs font-bold uppercase tracking-wider text-gray-600">Message</label>
              <textarea 
                required
                rows={5}
                disabled={isPending}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your thoughts here..."
                className="w-full border border-black p-4 text-sm font-sora focus:outline-none focus:bg-[#FFD9A0]/10 text-black bg-white resize-none disabled:opacity-50"
              />
            </div>

            <Button 
              type="submit" 
              disabled={isPending}
              className="bg-black text-white hover:bg-neutral-800 rounded-full px-12 py-7 font-sora font-bold text-xs uppercase tracking-widest transition-all duration-300 w-full sm:w-auto disabled:opacity-50 cursor-pointer"
            >
              {isPending ? 'Sending...' : 'Submit Message'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
