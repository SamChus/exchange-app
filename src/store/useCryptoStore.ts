import { create } from "zustand";

interface CryptoState {
  selectedCoin: string;
  setSelectedCoin: (coin: string) => void;
}

export const useCryptoStore = create<CryptoState>((set) => ({
  selectedCoin: "bitcoin",
  setSelectedCoin: (coin) => set({ selectedCoin: coin }),
}));
