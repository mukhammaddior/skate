'use client';

import { useCartStore } from '@/store/useCartStore';
import { Icon } from '@iconify/react';
import Image from 'next/image';

export default function CartDrawer() {
  const isOpen = useCartStore((state) => state.isOpen);
  const toggleCart = useCartStore((state) => state.toggleCart);
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);
  
  // Custom increment/decrement functions
  const updateQuantity = (id: string, delta: number) => {
    const item = items.find((i) => i.id === id);
    if (!item) return;
    const newQty = item.quantity + delta;
    if (newQty <= 0) {
      removeItem(id);
    } else {
      // We can use addItem with the delta to update quantity
      useCartStore.setState((state) => ({
        items: state.items.map((i) =>
          i.id === id ? { ...i, quantity: newQty } : i
        ),
      }));
    }
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={toggleCart}
      />

      {/* Drawer content */}
      <div className="relative w-full max-w-md h-full bg-white text-black shadow-2xl flex flex-col z-10 transition-transform duration-300 animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-black">
          <div className="flex items-center gap-2">
            <h2 className="font-oswald text-2xl font-bold uppercase tracking-wider">Your Cart</h2>
            <span className="bg-[#FFD9A0] text-black text-xs font-bold px-2 py-0.5 rounded-full">
              {items.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          </div>
          <button 
            onClick={toggleCart}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
            aria-label="Close cart"
          >
            <Icon icon="solar:close-circle-linear" className="w-7 h-7" />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4">
              <Icon icon="solar:bag-3-broken" className="w-16 h-16 text-gray-400" />
              <div>
                <p className="font-sora font-medium text-lg">Your cart is empty</p>
                <p className="text-gray-500 text-sm mt-1">Add some awesome custom skateboards to get started!</p>
              </div>
              <button 
                onClick={toggleCart}
                className="mt-2 bg-black text-white px-6 py-3 rounded-full font-sora text-sm font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 border-b border-gray-100 pb-4 last:border-b-0">
                {/* Item Image */}
                <div className="relative w-20 h-20 bg-gray-50 rounded-lg overflow-hidden border border-gray-200 p-2 flex items-center justify-center">
                  <Image 
                    src={item.image || '/images/products/product-1.png'} 
                    alt={item.name} 
                    fill 
                    className="object-contain p-1"
                  />
                </div>

                {/* Item Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-oswald font-bold text-lg uppercase tracking-tight">{item.name}</h3>
                    <p className="font-sora text-sm text-gray-500 font-medium">${item.price}</p>
                  </div>
                  
                  {/* Quantity Controls */}
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-black rounded-full overflow-hidden">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="px-3 py-1 hover:bg-gray-100 font-bold transition-colors cursor-pointer"
                      >
                        -
                      </button>
                      <span className="px-3 font-sora font-semibold text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="px-3 py-1 hover:bg-gray-100 font-bold transition-colors cursor-pointer"
                      >
                        +
                      </button>
                    </div>

                    <button 
                      onClick={() => removeItem(item.id)}
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

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-black p-6 space-y-4 bg-gray-50">
            <div className="flex justify-between font-sora font-semibold text-lg">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <p className="text-xs text-gray-500 font-sora">Shipping and taxes calculated at checkout.</p>
            <div className="flex flex-col gap-2">
              <button 
                onClick={() => {
                  alert('Checkout is not configured. Items: ' + items.map(i => `${i.name} (${i.quantity})`).join(', '));
                  clearCart();
                  toggleCart();
                }}
                className="w-full bg-[#FFD9A0] text-black py-4 rounded-full font-sora font-bold text-sm uppercase tracking-widest hover:bg-[#ebd0ab] transition-all cursor-pointer text-center"
              >
                Proceed to Checkout
              </button>
              <button 
                onClick={clearCart}
                className="w-full text-center text-xs text-gray-500 hover:text-black py-2 font-sora font-semibold transition-colors cursor-pointer"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
