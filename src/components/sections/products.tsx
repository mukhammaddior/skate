'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/useCartStore';
import { useWishlistStore } from '@/store/useWishlistStore';
import { Icon } from '@iconify/react';
import { products } from '@/data/products';
import { useState, useEffect, useRef } from 'react';

export default function Products() {
  const router = useRouter();
  const addItem = useCartStore((state) => state.addItem);
  const toggleCart = useCartStore((state) => state.toggleCart);

  const toggleWishlistStoreItem = useWishlistStore((state) => state.toggleItem);
  const wishlistItems = useWishlistStore((state) => state.items);
  const isWishlisted = (productId: string) => wishlistItems.some((item) => item.id === productId);

  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [isMounted, setIsMounted] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Filter 8 featured products for homepage carousel in the exact order requested
  const featuredIds = ['men-orig-1', 'men-orig-2', 'men-orig-3', 'men-orig-4', 'men-1', 'men-2', 'men-8', 'men-14'];
  const featuredProducts = featuredIds
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean) as typeof products;

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(featuredProducts.length / itemsPerPage);
  const safeActiveIndex = Math.min(activeIndex, totalPages - 1);

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
    toggleCart();
  };

  const handleShopAll = () => {
    router.push('/men');
  };

  // Touch handlers for mobile swiping page-by-page
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setActiveIndex((prev) => Math.min(prev + 1, totalPages - 1));
    } else if (isRightSwipe) {
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <section id="products" className="w-full bg-white flex flex-col mt-30 select-none">
      <div className="w-full pt-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-6 md:px-16 mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-oswald uppercase leading-[1.1] mb-6 md:mb-0">
            Explore Our Skateboard <br /> Collection
          </h2>
          <Button 
            variant="default" 
            className="bg-[#1A1A1A] text-white hover:bg-black rounded-full px-8 py-6 text-xs font-bold tracking-[0.15em] uppercase transition-colors cursor-pointer"
            onClick={handleShopAll}
          >
            Shop All Products
          </Button>
        </div>

        {/* Carousel Outer Wrapper with Padding matching Header */}
        <div className="px-6 md:px-16 w-full">
          {/* Carousel Container */}
          <div 
            className="relative w-full border-y border-l border-black overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out w-full"
              style={{ 
                transform: `translateX(-${safeActiveIndex * 100}%)`,
              }}
            >
              {featuredProducts.map((product) => (
                <Link 
                  key={product.id} 
                  href={`/products/${product.id}`}
                  className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 flex flex-col bg-white group border-r border-black animate-fade-in"
                >
                  {/* Product Image */}
                  <div className="relative w-full aspect-[4/5] p-6 flex items-center justify-center overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      draggable={false}
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

                    {/* Wishlist Button */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleWishlistStoreItem(product);
                      }}
                      className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-black border border-neutral-200 flex items-center justify-center shadow-sm cursor-pointer transition-all active:scale-95 duration-200"
                      aria-label="Add to wishlist"
                    >
                      <Icon 
                        icon={isWishlisted(product.id) ? 'solar:heart-bold' : 'solar:heart-linear'} 
                        className={`w-5 h-5 transition-transform duration-300 ${isWishlisted(product.id) ? 'text-red-500 animate-heart-pop scale-110' : 'text-black'}`} 
                      />
                    </button>
                  </div>

                  {/* Info and Price */}
                  <div className="px-5 py-4 flex items-center justify-between bg-white border-t border-black z-10 mt-auto">
                    <h3 className="font-bold font-oswald uppercase text-lg md:text-xl tracking-tight text-black">
                      {product.name}
                    </h3>
                    <span className="rounded-full border border-black px-3 py-1 text-xs font-bold text-gray-600 bg-white">
                      ${product.price}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        {isMounted && totalPages > 1 && (
          <div className="flex justify-center gap-3 mt-8">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 rounded-full border border-black transition-all duration-300 cursor-pointer ${
                  safeActiveIndex === idx ? 'bg-black' : 'bg-transparent'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}