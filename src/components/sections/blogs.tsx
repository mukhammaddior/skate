import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { blogs } from '@/data/blogs';

export default function Blogs() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-full flex flex-col mx-1">
        
        {/* 1. Sarlavha va Tugma qismi */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-6 md:px-16 mb-12">
          <h2 className="text-6xl font-bold font-oswald uppercase leading-[1.1] mb-6 md:mb-0">
            Read our latest <br /> skateboard blogs
          </h2>
          <Button 
            variant="default" 
            className="bg-[#1A1A1A] text-white hover:bg-black rounded-full px-8 py-6 text-xs font-bold tracking-[0.15em] uppercase transition-colors"
          >
            Shop All Products
          </Button>
        </div>

        {/* 2. Blog Kartochkalari (Grid va Divide chiziqlari bilan) */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-black divide-y md:divide-y-0 md:divide-x divide-black">
          
          {blogs.map((blog) => (
            <article key={blog.id} className="flex flex-col group cursor-pointer p-6">
              
              {/* Rasm qismi (Hover effekt bilan) */}
              <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden rounded-sm">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Ma'lumotlar qismi */}
              <div className="flex flex-col flex-grow">
                
                {/* Teglar (Sana va Kategoriya) */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#F4D0A4] text-black px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-sm">
                    {blog.date}
                  </span>
                  <span className="bg-[#F4D0A4] text-black px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-sm">
                    {blog.category}
                  </span>
                </div>

                {/* Blog Sarlavhasi (Oswald shrifti) */}
                <h3 className="font-oswald text-xl md:text-2xl font-black uppercase text-black leading-tight mb-3 group-hover:text-gray-600 transition-colors">
                  {blog.title}
                </h3>

                {/* Qisqacha matn */}
                <p className="text-[#666666] text-sm leading-relaxed mt-auto">
                  {blog.excerpt}
                </p>
                
              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}