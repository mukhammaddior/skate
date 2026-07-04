export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
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
  {
    id: '1',
    name: 'YELLOW BOARD CLASSIC',
    price: 120,
    image: '/images/products/product-1.png',
    category: 'men',
    description: 'Our flagship yellow deck designed for street skating and skatepark performance. Crafted from 7-ply Canadian maple with medium concave.',
    rating: 4.8,
    specs: {
      deckSize: '8.0" x 31.5"',
      woodType: '7-Ply Canadian Maple',
      wheelSize: '52mm 101a wheels',
      bearingType: 'ABEC-7 Chrome Bearings',
    }
  },
  {
    id: '2',
    name: 'STREET PRO BLUE',
    price: 135,
    image: '/images/products/product-2.png',
    category: 'men',
    description: 'Engineered for advanced technical street skating. Features a slightly steeper kicktail and nose for maximum pop.',
    rating: 4.9,
    specs: {
      deckSize: '8.25" x 31.875"',
      woodType: '7-Ply Hardrock Maple',
      wheelSize: '53mm 99a wheels',
      bearingType: 'ABEC-9 High Performance Bearings',
    }
  },
  {
    id: '3',
    name: 'WAVE RUNNER PINK',
    price: 110,
    image: '/images/products/product-3.png',
    category: 'women',
    description: 'A stylish, high-concave board tailored for responsiveness and fast carving. Bright pastel graphics with full grip tape.',
    rating: 4.7,
    specs: {
      deckSize: '7.75" x 31.25"',
      woodType: '7-Ply Canadian Maple',
      wheelSize: '54mm 95a softer wheels',
      bearingType: 'ABEC-7 Speed Bearings',
    }
  },
  {
    id: '4',
    name: 'RETRO CRUSER RED',
    price: 95,
    image: '/images/products/product-4.png',
    category: 'children',
    description: 'Perfect beginner skateboard for younger riders. Shorter deck and softer wheels to absorb bumps and offer stable control.',
    rating: 4.6,
    specs: {
      deckSize: '7.25" x 29.5"',
      woodType: '7-Ply Birch Wood',
      wheelSize: '55mm 85a soft cruiser wheels',
      bearingType: 'ABEC-5 Durable Bearings',
    }
  },
  {
    id: '5',
    name: 'SUNSET GOLD CRUISER',
    price: 145,
    image: 'https://images.unsplash.com/photo-1547447134-cd3f5c716030?q=80&w=800&auto=format&fit=crop',
    category: 'women',
    description: 'A premium cruiser board for smooth commuting and carving. Soft wheels provide an incredibly silent, smooth ride on asphalt.',
    rating: 4.9,
    specs: {
      deckSize: '8.5" x 32.2"',
      woodType: '8-Ply Maple & Bamboo blend',
      wheelSize: '60mm 78a super soft wheels',
      bearingType: 'ABEC-9 Lubricated Bearings',
    }
  },
  {
    id: '6',
    name: 'JUNIOR RAMP EXPLORER',
    price: 85,
    image: 'https://images.unsplash.com/photo-1520045807913-c4f3f88f8251?q=80&w=800&auto=format&fit=crop',
    category: 'children',
    description: 'Sturdy junior scale setup designed specifically to help children learn balance, carving, and basic skate ramp tricks safely.',
    rating: 4.5,
    specs: {
      deckSize: '7.0" x 28.5"',
      woodType: '7-Ply Maple Wood',
      wheelSize: '51mm 92a all-around wheels',
      bearingType: 'ABEC-5 Safety Bearings',
    }
  }
];
