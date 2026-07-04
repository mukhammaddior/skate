import Image from 'next/image';
import Link from 'next/link';

export default function Categories() {
  const cats = [
    { title: "SKATE WHEELS", img: "/images/categories/cat-wheels.png", link: "/wheels" },
    { title: "SKATE SHOES", img: "/images/categories/cat-shoes.png", link: "/shoes" },
    { title: "SKATE CLOTHINGS", img: "/images/categories/cat-clothings.png", link: "/clothing" },
    { title: "SKATE HATS", img: "/images/categories/cat-hats.png", link: "/hats" },
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-16">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {cats.map((cat, i) => (
          <Link 
            key={i} 
            href={cat.link}
            className="relative h-[500px] rounded-[40px] overflow-hidden group cursor-pointer block"
          >
            <Image 
              src={cat.img} 
              alt={cat.title} 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40  transition-all duration-500" />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 text-center">
              <h3 className="font-oswald text-white text-5xl md:text-6xl font-black mb-8 tracking-tighter [-webkit-text-stroke:3px_black]">
                {cat.title}
              </h3>
              <span className="bg-[#FFD9A0] text-black font-sora font-semibold px-15 py-[25px] rounded-full text-sm uppercase tracking-widest hover:bg-white transition-colors cursor-pointer block text-center">
                {i === 0 || i === 3 ? "SHOP CATEGORY" : "SHOP NOW"}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}