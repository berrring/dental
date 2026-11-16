export interface Treatment {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'preventive' | 'restorative' | 'cosmetic' | 'orthodontics' | 'implants';
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  galleryImages: string[];
  durationMinutes: number;
  durationLabel: string;
  indicativePriceDKK: number;
  priceLabel: string;
  danmarkRefundEligible: boolean;
  danmarkRefundEstimateDKK?: number;
  benefits: string[];
  procedureSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  suitability: string[];
  aftercareAdvice: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  comparisonData?: {
    optionA: {
      name: string;
      idealFor: string;
      duration: string;
      longevity: string;
      investment: string;
    };
    optionB: {
      name: string;
      idealFor: string;
      duration: string;
      longevity: string;
      investment: string;
    };
  };
}

export interface Specialist {
  id: string;
  name: string;
  title: string;
  danishTitle: string;
  specialty: string;
  education: string;
  experienceYears: number;
  image: string;
  bio: string;
  quote: string;
  languages: string[];
  availableDays: string[];
  treatmentsHandled: string[];
  memberships: string[];
}

export interface PriceItem {
  id: string;
  category: string;
  name: string;
  description: string;
  priceDKK: number;
  danmarkReimbursementDKK?: number;
  note?: string;
  popular?: boolean;
}

export interface BookingFormState {
  treatmentId: string;
  specialistId: string;
  date: string;
  timeSlot: string;
  fullName: string;
  email: string;
  phone: string;
  cprNumber: string; // Danish social number (formatted DDMMYY-XXXX demo)
  isNewPatient: boolean;
  hasDentalAnxiety: boolean;
  isDanmarkMember: boolean;
  notes: string;
}

export interface BookingConfirmation {
  referenceNumber: string;
  treatmentName: string;
  specialistName: string;
  date: string;
  timeSlot: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  estimatedPriceDKK: number;
}
