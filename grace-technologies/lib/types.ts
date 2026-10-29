import type { IconName } from '@/lib/icons';

export type IllustrationKey = 'web' | 'ai' | 'pay' | 'mkt' | 'team';

/** [title, description] pair used all over the service content. */
export type Pair = readonly [string, string];

export interface CaseStudy {
  t: string;
  p: string;
  s: string;
  o: string;
  f: string[];
}

export interface Service {
  k: IllustrationKey;
  icon: IconName;
  title: string;
  nav: string;
  short: string;
  lead: string;
  intro: string[];
  ch: Pair[];
  ap: Pair[];
  sol: Pair[];
  feat: string[];
  ben: string[];
  tech: string[];
  uc: Pair[];
  cs: CaseStudy;
  faq: Pair[];
  rel: string[];
  note: string;
}

export interface Project {
  k: IllustrationKey;
  t: string;
  p: string;
  s: string;
  f: string[];
  o: string;
  id?: string;
  service?: string;
  description?: string;
  websiteUrl?: string;
  imageSrc?: string;
  imageAlt?: string;
  relatedSlug?: string;
  caseStudySections?: Array<{ heading: string; description: string }>;
}

export interface Industry {
  icon: IconName;
  label: string;
}

export interface SocialLink {
  name: string;
  icon: IconName;
  url: string;
}

export interface NavItem {
  id: string;
  label: string;
}
