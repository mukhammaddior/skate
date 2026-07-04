'use client';

import AboutSection from '@/components/sections/about';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Banner */}
      <div className="relative w-full h-[300px] md:h-[400px] bg-black flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 opacity-40">
          <Image 
            src="https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?q=80&w=1200&auto=format&fit=crop" 
            alt="Skater banner" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="font-oswald text-white text-5xl md:text-7xl font-bold uppercase tracking-wider mb-4">
            About Our Company
          </h1>
          <p className="font-sora text-[#FFD9A0] text-sm md:text-base uppercase tracking-widest font-semibold">
            ESTABLISHED IN 2024 • RIDING THE URBAN WAVE
          </p>
        </div>
      </div>

      {/* Main Journey Section */}
      <AboutSection />

      {/* Additional Story / Stats Section */}
      <section className="py-20 px-6 md:px-16 border-b border-black">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#FFD9A0] flex items-center justify-center mb-2">
              <span className="font-oswald font-black text-2xl text-black">100%</span>
            </div>
            <h3 className="font-oswald font-bold text-xl uppercase">Premium Maple</h3>
            <p className="font-sora text-sm text-gray-600 leading-relaxed">
              We construct all our custom decks from 100% hardrock Canadian maple wood for maximum pop and durability.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#FFD9A0] flex items-center justify-center mb-2">
              <span className="font-oswald font-black text-2xl text-black">Fast</span>
            </div>
            <h3 className="font-oswald font-bold text-xl uppercase">Global Shipping</h3>
            <p className="font-sora text-sm text-gray-600 leading-relaxed">
              Every skateboard is carefully packed and shipped with trackable global partners like DHL.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#FFD9A0] flex items-center justify-center mb-2">
              <span className="font-oswald font-black text-2xl text-black">Pro</span>
            </div>
            <h3 className="font-oswald font-bold text-xl uppercase">Rider Support</h3>
            <p className="font-sora text-sm text-gray-600 leading-relaxed">
              Our team consists of passionate skateboarders ready to assist you in designing your perfect setup.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
