import { create } from 'zustand';
import type { BargainOffer, BargainStatus } from '@/types/bargain';

interface BargainState {
  offers: BargainOffer[];
  addOffer: (offer: BargainOffer) => void;
  updateOfferStatus: (id: string, status: BargainStatus) => void;
  getOffersForProperty: (propertyId: string) => BargainOffer[];
}

export const useBargainStore = create<BargainState>()((set, get) => ({
  offers: [],
  addOffer: (offer) => set((s) => ({ offers: [...s.offers, offer] })),
  updateOfferStatus: (id, status) => set((s) => ({
    offers: s.offers.map((o) => o.id === id ? { ...o, status, updatedAt: new Date().toISOString() } : o),
  })),
  getOffersForProperty: (propertyId) => get().offers.filter((o) => o.propertyId === propertyId),
}));
