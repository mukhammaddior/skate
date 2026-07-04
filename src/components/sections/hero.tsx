'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 1. Orqa fon rasmi */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Custom Skateboard Background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Qoramtir overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* 2. Asosiy Kontent */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-12">
        <span className="font-sora text-white/90 text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-6">
          Best Custom Skate
        </span>

        {/* O'zgartirilgan H1 tegi */}
        <h1 className="font-oswald text-white text-[2.5rem] min-[375px]:text-[3rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[7rem] xl:text-[8rem] font-bold uppercase tracking-tight leading-[1] md:leading-[0.95] mb-10 break-words [-webkit-text-stroke:6px_black] sm:[-webkit-text-stroke:10px_black] lg:[-webkit-text-stroke:16px_black] [paint-order:stroke_fill] w-full max-w-full">
          Make Your Own <br className="hidden sm:block" /> Custom Skateboard
        </h1>

        <Button
          variant="default"
          size="lg"
          className="bg-[#FFD9A0] cursor-pointer text-black hover:bg-[#c4a67e] rounded-full px-15 py-[30] text-xs font-sora font-bold tracking-[0.25em] uppercase transition-all duration-300 shadow-lg hover:shadow-xl border-none"
          onClick={scrollToProducts}
        >
          Explore More
        </Button>
      </div>
    </section>
  );
}