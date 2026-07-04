import { Icon } from '@iconify/react';

export const metadata = {
  title: 'How To Skate - Beginner Fundamentals Guide',
  description: 'Master the fundamentals of skateboarding: stance, pushing, stopping, and turning.',
};

const guideSteps = [
  {
    step: '01',
    title: 'Find Your Stance (Regular vs Goofy)',
    desc: 'Regular riders place their left foot forward; Goofy riders place their right foot forward. To test yours, slide on a smooth floor or stand relaxed and have someone gently push you from behind. The foot you step forward with is naturally your front foot.',
  },
  {
    step: '02',
    title: 'Foot Positioning & Pushing',
    desc: 'Keep your front foot straight over the front bolts pointing forward. Push off the ground with your back foot in long, smooth strides. Once rolling, bring your back foot onto the tail and pivot your front foot sideways (perpendicular to the board) for stability.',
  },
  {
    step: '03',
    title: 'Carving & Steering',
    desc: 'To turn, lean your body weight slightly. Leaning on your toes turns the board toe-side; leaning on your heels turns it heel-side. Keep your knees bent to absorb shifts in weight and pavement cracks.',
  },
  {
    step: '04',
    title: 'Stopping (Foot Braking)',
    desc: 'Never jump off a fast-moving board. To slow down, pivot your front foot straight, lower your back foot, and slide the sole of your shoe flat along the concrete, applying gentle pressure until you come to a complete stop.',
  },
];

export default function HowToSkatePage() {
  return (
    <div className="bg-white text-black min-h-screen py-16 px-6 md:px-16 selection:bg-[#FFD9A0] selection:text-black">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="font-oswald text-5xl md:text-7xl font-black uppercase tracking-tight text-black">
            How To Skate
          </h1>
          <p className="font-sora text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
            The ultimate starter pack. Master balance, foot control, and safety controls before heading to the ramps.
          </p>
        </div>

        {/* Stance visual card */}
        <div className="border border-black p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 justify-between">
          <div className="space-y-2">
            <h3 className="font-oswald font-black text-2xl uppercase tracking-tight text-black">Stance Check</h3>
            <p className="font-sora text-xs text-gray-600 max-w-md leading-relaxed">
              Stance is everything. Do not ride "Mongo" (pushing with your front foot). Always push with your back foot and keep your front foot locked over the bolts.
            </p>
          </div>
          <div className="flex gap-4 font-mono font-bold text-xs uppercase">
            <span className="bg-[#FFD9A0] border border-black px-4 py-2.5 text-black">Left Foot Forward = Regular</span>
            <span className="bg-black text-white px-4 py-2.5">Right Foot Forward = Goofy</span>
          </div>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guideSteps.map((item) => (
            <div key={item.step} className="border border-black p-6 space-y-4 flex flex-col justify-between hover:shadow-md transition-all">
              <div className="space-y-3">
                <span className="font-oswald font-black text-4xl text-[#FFD9A0] [-webkit-text-stroke:1px_black] tracking-tight block">
                  {item.step}
                </span>
                <h3 className="font-oswald font-bold text-lg uppercase tracking-tight text-black">
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
