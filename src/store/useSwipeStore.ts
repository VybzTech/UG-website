import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { SwipeAction } from '@/types/enums';

interface SwipeEntry {
  id: string;
  propertyId: string;
  action: SwipeAction;
  timestamp: string;
}

interface SwipeState {
  currentIndex: number;
  history: SwipeEntry[];
  likes: string[];
  dislikes: string[];
  favorites: string[];

  setCurrentIndex: (idx: number) => void;
  recordSwipe: (propertyId: string, action: SwipeAction) => void;
  undoLastSwipe: () => SwipeEntry | null;
  resetSwipes: () => void;
  isPropertySwiped: (propertyId: string) => boolean;
}

export const useSwipeStore = create<SwipeState>()(
  persist(
    (set, get) => ({
      currentIndex: 0,
      history: [],
      likes: [],
      dislikes: [],
      favorites: [],

      setCurrentIndex: (idx) => set({ currentIndex: idx }),

      recordSwipe: (propertyId, action) => {
        const entry: SwipeEntry = {
          id: `swipe_${Date.now()}`,
          propertyId,
          action,
          timestamp: new Date().toISOString(),
        };
        set((s) => ({
          history: [...s.history, entry],
          currentIndex: s.currentIndex + 1,
          likes: action === 'LIKE' ? [...s.likes, propertyId] : s.likes,
          dislikes: action === 'DISLIKE' ? [...s.dislikes, propertyId] : s.dislikes,
          favorites: action === 'FAVORITE' ? [...s.favorites, propertyId] : s.favorites,
        }));
      },

      undoLastSwipe: () => {
        const { history } = get();
        if (history.length === 0) return null;
        const last = history[history.length - 1];
        set((s) => ({
          history: s.history.slice(0, -1),
          currentIndex: Math.max(0, s.currentIndex - 1),
          likes: s.likes.filter((id) => id !== last.propertyId),
          dislikes: s.dislikes.filter((id) => id !== last.propertyId),
          favorites: s.favorites.filter((id) => id !== last.propertyId),
        }));
        return last;
      },

      resetSwipes: () => set({ currentIndex: 0, history: [], likes: [], dislikes: [], favorites: [] }),

      isPropertySwiped: (propertyId) => {
        const { likes, dislikes, favorites } = get();
        return likes.includes(propertyId) || dislikes.includes(propertyId) || favorites.includes(propertyId);
      },
    }),
    {
      name: 'ug-swipe-store',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
