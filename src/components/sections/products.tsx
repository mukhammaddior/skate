'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/useCartStore';
import { products } from '@/data/products';

export default function Products() {
  const router = useRouter();
  const addItem = useCartStore((state) => state.addItem);
  const toggleCart = useCartStore((state) => state.toggleCart);

  const handleAddToCart = (e: React.MouseEvent, product: typeof products[0]) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
    toggleCart(); // Open cart drawer to show items immediately!
  };

  const handleShopAll = () => {
    router.push('/men');
  };

  // Show first 4 products on the homepage
  const homepageProducts = products.slice(0, 4);

  return (
    <section id="products" className="w-full bg-white flex flex-col mt-30">

      <div className="w-full pt-16 mx-1">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-6 md:px-16 mb-12">
          <h2 className="text-6xl font-bold font-oswald uppercase leading-[1.1] mb-6 md:mb-0">
            Explore Our Skateboard <br /> Collection
          </h2>
          <Button 
            variant="default" 
            className="bg-[#1A1A1A] text-white hover:bg-black rounded-full px-8 py-6 text-xs font-bold tracking-[0.15em] uppercase transition-colors"
            onClick={handleShopAll}
          >
            Shop All Products
          </Button>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-black md:divide-y-0 md:divide-x divide-black px-6 md:px-16 lg:px-0">
          
          {homepageProducts.map((product) => (
            <Link 
              key={product.id} 
              href={`/products/${product.id}`}
              className="flex flex-col bg-white group border-b md:border-b-0 border-black last:border-b-0"
            >
              {/* Rasm qismi (Tepasi) */}
              <div className="relative w-full aspect-[4/5] p-6 flex items-center justify-center overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-105" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />

                {/* Hover Add to Cart Overlay */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button 
                    onClick={(e) => handleAddToCart(e, product)}
                    className="bg-black text-white hover:bg-[#FFD9A0] hover:text-black font-sora text-xs font-bold uppercase tracking-wider py-3 px-6 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 cursor-pointer"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* 3. Kartochka ichidagi gorizontal chiziq va yozuvlar */}
              <div className="px-5 py-4 flex items-center justify-between bg-white border-t border-black z-10">
                <h3 className="font-bold font-oswald  uppercase text-lg md:text-xl tracking-tight text-black">
                  {product.name}
                </h3>
                {/* 4. Narx atrofidagi aylanma chiziq */}
                <span className="rounded-full border border-black px-3 py-1 text-xs font-bold text-gray-500 bg-white">
                  ${product.price}
                </span>
              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}