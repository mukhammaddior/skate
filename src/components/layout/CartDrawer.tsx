'use client';

import { useState } from 'react';
import { useCartStore } from '@/store/useCartStore';
import { Icon } from '@iconify/react';
import Image from 'next/image';

import { useUserStore, Order } from '@/store/useUserStore';
import Receipt from '@/components/ui/Receipt';

export default function CartDrawer() {
  const isOpen = useCartStore((state) => state.isOpen);
  const toggleCart = useCartStore((state) => state.toggleCart);
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);

  const addOrder = useUserStore((state) => state.addOrder);
  
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

  const [isPending, setIsPending] = useState(false);
  const [orderInfo, setOrderInfo] = useState<Order | null>(null);

  const handleCheckout = async () => {
    setIsPending(true);
    // 2-second delay to show loading animation
    await new Promise((resolve) => setTimeout(resolve, 2000));
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      });
      const data = await response.json();
      if (data.success) {
        const orderTotal = data.total;
        const orderId = data.orderId;
        const totalItemsCount = items.reduce((acc, item) => acc + item.quantity, 0);

        const newOrder: Order = {
          id: orderId,
          date: new Date().toISOString().split('T')[0],
          time: new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }),
          total: orderTotal,
          items: items.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            image: item.image || ''
          })),
          paymentMethod: {
            cardType: 'Mastercard',
            last4: Math.floor(1000 + Math.random() * 9000).toString(),
            expiry: '12/28'
          }
        };

        setOrderInfo(newOrder);
        addOrder(newOrder);
        clearCart();
      } else {
        alert(data.error || 'Failed to checkout');
      }
    } catch (error) {
      alert('Checkout error. Please try again.');
    } finally {
      setIsPending(false);
    }
  };

  const handleCloseSuccess = () => {
    setOrderInfo(null);
    toggleCart();
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={orderInfo ? handleCloseSuccess : toggleCart}
      />

      {/* Drawer content */}
      <div className={`relative w-full max-w-md h-full shadow-2xl flex flex-col z-10 transition-transform duration-300 animate-slide-in ${orderInfo ? 'bg-neutral-950 text-white' : 'bg-white text-black'}`}>
        {isPending ? (
          /* 1. Loading Screen */
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center gap-4 bg-white text-black h-full">
            <div className="w-16 h-16 border-4 border-black border-t-[#FFD9A0] rounded-full animate-spin" />
            <h3 className="font-oswald text-xl font-bold uppercase tracking-wider">Processing Payment...</h3>
            <p className="font-sora text-xs text-gray-500">Please do not close this window.</p>
          </div>
        ) : orderInfo ? (
          /* 2. Success Receipt Screen */
          <>
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-800">
              <h2 className="font-oswald text-2xl font-bold uppercase tracking-wider text-[#FFD9A0]">Purchase Successful</h2>
              <button 
                onClick={handleCloseSuccess}
                className="p-1 hover:bg-neutral-900 rounded-full transition-colors text-white cursor-pointer"
                aria-label="Close"
              >
                <Icon icon="solar:close-circle-linear" className="w-7 h-7" />
              </button>
            </div>
            {/* Receipt and back to store button */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col justify-start items-center">
              <Receipt order={orderInfo} onClose={handleCloseSuccess} />
              <button 
                onClick={handleCloseSuccess}
                className="mt-6 w-full max-w-[360px] bg-white text-black hover:bg-[#FFD9A0] py-4 rounded-full font-sora font-bold text-xs uppercase tracking-widest transition-all cursor-pointer text-center"
              >
                Back to Store
              </button>
            </div>
          </>
        ) : (
          /* 3. Regular Cart Content */
          <>
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
                    onClick={handleCheckout}
                    disabled={isPending}
                    className="w-full bg-[#FFD9A0] text-black py-4 rounded-full font-sora font-bold text-sm uppercase tracking-widest hover:bg-[#ebd0ab] transition-all cursor-pointer text-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isPending ? 'Processing...' : 'Proceed to Checkout'}
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
          </>
        )}
      </div>
    </div>
  );
}
