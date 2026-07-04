'use client';

import { Order } from '@/store/useUserStore';
import { Icon } from '@iconify/react';

interface ReceiptProps {
  order: Order;
  onClose: () => void;
}

export default function Receipt({ order, onClose }: ReceiptProps) {
  // Format Date (e.g., '2026-07-01' -> '01 JUL, 2026')
  const formatDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      const day = date.getDate();
      const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
      const year = date.getFullYear();
      return `${day} ${month}, ${year}`;
    } catch (e) {
      return dateStr;
    }
  };

  // Binary pattern for authentic barcode rendering (1 = bar, 0 = space)
  const barcodePattern = "101100101011101100110101011011001101011011001101011001101011101100110101011011001101011";

  return (
    <div className="relative w-full max-w-[360px] mx-auto bg-white text-black shadow-lg flex flex-col rounded-t-3xl overflow-visible animate-scale-in select-none my-4">
      
      {/* Top Section */}
      <div className="px-6 pt-6 pb-4 flex flex-col items-center text-center">
        {/* Confetti Popper */}
        <div className="text-3xl mb-3 animate-bounce">🎉</div>
        
        <h3 className="font-oswald font-black text-xl uppercase tracking-wider text-black">
          Thank you
        </h3>
        <p className="font-sora text-[10px] text-gray-500 max-w-[200px] mt-1 leading-relaxed">
          Your payment has been processed successfully.
        </p>
      </div>

      {/* --- Notch Separator Line --- */}
      <div className="relative w-full py-2">
        {/* Left Notch cut-out - matches dark drawer background */}
        <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-neutral-950" />
        {/* Right Notch cut-out - matches dark drawer background */}
        <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-neutral-950" />
        {/* Dashed line */}
        <div className="border-t border-dashed border-gray-300 mx-5" />
      </div>

      {/* --- Metadata Details Section --- */}
      <div className="px-6 py-3 space-y-3.5 text-left font-sora">
        {/* Ticket ID & Amount */}
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <span className="text-gray-400 font-bold text-[9px] uppercase tracking-wider block">Ticket ID</span>
            <span className="font-mono text-xs font-bold text-black tracking-tight">{order.id}</span>
          </div>
          <div className="text-right">
            <span className="text-gray-400 font-bold text-[9px] uppercase tracking-wider block">Amount</span>
            <span className="text-base font-extrabold text-black">${order.total.toFixed(2)}</span>
          </div>
        </div>

        {/* Date & Time */}
        <div>
          <span className="text-gray-400 font-bold text-[9px] uppercase tracking-wider block">Date & Time</span>
          <span className="text-xs font-bold text-black uppercase">
            {formatDate(order.date)} <span className="text-gray-300 mx-1">|</span> {order.time}
          </span>
        </div>

        {/* Purchased Items List */}
        <div className="border-t border-gray-100 pt-3.5 space-y-1.5">
          <span className="text-gray-400 font-bold text-[9px] uppercase tracking-wider block mb-1">Items Summary</span>
          {order.items.map((item) => (
            <div key={item.id} className="flex justify-between items-center text-[11px] text-gray-600">
              <span className="font-semibold truncate max-w-[200px]">
                {item.quantity}x <span className="uppercase font-oswald text-black tracking-tight">{item.name}</span>
              </span>
              <span className="font-semibold text-black">${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* --- Barcode Divider Line --- */}
      <div className="border-t border-dashed border-gray-200 mx-5 mt-3" />

      {/* --- Barcode Section --- */}
      <div className="px-6 pt-4 pb-8 flex flex-col items-center">
        {/* Scalable Barcode */}
        <div className="w-full flex justify-center h-10">
          {barcodePattern.split('').map((char, index) => (
            <div 
              key={index}
              className={`h-full ${char === '1' ? 'bg-black' : 'bg-transparent'}`}
              style={{
                width: index % 7 === 0 ? '2px' : '1.5px',
                marginLeft: index % 5 === 0 ? '0.75px' : '0px'
              }}
            />
          ))}
        </div>
        {/* Barcode number label */}
        <span className="font-mono text-[8px] text-gray-500 font-bold tracking-[0.25em] mt-1.5">
          400600890050002070013
        </span>
      </div>

      {/* --- Scalloped Ticket Bottom Edge --- */}
      <div className="absolute top-[100%] left-0 right-0 h-4 overflow-hidden flex justify-between px-2 -translate-y-1/2">
        {Array.from({ length: 10 }).map((_, idx) => (
          <div 
            key={idx} 
            className="w-5 h-5 rounded-full bg-neutral-950 flex-shrink-0"
            style={{ margin: '0 -2px' }}
          />
        ))}
      </div>

    </div>
  );
}
