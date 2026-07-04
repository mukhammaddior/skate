import { Icon } from '@iconify/react';
import Image from 'next/image';

export const metadata = {
  title: 'Skate Videos - Latest Runs & Setups',
  description: 'Watch professional skateboarding runs, setup walkthroughs, and custom board builds.',
};

const videos = [
  {
    id: 1,
    title: 'Building the Perfect Custom Skateboard Setup',
    duration: '12:45',
    thumbnail: 'https://images.unsplash.com/photo-1547447134-cd3f5c716030?q=80&w=800&auto=format&fit=crop',
    views: '45K views',
  },
  {
    id: 2,
    title: 'Downtown Street Skating Session: Raw Cuts',
    duration: '08:20',
    thumbnail: 'https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?q=80&w=800&auto=format&fit=crop',
    views: '120K views',
  },
  {
    id: 3,
    title: 'Canadian Maple Wood Test: How Much Force Can a Deck Take?',
    duration: '15:10',
    thumbnail: 'https://images.unsplash.com/photo-1473163928189-364b2c4e1135?q=80&w=800&auto=format&fit=crop',
    views: '88K views',
  },
];

export default function VideosPage() {
  return (
    <div className="bg-white text-black min-h-screen py-16 px-6 md:px-16 selection:bg-[#FFD9A0] selection:text-black">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="font-oswald text-5xl md:text-7xl font-black uppercase tracking-tight text-black">
            Skate Videos
          </h1>
          <p className="font-sora text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
            Watch our crew shred the streets and walkthrough step-by-step assembly guides.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div 
              key={video.id} 
              className="border border-black flex flex-col hover:shadow-lg transition-all group cursor-pointer"
            >
              {/* Thumbnail Container */}
              <div className="relative h-52 w-full bg-gray-50 border-b border-black overflow-hidden flex items-center justify-center">
                <Image 
                  src={video.thumbnail} 
                  alt={video.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                {/* Play Button Icon */}
                <div className="absolute w-14 h-14 bg-white text-black rounded-full flex items-center justify-center group-hover:bg-[#FFD9A0] transition-all transform group-hover:scale-110 shadow-lg">
                  <Icon icon="solar:play-bold" className="w-6 h-6 ml-1" />
                </div>
                {/* Duration Badge */}
                <span className="absolute bottom-3 right-3 bg-black text-white font-mono text-[10px] px-2 py-0.5 rounded font-bold">
                  {video.duration}
                </span>
              </div>

              {/* Info Body */}
              <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
                <h3 className="font-oswald font-bold text-lg uppercase tracking-tight text-black leading-tight group-hover:underline">
                  {video.title}
                </h3>
                <div className="flex justify-between items-center text-[10px] text-gray-400 font-bold uppercase tracking-widest font-sora pt-4 border-t border-gray-100">
                  <span>YouTube Premier</span>
                  <span>{video.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
