'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { navLinks } from '@/data/navigation';
import { useScrollLock } from '@/hooks/useScrollLock';
import { useCartStore } from '@/store/useCartStore';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useCartStore((state) => state.items);
  const totalCartItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Mobil menyu ochiq bo'lsa scrollni qulflash
  useScrollLock(isMenuOpen);

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-4 sm:px-8 md:px-16 py-6 text-white">
        {/* 1. Logo */}
        <Link href="/" className="text-2xl md:text-3xl font-oswald font-bold uppercase tracking-widest relative z-50">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={240}
            height={70}
            className="w-32 sm:w-48 md:w-[240px]"
          />
        </Link>

        {/* 2. Asosiy Menyu (Desktop) */}
        <nav className="hidden lg:flex items-center bg-white text-black rounded-full px-8 py-5 gap-8 text-sm font-sora font-medium uppercase tracking-wide">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:underline transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* 3. Ikonkalar va Mobile Menu Tugmasi */}
        <div className="flex bg-black p-3 sm:p-5 rounded-[20px] items-center gap-3 sm:gap-5 relative z-50">
          <button aria-label="Search" className="hidden sm:block hover:text-white/70 cursor-pointer transition-colors duration-200">
            <Icon icon="solar:magnifer-linear" className="w-5 h-5 md:w-[22px] md:h-[22px]" />
          </button>
          <button aria-label="Wishlist" className="hidden sm:block hover:text-white/70 cursor-pointer transition-colors duration-200">
            <Icon icon="solar:heart-linear" className="w-5 h-5 md:w-[22px] md:h-[22px]" />
          </button>
          <button aria-label="Cart" className="hover:text-white/70 cursor-pointer transition-colors duration-200 relative">
            <Icon icon="solar:bag-3-linear" className="w-5 h-5 md:w-[22px] md:h-[22px]" />
            {totalCartItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#FFD9A0] text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {totalCartItems}
              </span>
            )}
          </button>
          <button aria-label="User Profile" className="hidden sm:block hover:text-white/70 cursor-pointer transition-colors duration-200">
            <Icon icon="solar:user-linear" className="w-5 h-5 md:w-[22px] md:h-[22px]" />
          </button>
          
          {/* Mobile Hamburger Button */}
          <button 
            aria-label="Menu" 
            className="lg:hidden hover:text-white/70 cursor-pointer transition-colors duration-200 ml-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <Icon icon="solar:close-circle-linear" className="w-6 h-6 md:w-7 md:h-7" />
            ) : (
              <Icon icon="solar:hamburger-menu-linear" className="w-6 h-6 md:w-7 md:h-7" />
            )}
          </button>
        </div>
      </header>

      {/* 4. Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col items-center gap-8 text-white text-2xl font-oswald tracking-widest uppercase">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-gray-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        {/* Mobile Icons in Menu */}
        <div className="flex items-center gap-6 mt-12 text-white sm:hidden">
          <button aria-label="Search" className="hover:text-gray-400">
            <Icon icon="solar:magnifer-linear" className="w-7 h-7" />
          </button>
          <button aria-label="Wishlist" className="hover:text-gray-400">
            <Icon icon="solar:heart-linear" className="w-7 h-7" />
          </button>
          <button aria-label="User Profile" className="hover:text-gray-400">
            <Icon icon="solar:user-linear" className="w-7 h-7" />
          </button>
        </div>
      </div>
    </>
  );
}