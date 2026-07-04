'use client';

import { useParams, notFound } from 'next/navigation';
import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import { useCartStore } from '@/store/useCartStore';
import { useWishlistStore } from '@/store/useWishlistStore';
import { Icon } from '@iconify/react';

export default function ProductDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const product = products.find((p) => p.id === id);

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const addItem = useCartStore((state) => state.addItem);
  const toggleCart = useCartStore((state) => state.toggleCart);

  const toggleWishlistStoreItem = useWishlistStore((state) => state.toggleItem);
  const wishlistItems = useWishlistStore((state) => state.items);
  const isWishlisted = (productId: string) => wishlistItems.some((item) => item.id === productId);

  // Reset selected image when navigating to another product
  useEffect(() => {
    setSelectedImage(null);
  }, [id]);

  if (!product) {
    return notFound();
  }

  const activeImage = selectedImage || product.image;

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: product.image,
    });
    toggleCart();
  };

  // Get related products (same category, randomized, excluding current product)
  const relatedProducts = useMemo(() => {
    return products
      .filter((p) => p.id !== product.id && p.category === product.category)
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);
  }, [product.id, product.category]);

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Product Details Section */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-16 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Image Gallery/Container */}
          <div className="flex flex-col w-full">
            <div className="relative w-full aspect-square md:aspect-[1.1] bg-gray-50 rounded-[30px] border border-black flex items-center justify-center p-8 overflow-hidden group">
              <Image
                src={activeImage}
                alt={product.name}
                fill
                priority
                className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Thumbnail Row */}
            {product.images && product.images.length > 1 && (
              <div className="flex flex-wrap gap-3 mt-6">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`relative w-20 h-20 bg-gray-50 rounded-2xl border-2 overflow-hidden flex items-center justify-center p-2 cursor-pointer transition-all ${
                      activeImage === img ? 'border-black' : 'border-gray-200'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} detail ${idx + 1}`}
                      fill
                      className="object-contain p-2"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Content details */}
          <div className="flex flex-col gap-6">
            <div>
              {/* Category Breadcrumb */}
              <span className="bg-[#FFD9A0] text-black font-sora text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm">
                {product.category}'s collection
              </span>
              
              <h1 className="font-oswald text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-black tracking-tight leading-none mt-4">
                {product.name}
              </h1>
            </div>

            {/* Price and Rating */}
            <div className="flex items-center gap-6">
              <span className="font-oswald text-3xl font-bold text-black border-2 border-black px-5 py-2 rounded-full">
                ${product.price}
              </span>
              <div className="flex items-center gap-1.5 text-black">
                <Icon icon="solar:star-bold" className="w-5 h-5 text-amber-500" />
                <span className="font-sora font-bold text-sm">{product.rating}</span>
                <span className="font-sora text-xs text-gray-400 font-semibold">(48 reviews)</span>
              </div>
            </div>

            {/* Description */}
            <p className="font-sora text-sm md:text-base text-gray-600 leading-relaxed font-light">
              {product.description}
            </p>

            {/* Tech Specs */}
            <div className="border-t border-b border-black py-6 my-2 space-y-3">
              <h4 className="font-oswald font-bold uppercase text-lg tracking-wide">Technical Specs</h4>
              <div className="grid grid-cols-2 gap-4 text-sm font-sora">
                <div>
                  <span className="text-gray-400 block font-semibold text-xs uppercase">Deck Size</span>
                  <span className="font-semibold text-black">{product.specs.deckSize}</span>
                </div>
                <div>
                  <span className="text-gray-400 block font-semibold text-xs uppercase">Wood Material</span>
                  <span className="font-semibold text-black">{product.specs.woodType}</span>
                </div>
                <div>
                  <span className="text-gray-400 block font-semibold text-xs uppercase">Wheel Spec</span>
                  <span className="font-semibold text-black">{product.specs.wheelSize}</span>
                </div>
                <div>
                  <span className="text-gray-400 block font-semibold text-xs uppercase">Bearings</span>
                  <span className="font-semibold text-black">{product.specs.bearingType}</span>
                </div>
              </div>
            </div>

            {/* Actions: Quantity Selector & Add to Cart */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center border border-black rounded-full overflow-hidden w-full sm:w-auto">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="px-5 py-3 hover:bg-gray-100 font-bold transition-colors w-1/3 sm:w-auto cursor-pointer"
                >
                  -
                </button>
                <span className="px-6 font-sora font-semibold text-base w-1/3 sm:w-auto text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="px-5 py-3 hover:bg-gray-100 font-bold transition-colors w-1/3 sm:w-auto cursor-pointer"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full sm:flex-1 bg-black hover:bg-[#FFD9A0] hover:text-black text-white font-sora font-bold text-xs uppercase tracking-widest py-4 rounded-full shadow-lg transition-all duration-300 cursor-pointer"
              >
                Add To Cart
              </button>

              <button
                onClick={() => toggleWishlistStoreItem(product)}
                className="w-full sm:w-14 h-14 border border-black rounded-full flex items-center justify-center cursor-pointer transition-all active:scale-95 duration-200 flex-shrink-0"
                aria-label={isWishlisted(product.id) ? "Remove from wishlist" : "Add to wishlist"}
              >
                <Icon 
                  icon={isWishlisted(product.id) ? "solar:heart-bold" : "solar:heart-linear"} 
                  className={`w-6 h-6 transition-transform duration-300 ${isWishlisted(product.id) ? "text-red-500 animate-heart-pop scale-110" : "text-black"}`} 
                />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Related Products Grid */}
      <section className="bg-gray-50 border-t border-black py-20 px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto flex flex-col">
          <h2 className="font-oswald text-4xl font-bold uppercase tracking-tight mb-12">
            Related Skateboards
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-black bg-white">
            {relatedProducts.map((p) => (
              <Link 
                key={p.id} 
                href={`/products/${p.id}`}
                className="flex flex-col bg-white group border-b border-r border-black"
              >
                <div className="relative w-full aspect-[4/5] p-6 flex items-center justify-center overflow-hidden border-b border-black">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="px-6 py-5 flex items-center justify-between bg-white">
                  <div>
                    <h3 className="font-bold font-oswald uppercase text-lg tracking-tight text-black">
                      {p.name}
                    </h3>
                    <span className="font-sora text-xs text-gray-500 capitalize">{p.category}'s skate</span>
                  </div>
                  <span className="rounded-full border border-black px-4 py-1.5 text-xs font-bold text-gray-600 bg-white">
                    ${p.price}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
