export enum Page {
  HOME = 'HOME',
  CATALOG = 'CATALOG',
  SERVICES = 'SERVICES',
  ABOUT = 'ABOUT',
  CONTACT = 'CONTACT',
  MAIL_ORDER = 'MAIL_ORDER',
  WHOLESALE = 'WHOLESALE',
  CONSULTATION = 'CONSULTATION',
  CHECKOUT = 'CHECKOUT',
  NEWSLETTER = 'NEWSLETTER',
  DROUGHT_RESISTANCE = 'DROUGHT_RESISTANCE',
  PLANTING_CALENDAR = 'PLANTING_CALENDAR',
  NATIVE_SPECIES_MAP = 'NATIVE_SPECIES_MAP',
  SUSTAINABILITY_POLICY = 'SUSTAINABILITY_POLICY',
  AVAILABILITY = 'AVAILABILITY',
  EVENTS = 'EVENTS',
}

export enum PlantCategory {
  NATIVES = 'Natives',
  TREES = 'Trees',
  SHRUBS = 'Shrubs',
  PERENNIALS = 'Perennials',
  EDIBLES = 'Edibles',
}

export interface Plant {
  id: string;
  name: string;
  botanicalName: string;
  category: PlantCategory;
  price: number;
  description: string;
  imageUrl: string;
  sunNeeds: 'Full Sun' | 'Part Shade' | 'Shade';
  waterNeeds: 'Low' | 'Moderate' | 'High';
}

export interface FloralArrangement {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  page: Page;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface NewsletterIssue {
  month: string;
  title: string;
  url: string;
}

export interface NewsletterArchive {
  year: number;
  issues: NewsletterIssue[];
}

export interface AvailabilityItem {
  name: string;
  price1g?: string;
  price2g?: string;
  price5g?: string;
  condition: string;
}