import { CONTACT_EMAIL, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/data/site';
import { SOCIALS } from '@/data/socials';
import type { Service } from '@/lib/types';

export const absoluteUrl = (path = '/'): string => new URL(path, SITE_URL).toString();

export const organizationJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: absoluteUrl('/assets/images/logo-512.png'),
  description: SITE_DESCRIPTION,
  email: CONTACT_EMAIL,
  areaServed: ['United Kingdom', 'United States'],
  sameAs: SOCIALS.map((s) => s.url),
});

export const websiteJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
});

export const serviceJsonLd = (slug: string, v: Service) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: v.title,
  description: v.lead,
  url: absoluteUrl(`/services/${slug}`),
  areaServed: ['United Kingdom', 'United States'],
  provider: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
});

export const faqJsonLd = (faq: ReadonlyArray<readonly [string, string]>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
});

export const breadcrumbJsonLd = (items: Array<{ name: string; path: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: absoluteUrl(it.path),
  })),
});
