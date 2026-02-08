export type VerificationStatusType = 'NOT_STARTED' | 'PENDING' | 'UNDER_REVIEW' | 'APPROVED' | 'REJECTED';
export type VerificationType = 'ID' | 'INCOME' | 'EMPLOYMENT' | 'ADDRESS';
export type DocumentType = 'NIN' | 'DRIVERS_LICENSE' | 'PASSPORT' | 'PAYSLIP' | 'BANK_STATEMENT' | 'EMPLOYMENT_LETTER' | 'TAX_RETURN' | 'UTILITY_BILL';

export interface VerificationDocument {
  id: string;
  type: DocumentType;
  fileName: string;
  fileUri: string;
  fileSize: number;
  uploadedAt: string;
  status: VerificationStatusType;
  rejectionReason?: string;
}

export interface IDVerification {
  type: 'ID';
  status: VerificationStatusType;
  nin?: string;
  fullName?: string;
  dateOfBirth?: string;
  address?: string;
  documents: VerificationDocument[];
  submittedAt?: string;
  reviewedAt?: string;
  approvedAt?: string;
}

export interface IncomeVerification {
  type: 'INCOME';
  status: VerificationStatusType;
  incomeRange?: string;
  employmentStatus?: 'EMPLOYED' | 'SELF_EMPLOYED' | 'UNEMPLOYED' | 'STUDENT';
  employer?: string;
  documents: VerificationDocument[];
  submittedAt?: string;
  reviewedAt?: string;
  approvedAt?: string;
}

export interface ProfileCompletion {
  overall: number;
  sections: {
    basicInfo: number;
    photo: number;
    preferences: number;
    idVerification: number;
    incomeVerification: number;
  };
}
