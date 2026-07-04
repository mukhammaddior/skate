'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };

  const handleScroll = (targetId: string, alertMsg?: string) => {
    if (alertMsg) {
      alert(alertMsg);
      return;
    }

    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', target: 'home' },
    { name: 'About Us', target: 'about' },
    { name: 'Shop', target: 'products' },
    { name: 'Offers', target: '', alert: 'Special offers are coming soon!' },
    { name: 'Articles', target: 'blogs' },
    { name: 'Contact Us', target: 'contact' },
  ];

  const aboutLinks = [
    { name: 'History', target: 'about' },
    { name: 'Videos', target: 'latest-video' },
    { name: 'Established', target: '', alert: 'Established in 2024. Providing custom boards globally!' },
    { name: 'Tutorials', target: 'blogs' },
    { name: 'How To Skate', target: 'blogs' },
  ];

  return (
    <footer id="contact" className="w-full bg-white pt-20 pb-10 border-t border-[#E5E5E5]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        
        {/* 1. Yuqori qism: Grid (4 ta ustun) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Logo va Social qismi */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="relative w-32 h-10" onClick={(e) => { e.preventDefault(); handleScroll('home'); }}>
              <Image 
                src="/images/footer-logo.png" 
                alt="Skate Logo"
                fill
                className="object-contain"
              />
            </Link>
            <p className="text-[#666666] text-sm leading-relaxed max-w-[280px]">
              Donec sed est felis purus donec porta at. Aenean pharetra purus donec porta lorem cras sagittis tellus sed. Ornare diam ac tristique senectus accumsan habitasse orci.
            </p>
            <div className="flex items-center gap-4">
              <Link href="https://facebook.com" target="_blank" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                <Icon icon="mdi:facebook" className="w-4 h-4" />
              </Link>
              <Link href="https://instagram.com" target="_blank" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                <Icon icon="mdi:instagram" className="w-4 h-4" />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                <Icon icon="mdi:twitter" className="w-4 h-4" />
              </Link>
              <Link href="https://youtube.com" target="_blank" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                <Icon icon="mdi:youtube" className="w-4 h-4" />
              </Link>
            </div>
          </div>
 
          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="font-oswald font-black text-xl uppercase tracking-wider">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <button 
                  key={link.name} 
                  onClick={() => handleScroll(link.target, link.alert)}
                  className="text-left text-sm text-[#666666] hover:text-black transition-colors cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>
 
          {/* About */}
          <div className="flex flex-col gap-6">
            <h4 className="font-oswald font-black text-xl uppercase tracking-wider">About</h4>
            <nav className="flex flex-col gap-3">
              {aboutLinks.map((link) => (
                <button 
                  key={link.name} 
                  onClick={() => handleScroll(link.target, link.alert)}
                  className="text-left text-sm text-[#666666] hover:text-black transition-colors cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>
 
          {/* Newsletter */}
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-6">
            <h4 className="font-oswald font-black text-xl uppercase tracking-wider">Our Newsletter</h4>
            <p className="text-[#666666] text-sm leading-relaxed">
              Subscribe to our newsletter to get updates about our grand offers.
            </p>
            <div className="flex w-full">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email-address" 
                className="flex-grow border border-gray-200 border-r-0 px-4 py-3 text-sm focus:outline-none focus:border-black text-black"
              />
              <button type="submit" className="bg-[#F4D0A4] cursor-pointer text-black font-oswald font-bold px-6 py-3 text-xs uppercase tracking-widest hover:bg-[#e3be92] transition-colors">
                Send
              </button>
            </div>
          </form>
 
        </div>

        {/* 2. Pastki qism: Copyright va To'lovlar */}
        <div className="pt-10 border-t border-[#E5E5E5] flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-4">
              <span className="text-[11px] font-sora font-semibold text-[#8B919E] uppercase tracking-widest">We ship with:</span>
              <div className="flex items-center gap-3">
                <Image src="/images/payments/arcticons_post.svg" alt="Post" width={40} height={24} className="h-6 w-auto" />
                <Image src="/images/payments/fa-brands_dhl.svg" alt="DHL" width={40} height={24} className="h-6 w-auto" />
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-[11px] font-sora font-semibold text-[#8B919E] uppercase tracking-widest">Payment options:</span>
              <div className="flex items-center gap-4">
                <Image src="/images/payments/brandico_visa.svg" alt="Visa" width={40} height={24} className="h-6 w-auto" />
                <Image src="/images/payments/brandico_mastercard.svg" alt="Mastercard" width={40} height={24} className="h-6 w-auto" />
                <Image src="/images/payments/fontisto_paypal.svg" alt="PayPal" width={20} height={12} className="h-4 w-auto" />
              </div>
            </div>
          </div>

          <p className="text-[10px] md:text-xs text-gray-400 font-medium uppercase tracking-widest text-center">
            © Copyright 2024 Skate. Design by <span className="text-black">TemplatesJungle</span>
          </p>

        </div>
      </div>
    </footer>
  );
}