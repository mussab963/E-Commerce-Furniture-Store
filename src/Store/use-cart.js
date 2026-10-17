import { create } from "zustand";

const useCart = create((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => ({
      cart: [...state.cart, product],
    })),
}));


export default useCart;