import { create } from 'zustand';

type SnackbarType = 'success' | 'error' | 'warning' | 'info';

interface UIState {
  // Snackbar
  snackbar: { visible: boolean; message: string; type: SnackbarType };
  showSnackbar: (message: string, type?: SnackbarType) => void;
  hideSnackbar: () => void;

  // Modals
  filterModalOpen: boolean;
  upgradeModalOpen: boolean;
  setFilterModalOpen: (open: boolean) => void;
  setUpgradeModalOpen: (open: boolean) => void;

  // Loading
  globalLoading: boolean;
  setGlobalLoading: (loading: boolean) => void;
}

export const useUIStore = create<UIState>()((set) => ({
  snackbar: { visible: false, message: '', type: 'info' as SnackbarType },
  showSnackbar: (message, type = 'info') => set({ snackbar: { visible: true, message, type } }),
  hideSnackbar: () => set((s) => ({ snackbar: { ...s.snackbar, visible: false } })),

  filterModalOpen: false,
  upgradeModalOpen: false,
  setFilterModalOpen: (open) => set({ filterModalOpen: open }),
  setUpgradeModalOpen: (open) => set({ upgradeModalOpen: open }),

  globalLoading: false,
  setGlobalLoading: (loading) => set({ globalLoading: loading }),
}));
