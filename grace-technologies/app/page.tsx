import type { Metadata } from 'next';
import AboutSection from '@/components/AboutSection/AboutSection';
import ContactSection from '@/components/ContactSection/ContactSection';
import Hero from '@/components/Hero/Hero';
import PartnershipSection from '@/components/PartnershipSection/PartnershipSection';
import ProjectsSection from '@/components/ProjectsSection/ProjectsSection';
import ServicesSection from '@/components/ServicesSection/ServicesSection';
import { SITE_DESCRIPTION, SITE_TITLE } from '@/data/site';

export const metadata: Metadata = {
  title: { absolute: SITE_TITLE },
  description: SITE_DESCRIPTION,
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <PartnershipSection />
      <ContactSection />
    </>
  );
}
