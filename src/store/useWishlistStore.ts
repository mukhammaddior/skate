import { create } from 'zustand';
import { Product } from '@/data/products';

interface WishlistState {
  items: Product[];
  isOpen: boolean;
  toggleWishlist: () => void;
  toggleItem: (product: Product) => void;
  hasItem: (id: string) => boolean;
}

export const useWishlistStore = create<WishlistState>((set, get) => ({
  items: [],
  isOpen: false,
  toggleWishlist: () => set((state) => ({ isOpen: !state.isOpen })),
  toggleItem: (product) => {
    const exists = get().items.some((item) => item.id === product.id);
    if (exists) {
      set((state) => ({ items: state.items.filter((item) => item.id !== product.id) }));
    } else {
      set((state) => ({ items: [...state.items, product] }));
    }
  },
  hasItem: (id) => get().items.some((item) => item.id === id),
}));
