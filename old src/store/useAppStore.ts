import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { TierLevel, UserRole, VerificationStatus, MatchStatus, SwipeAction } from '@/types/enums';
import type { BaseUserProfile, TenantProfile, LandlordProfile } from '@/types/profiles';
import type { PropertyListing, VerificationRequest, UpgradeRequest } from '@/types/store';
import type { Property, SwipeRecord } from '@/types/property';

interface Match {
  id: string;
  tenantId: string;
  landlordId: string;
  propertyId: string;
  status: MatchStatus;
  matchedAt: string;
}

interface AppState {
  // Auth
  currentUser: BaseUserProfile | null;
  currentTenantProfile: TenantProfile | null;
  currentLandlordProfile: LandlordProfile | null;
  isAuthenticated: boolean;
  isOnboarded: boolean;
  isLoading: boolean;
  error: string | null;

  // Data
  tenants: TenantProfile[];
  landlords: LandlordProfile[];
  properties: Property[];
  listings: PropertyListing[];
  swipes: SwipeRecord[];
  matches: Match[];
  verificationRequests: VerificationRequest[];
  upgradeRequests: UpgradeRequest[];

  // Auth Actions
  setCurrentUser: (user: BaseUserProfile) => void;
  setTenantProfile: (profile: TenantProfile) => void;
  setLandlordProfile: (profile: LandlordProfile) => void;
  setAuthenticated: (val: boolean) => void;
  setOnboarded: (val: boolean) => void;
  logout: () => void;
  switchRole: (role: UserRole) => void;

  // Property actions
  addProperty: (property: Property) => void;
  addListing: (listing: PropertyListing) => void;
  updateListing: (id: string, updates: Partial<PropertyListing>) => void;
  removeListing: (id: string) => void;

  // Swipe actions
  recordSwipe: (swipe: SwipeRecord) => void;

  // Match actions
  addMatch: (match: Match) => void;
  updateMatchStatus: (matchId: string, status: MatchStatus) => void;

  // Officer actions
  approveVerification: (id: string, officerId: string) => void;
  rejectVerification: (id: string, officerId: string, reason: string) => void;
  approveUpgrade: (id: string, officerId: string) => void;
  rejectUpgrade: (id: string, officerId: string, reason: string) => void;

  // Initialize mock data
  initializeMockData: () => void;
}

// MOCK DATA
const MOCK_PROPERTIES: Property[] = [
  {
    id: 'p1',
    name: 'Luxury 3-Bed Apartment in Lekki',
    price: 3500000,
    currency: 'NGN',
    location: 'Lekki Phase 1, Lagos',
    coordinates: { lat: 6.4541, lng: 3.4742 },
    images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800', 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800'],
    description: 'Beautiful luxury apartment with modern finishes, 24/7 power supply, and amazing ocean views. Located in a serene estate in Lekki Phase 1.',
    bedrooms: 3,
    bathrooms: 3,
    squareFeet: 2200,
    floor: 4,
    buildingType: 'Apartment',
    amenities: ['WiFi', 'Gym', 'Pool', 'Security', 'Parking', 'Generator', 'AC'],
    landlord: { id: 'l1', name: 'Adebayo Properties', avatar: '', rating: 4.8, reviewCount: 42, responseTime: '< 1 hour', verified: true },
    createdAt: '2024-01-15',
    likedBy: 28,
  },
  {
    id: 'p2',
    name: 'Cozy 2-Bed Flat in Yaba',
    price: 1200000,
    currency: 'NGN',
    location: 'Yaba, Lagos',
    coordinates: { lat: 6.5095, lng: 3.3711 },
    images: ['https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800', 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800'],
    description: 'Affordable and well-maintained 2-bedroom flat in the heart of Yaba. Close to universities and tech hubs.',
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1100,
    floor: 2,
    buildingType: 'Flat',
    amenities: ['Security', 'Water Supply', 'Parking'],
    landlord: { id: 'l2', name: 'Lagos Homes Ltd', avatar: '', rating: 4.3, reviewCount: 18, responseTime: '2 hours', verified: true },
    createdAt: '2024-02-20',
    likedBy: 15,
  },
  {
    id: 'p3',
    name: 'Modern Studio in Victoria Island',
    price: 2000000,
    currency: 'NGN',
    location: 'Victoria Island, Lagos',
    coordinates: { lat: 6.4281, lng: 3.4219 },
    images: ['https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800', 'https://images.unsplash.com/photo-1585128903994-9788298932a4?w=800'],
    description: 'Sleek modern studio apartment in Victoria Island. Perfect for young professionals.',
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 600,
    floor: 8,
    buildingType: 'Studio',
    amenities: ['WiFi', 'Gym', 'AC', 'Elevator', 'CCTV', 'Generator'],
    landlord: { id: 'l3', name: 'Island Realty', avatar: '', rating: 4.6, reviewCount: 31, responseTime: '< 30 min', verified: true },
    createdAt: '2024-03-10',
    likedBy: 42,
  },
  {
    id: 'p4',
    name: 'Spacious 4-Bed Duplex in Ikoyi',
    price: 8000000,
    currency: 'NGN',
    location: 'Ikoyi, Lagos',
    coordinates: { lat: 6.4520, lng: 3.4350 },
    images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'],
    description: 'Premium 4-bedroom duplex in a gated estate in Ikoyi. Features a private garden, BQ, and 24/7 security.',
    bedrooms: 4,
    bathrooms: 5,
    squareFeet: 4500,
    floor: null,
    buildingType: 'Duplex',
    amenities: ['WiFi', 'Gym', 'Pool', 'Security', 'Parking', 'Generator', 'AC', 'Garden', 'CCTV', 'Laundry'],
    landlord: { id: 'l1', name: 'Adebayo Properties', avatar: '', rating: 4.8, reviewCount: 42, responseTime: '< 1 hour', verified: true },
    createdAt: '2024-01-20',
    likedBy: 56,
  },
  {
    id: 'p5',
    name: '2-Bed Apartment in Ajah',
    price: 800000,
    currency: 'NGN',
    location: 'Ajah, Lagos',
    coordinates: { lat: 6.4680, lng: 3.5870 },
    images: ['https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800'],
    description: 'Affordable 2-bedroom apartment in a developing area. Great for small families.',
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 950,
    floor: 1,
    buildingType: 'Apartment',
    amenities: ['Security', 'Water Supply', 'Parking'],
    landlord: { id: 'l4', name: 'Eko Properties', avatar: '', rating: 4.0, reviewCount: 8, responseTime: '1 day', verified: false },
    createdAt: '2024-04-05',
    likedBy: 9,
  },
  {
    id: 'p6',
    name: 'Penthouse in Banana Island',
    price: 15000000,
    currency: 'NGN',
    location: 'Banana Island, Lagos',
    coordinates: { lat: 6.4570, lng: 3.4280 },
    images: ['https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800', 'https://images.unsplash.com/photo-1600566753376-12c8ab7a9576?w=800'],
    description: 'Ultra-luxury penthouse on Banana Island with panoramic views of the Lagos lagoon.',
    bedrooms: 5,
    bathrooms: 6,
    squareFeet: 6000,
    floor: 12,
    buildingType: 'Penthouse',
    amenities: ['WiFi', 'Gym', 'Pool', 'Security', 'Parking', 'Generator', 'AC', 'Elevator', 'CCTV', 'Balcony', 'Laundry', 'Storage'],
    landlord: { id: 'l3', name: 'Island Realty', avatar: '', rating: 4.6, reviewCount: 31, responseTime: '< 30 min', verified: true },
    createdAt: '2024-02-01',
    likedBy: 71,
  },
];

const MOCK_TENANT: TenantProfile = {
  id: 't1',
  supabaseId: 'sub_t1',
  email: 'john@example.com',
  phone: '+234 800 123 4567',
  firstName: 'John',
  lastName: 'Adeyemi',
  avatar: '',
  gender: 'MALE',
  role: 'TENANT',
  roles: ['TENANT'],
  primaryRole: 'TENANT',
  profileStatus: 'VERIFIED',
  verificationStatus: 'VERIFIED',
  bio: 'Young professional looking for a comfortable apartment in Lagos.',
  preferredLocation: 'Lekki',
  tier: 'FREE',
  createdAt: '2024-01-01',
  age: 28,
  occupation: 'Software Engineer',
  company: 'TechCo Nigeria',
  income: 500000,
  incomeVerified: true,
  verified: true,
  budgetMin: 800000,
  budgetMax: 3000000,
  preferredLocations: ['Lekki', 'Victoria Island', 'Yaba'],
  preferredBedrooms: 2,
  preferredAmenities: ['WiFi', 'Security', 'AC'],
  swipesUsedToday: 3,
  totalLikes: 12,
  totalMatches: 4,
  rating: 4.5,
  responseRate: 90,
};

const MOCK_LANDLORD: LandlordProfile = {
  id: 'l1',
  supabaseId: 'sub_l1',
  email: 'adebayo@properties.com',
  phone: '+234 800 765 4321',
  firstName: 'Adebayo',
  lastName: 'Ogundimu',
  avatar: '',
  gender: 'MALE',
  role: 'LANDLORD',
  roles: ['LANDLORD'],
  primaryRole: 'LANDLORD',
  profileStatus: 'VERIFIED',
  verificationStatus: 'VERIFIED',
  bio: 'Premium property developer in Lagos with 10+ years of experience.',
  preferredLocation: 'Lekki',
  tier: 'PRO',
  createdAt: '2023-06-15',
  verified: true,
  profileData: { businessName: 'Adebayo Properties', businessReg: 'RC-1234567' },
  businessName: 'Adebayo Properties',
  businessReg: 'RC-1234567',
  hasCompletedOnboarding: true,
  city: 'Lagos',
  verificationDocs: { nin: { verified: true }, bvn: { verified: true } },
  profileCompleteness: 85,
  totalListings: 6,
  activeListings: 4,
  totalMatches: 18,
  totalLikes: 45,
  totalViews: 320,
  responseRate: 95,
  responseTime: '< 1 hour',
  rating: 4.8,
  reviewCount: 42,
  swipesUsedToday: 5,
};

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Initial state
      currentUser: null,
      currentTenantProfile: null,
      currentLandlordProfile: null,
      isAuthenticated: false,
      isOnboarded: false,
      isLoading: false,
      error: null,
      tenants: [],
      landlords: [],
      properties: [],
      listings: [],
      swipes: [],
      matches: [],
      verificationRequests: [],
      upgradeRequests: [],

      // Auth
      setCurrentUser: (user) => set({ currentUser: user, isAuthenticated: true }),
      setTenantProfile: (profile) => set({ currentTenantProfile: profile }),
      setLandlordProfile: (profile) => set({ currentLandlordProfile: profile }),
      setAuthenticated: (val) => set({ isAuthenticated: val }),
      setOnboarded: (val) => set({ isOnboarded: val }),
      logout: () => set({
        currentUser: null,
        currentTenantProfile: null,
        currentLandlordProfile: null,
        isAuthenticated: false,
        isOnboarded: false,
      }),
      switchRole: (role) => {
        const user = get().currentUser;
        if (user) set({ currentUser: { ...user, primaryRole: role } });
      },

      // Properties
      addProperty: (property) => set((s) => ({ properties: [...s.properties, property] })),
      addListing: (listing) => set((s) => ({ listings: [...s.listings, listing] })),
      updateListing: (id, updates) => set((s) => ({
        listings: s.listings.map((l) => l.id === id ? { ...l, ...updates } : l),
      })),
      removeListing: (id) => set((s) => ({ listings: s.listings.filter((l) => l.id !== id) })),

      // Swipes
      recordSwipe: (swipe) => set((s) => ({ swipes: [...s.swipes, swipe] })),

      // Matches
      addMatch: (match) => set((s) => ({ matches: [...s.matches, match] })),
      updateMatchStatus: (matchId, status) => set((s) => ({
        matches: s.matches.map((m) => m.id === matchId ? { ...m, status } : m),
      })),

      // Officer actions
      approveVerification: (id, officerId) => set((s) => ({
        verificationRequests: s.verificationRequests.map((r) =>
          r.id === id ? { ...r, status: 'APPROVED' as const, processedBy: officerId, processedAt: new Date().toISOString() } : r
        ),
      })),
      rejectVerification: (id, officerId, reason) => set((s) => ({
        verificationRequests: s.verificationRequests.map((r) =>
          r.id === id ? { ...r, status: 'REJECTED' as const, processedBy: officerId, processedAt: new Date().toISOString(), rejectionReason: reason } : r
        ),
      })),
      approveUpgrade: (id, officerId) => set((s) => ({
        upgradeRequests: s.upgradeRequests.map((r) =>
          r.id === id ? { ...r, status: 'APPROVED' as const, processedBy: officerId, processedAt: new Date().toISOString() } : r
        ),
      })),
      rejectUpgrade: (id, officerId, reason) => set((s) => ({
        upgradeRequests: s.upgradeRequests.map((r) =>
          r.id === id ? { ...r, status: 'REJECTED' as const, processedBy: officerId, processedAt: new Date().toISOString(), rejectionReason: reason } : r
        ),
      })),

      // Mock data init
      initializeMockData: () => {
        const state = get();
        if (state.properties.length > 0) return; // already initialized
        set({
          properties: MOCK_PROPERTIES,
          currentUser: MOCK_TENANT as BaseUserProfile,
          currentTenantProfile: MOCK_TENANT,
          currentLandlordProfile: MOCK_LANDLORD,
          isAuthenticated: true,
          isOnboarded: true,
          tenants: [MOCK_TENANT],
          landlords: [MOCK_LANDLORD],
        });
      },
    }),
    {
      name: 'ug-app-store',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        currentUser: state.currentUser,
        currentTenantProfile: state.currentTenantProfile,
        currentLandlordProfile: state.currentLandlordProfile,
        isAuthenticated: state.isAuthenticated,
        isOnboarded: state.isOnboarded,
        properties: state.properties,
        listings: state.listings,
        swipes: state.swipes,
        matches: state.matches,
        tenants: state.tenants,
        landlords: state.landlords,
      }),
    }
  )
);
