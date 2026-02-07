import type { TransactionStatus, TransactionType } from "./enums";

export interface Payment {
  id: string;
  userId: string;
  amount: number;
  currency: string;
  type: TransactionType;
  status: TransactionStatus;
  reference: string;
  description?: string;
  createdAt: string;
  processedAt?: string;
}
