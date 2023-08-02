import { create } from "zustand";

export const useStore = create((set) => ({
  session: null,
  setSession: (session: Session) => set((state) => ({ session })),
}));
