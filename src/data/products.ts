export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  images?: string[];
  category: 'men' | 'women' | 'children';
  description: string;
  rating: number;
  specs: {
    deckSize: string;
    woodType: string;
    wheelSize: string;
    bearingType: string;
  };
}

export const products: Product[] = [
  // ==================== ORIGINAL HOMEPAGE COLLECTION (MEN) ====================
  {
    id: 'men-orig-1',
    name: 'YELLOW BOARD',
    price: 120,
    image: '/images/products/product-2.png',
    images: ['/images/products/product-2.png'],
    category: 'men',
    description: 'Our classic skateboard design with an orange door graphics layout. Durable, lightweight, and perfect for street skating.',
    rating: 4.7,
    specs: {
      deckSize: '8.0" x 31.5"',
      woodType: '7-Ply Canadian Maple',
      wheelSize: '52mm 101a wheels',
      bearingType: 'ABEC-7 Chrome Bearings',
    }
  },
  {
    id: 'men-orig-2',
    name: 'YELLOW BOARD',
    price: 120,
    image: '/images/products/product-4.png',
    images: ['/images/products/product-4.png'],
    category: 'men',
    description: 'Minimalist yellow wall style skateboard. Ideal for street sessions and skatepark ramps.',
    rating: 4.6,
    specs: {
      deckSize: '8.0" x 31.5"',
      woodType: '7-Ply Canadian Maple',
      wheelSize: '52mm 101a wheels',
      bearingType: 'ABEC-7 Chrome Bearings',
    }
  },
  {
    id: 'men-orig-3',
    name: 'YELLOW BOARD',
    price: 120,
    image: '/images/products/product-3.png',
    images: ['/images/products/product-3.png'],
    category: 'men',
    description: 'Light blue/green graphics deck providing excellent board feel and responsiveness for advanced tricks.',
    rating: 4.8,
    specs: {
      deckSize: '8.125" x 31.625"',
      woodType: '7-Ply Hardrock Maple',
      wheelSize: '53mm 99a wheels',
      bearingType: 'ABEC-9 High Performance Bearings',
    }
  },
  {
    id: 'men-orig-4',
    name: 'YELLOW BOARD',
    price: 120,
    image: '/images/products/product-1.png',
    images: ['/images/products/product-1.png'],
    category: 'men',
    description: 'Our signature classic yellow skateboard deck, styled for city street skating.',
    rating: 4.8,
    specs: {
      deckSize: '8.0" x 31.5"',
      woodType: '7-Ply Canadian Maple',
      wheelSize: '52mm 101a wheels',
      bearingType: 'ABEC-7 Chrome Bearings',
    }
  },

  // ==================== MEN'S COLLECTION ====================
  {
    id: 'men-1',
    name: 'STREET WARRIOR PRO',
    price: 139,
    image: '/images/men/men-1.jpg',
    images: ['/images/men/men-1.jpg', '/images/men/men-1.1.jpg'],
    category: 'men',
    description: 'Designed for high-impact street skating. Features double kicktail with medium concave for perfect flip control.',
    rating: 4.8,
    specs: {
      deckSize: '8.25" x 31.75"',
      woodType: '7-Ply Canadian Maple',
      wheelSize: '52mm 101a wheels',
      bearingType: 'ABEC-7 Chrome Bearings',
    }
  },
  {
    id: 'men-2',
    name: 'CLASSIC STEALTH BLACK',
    price: 125,
    image: '/images/men/men-2.jpg',
    images: ['/images/men/men-2.jpg'],
    category: 'men',
    description: 'All-black minimalist deck built for speed, durability, and smooth slides. Pre-gripped with premium black grip tape.',
    rating: 4.7,
    specs: {
      deckSize: '8.0" x 31.5"',
      woodType: '7-Ply Hardrock Maple',
      wheelSize: '53mm 99a wheels',
      bearingType: 'ABEC-9 High Performance Bearings',
    }
  },
  {
    id: 'men-3',
    name: 'CONCRETE CARVER BLUE',
    price: 145,
    image: '/images/men/men-3.jpg',
    images: ['/images/men/men-3.jpg'],
    category: 'men',
    description: 'Perfect setup for skateparks and concrete bowls. Hard wheels and stable wheelbase provide excellent momentum.',
    rating: 4.9,
    specs: {
      deckSize: '8.375" x 32.0"',
      woodType: '7-Ply Maple & Epoxy blend',
      wheelSize: '54mm 101a park wheels',
      bearingType: 'ABEC-7 Chrome Bearings',
    }
  },
  {
    id: 'men-4',
    name: 'URBAN SHREDDER YELLOW',
    price: 119,
    image: '/images/men/men-4.jpg',
    images: ['/images/men/men-4.jpg'],
    category: 'men',
    description: 'High visibility street board designed for beginners and intermediate riders looking to dial in their basic flatground tricks.',
    rating: 4.5,
    specs: {
      deckSize: '7.875" x 31.25"',
      woodType: '7-Ply Birch Wood',
      wheelSize: '52mm 99a street wheels',
      bearingType: 'ABEC-5 Durable Bearings',
    }
  },
  {
    id: 'men-5',
    name: 'HARDWOOD PARK CRUISER',
    price: 155,
    image: '/images/men/men-5.jpg',
    images: ['/images/men/men-5.jpg'],
    category: 'men',
    description: 'Combining street performance with cruising speed. Softer wheels allow smooth transition over rough concrete.',
    rating: 4.7,
    specs: {
      deckSize: '8.5" x 32.25"',
      woodType: '8-Ply Hardrock Maple',
      wheelSize: '56mm 90a hybrid wheels',
      bearingType: 'ABEC-9 Lubricated Bearings',
    }
  },
  {
    id: 'men-6',
    name: 'VAPORWAVE NEON PINK',
    price: 130,
    image: '/images/men/men-6.jpg',
    images: ['/images/men/men-6.jpg'],
    category: 'men',
    description: 'Bright neon graphic style with high pop potential. Excellent board for technical flatground flip tricks.',
    rating: 4.6,
    specs: {
      deckSize: '8.0" x 31.5"',
      woodType: '7-Ply Canadian Maple',
      wheelSize: '51mm 101a wheels',
      bearingType: 'ABEC-7 Speed Bearings',
    }
  },
  {
    id: 'men-7',
    name: 'DESERT STORM SAND',
    price: 128,
    image: '/images/men/men-7.jpg',
    images: ['/images/men/men-7.jpg'],
    category: 'men',
    description: 'Matte sand finish deck optimized for stair sets and gaps. Strong epoxy adhesive guarantees long life without splitting.',
    rating: 4.8,
    specs: {
      deckSize: '8.125" x 31.625"',
      woodType: '7-Ply Hardrock Maple',
      wheelSize: '53mm 101a hard wheels',
      bearingType: 'ABEC-9 High Performance Bearings',
    }
  },
  {
    id: 'men-8',
    name: 'AQUA BREEZE PRO',
    price: 135,
    image: '/images/men/men-8.jpg',
    images: ['/images/men/men-8.jpg', '/images/men/men-8.1.jpg'],
    category: 'men',
    description: 'Fresh design with a medium-high concave for secure foot lock. Highly responsive trucks make carving effortless.',
    rating: 4.8,
    specs: {
      deckSize: '8.25" x 31.75"',
      woodType: '7-Ply Canadian Maple',
      wheelSize: '52mm 99a wheels',
      bearingType: 'ABEC-7 Chrome Bearings',
    }
  },
  {
    id: 'men-9',
    name: 'CHROME CYBER SHADOW',
    price: 149,
    image: '/images/men/men-9.jpg',
    images: ['/images/men/men-9.jpg'],
    category: 'men',
    description: 'Metallic finish cyberpunk themed deck. Built with premium reinforced fiberglass layer for extra pop and flex.',
    rating: 4.9,
    specs: {
      deckSize: '8.25" x 31.875"',
      woodType: '6-Ply Maple + 1-Ply Fiberglass',
      wheelSize: '52mm 101a wheels',
      bearingType: 'ABEC-9 Ceramic Bearings',
    }
  },
  {
    id: 'men-10',
    name: 'FIRESTORM CRUISER RED',
    price: 122,
    image: '/images/men/men-10.jpg',
    images: ['/images/men/men-10.jpg'],
    category: 'men',
    description: 'A fiery red design offering dynamic board response. Tailored to withstand harsh rail slides and grinds.',
    rating: 4.6,
    specs: {
      deckSize: '8.0" x 31.5"',
      woodType: '7-Ply Canadian Maple',
      wheelSize: '53mm 99a wheels',
      bearingType: 'ABEC-7 Chrome Bearings',
    }
  },
  {
    id: 'men-11',
    name: 'GREEN FOREST TRACKER',
    price: 132,
    image: '/images/men/men-11.jpg',
    images: ['/images/men/men-11.jpg'],
    category: 'men',
    description: 'Organic wood grain style with forest graphics. A sturdy board that holds line speed exceptionally well in bowls.',
    rating: 4.7,
    specs: {
      deckSize: '8.375" x 32.0"',
      woodType: '7-Ply Hardrock Maple',
      wheelSize: '54mm 99a wheels',
      bearingType: 'ABEC-7 Speed Bearings',
    }
  },
  {
    id: 'men-12',
    name: 'GALAXY GLIDE STELLAR',
    price: 159,
    image: '/images/men/men-12.jpg',
    images: ['/images/men/men-12.jpg'],
    category: 'men',
    description: 'Stellar space graphics on a lightweight high-pop deck. Carbon fiber composite layer makes this board extremely light.',
    rating: 5.0,
    specs: {
      deckSize: '8.25" x 31.75"',
      woodType: '5-Ply Maple + 2-Ply Carbon Fiber',
      wheelSize: '52mm 101a wheels',
      bearingType: 'ABEC-9 Swiss Bearings',
    }
  },
  {
    id: 'men-13',
    name: 'STEALTH SHADOW NIGHT',
    price: 120,
    image: '/images/men/men-13.jpg',
    images: ['/images/men/men-13.jpg'],
    category: 'men',
    description: 'Shadowy design matching urban night skaters. Highly resistant to impact damage and deck wear.',
    rating: 4.6,
    specs: {
      deckSize: '8.0" x 31.5"',
      woodType: '7-Ply Canadian Maple',
      wheelSize: '53mm 99a wheels',
      bearingType: 'ABEC-7 Chrome Bearings',
    }
  },
  {
    id: 'men-14',
    name: 'SUMMIT STRIKER PRO',
    price: 145,
    image: '/images/men/men-14.jpg',
    images: ['/images/men/men-14.jpg', '/images/men/men-14.1.jpg', '/images/men/men-14.2.jpg'],
    category: 'men',
    description: 'Top-tier technical deck featuring variable wheelbase mounts for customizing truck positioning and turning radius.',
    rating: 4.9,
    specs: {
      deckSize: '8.5" x 32.125"',
      woodType: '7-Ply Canadian Maple',
      wheelSize: '52mm 101a street wheels',
      bearingType: 'ABEC-9 Ceramic Bearings',
    }
  },

  // ==================== WOMEN'S COLLECTION ====================
  {
    id: 'women-1',
    name: 'CHERRY BLOSSOM RIDE',
    price: 129,
    image: '/images/women/women-1.jpg',
    images: ['/images/women/women-1.jpg', '/images/women/women-1.2.jpg'],
    category: 'women',
    description: 'Elegant cherry blossom graphics on a responsive deck. Slightly lighter construction for effortless pops.',
    rating: 4.8,
    specs: {
      deckSize: '7.75" x 31.25"',
      woodType: '7-Ply Canadian Maple',
      wheelSize: '52mm 99a soft-slide wheels',
      bearingType: 'ABEC-7 Chrome Bearings',
    }
  },
  {
    id: 'women-2',
    name: 'PASTEL MINT CRUISE',
    price: 135,
    image: '/images/women/women-2.jpg',
    images: ['/images/women/women-2.jpg', '/images/women/women-2.1.jpg', '/images/women/women-2.2.jpg'],
    category: 'women',
    description: 'Fresh mint colors paired with smooth-rolling cruiser wheels. Provides a relaxed, quiet ride on city streets.',
    rating: 4.8,
    specs: {
      deckSize: '8.0" x 31.5"',
      woodType: '7-Ply Maple & Bamboo blend',
      wheelSize: '56mm 85a soft cruiser wheels',
      bearingType: 'ABEC-9 Lubricated Bearings',
    }
  },
  {
    id: 'women-3',
    name: 'SUNSET GLOW PRO',
    price: 145,
    image: '/images/women/women-3.jpg',
    images: ['/images/women/women-3.jpg', '/images/women/women-3.1.jpg', '/images/women/women-3.2.jpg', '/images/women/women-3.3.jpg', '/images/women/women-3.4.jpg'],
    category: 'women',
    description: 'Warm sunset graphics matching highly functional hardware. Ideal for street, ledge, and flatbar practice.',
    rating: 4.9,
    specs: {
      deckSize: '7.875" x 31.375"',
      woodType: '7-Ply Canadian Maple',
      wheelSize: '52mm 101a park wheels',
      bearingType: 'ABEC-9 Ceramic Bearings',
    }
  },
  {
    id: 'women-4',
    name: 'CORAL SHIMMER DRIFT',
    price: 125,
    image: '/images/women/women-4.jpg',
    images: ['/images/women/women-4.jpg'],
    category: 'women',
    description: 'Brilliant coral graphic pattern with medium concave. Provides excellent board feel and foot control during slides.',
    rating: 4.6,
    specs: {
      deckSize: '7.75" x 31.25"',
      woodType: '7-Ply Hardrock Maple',
      wheelSize: '53mm 99a wheels',
      bearingType: 'ABEC-7 Speed Bearings',
    }
  },
  {
    id: 'women-5',
    name: 'LAVENDER LIGHT SPEED',
    price: 119,
    image: '/images/women/women-5.jpg',
    images: ['/images/women/women-5.jpg'],
    category: 'women',
    description: 'Super lightweight setup tailored for faster flip tricks and technical manuals. Pre-assembled and ready to skate.',
    rating: 4.7,
    specs: {
      deckSize: '7.625" x 31.0"',
      woodType: '7-Ply Birch Wood',
      wheelSize: '51mm 101a wheels',
      bearingType: 'ABEC-5 Durable Bearings',
    }
  },
  {
    id: 'women-6',
    name: 'OCEAN SPRAY CARVE',
    price: 138,
    image: '/images/women/women-6.jpg',
    images: ['/images/women/women-6.jpg'],
    category: 'women',
    description: 'Dynamic carving board with a slightly wider shape. Great stability for downhill runs and high speed bowl skating.',
    rating: 4.7,
    specs: {
      deckSize: '8.25" x 31.75"',
      woodType: '7-Ply Canadian Maple',
      wheelSize: '54mm 95a softer wheels',
      bearingType: 'ABEC-7 Chrome Bearings',
    }
  },
  {
    id: 'women-7',
    name: 'NEBULA NIGHTFLOW',
    price: 140,
    image: '/images/women/women-7.jpg',
    images: ['/images/women/women-7.jpg', '/images/women/women-7.1.jpg'],
    category: 'women',
    description: 'Stunning cosmic design on a high-durability deck. Reinforced tail section prevents razor tail and cracks.',
    rating: 4.8,
    specs: {
      deckSize: '8.0" x 31.5"',
      woodType: '7-Ply Canadian Maple',
      wheelSize: '52mm 99a wheels',
      bearingType: 'ABEC-9 High Performance Bearings',
    }
  },
  {
    id: 'women-8',
    name: 'AMETHYST WAVE RIDER',
    price: 122,
    image: '/images/women/women-8.jpg',
    images: ['/images/women/women-8.jpg'],
    category: 'women',
    description: 'Deep violet wave graphics. Soft bushings in the trucks enable sharp turns with minimal effort.',
    rating: 4.5,
    specs: {
      deckSize: '7.875" x 31.375"',
      woodType: '7-Ply Hardrock Maple',
      wheelSize: '53mm 99a wheels',
      bearingType: 'ABEC-7 Speed Bearings',
    }
  },
  {
    id: 'women-9',
    name: 'AMBER AURA SUN',
    price: 139,
    image: '/images/women/women-9.jpg',
    images: ['/images/women/women-9.jpg', '/images/women/women-9.1.jpg', '/images/women/women-9.2.jpg'],
    category: 'women',
    description: 'Sunny orange graphics on a sturdy setup. Ideal for flatground practice, ledges, and rails.',
    rating: 4.9,
    specs: {
      deckSize: '8.0" x 31.5"',
      woodType: '7-Ply Canadian Maple',
      wheelSize: '52mm 101a wheels',
      bearingType: 'ABEC-9 Ceramic Bearings',
    }
  },
  {
    id: 'women-10',
    name: 'SILVER DUST SLICK',
    price: 127,
    image: '/images/women/women-10.jpg',
    images: ['/images/women/women-10.jpg'],
    category: 'women',
    description: 'Special bottom layer coating allows longer, easier board slides on metal rails and concrete ledges.',
    rating: 4.6,
    specs: {
      deckSize: '7.75" x 31.25"',
      woodType: '7-Ply Hardrock Maple',
      wheelSize: '52mm 99a wheels',
      bearingType: 'ABEC-7 Chrome Bearings',
    }
  },
  {
    id: 'women-11',
    name: 'JADE FOREST VENTURE',
    price: 142,
    image: '/images/women/women-11.jpg',
    images: ['/images/women/women-11.jpg', '/images/women/women-11.1.jpg', '/images/women/women-11.2.jpg'],
    category: 'women',
    description: 'Deep forest green graphic styling. Extra stiff maple ply provides outstanding pop responsiveness.',
    rating: 4.8,
    specs: {
      deckSize: '8.125" x 31.625"',
      woodType: '7-Ply Canadian Maple',
      wheelSize: '53mm 101a wheels',
      bearingType: 'ABEC-9 Swiss Bearings',
    }
  },

  // ==================== CHILDREN'S COLLECTION ====================
  {
    id: 'kids-1',
    name: 'JUNIOR FLAME RED',
    price: 89,
    image: '/images/kids/kids-1.jpg',
    images: ['/images/kids/kids-1.jpg', '/images/kids/kds-1.1.jpg', '/images/kids/kids-1.2.jpg'],
    category: 'children',
    description: 'Compact scale deck crafted for smaller feet. Softer bushings make steering easier for children.',
    rating: 4.7,
    specs: {
      deckSize: '7.25" x 29.5"',
      woodType: '7-Ply Birch Wood',
      wheelSize: '52mm 92a soft-ride wheels',
      bearingType: 'ABEC-5 Safety Bearings',
    }
  },
  {
    id: 'kids-2',
    name: "LIL' LIGHTNING CRUISER",
    price: 95,
    image: '/images/kids/kids-2.jpg',
    images: ['/images/kids/kids-2.jpg'],
    category: 'children',
    description: 'Fun lighting graphics on a stable cruiser shape. Ideal first board to practice balancing and rolling.',
    rating: 4.8,
    specs: {
      deckSize: '7.5" x 30.0"',
      woodType: '7-Ply Maple Wood',
      wheelSize: '55mm 88a soft wheels',
      bearingType: 'ABEC-5 Durable Bearings',
    }
  },
  {
    id: 'kids-3',
    name: 'GREEN DINO SHREDDER',
    price: 85,
    image: '/images/kids/kids-3.jpg',
    images: ['/images/kids/kids-3.jpg'],
    category: 'children',
    description: 'Dinosaur graphics children will love. Short deck shape makes it highly maneuverable for young beginners.',
    rating: 4.6,
    specs: {
      deckSize: '7.0" x 28.5"',
      woodType: '7-Ply Birch Wood',
      wheelSize: '51mm 95a stable wheels',
      bearingType: 'ABEC-5 Safety Bearings',
    }
  },
  {
    id: 'kids-4',
    name: 'PINK BUBBLEGUM POP',
    price: 89,
    image: '/images/kids/kids-4.jpg',
    images: ['/images/kids/kids-4.jpg'],
    category: 'children',
    description: 'Bright pink candy theme. High traction grip tape helps keep little feet locked in place safely.',
    rating: 4.7,
    specs: {
      deckSize: '7.25" x 29.5"',
      woodType: '7-Ply Maple Wood',
      wheelSize: '52mm 92a wheels',
      bearingType: 'ABEC-5 Safety Bearings',
    }
  },
  {
    id: 'kids-5',
    name: 'ORANGE TIGER SPRINT',
    price: 92,
    image: '/images/kids/kids-5.jpg',
    images: ['/images/kids/kids-5.jpg'],
    category: 'children',
    description: 'Fierce tiger stripe style on a responsive junior board. Helps kids master carvings and basic turns easily.',
    rating: 4.5,
    specs: {
      deckSize: '7.375" x 29.75"',
      woodType: '7-Ply Hardrock Maple',
      wheelSize: '53mm 95a hybrid wheels',
      bearingType: 'ABEC-7 Chrome Bearings',
    }
  },
  {
    id: 'kids-6',
    name: 'BRIGHT BUMBLEBEE PARK',
    price: 99,
    image: '/images/kids/kids-6.jpg',
    images: ['/images/kids/kids-6.jpg', '/images/kids/kids-6.1.jpg', '/images/kids/kids-6.2.jpg'],
    category: 'children',
    description: 'Premium kids skateboard designed for skatepark usage. Stiff wood layout supports learning first ollies.',
    rating: 4.9,
    specs: {
      deckSize: '7.5" x 30.0"',
      woodType: '7-Ply Canadian Maple',
      wheelSize: '52mm 99a wheels',
      bearingType: 'ABEC-7 Chrome Bearings',
    }
  },
  {
    id: 'kids-7',
    name: 'STARRY SKY EXPLORER',
    price: 88,
    image: '/images/kids/kids-7.jpg',
    images: ['/images/kids/kids-7.jpg'],
    category: 'children',
    description: 'Beautiful night sky themed beginner board. Provides highly stable and smooth ride over street bumps.',
    rating: 4.6,
    specs: {
      deckSize: '7.0" x 28.5"',
      woodType: '7-Ply Birch Wood',
      wheelSize: '54mm 90a softer wheels',
      bearingType: 'ABEC-5 Safety Bearings',
    }
  }
];
