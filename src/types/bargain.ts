export type BargainStatus = 'PENDING' | 'ACCEPTED' | 'DECLINED' | 'COUNTERED' | 'EXPIRED';

export interface BargainOffer {
  id: string;
  propertyId: string;
  tenantId: string;
  landlordId: string;
  originalPrice: number;
  offeredPrice: number;
  counterPrice?: number;
  status: BargainStatus;
  message?: string;
  landlordMessage?: string;
  createdAt: string;
  updatedAt: string;
  expiresAt: string;
}
