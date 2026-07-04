import { create } from 'zustand';

interface SearchState {
  isOpen: boolean;
  toggleSearch: () => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  isOpen: false,
  toggleSearch: () => set((state) => ({ isOpen: !state.isOpen })),
}));
