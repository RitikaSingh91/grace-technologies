import raw from './site.json';
import type { Industry, NavItem, Project, Service } from '@/lib/types';
import type { IconName } from '@/lib/icons';

const site = raw as unknown as {
  SVC: Record<string, Service>;
  PR: Project[];
  IND: Array<[IconName, string]>;
};

export const SERVICES: Record<string, Service> = site.SVC;
export const SLUGS: string[] = Object.keys(site.SVC);
export const SERVICE_OPTIONS: string[] = SLUGS.map((s) => site.SVC[s].nav);
export const PROJECTS: Project[] = site.PR;
export const INDUSTRIES: Industry[] = site.IND.map(([icon, label]) => ({ icon, label }));

export const SITE_NAME = 'Grace Technologies';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
export const SITE_TITLE = 'Grace Technologies | Software, AI and Digital Growth for UK and US Businesses';
export const SITE_DESCRIPTION =
  'Software development, AI automation, merchant account management support and digital marketing for businesses in the UK and the USA.';
export const SITE_KEYWORDS = [
  'Grace Technologies',
  'web development',
  'mobile app development',
  'AI workflow automation',
  'merchant account management',
  'digital marketing',
  'UK',
  'USA',
];
export const CONTACT_EMAIL = 'gracetechnologyofficial@gmail.com';
export const TWITTER_HANDLE = '@grace_Official4';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'clients', label: 'Clients' },
  { id: 'testimonials', label: 'Testimonials' },
];

export const navHref = (id: string): string => (id === 'home' ? '/' : `/#${id}`);
