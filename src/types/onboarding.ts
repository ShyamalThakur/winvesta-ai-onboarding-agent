export interface OnboardingState {
  sessionId: string;
  currentStep: OnboardingStep;
  entityType?: EntityType;
  businessType?: BusinessType;
  customerData: CustomerData;
  confidence: number;
  attemptCount: number;
  needsEscalation: boolean;
}

export enum OnboardingStep {
  GREETING = 'greeting',
  ENTITY_TYPE = 'entity_type',
  BUSINESS_TYPE = 'business_type',
  BUSINESS_IDENTIFIERS = 'business_identifiers',
  CURRENCY_SELECTION = 'currency_selection',
  DOCUMENT_GENERATION = 'document_generation'
}

// ... more types
