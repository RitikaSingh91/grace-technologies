export interface Testimonial {
  id: string;
  name: string;
  role: string;
  initials: string;
  quote: string;
  service: string;
}

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    id: 'sample-web-development',
    name: 'Alex Morgan (Sample)',
    role: 'Operations Director · Placeholder Company',
    initials: 'AM',
    service: 'Website development',
    quote: 'The placeholder project highlights how a clear, responsive website can turn complex services into an approachable customer journey for a growing international business.',
  },
  {
    id: 'sample-custom-software',
    name: 'Priya Shah (Sample)',
    role: 'Product Lead · Placeholder Company',
    initials: 'PS',
    service: 'Custom software development',
    quote: 'This sample reflects the value of purpose-built software: connected workflows, a focused interface, and tools shaped around the way a team actually works.',
  },
  {
    id: 'sample-mobile-app',
    name: 'Daniel Reed (Sample)',
    role: 'Managing Partner · Placeholder Company',
    initials: 'DR',
    service: 'Mobile application development',
    quote: 'The illustrative mobile experience demonstrates how reliable design, simple navigation, and secure features can make a service accessible wherever clients need it.',
  },
];
