import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { PropertyListing } from '@/types/store';

interface LandlordState {
  myListings: PropertyListing[];
  hasCompletedOnboarding: boolean;
  setHasCompletedOnboarding: (val: boolean) => void;
  addListing: (listing: PropertyListing) => void;
  updateListing: (id: string, updates: Partial<PropertyListing>) => void;
  removeListing: (id: string) => void;
}

export const useLandlordStore = create<LandlordState>()(
  persist(
    (set) => ({
      myListings: [],
      hasCompletedOnboarding: false,
      setHasCompletedOnboarding: (val) => set({ hasCompletedOnboarding: val }),
      addListing: (listing) => set((s) => ({ myListings: [...s.myListings, listing] })),
      updateListing: (id, updates) => set((s) => ({
        myListings: s.myListings.map((l) => l.id === id ? { ...l, ...updates } : l),
      })),
      removeListing: (id) => set((s) => ({ myListings: s.myListings.filter((l) => l.id !== id) })),
    }),
    { name: 'ug-landlord-store', storage: createJSONStorage(() => localStorage) }
  )
);
