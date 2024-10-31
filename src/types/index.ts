export interface Review {
  id: string;
  source: 'trustpilot' | 'yelp' | 'reddit' | 'google' | 'website';
  rating: number;
  text: string;
  sentiment: 'positive' | 'neutral' | 'negative';
  date: string;
  author: string;
  helpful?: number;
  verified?: boolean;
  sourceUrl?: string;
  location: string;
}

export interface Theme {
  theme: string;
  count: number;
  sentiment: 'positive' | 'neutral' | 'negative';
  details: string;
}

export type PlatformData = {
  [key: string]: number;
} & {
  website: number;
  trustpilot: number;
  yelp: number;
  reddit: number;
  google: number;
}

export interface TimelineData {
  month: string;
  score: number;
}

export interface AnalysisResult {
  trustScore: number;
  totalReviews: number;
  sentimentBreakdown: {
    positive: number;
    neutral: number;
    negative: number;
  };
  reviews: Review[];
  themes: Theme[];
  platformData: PlatformData;
  timelineData: TimelineData[];
}