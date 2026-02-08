import type { TierLevel, UserRole, VerificationStatus, ListingStatus, RequestStatus } from "./enums";

export interface PropertyListing {
  id: string;
  landlordId: string;
  title: string;
  description: string;
  address: string;
  city: string;
  coordinates: { lat: number; lng: number };
  priceMonthly: number;
  currency: string;
  beds: number;
  baths: number;
  squareFeet: number;
  floor?: number;
  buildingType: string;
  amenities: string[];
  images: string[];
  furnished: boolean;
  petFriendly: boolean;
  minLeaseTerm: number;
  status: ListingStatus;
  verificationStatus: VerificationStatus;
  verifiedAt?: string;
  rejectionReason?: string;
  views: number;
  likes: number;
  favorites: number;
  matches: number;
  isTopListed: boolean;
  isBoosted: boolean;
  boostExpiresAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface VerificationRequest {
  id: string;
  entityType: "USER" | "LISTING";
  entityId: string;
  requestedBy: string;
  documents: string[];
  status: RequestStatus;
  submittedAt: string;
  processedAt?: string;
  processedBy?: string;
  rejectionReason?: string;
  notes?: string;
}

export interface UpgradeRequest {
  id: string;
  userId: string;
  userRole: UserRole;
  currentTier: TierLevel;
  requestedTier: TierLevel;
  paymentReference?: string;
  paymentAmount: number;
  status: RequestStatus;
  requestedAt: string;
  processedAt?: string;
  processedBy?: string;
  rejectionReason?: string;
}

export interface ReviewAction {
  id: string;
  entityType: "LANDLORD" | "LISTING" | "TENANT";
  entityId: string;
  decision: "APPROVED" | "REJECTED" | "PENDING" | "RETRACTED";
  reviewedAt: string;
  reviewedBy: string;
  notes?: string;
  reason?: string;
}

export interface OfficerStats {
  totalTenants: number;
  totalLandlords: number;
  activeListings: number;
  pendingVerifications: number;
  pendingListings: number;
  monthlyGrowth: {
    tenants: number;
    landlords: number;
    listings: number;
  };
}

export interface LandlordForReview {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar: string;
  businessName: string;
  businessReg: string;
  nin: string;
  verificationStatus: VerificationStatus;
  verificationSubmittedAt?: string;
  tier: string;
  listingsCount: number;
  activeListings: number;
  totalMatches: number;
  joinedAt: string;
  lastActive: string;
  status: "ACTIVE" | "PENDING" | "SUSPENDED";
  address?: string;
  city?: string;
  gender?: "MALE" | "FEMALE" | "OTHER";
  dateOfBirth?: string;
  bio?: string;
  rating?: number;
  responseRate?: number;
  responseTime?: string;
  totalViews?: number;
  reviewCount?: number;
  profileCompleteness?: number;
  restrictionStartDate?: string;
  restrictionEndDate?: string;
  verificationDocs?: {
    nin?: { number?: string; image?: string; verified?: boolean; verifiedAt?: string };
    bvn?: { number?: string; verified?: boolean; verifiedAt?: string };
    cac?: { number?: string; image?: string; verified?: boolean; verifiedAt?: string };
    addressProof?: { type?: string; image?: string; verified?: boolean; verifiedAt?: string };
    propertyOwnership?: { type?: string; image?: string; verified?: boolean; verifiedAt?: string };
  };
}

export interface ListingForReview {
  id: string;
  landlordId: string;
  landlordName: string;
  title: string;
  description: string;
  address: string;
  city: string;
  priceMonthly: number;
  beds: number;
  baths: number;
  images: string[];
  status: ListingStatus;
  createdAt: string;
  updatedAt: string;
  squareFeet?: number;
  floor?: number;
  buildingType?: string;
  amenities?: string[];
  furnished?: boolean;
  petFriendly?: boolean;
  minLeaseTerm?: number;
  coordinates?: { lat: number; lng: number };
  landlordAvatar?: string;
  landlordVerified?: boolean;
  views?: number;
  likes?: number;
  favorites?: number;
}

export interface TenantForReview {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar: string;
  verificationStatus: VerificationStatus;
  verificationSubmittedAt?: string;
  tier: string;
  status: "ACTIVE" | "PENDING" | "SUSPENDED";
  joinedAt: string;
  lastActive: string;
  occupation?: string;
  company?: string;
  age?: number;
  gender?: "MALE" | "FEMALE" | "OTHER";
  dateOfBirth?: string;
  budgetMin?: number;
  budgetMax?: number;
  income?: number;
  incomeVerified?: boolean;
  preferences?: string[];
  preferredLocations?: string[];
  preferredAmenities?: string[];
  preferredBedrooms?: number;
  moveInDate?: string;
  leaseDuration?: string;
  smokingStatus?: string;
  petStatus?: string;
  matchesCount?: number;
  bio?: string;
  rating?: number;
  responseRate?: number;
  verificationDocs?: {
    nin?: { number?: string; image?: string; verified?: boolean; verifiedAt?: string };
    bvn?: { number?: string; verified?: boolean; verifiedAt?: string };
    addressProof?: { type?: string; image?: string; verified?: boolean; verifiedAt?: string };
    employmentProof?: { type?: string; image?: string; verified?: boolean; verifiedAt?: string };
    bankStatement?: { image?: string; verified?: boolean; verifiedAt?: string };
  };
  boostEnabled?: boolean;
  profileCompleteness?: number;
}

export interface TenantTierLimits {
  dailySwipes: number;
  canViewLikes: boolean;
  canViewFavorites: boolean;
  canViewTopPicks: boolean;
  canBoost: boolean;
  canMessage: boolean;
  canSeeWhoLikedYou: boolean;
}

export interface LandlordTierLimits {
  dailySwipes: number;
  canViewFullProfiles: boolean;
  canViewDetailedLikes: boolean;
  canBoost: boolean;
  maxActiveListings: number;
  canUpdateListingUnlimited: boolean;
}

export type TierLimitsConfig = {
  TENANT: Record<TierLevel, TenantTierLimits>;
  LANDLORD: Record<TierLevel, LandlordTierLimits>;
};
