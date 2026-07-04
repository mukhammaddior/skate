import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Skate Articles & News',
  description: 'Stay updated with skateboard building tips, guides, and culture insights.',
};

const articles = [
  {
    id: 1,
    title: 'How to Choose Your Skateboard Wheels size and hardness',
    summary: 'A detailed breakdown of wheel sizes, durometer levels, and formulas to help you configure your customized setup.',
    date: 'June 28, 2026',
    author: 'Leo Harris',
    img: 'https://images.unsplash.com/photo-1547447134-cd3f5c716030?q=80&w=800&auto=format&fit=crop',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'The Pop Secret: Maple Wood Processing Secrets',
    summary: 'Inside the woodshops creating the strongest decks in the world. Discover why 7-ply hardrock maple is the absolute standard.',
    date: 'June 20, 2026',
    author: 'Sam Shredder',
    img: 'https://images.unsplash.com/photo-1473163928189-364b2c4e1135?q=80&w=800&auto=format&fit=crop',
    readTime: '8 min read',
  },
  {
    id: 3,
    title: 'Skateboarding In The Olympics: The Cultural Shift',
    summary: 'How street skating transitioning to professional global competitions impact street style, custom board aesthetics, and raw culture.',
    date: 'June 15, 2026',
    author: 'Vince Cole',
    img: 'https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?q=80&w=800&auto=format&fit=crop',
    readTime: '6 min read',
  },
];

export default function ArticlesPage() {
  return (
    <div className="bg-white text-black min-h-screen py-16 px-6 md:px-16 selection:bg-[#FFD9A0] selection:text-black">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="font-oswald text-5xl md:text-7xl font-black uppercase tracking-tight text-black">
            Articles & News
          </h1>
          <p className="font-sora text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
            Tips, guides, and skate culture features straight from our urban crew.
          </p>
        </div>

        {/* Articles List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article 
              key={article.id} 
              className="border border-black flex flex-col hover:shadow-lg transition-all group"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full bg-gray-50 border-b border-black overflow-hidden">
                <Image 
                  src={article.img} 
                  alt={article.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Text Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest font-sora">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="font-oswald font-bold text-xl uppercase tracking-tight text-black group-hover:underline leading-tight">
                    {article.title}
                  </h3>
                  <p className="font-sora text-xs text-gray-600 leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="font-sora text-[10px] font-bold text-black uppercase tracking-wide">
                    By {article.author}
                  </span>
                  <span className="font-sora text-[10px] font-extrabold uppercase text-black group-hover:text-amber-500 transition-colors">
                    Read More →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
