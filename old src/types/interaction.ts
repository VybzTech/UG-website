import type { MatchStatus, SwipeAction, UserRole } from "./enums";

export interface Match {
  id: string;
  tenantId: string;
  landlordId: string;
  propertyId: string;
  status: MatchStatus;
  matchedAt: string;
  conversationId?: string;
  lastMessageAt?: string;
}

export interface Conversation {
  id: string;
  matchId: string;
  participants: string[];
  lastMessage?: string;
  lastMessageAt?: string;
  unreadCount: number;
  createdAt: string;
}
