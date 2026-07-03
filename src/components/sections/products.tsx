import Image from 'next/image';
import { Button } from '@/components/ui/button';

// Ma'lumotlarni Array (ro'yxat) ko'rinishida yozamiz, bu kodni toza saqlaydi
const products = [
  { id: 1, name: 'YELLOW BOARD', price: '$120', image: '/images/products/product-1.png' },
  { id: 2, name: 'YELLOW BOARD', price: '$120', image: '/images/products/product-2.png' },
  { id: 3, name: 'YELLOW BOARD', price: '$120', image: '/images/products/product-3.png' },
  { id: 4, name: 'YELLOW BOARD', price: '$120', image: '/images/products/product-4.png' },
];

export default function Products() {
  return (
    <section className="w-full bg-white flex flex-col mt-30">

      <div className="w-full pt-16 mx-1">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-6 md:px-16 mb-12">
          <h2 className="text-6xl font-bold font-oswald uppercase leading-[1.1] mb-6 md:mb-0">
            Explore Our Skateboard <br /> Collection
          </h2>
          <Button 
            variant="default" 
            className="bg-[#1A1A1A] text-white hover:bg-black rounded-full px-8 py-6 text-xs font-bold tracking-[0.15em] uppercase transition-colors"
          >
            Shop All Products
          </Button>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-black md:divide-y-0 md:divide-x divide-black px-6 md:px-16 lg:px-0">
          
          {products.map((product) => (
            <div key={product.id} className="flex flex-col bg-white group">
              
              {/* Rasm qismi (Tepasi) */}
              <div className="relative w-full aspect-[4/5] p-6 flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>

              {/* 3. Kartochka ichidagi gorizontal chiziq va yozuvlar */}
              <div className="px-5 py-4 flex items-center justify-between bg-white z-10">
                <h3 className="font-bold font-oswald  uppercase text-lg md:text-xl tracking-tight text-black">
                  {product.name}
                </h3>
                {/* 4. Narx atrofidagi aylanma chiziq */}
                <span className="rounded-full border border-black rounded-full px-3 py-1 text-xs font-bold text-gray-500 bg-white">
                  {product.price}
                </span>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}