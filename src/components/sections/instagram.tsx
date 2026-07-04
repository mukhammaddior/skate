import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { instaImages } from '@/data/instagram';

export default function Instagram() {
  return (
    <section className="w-full bg-white pt-20">
      <div className="max-w-full flex flex-col">
        
        {/* 1. Sarlavha qismi */}
        <h2 className="font-oswald text-4xl md:text-5xl font-black uppercase tracking-wide text-black text-center mb-12">
          Instagram #Skate
        </h2>

        {/* Outer wrapper with padding to align borders */}
        <div className="px-6 md:px-16 w-full">
          {/* 2. Rasmlar Grid'i (Borders va Divide chiziqlari bilan) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border border-black divide-y lg:divide-y-0 lg:divide-x divide-black">
            
            {instaImages.map((image) => (
              <Link 
                key={image.id} 
                href="https://instagram.com" 
                target="_blank"
                className="relative w-full aspect-square group overflow-hidden bg-white p-2 md:p-4 flex items-center justify-center cursor-pointer"
              >
                {/* Rasm */}
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={image.src}
                    alt={`Instagram feed ${image.id}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                  
                  {/* Hover Overlay Effekti (Faqat kursorni olib borganda chiqadi) */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Icon icon="mdi:instagram" className="text-white w-10 h-10" />
                  </div>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}