'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function About() {
  const scrollToVideo = () => {
    const element = document.getElementById('latest-video');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="w-full bg-white border-b border-black">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-black">
        
        {/* Chap tomon: Rasm qismi */}
        <div className="relative w-full flex justify-center items-center p-6 sm:p-12 lg:p-16">
          <div className="relative w-full aspect-[1.1] max-w-[540px] md:max-w-[600px] lg:max-w-none lg:h-[520px]">
            <Image
              src="/images/about-image.png"
              alt="Skateboarder sitting on stairs"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* O'ng tomon: Matn va Tugma qismi */}
        <div className="flex flex-col items-start justify-center p-8 sm:p-12 md:p-16 lg:p-24 gap-6">
          <h2 className="text-3xl sm:text-5xl lg:text-[55px] xl:text-[60px] font-bold font-oswald uppercase tracking-[-0.03em] leading-[1.05] text-[#141414]">
            Our Journey From <br /> Street To Store
          </h2>

          <div className="text-[#464646]/90 font-sora text-sm md:text-base font-light space-y-4 max-w-xl leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet consectetur. Tristique praesent porta amet
              neque amet dignissim sed. Arcu at egestas auctor amet eu risus elit in sit.
              Nunc pretium donec eget massa sit dui sit.
            </p>
            <p>
              Lectus id ultrices nec dolor. Integer nisl donec tellus semper adipiscing
              arcu. Semper feugiat ipsum ut integer purus sollicitudin sit.
            </p>
          </div>

          <Button
            variant="default"
            className="mt-4 bg-[#141414] text-white hover:bg-black rounded-full px-10 py-6 text-xs font-bold tracking-[0.2em] uppercase transition-colors border-none"
            onClick={scrollToVideo}
          >
            About Our Store
          </Button>
        </div>

      </div>
    </section>
  );
}