export type LegalCategory = 
  | 'criminal'
  | 'civil'
  | 'contract'
  | 'post-conviction'
  | 'peer-mentorship'
  | 'other';

export type AssistanceType = 
  | 'preliminary_review'
  | 'document_prep'
  | 'peer_mentorship'
  | 'educational_resources'
  | 'post_conviction_research';

export type SubmissionStatus = 
  | 'new'
  | 'in_review'
  | 'contacted'
  | 'in_progress'
  | 'completed'
  | 'archived';

export interface MandatoryAcknowledgments {
  noLicensedRepresentation: boolean;
  noAttorneyClientPrivilege: boolean;
  fullProSeResponsibility: boolean;
  peerSupportCredentials: boolean;
  noGuarantees: boolean;
}

export interface IntakeSubmission {
  id: string;
  createdAt: string;
  fullName: string;
  preferredName?: string;
  email: string;
  phone: string;
  jurisdiction: string;
  legalCategory: LegalCategory;
  assistanceTypes: AssistanceType[];
  caseSummary: string;
  upcomingDeadlines?: string;
  acknowledgments: MandatoryAcknowledgments;
  signatureName: string;
  signatureDate: string;
  status: SubmissionStatus;
  adminNotes?: string;
  assignedSpecialist?: string;
}

export interface SubstackPost {
  id: string;
  title: string;
  subtitle: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  url: string;
  slug: string;
  tags: string[];
  author: string;
  pinned?: boolean;
}

export interface ServiceDetail {
  id: string;
  title: string;
  badge: string;
  shortDesc: string;
  fullDesc: string;
  scope: string[];
  limitations: string[];
  idealFor: string[];
  icon: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Services' | 'Responsibility & Privilege' | 'Credentials & Ethics' | 'Form & Deadlines';
}

export interface MissionPillar {
  number: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  icon: string;
}

export interface FounderBio {
  name: string;
  titles: string[];
  veteranStatus: string;
  bookTitle: string;
  bookDescription: string;
  missionStatement: string;
  fullNarrative: string[];
  preventionFramework: {
    title: string;
    tagline: string;
    description: string;
    keyPoints: string[];
    icon: string;
  }[];
  institutionalExperience: {
    level: string;
    summary: string;
    badge: string;
  }[];
  speakingOfferings: {
    title: string;
    audience: string;
    description: string;
    icon: string;
  }[];
  bookLinks: {
    bookUrl: string;
    spotifyUrl: string;
  };
  disclaimer: string;
}
