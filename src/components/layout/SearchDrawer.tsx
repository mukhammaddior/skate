'use client';

import { useState, useEffect, useRef } from 'react';
import { useSearchStore } from '@/store/useSearchStore';
import { products } from '@/data/products';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function SearchDrawer() {
  const isOpen = useSearchStore((state) => state.isOpen);
  const toggleSearch = useSearchStore((state) => state.toggleSearch);

  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  const filteredProducts = query.trim() === ''
    ? []
    : products.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      );

  const handleResultClick = (id: string) => {
    router.push(`/products/${id}`);
    toggleSearch();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={toggleSearch}
      />

      {/* Drawer content */}
      <div className="relative w-full max-w-md h-full bg-white text-black shadow-2xl flex flex-col z-10 transition-transform duration-300 animate-slide-in">
        
        {/* Header Search Field */}
        <div className="flex items-center gap-3 px-6 py-5 border-b border-black">
          <Icon icon="solar:magnifer-linear" className="w-6 h-6 text-gray-400" />
          <input 
            ref={inputRef}
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search custom skateboards..."
            className="flex-1 font-sora text-base text-black bg-white focus:outline-none placeholder-gray-400"
          />
          <button 
            onClick={toggleSearch}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
            aria-label="Close search"
          >
            <Icon icon="solar:close-circle-linear" className="w-7 h-7 text-black" />
          </button>
        </div>

        {/* Results Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {query.trim() === '' ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-2 text-gray-500">
              <Icon icon="solar:magnifer-linear" className="w-12 h-12 text-gray-300" />
              <p className="font-sora text-sm">Type to search the collection</p>
              <p className="text-xs text-gray-400">Search by board name (e.g. "classic") or category ("men", "women")</p>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-2 text-gray-500">
              <Icon icon="solar:box-minimalistic-linear" className="w-12 h-12 text-gray-300" />
              <p className="font-sora text-sm font-semibold">No skateboards found</p>
              <p className="text-xs text-gray-400">Try searching for another keyword.</p>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="font-sora text-xs font-bold text-gray-400 uppercase tracking-widest">
                Search Results ({filteredProducts.length})
              </p>
              {filteredProducts.map((p) => (
                <div 
                  key={p.id} 
                  onClick={() => handleResultClick(p.id)}
                  className="flex gap-4 p-3 border border-gray-100 rounded-xl hover:border-black transition-all cursor-pointer bg-white group"
                >
                  {/* Thumbnail */}
                  <div className="relative w-16 h-16 bg-gray-50 rounded-lg overflow-hidden border border-gray-100 p-2 flex items-center justify-center flex-shrink-0">
                    <Image 
                      src={p.image} 
                      alt={p.name} 
                      fill 
                      className="object-contain p-1"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-center">
                    <h4 className="font-oswald font-bold text-base uppercase tracking-tight text-black group-hover:text-gray-600 transition-colors">
                      {p.name}
                    </h4>
                    <p className="font-sora text-xs text-gray-400 capitalize">{p.category}'s collection</p>
                    <p className="font-sora text-sm font-bold text-black mt-1">${p.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
