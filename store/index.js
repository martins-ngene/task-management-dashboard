import { create } from "zustand";

// State Management Store
const useStore = create(set => ({
  userEmail: "",
  saveUserEmail: email => set({ userEmail: email }),
}));

export default useStore;
