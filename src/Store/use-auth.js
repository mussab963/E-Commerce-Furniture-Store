import { create } from "zustand";

// Initial State
export const useAuthStore = create((set) => ({
  token: null,
  user: null,
  isAuthenticated: false,

  //   After successful login, set the token and user data
  setAuth: (token, user) =>
    set({
      token,
      user,
      isAuthenticated: true,
    }),

  // return the user to null and token to null after logout
  logout: () =>
    set({
      token: null,
      user: null,
      isAuthenticated: false,
    }),
}));
