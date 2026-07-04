import { Icon } from '@iconify/react';

export const metadata = {
  title: 'Skate Shop - Exclusives & Offers',
  description: 'Unlock special promotions and coupons for your custom skateboard build.',
};

const offers = [
  {
    code: 'SKATE15',
    discount: '15% OFF',
    description: 'Save 15% on any custom skateboard deck setup.',
    expiry: 'Valid until July 31, 2026',
    icon: 'solar:ticket-bold-duotone',
  },
  {
    code: 'FREESHIP',
    discount: 'FREE SHIPPING',
    description: 'Get free global express shipping on orders over $150.',
    expiry: 'Active Offer',
    icon: 'solar:delivery-bold-duotone',
  },
  {
    code: 'BOARD20',
    discount: '20% OFF DECK',
    description: 'Discount code applicable to custom maple decks.',
    expiry: 'Limited Time',
    icon: 'solar:case-round-bold-duotone',
  },
];

export default function OffersPage() {
  return (
    <div className="bg-white text-black min-h-screen py-16 px-6 md:px-16 selection:bg-[#FFD9A0] selection:text-black">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="font-oswald text-5xl md:text-7xl font-black uppercase tracking-tight text-black">
            Exclusives & Offers
          </h1>
          <p className="font-sora text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
            Boost your custom build. Copy any of the codes below during your purchase session.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <div 
              key={offer.code} 
              className="border border-black p-6 flex flex-col justify-between gap-6 hover:shadow-lg transition-all group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-black text-[#FFD9A0] flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform">
                  <Icon icon={offer.icon} className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-oswald font-black text-2xl uppercase text-black">{offer.discount}</h3>
                  <p className="font-sora text-xs text-gray-500 mt-1">{offer.description}</p>
                </div>
              </div>
              <div className="border-t border-dashed border-gray-200 pt-4 flex flex-col gap-3">
                <div className="bg-[#FFD9A0]/10 border border-[#FFD9A0]/30 py-2.5 px-4 rounded-xl flex items-center justify-between text-sm font-mono font-bold text-black select-all">
                  <span>{offer.code}</span>
                  <span className="text-[10px] uppercase font-sora bg-black text-white px-2 py-0.5 rounded font-semibold tracking-wider">
                    Copy Code
                  </span>
                </div>
                <span className="font-sora text-[10px] text-gray-400 font-semibold">{offer.expiry}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
