import { Icon } from '@iconify/react';

export const metadata = {
  title: 'Skate Tutorials - Learn How to Skate',
  description: 'Master tricks from beginner pushing to advanced kickflips with our curated guide list.',
};

const tutorials = [
  {
    id: 'pushing',
    title: 'Basic Pushing and Stance',
    level: 'Beginner',
    difficulty: 'Easy',
    steps: [
      'Find your comfortable stance (Regular vs Goofy).',
      'Place your front foot over the front bolts pointing forward.',
      'Push off with your back foot gently, maintaining balance on your front leg.',
      'Bring your back foot up to the tail and pivot your front foot sideways.',
    ],
  },
  {
    id: 'ollie',
    title: 'How to Ollie',
    level: 'Intermediate',
    difficulty: 'Medium',
    steps: [
      'Place your back foot on the tip of the tail, front foot behind front bolts.',
      'Snap the tail down hard against the concrete (the pop).',
      'Jump and slide your front foot up the grip tape to level out the board.',
      'Slightly pull up your back foot and absorb the landing with bent knees.',
    ],
  },
  {
    id: 'kickflip',
    title: 'How to Kickflip',
    level: 'Advanced',
    difficulty: 'Hard',
    steps: [
      'Set up in Ollie position, but angle front foot slightly toe-hanging.',
      'Pop the tail and jump straight up.',
      'Slide your front foot up and flick out off the corner pocket of the nose.',
      'Watch the board rotate, catch it with your back foot first, and land.',
    ],
  },
];

export default function TutorialsPage() {
  return (
    <div className="bg-white text-black min-h-screen py-16 px-6 md:px-16 selection:bg-[#FFD9A0] selection:text-black">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="font-oswald text-5xl md:text-7xl font-black uppercase tracking-tight text-black">
            Skate Tutorials
          </h1>
          <p className="font-sora text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
            Level up your street game. Follow our step-by-step instructions to master trick controls.
          </p>
        </div>

        {/* Tutorials List */}
        <div className="space-y-8">
          {tutorials.map((trick) => (
            <div 
              key={trick.id} 
              className="border border-black p-8 hover:shadow-lg transition-all space-y-6"
            >
              {/* Top Row Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FFD9A0] bg-black px-3.5 py-1 rounded-full border border-black/10">
                    {trick.level}
                  </span>
                  <h3 className="font-oswald font-black text-2xl uppercase tracking-tight text-black mt-2">
                    {trick.title}
                  </h3>
                </div>
                <div className="flex items-center gap-1 text-sm font-semibold text-gray-500 font-sora">
                  <Icon icon="solar:star-linear" className="w-4 h-4 text-black" />
                  <span>Difficulty: {trick.difficulty}</span>
                </div>
              </div>

              {/* Steps List */}
              <div className="space-y-4 font-sora">
                <h4 className="font-bold text-xs uppercase tracking-wider text-gray-400">Step-By-Step Guide</h4>
                <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700">
                  {trick.steps.map((step, idx) => (
                    <li key={idx} className="leading-relaxed pl-1">
                      <span className="font-semibold text-black">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
