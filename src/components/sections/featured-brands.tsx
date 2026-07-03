import { featuredBrands } from '@/data/brands';

export default function FeaturedBrands() {
  const { row1, row2 } = featuredBrands;

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col items-center">
        
        {/* Sarlavha (Oswald shrifti) */}
        <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-tight text-black mb-12 text-center">
          Featured Brands
        </h2>

        {/* Brendlar Konteyneri */}
        <div className="flex flex-col items-center gap-4 md:gap-6 w-full px-2">
          
          {/* Birinchi qator (6 ta element) */}
          <div className="flex justify-center gap-2 sm:gap-4 md:gap-6 w-full">
            {row1.map((brand) => (
              <div 
                key={brand} 
                className="w-[15%] max-w-[192px] aspect-square border border-[#E5E5E5] rounded-xl md:rounded-2xl flex items-center justify-center bg-white hover:border-black hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <span className="font-oswald text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black text-black group-hover:scale-110 transition-transform duration-300">
                  {brand}
                </span>
              </div>
            ))}
          </div>

          {/* Ikkinchi qator (5 ta element) */}
          <div className="flex justify-center gap-2 sm:gap-4 md:gap-6 w-full">
            {row2.map((brand) => (
              <div 
                key={brand} 
                className="w-[15%] max-w-[192px] aspect-square border border-[#E5E5E5] rounded-xl md:rounded-2xl flex items-center justify-center bg-white hover:border-black hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <span className="font-oswald text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black text-black group-hover:scale-110 transition-transform duration-300">
                  {brand}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}