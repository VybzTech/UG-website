import type {
  ExtendedUserRole, Gender, PetStatus, SmokingStatus, TierLevel, UserRole, VerificationStatus,
} from "./enums";

export interface LandlordProfileData {
  businessName?: string;
  businessReg?: string;
  address?: string;
  city?: string;
}

export interface VerificationDocuments {
  nin?: { number?: string; image?: string; verified?: boolean; verifiedAt?: string };
  bvn?: { number?: string; verified?: boolean; verifiedAt?: string };
  cac?: { number?: string; image?: string; verified?: boolean; verifiedAt?: string };
  addressProof?: { type?: string; image?: string; verified?: boolean; verifiedAt?: string };
}

export interface BaseUserProfile {
  id: string;
  supabaseId?: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  avatar: string;
  dateOfBirth?: string;
  gender: Gender;
  role: UserRole;
  roles: ExtendedUserRole[];
  primaryRole: UserRole;
  profileStatus: VerificationStatus;
  verificationStatus: VerificationStatus;
  bio: string;
  preferredLocation: string;
  tier: TierLevel;
  createdAt: string;
  lastActive?: string;
  ninVerified?: boolean;
  bvnVerified?: boolean;
  addressVerified?: boolean;
  preferences?: {
    minPrice?: number;
    maxPrice?: number;
    bedrooms?: number;
    locations?: string[];
    amenities?: string[];
  };
  notificationsEnabled?: boolean;
  locationEnabled?: boolean;
}

export interface TenantProfile extends BaseUserProfile {
  role: "TENANT";
  primaryRole: "TENANT";
  age?: number;
  occupation?: string;
  company?: string;
  income?: number;
  incomeVerified: boolean;
  verified: boolean;
  budgetMin?: number;
  budgetMax?: number;
  preferredLocations?: string[];
  preferredBedrooms?: number;
  preferredAmenities?: string[];
  moveInDate?: string;
  leaseDuration?: string;
  smokingStatus?: SmokingStatus;
  petStatus?: PetStatus;
  swipesUsedToday?: number;
  lastSwipeReset?: string;
  totalLikes?: number;
  totalMatches?: number;
  rating?: number;
  responseRate?: number;
}

export interface LandlordProfile extends BaseUserProfile {
  role: "LANDLORD";
  primaryRole: "LANDLORD";
  verified: boolean;
  profileData: LandlordProfileData;
  businessName?: string;
  businessReg?: string;
  address?: string;
  hasCompletedOnboarding?: boolean;
  city?: string;
  verificationDocs: VerificationDocuments;
  profileCompleteness?: number;
  totalListings?: number;
  activeListings?: number;
  totalMatches?: number;
  totalLikes?: number;
  totalViews?: number;
  responseRate?: number;
  responseTime?: string;
  rating?: number;
  reviewCount?: number;
  swipesUsedToday?: number;
  lastSwipeReset?: string;
}

export interface OfficerProfile extends BaseUserProfile {
  role: "OFFICER";
  primaryRole: "OFFICER";
  canVerifyUsers?: boolean;
  canVerifyListings?: boolean;
  canApproveUpgrades?: boolean;
  canSuspendUsers?: boolean;
  verificationsProcessed?: number;
  lastActivityAt?: string;
}

export interface AgentProfile extends BaseUserProfile {
  role: "AGENT";
  primaryRole: "AGENT";
  agencyName?: string;
  licenseNumber?: string;
  licenseVerified?: boolean;
  totalListings?: number;
  totalMatches?: number;
  rating?: number;
  reviewCount?: number;
}

export interface ProfileSummary {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  tier: TierLevel;
  verified: boolean;
  role: UserRole;
}

export interface TenantSummary extends ProfileSummary {
  occupation?: string;
  age?: number;
  budgetMin: number;
  budgetMax: number;
  preferredLocations: string[];
  matchScore?: number;
}

export interface LandlordSummary extends ProfileSummary {
  businessName?: string;
  rating: number;
  responseRate: number;
  totalListings: number;
}
