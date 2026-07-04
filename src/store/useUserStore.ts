import { create } from 'zustand';

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Order {
  id: string;
  date: string;
  time: string;
  total: number;
  items: OrderItem[];
  paymentMethod: {
    cardType: string;
    last4: string;
    expiry: string;
  };
}

interface UserState {
  user: { name: string; email: string } | null;
  orders: Order[];
  isOpen: boolean;
  selectedOrderForReceipt: Order | null;
  toggleAccount: () => void;
  login: (name: string, email: string) => void;
  logout: () => void;
  addOrder: (order: Order) => void;
  setSelectedOrderForReceipt: (order: Order | null) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: { name: 'Max Shredder', email: 'max@skatecrew.com' }, // Default mock user logged in
  orders: [
    { 
      id: '0120077398910288', 
      date: '2026-07-01', 
      time: '13:29',
      total: 240.00, 
      items: [
        {
          id: 'men-orig-1',
          name: 'YELLOW BOARD',
          price: 120,
          quantity: 2,
          image: '/images/products/product-2.png'
        }
      ],
      paymentMethod: {
        cardType: 'Mastercard',
        last4: '4567',
        expiry: '10/27'
      }
    },
  ],
  isOpen: false,
  selectedOrderForReceipt: null,
  toggleAccount: () => set((state) => ({ isOpen: !state.isOpen })),
  login: (name, email) => set({ user: { name, email } }),
  logout: () => set({ user: null }),
  addOrder: (order) => set((state) => ({ orders: [order, ...state.orders] })),
  setSelectedOrderForReceipt: (order) => set({ selectedOrderForReceipt: order }),
}));
