'use client';

import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import { useCartStore } from '@/store/useCartStore';
import { useWishlistStore } from '@/store/useWishlistStore';
import { Icon } from '@iconify/react';

export default function ChildrenCategoryPage() {
  const childrenProducts = products.filter((p) => p.category === 'children');
  const addItem = useCartStore((state) => state.addItem);
  const toggleCart = useCartStore((state) => state.toggleCart);

  const toggleWishlistStoreItem = useWishlistStore((state) => state.toggleItem);
  const wishlistItems = useWishlistStore((state) => state.items);
  const isWishlisted = (productId: string) => wishlistItems.some((item) => item.id === productId);

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

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Category Hero */}
      <div className="bg-[#111111] text-white py-16 text-center border-b border-black">
        <h1 className="font-oswald text-5xl md:text-7xl font-bold uppercase tracking-wider mb-2">
          Kids' Collection
        </h1>
        <p className="font-sora text-[#FFD9A0] text-xs md:text-sm uppercase tracking-widest font-semibold">
          Stable Cruiser • Easy Balanced Decks
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto py-16 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-black bg-white">
          {childrenProducts.map((product) => (
            <Link 
              key={product.id} 
              href={`/products/${product.id}`}
              className="flex flex-col bg-white group border-b border-r border-black animate-fade-in"
            >
              {/* Product Image */}
              <div className="relative w-full aspect-[4/5] p-6 flex items-center justify-center overflow-hidden border-b border-black">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Add to Cart Hover Button */}
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

              {/* Product Info */}
              <div className="px-6 py-5 flex items-center justify-between bg-white">
                <div>
                  <h3 className="font-bold font-oswald uppercase text-lg tracking-tight text-black group-hover:text-gray-600 transition-colors">
                    {product.name}
                  </h3>
                  <span className="font-sora text-xs text-gray-500 capitalize">{product.category}'s skate</span>
                </div>
                <span className="rounded-full border border-black px-4 py-1.5 text-xs font-bold text-gray-600 bg-white">
                  ${product.price}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
