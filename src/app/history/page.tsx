export const metadata = {
  title: 'Our History - Skate Culture Timeline',
  description: 'Follow the roots of skateboarding culture from early sidewalk surfing to modern Olympic status.',
};

const historyTimeline = [
  {
    year: '1950s',
    title: 'Sidewalk Surfing Origins',
    desc: 'Surfers in California seek concrete waves when ocean surf is flat. Clay wheels are slapped onto wooden boxes, paving the way for sidewalk surfing.',
  },
  {
    year: '1970s',
    title: 'Urethane Wheels Revolution',
    desc: 'Frank Nasworthy invents urethane skate wheels, giving skateboarders unparalleled grip, traction, and control. Skateparks open across the globe.',
  },
  {
    year: '1980s',
    title: 'Street Skating & Ollie Rise',
    desc: 'Alan Gelfand invents the flatground Ollie, sending skating airborne. Street skating emerges as a raw, expressive urban art form.',
  },
  {
    year: '2020s',
    title: 'Olympic Inclusion & Global Tech',
    desc: 'Skateboarding goes official in the Olympics. Modern custom web configurators (like Skate Store!) let riders map out premium maple decks worldwide.',
  },
];

export default function HistoryPage() {
  return (
    <div className="bg-white text-black min-h-screen py-16 px-6 md:px-16 selection:bg-[#FFD9A0] selection:text-black">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="font-oswald text-5xl md:text-7xl font-black uppercase tracking-tight text-black">
            Our History
          </h1>
          <p className="font-sora text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
            The evolution of concrete surfing. Exploring the milestones that built the modern skate scene.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-black ml-4 md:ml-32 space-y-12 py-6">
          {historyTimeline.map((item) => (
            <div key={item.year} className="relative pl-8 md:pl-12 group">
              {/* Timeline Bullet */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-white border-2 border-black rounded-full group-hover:bg-[#FFD9A0] group-hover:scale-125 transition-all" />
              
              {/* Time Label for larger screens */}
              <div className="hidden md:block absolute -left-36 top-0 w-24 text-right">
                <span className="font-oswald font-black text-3xl tracking-tight text-black">
                  {item.year}
                </span>
              </div>

              {/* Card Container */}
              <div className="border border-black p-6 hover:shadow-md transition-all space-y-2">
                <span className="md:hidden font-oswald font-black text-2xl text-black block mb-1">
                  {item.year}
                </span>
                <h3 className="font-oswald font-bold text-xl uppercase tracking-tight text-black">
                  {item.title}
                </h3>
                <p className="font-sora text-xs text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
