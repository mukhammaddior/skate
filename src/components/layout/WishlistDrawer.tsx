'use client';

import { useWishlistStore } from '@/store/useWishlistStore';
import { useCartStore } from '@/store/useCartStore';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';

export default function WishlistDrawer() {
  const isOpen = useWishlistStore((state) => state.isOpen);
  const toggleWishlist = useWishlistStore((state) => state.toggleWishlist);
  const items = useWishlistStore((state) => state.items);
  const toggleItem = useWishlistStore((state) => state.toggleItem);

  const addItem = useCartStore((state) => state.addItem);
  const toggleCart = useCartStore((state) => state.toggleCart);

  const handleAddToCart = (product: typeof items[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
    toggleItem(product); // Remove from wishlist after adding to cart
    toggleWishlist(); // Close wishlist drawer
    toggleCart(); // Open cart drawer
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={toggleWishlist}
      />

      {/* Drawer content */}
      <div className="relative w-full max-w-md h-full bg-white text-black shadow-2xl flex flex-col z-10 transition-transform duration-300 animate-slide-in">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-black">
          <div className="flex items-center gap-2">
            <h2 className="font-oswald text-2xl font-bold uppercase tracking-wider">Your Wishlist</h2>
            <span className="bg-[#FFD9A0] text-black text-xs font-bold px-2 py-0.5 rounded-full">
              {items.length}
            </span>
          </div>
          <button 
            onClick={toggleWishlist}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
            aria-label="Close wishlist"
          >
            <Icon icon="solar:close-circle-linear" className="w-7 h-7" />
          </button>
        </div>

        {/* Wishlist Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4">
              <Icon icon="solar:heart-broken" className="w-16 h-16 text-gray-400" />
              <div>
                <p className="font-sora font-medium text-lg">Your wishlist is empty</p>
                <p className="text-gray-500 text-sm mt-1">Tap the heart on any product to save it here!</p>
              </div>
              <button 
                onClick={toggleWishlist}
                className="mt-2 bg-black text-white px-6 py-3 rounded-full font-sora text-sm font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                Continue Browsing
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 border-b border-gray-100 pb-4 last:border-b-0">
                {/* Item Image */}
                <Link 
                  href={`/products/${item.id}`}
                  onClick={toggleWishlist}
                  className="relative w-20 h-20 bg-gray-50 rounded-lg overflow-hidden border border-gray-200 p-2 flex items-center justify-center cursor-pointer"
                >
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    fill 
                    className="object-contain p-1"
                  />
                </Link>

                {/* Item Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <Link 
                      href={`/products/${item.id}`} 
                      onClick={toggleWishlist}
                      className="font-oswald font-bold text-lg uppercase tracking-tight hover:text-gray-600"
                    >
                      {item.name}
                    </Link>
                    <p className="font-sora text-sm text-gray-500 font-medium">${item.price}</p>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex items-center justify-between mt-2">
                    <button 
                      onClick={() => handleAddToCart(item)}
                      className="bg-black text-white hover:bg-[#FFD9A0] hover:text-black font-sora text-[10px] font-bold uppercase tracking-wider py-1.5 px-4 rounded-full transition-all cursor-pointer"
                    >
                      Add to Cart
                    </button>
                    <button 
                      onClick={() => toggleItem(item)}
                      className="text-red-500 hover:text-red-700 text-xs font-sora font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      <Icon icon="solar:trash-bin-trash-linear" className="w-4 h-4" /> Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
