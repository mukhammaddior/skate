'use client';

import { useState } from 'react';
import { useUserStore, Order } from '@/store/useUserStore';
import { Icon } from '@iconify/react';
import Receipt from '@/components/ui/Receipt';

export default function AccountDrawer() {
  const isOpen = useUserStore((state) => state.isOpen);
  const toggleAccount = useUserStore((state) => state.toggleAccount);
  const user = useUserStore((state) => state.user);
  const orders = useUserStore((state) => state.orders);
  const login = useUserStore((state) => state.login);
  const logout = useUserStore((state) => state.logout);
  const selectedOrder = useUserStore((state) => state.selectedOrderForReceipt);
  const setSelectedOrder = useUserStore((state) => state.setSelectedOrderForReceipt);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isOrderLoading, setIsOrderLoading] = useState(false);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    login(name, email);
    setName('');
    setEmail('');
  };

  const handleOrderClick = (order: Order) => {
    setIsOrderLoading(true);
    // 2-second delay to show loading animation
    setTimeout(() => {
      setIsOrderLoading(false);
      setSelectedOrder(order);
    }, 2000);
  };

  const handleCloseReceipt = () => {
    setSelectedOrder(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={selectedOrder ? handleCloseReceipt : toggleAccount}
      />

      {/* Drawer content */}
      <div className={`relative w-full max-w-md h-full shadow-2xl flex flex-col z-10 transition-transform duration-300 animate-slide-in ${selectedOrder ? 'bg-neutral-950 text-white' : 'bg-white text-black'}`}>
        
        {isOrderLoading ? (
          /* 1. Loading Screen */
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center gap-4 bg-white text-black h-full">
            <div className="w-16 h-16 border-4 border-black border-t-[#FFD9A0] rounded-full animate-spin" />
            <h3 className="font-oswald text-xl font-bold uppercase tracking-wider">Retrieving Receipt...</h3>
            <p className="font-sora text-xs text-gray-500">Connecting to secure server...</p>
          </div>
        ) : selectedOrder ? (
          /* 2. Success Receipt Screen */
          <>
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-800">
              <h2 className="font-oswald text-2xl font-bold uppercase tracking-wider text-[#FFD9A0]">Order Receipt</h2>
              <button 
                onClick={handleCloseReceipt}
                className="p-1 hover:bg-neutral-900 rounded-full transition-colors text-white cursor-pointer"
                aria-label="Close"
              >
                <Icon icon="solar:close-circle-linear" className="w-7 h-7" />
              </button>
            </div>
            {/* Receipt and back button */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col justify-start items-center">
              <Receipt order={selectedOrder} onClose={handleCloseReceipt} />
              <button 
                onClick={handleCloseReceipt}
                className="mt-6 w-full max-w-[360px] bg-white text-black hover:bg-[#FFD9A0] py-4 rounded-full font-sora font-bold text-xs uppercase tracking-widest transition-all cursor-pointer text-center"
              >
                Back to Profile
              </button>
            </div>
          </>
        ) : (
          /* 3. Normal Profile Content */
          <>
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-black">
              <div className="flex items-center gap-2">
                <h2 className="font-oswald text-2xl font-bold uppercase tracking-wider">Your Account</h2>
              </div>
              <button 
                onClick={toggleAccount}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                aria-label="Close account"
              >
                <Icon icon="solar:close-circle-linear" className="w-7 h-7" />
              </button>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto p-6">
              {user ? (
                /* Logged In View */
                <div className="space-y-8">
                  {/* User Bio Card */}
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center gap-3">
                    <div className="w-20 h-20 bg-black text-[#FFD9A0] rounded-full flex items-center justify-center font-oswald text-3xl font-black uppercase">
                      {user.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-oswald font-bold text-2xl uppercase tracking-tight text-black">{user.name}</h3>
                      <p className="font-sora text-sm text-gray-500">{user.email}</p>
                    </div>
                    <span className="bg-black text-[#FFD9A0] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      Crew Member
                    </span>
                  </div>

                  {/* Order History */}
                  <div className="space-y-4">
                    <h4 className="font-oswald font-bold text-lg uppercase tracking-wide">Order History</h4>
                    
                    {orders.length === 0 ? (
                      <p className="text-sm text-gray-500 font-sora py-4">You haven't placed any orders yet.</p>
                    ) : (
                      <div className="space-y-3">
                        {orders.map((order) => {
                          const totalItemsCount = order.items.reduce((acc, item) => acc + item.quantity, 0);
                          return (
                            <div 
                              key={order.id} 
                              onClick={() => handleOrderClick(order)}
                              className="p-4 border border-gray-200 hover:border-black rounded-xl bg-white space-y-2 text-sm font-sora cursor-pointer transition-all active:scale-[0.98] group"
                              title="Click to view receipt"
                            >
                              <div className="flex justify-between font-bold">
                                <span className="font-mono text-gray-700 group-hover:text-black transition-colors">#{order.id.slice(0, 8)}...</span>
                                <span className="text-green-600">${order.total.toFixed(2)}</span>
                              </div>
                              <div className="flex justify-between text-xs text-gray-500">
                                <span>{order.date}</span>
                                <span className="flex items-center gap-1 font-semibold text-black">
                                  {totalItemsCount} {totalItemsCount === 1 ? 'item' : 'items'}
                                  <Icon icon="solar:bill-list-linear" className="w-3.5 h-3.5 ml-1 text-gray-400 group-hover:text-black transition-colors" />
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Logout Button */}
                  <button 
                    onClick={() => logout()}
                    className="w-full border border-red-500 text-red-500 hover:bg-red-50 py-3 rounded-full font-sora font-semibold text-xs uppercase tracking-widest transition-all cursor-pointer text-center"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                /* Logged Out Login Form */
                <div className="h-full flex flex-col justify-center gap-6">
                  <div className="text-center space-y-2">
                    <Icon icon="solar:user-linear" className="w-16 h-16 mx-auto text-gray-300" />
                    <h3 className="font-oswald font-bold text-2xl uppercase tracking-wider text-black">Welcome Back</h3>
                    <p className="font-sora text-sm text-gray-500">Log in to view your orders and customize boards.</p>
                  </div>

                  <form onSubmit={handleLoginSubmit} className="space-y-4">
                    <div className="flex flex-col gap-1">
                      <label className="font-sora text-xs font-bold text-gray-500 uppercase tracking-wider">Full Name</label>
                      <input 
                        type="text" 
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Max Shredder"
                        className="w-full border border-black p-4 text-sm font-sora focus:outline-none focus:bg-[#FFD9A0]/10 text-black bg-white"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-sora text-xs font-bold text-gray-500 uppercase tracking-wider">Email Address</label>
                      <input 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="max@skatecrew.com"
                        className="w-full border border-black p-4 text-sm font-sora focus:outline-none focus:bg-[#FFD9A0]/10 text-black bg-white"
                      />
                    </div>
                    <button 
                      type="submit" 
                      className="w-full bg-black text-white hover:bg-[#FFD9A0] hover:text-black py-4 rounded-full font-sora font-bold text-xs uppercase tracking-widest transition-all cursor-pointer text-center"
                    >
                      Log In
                    </button>
                  </form>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
