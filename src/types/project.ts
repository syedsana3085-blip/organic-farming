export type SectionId =
  | 'home'
  | 'introduction'
  | 'benefits'
  | 'methods'
  | 'andhra-pradesh'
  | 'survey'
  | 'farming-guide'
  | 'future-scope'
  | 'my-activity'
  | 'conclusion'
  | 'quiz-faq';

export interface DashboardCardItem {
  id: SectionId;
  index: string;
  title: string;
  subtitle: string;
  category: 'Core Study' | 'Regional Focus' | 'Field Work' | 'Interactive Tool';
}

export interface OrganicFact {
  title: string;
  detail: string;
  source: string;
}

export interface ComparisonRow {
  aspect: string;
  organic: string;
  conventional: string;
}

export interface PrincipleItem {
  name: string;
  summary: string;
  practice: string;
}

export interface BenefitItem {
  id: string;
  index: string;
  title: string;
  summary: string;
  mechanism: string;
  impact: string;
}

export interface OrganicMethod {
  id: string;
  name: string;
  shortDesc: string;
  overview: string;
  materials: string[];
  steps: string[];
  soilAndCropEffect: string;
}

export interface CropGuideProfile {
  id: string;
  name: string;
  season: string;
  soilType: string;
  naturalInputs: string[];
  compostGuidance: string;
  soilImprovement: string;
}

export interface APCNFPillar {
  name: string;
  teluguMeaning: string;
  purpose: string;
  preparation: string;
}

export interface GovernmentScheme {
  name: string;
  agency: string;
  objective: string;
}

export interface RegionalExample {
  region: string;
  crops: string;
  approach: string;
  note: string;
}

export interface SurveyEntry {
  id: string;
  respondentLabel: string;
  villageOrMandal: string;
  primaryCrop: string;
  currentPractice: 'Conventional' | 'Mixed / Transitioning' | 'Organic / Natural';
  awareOfOrganic: 'Yes' | 'Partially' | 'No';
  mainChallenge: string;
  opinionOnOrganic: string;
  isSample: boolean;
  submittedAt: string;
}

export interface SurveyDraft {
  respondentLabel: string;
  villageOrMandal: string;
  primaryCrop: string;
  currentPractice: 'Conventional' | 'Mixed / Transitioning' | 'Organic / Natural';
  awareOfOrganic: 'Yes' | 'Partially' | 'No';
  mainChallenge: string;
  opinionOnOrganic: string;
}

export interface ActivityWeek {
  week: number;
  title: string;
  focus: string;
  description: string;
  hours: number;
  location: string;
  photoDataUrl?: string;
  photoCaption?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ProjectMetadata {
  projectTitle: string;
  tagline: string;
  collegeName: string;
  department: string;
  studentName: string;
  rollNumber: string;
  mentorName: string;
  academicYear: string;
  districtOrCity: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'agroguide';
  text: string;
  suggestedSection?: SectionId;
  suggestedLabel?: string;
}

export interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  sectionId: SectionId;
  sectionTitle: string;
}
