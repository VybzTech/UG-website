import type { Gender, TierLevel, UserRole } from "./enums";

export interface Landlord {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  reviewCount: number;
  responseTime: string;
  verified: boolean;
  responseRate?: number;
  totalReviews?: number;
  yearsActive?: number;
  bio?: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Property {
  id: string;
  name: string;
  price: number;
  currency: string;
  location: string;
  coordinates: Coordinates;
  images: string[];
  description: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  floor: number | null;
  buildingType: string;
  amenities: string[];
  landlord: Landlord;
  createdAt: string;
  likedBy: number;
}

export type SwipeAction = "LIKE" | "DISLIKE" | "FAVORITE";

export interface UserPreferences {
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  locations?: string[];
  amenities?: string[];
}

export interface CurrentUser {
  id: string;
  supabaseId: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  avatar: string;
  dateOfBirth: string;
  gender: Gender;
  roles: UserRole[];
  tier: TierLevel;
  createdAt: string;
  preferences: UserPreferences;
}

export interface PropertyFilters {
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  locations?: string[];
  amenities?: string[];
  propertyTypes?: string[];
}

export type PropertySortBy = "price" | "date" | "popularity" | "distance";
export type SortOrder = "asc" | "desc";

export interface PropertySort {
  sortBy: PropertySortBy;
  order: SortOrder;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  skip: number;
  limit: number;
  hasMore: boolean;
}

export interface PropertyReview {
  id: string;
  propertyId: string;
  userId: string;
  rating: number;
  comment: string;
  createdAt: string;
  userName: string;
  userAvatar: string;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  tier: TierLevel;
  price: number;
  currency: string;
  billingCycle: "WEEKLY" | "MONTHLY" | "SEMI_ANNUAL" | "ANNUAL";
  features: string[];
  popular?: boolean;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}

export interface SwipeRecord {
  id: string;
  swiperId: string;
  swiperRole: UserRole;
  targetId: string;
  targetType: "PROPERTY" | "TENANT";
  action: SwipeAction;
  timestamp: string;
  canUndo: boolean;
  undoneAt?: string;
}
