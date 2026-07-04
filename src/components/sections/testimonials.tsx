"use client";

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const reviews = [
  {
    text: "“I’VE BEEN SKATING FOR YEARS, AND THIS BOARD GAVE ME THE SMOOTHEST RIDE I’VE EVER HAD. THE DESIGN IS AWESOME TOO! DEFINITELY COMING BACK FOR MORE SKATEBOARD GEAR AND OTHER ITEMS.”",
    author: "EMILIA CLARK",
    role: "Girl Skater",
    avatar: "/images/avatar-1.png"
  },
  {
    text: "“THE QUALITY OF THE TRUCKS AND WHEELS IS UNBEATABLE. I CUSTOMIZED MY ENTIRE SETUP AND THE PERFORMANCE IS TOP-NOTCH. HIGHLY RECOMMEND FOR PROS!”",
    author: "JONAS KHAN",
    role: "Pro Skater",
    avatar: "/images/avatar-1.png"
  }
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="w-full bg-white py-24 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative">
        
        {/* Carousel Container */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {reviews.map((item, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 flex flex-col items-center text-center">
                
                <blockquote className="font-oswald text-2xl md:text-4xl lg:text-[42px] font-light leading-[1.2] text-black max-w-4xl uppercase tracking-tight">
                  {item.text}
                </blockquote>

                <div className="mt-10 flex flex-col items-center">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden mb-3 border border-gray-200">
                    <Image src={item.avatar} alt={item.author} fill className="object-cover" />
                  </div>
                  <h4 className="font-oswald font-extrabold text-xl">{item.author}</h4>
                  <p className="text-gray-500 text-sm">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compact Navigation Arrows for Mobile (at the bottom) */}
        <div className="flex justify-center gap-4 mt-8 md:hidden">
          <button 
            onClick={scrollPrev}
            className="w-10 h-10 border border-[#E5E5E5] rounded-full flex items-center justify-center text-black active:bg-black active:text-white transition-all cursor-pointer"
            aria-label="Previous slide"
          >
            <ArrowLeft size={18} strokeWidth={1.5} />
          </button>
          <button 
            onClick={scrollNext}
            className="w-10 h-10 border border-[#E5E5E5] rounded-full flex items-center justify-center text-black active:bg-black active:text-white transition-all cursor-pointer"
            aria-label="Next slide"
          >
            <ArrowRight size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Desktop Navigation Arrows (hidden on mobile, on the sides) */}
        <button 
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-14 h-14 border border-[#E5E5E5] rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all z-10 hidden md:flex cursor-pointer"
          aria-label="Previous slide"
        >
          <ArrowLeft size={24} strokeWidth={1.5} />
        </button>
        <button 
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-14 h-14 border border-[#E5E5E5] rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all z-10 hidden md:flex cursor-pointer"
          aria-label="Next slide"
        >
          <ArrowRight size={24} strokeWidth={1.5} />
        </button>

      </div>
    </section>
  );
}