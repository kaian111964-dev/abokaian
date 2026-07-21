export interface User {
  fullName: string;
  email: string;
  isLoggedIn: boolean;
  isGuest: boolean;
  avatar?: string;
}

export interface ServiceWork {
  id: string;
  title: string;
  description: string;
  image: string;
  client: string;
  stats?: string;
  date?: string;
}

export interface ServiceTestimonial {
  id: string;
  clientName: string;
  clientTitle: string;
  avatar?: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  bgGradient: string;
  accentColor: string;
  category: string;
  features: string[];
  priceRange: string;
  estimatedTime: string;
  rating: number;
  reviewsCount: number;
  userRating?: number;
  longDescription?: string;
  persuasivePoints?: {
    title: string;
    description: string;
    icon?: string;
  }[];
  works?: ServiceWork[];
  testimonials?: ServiceTestimonial[];
  guarantees?: string[];
}

export interface StoreAppComment {
  id: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  date: string;
}

export interface StoreApp {
  id: string;
  title: string;
  subtitle: string;
  category: 'apps' | 'games' | 'subscriptions' | 'services';
  subCategory?: string; // e.g. 'التطبيقات العامة', 'تطبيقات التواصل', 'تطبيقات الخدمات', etc.
  rating: number;
  reviewsCount?: number;
  downloads: string;
  image: string;
  screenshots?: string[];
  price: string;
  size?: string; // e.g. '45 ميجابايت'
  version?: string; // e.g. 'v2.4.1'
  description: string;
  whatsNew?: string;
  isAbuKianApp?: boolean; // Brand badge for Abu Kian Platform created apps
  isPopular?: boolean;
  isNew?: boolean;
  downloadUrl?: string;
  developerInfo?: {
    name: string;
    owner: string;
    email: string;
    website: string;
    supportPhone: string;
    permissions: string[];
  };
  comments?: StoreAppComment[];
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  link?: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  clientName: string;
  year: string;
  tags: string[];
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: 'info' | 'success' | 'alert' | 'promo';
}

export interface HeroSlide {
  id: string;
  title: string;
  description: string;
  bgGradient: string;
  icon: string;
  badge?: string;
  linkTab: string;
}

export interface AITool {
  id: string;
  title: string;
  description: string;
  icon: string;
  placeholder: string;
  category: string;
}

export interface WifiNetworkDevice {
  id: string;
  name: string;
  ip: string;
  mac: string;
  signal: 'excellent' | 'good' | 'fair';
  connectedAt: string;
  speed: string;
}

export interface ClientItem {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  image: string;
  heartMessage: string;
  partnershipYear: string;
  verified: boolean;
}

