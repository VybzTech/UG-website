import { create } from 'zustand';
import type { OfficerStats, LandlordForReview, TenantForReview, ListingForReview } from '@/types/store';

interface OfficerState {
  stats: OfficerStats;
  landlords: LandlordForReview[];
  tenants: TenantForReview[];
  listings: ListingForReview[];
  activityLog: { id: string; type: string; user: string; action: string; timestamp: string }[];
  initializeMockData: () => void;
}

export const useOfficerStore = create<OfficerState>()((set, get) => ({
  stats: { totalTenants: 0, totalLandlords: 0, activeListings: 0, pendingVerifications: 0, pendingListings: 0, monthlyGrowth: { tenants: 0, landlords: 0, listings: 0 } },
  landlords: [],
  tenants: [],
  listings: [],
  activityLog: [],

  initializeMockData: () => {
    if (get().landlords.length > 0) return;
    set({
      stats: {
        totalTenants: 1247,
        totalLandlords: 389,
        activeListings: 856,
        pendingVerifications: 23,
        pendingListings: 15,
        monthlyGrowth: { tenants: 12.5, landlords: 8.3, listings: 15.2 },
      },
      landlords: [
        { id: 'l1', firstName: 'Adebayo', lastName: 'Ogundimu', email: 'adebayo@props.com', phone: '+234800123', avatar: '', businessName: 'Adebayo Properties', businessReg: 'RC-123', nin: '12345678901', verificationStatus: 'VERIFIED', tier: 'PRO', listingsCount: 6, activeListings: 4, totalMatches: 18, joinedAt: '2023-06-15', lastActive: '2024-03-01', status: 'ACTIVE' },
        { id: 'l2', firstName: 'Fatima', lastName: 'Ibrahim', email: 'fatima@homes.com', phone: '+234800456', avatar: '', businessName: 'Lagos Homes', businessReg: 'RC-456', nin: '98765432101', verificationStatus: 'PENDING', tier: 'FREE', listingsCount: 2, activeListings: 1, totalMatches: 3, joinedAt: '2024-01-10', lastActive: '2024-02-28', status: 'PENDING' },
        { id: 'l3', firstName: 'Chisom', lastName: 'Nwosu', email: 'chisom@realty.com', phone: '+234800789', avatar: '', businessName: 'Island Realty', businessReg: 'RC-789', nin: '45678901234', verificationStatus: 'VERIFIED', tier: 'PREMIUM', listingsCount: 12, activeListings: 10, totalMatches: 45, joinedAt: '2023-03-20', lastActive: '2024-03-02', status: 'ACTIVE' },
      ],
      tenants: [
        { id: 't1', firstName: 'John', lastName: 'Adeyemi', email: 'john@example.com', phone: '+234800111', avatar: '', verificationStatus: 'VERIFIED', tier: 'FREE', status: 'ACTIVE', joinedAt: '2024-01-01', lastActive: '2024-03-01', occupation: 'Software Engineer', budgetMin: 800000, budgetMax: 3000000 },
        { id: 't2', firstName: 'Amaka', lastName: 'Obi', email: 'amaka@example.com', phone: '+234800222', avatar: '', verificationStatus: 'PENDING', tier: 'PRO', status: 'ACTIVE', joinedAt: '2024-02-15', lastActive: '2024-03-02', occupation: 'Marketing Manager', budgetMin: 1500000, budgetMax: 5000000 },
        { id: 't3', firstName: 'Emmanuel', lastName: 'Okoro', email: 'emmanuel@example.com', phone: '+234800333', avatar: '', verificationStatus: 'UNVERIFIED', tier: 'FREE', status: 'PENDING', joinedAt: '2024-03-01', lastActive: '2024-03-02', occupation: 'Student', budgetMin: 300000, budgetMax: 800000 },
      ],
      listings: [
        { id: 'p1', landlordId: 'l1', landlordName: 'Adebayo Ogundimu', title: 'Luxury 3-Bed Apartment', description: 'Beautiful apartment in Lekki', address: 'Lekki Phase 1', city: 'Lagos', priceMonthly: 3500000, beds: 3, baths: 3, images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400'], status: 'ACTIVE', createdAt: '2024-01-15', updatedAt: '2024-01-15' },
        { id: 'p_pending1', landlordId: 'l2', landlordName: 'Fatima Ibrahim', title: '2-Bed Flat for Rent', description: 'New flat in Surulere', address: 'Surulere', city: 'Lagos', priceMonthly: 900000, beds: 2, baths: 1, images: ['https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400'], status: 'PENDING_REVIEW', createdAt: '2024-02-28', updatedAt: '2024-02-28' },
      ],
      activityLog: [
        { id: 'a1', type: 'VERIFICATION', user: 'Adebayo Ogundimu', action: 'Landlord verification approved', timestamp: '2024-03-01T10:30:00Z' },
        { id: 'a2', type: 'LISTING', user: 'Fatima Ibrahim', action: 'New listing submitted for review', timestamp: '2024-02-28T14:15:00Z' },
        { id: 'a3', type: 'UPGRADE', user: 'John Adeyemi', action: 'Requested upgrade to PRO tier', timestamp: '2024-02-27T09:00:00Z' },
      ],
    });
  },
}));
