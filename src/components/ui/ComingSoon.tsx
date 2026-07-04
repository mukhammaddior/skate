'use client';

import Link from 'next/link';
import { Icon } from '@iconify/react';

interface ComingSoonProps {
  title: string;
}

export default function ComingSoon({ title }: ComingSoonProps) {
  return (
    <div className="bg-white text-black py-20 px-6 flex items-center justify-center select-none">
      <div className="flex flex-col items-center justify-center text-center max-w-xl mx-auto space-y-6">
        
        {/* Animated Icon */}
        <div className="relative flex items-center justify-center w-24 h-24 bg-gray-50 border border-gray-200 rounded-full shadow-sm animate-pulse">
          <Icon icon="solar:settings-bold" className="w-12 h-12 text-black animate-spin [animation-duration:8s]" />
          <Icon icon="solar:star-fall-minimalistic-bold" className="absolute top-2 right-2 w-5 h-5 text-yellow-500 animate-bounce" />
        </div>

        {/* Info */}
        <div className="space-y-3">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-black bg-[#FFD9A0] px-3.5 py-1.5 rounded-full border border-black/10">
            Coming Soon
          </span>
          <h1 className="font-oswald text-4xl md:text-5xl font-black uppercase tracking-tight text-black pt-2">
            {title}
          </h1>
          <p className="font-sora text-sm text-gray-500 max-w-sm mx-auto leading-relaxed">
            New collections are dropping soon. Stay tuned for the ultimate skateboarding gear!
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-4 w-full">
          <Link 
            href="/"
            className="inline-block w-full sm:w-auto bg-black text-white hover:bg-[#FFD9A0] hover:text-black font-sora font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all transform active:scale-95 text-center cursor-pointer shadow-md"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
