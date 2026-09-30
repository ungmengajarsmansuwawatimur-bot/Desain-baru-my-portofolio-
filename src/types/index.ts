export type LearningCategory =
  | 'Semua'
  | 'Customer Service'
  | 'Retail'
  | 'Display'
  | 'Planogram'
  | 'Stock'
  | 'Komunikasi';

export interface ExperienceItem {
  id: string;
  orderNumber: string;
  title: string;
  period: string;
  durationLabel: string;
  type: string;
  responsibilities: string[];
  learningBullets: string[];
  isLearningFocus?: boolean;
}

export interface ChatMessage {
  sender: 'client' | 'taufik';
  text: string;
  time: string;
}

export interface WorkflowEvidenceItem {
  id: string;
  sequence: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  placeholderLabel?: string;
  privacyNote: string;
  aspectRatio?: string;
  replacementGuide: string;
  screenshotUrl?: string;
  screenshots?: string[];
  chats?: ChatMessage[];
}

export interface SchoolFeature {
  name: string;
  description: string;
}

export interface SchoolScreenshot {
  id: string;
  title: string;
  caption: string;
  placeholderLabel: string;
  imageUrl?: string;
}

export interface LearningItem {
  id: string;
  code: string;
  categoryLabel: string;
  title: string;
  category: Exclude<LearningCategory, 'Semua'>;
  platform: string;
  formats: string[];
  image: string;
  sourceUrl: string | null;
  overview: string;
  whatILearnedBullets: string[];
  competencies?: string[];
  relevance?: string;
}

export interface SkillGroupData {
  category: string;
  description?: string;
  iconType: 'customer' | 'retail' | 'work' | 'digital';
  skills: {
    name: string;
    levelDescription?: string;
  }[];
}

export interface ToolItem {
  name: string;
  role: string;
  category: string;
  iconName: string;
  percentage?: string;
}

export interface ContactChannel {
  platform: string;
  label: string;
  value: string;
  isAvailable: boolean;
  actionUrl: string | null;
  placeholderText: string;
  iconType: 'whatsapp' | 'email' | 'linkedin' | 'location';
}

export interface CvConfig {
  fileName: string | null;
  fileSize: string | null;
  lastUpdated: string | null;
  downloadUrl: string | null;
  isAvailable: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  category: string;
  quote: string;
  stars: number;
}
