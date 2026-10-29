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
  {
    id: 'sample-ai',
    name: 'Sophie Williams (Sample)',
    role: 'Business Analyst · Placeholder Company',
    initials: 'SW',
    service: 'AI-powered solutions',
    quote: 'This sample shows how thoughtful AI automation can reduce repetitive work while keeping people in control of important decisions and customer communication.',
  },
  {
    id: 'sample-ecommerce',
    name: 'James Cooper (Sample)',
    role: 'E-commerce Manager · Placeholder Company',
    initials: 'JC',
    service: 'E-commerce development',
    quote: 'A strong commerce platform should feel effortless. This placeholder captures the focus on intuitive browsing, dependable checkout, and maintainable store operations.',
  },
  {
    id: 'sample-transformation',
    name: 'Meera Patel (Sample)',
    role: 'Transformation Lead · Placeholder Company',
    initials: 'MP',
    service: 'Business automation',
    quote: 'The sample illustrates how connected systems and practical automation can improve visibility across teams and create a more consistent customer experience.',
  },
];
