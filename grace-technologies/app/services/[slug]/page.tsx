import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CardSection from '@/components/CardSection/CardSection';
import CtaBanner from '@/components/CtaBanner/CtaBanner';
import JsonLd from '@/components/JsonLd/JsonLd';
import RelatedServices from '@/components/RelatedServices/RelatedServices';
import ServiceCaseStudy from '@/components/ServiceCaseStudy/ServiceCaseStudy';
import ServiceFaq from '@/components/ServiceFaq/ServiceFaq';
import ServiceFeatures from '@/components/ServiceFeatures/ServiceFeatures';
import ServiceHero from '@/components/ServiceHero/ServiceHero';
import ServiceOverview from '@/components/ServiceOverview/ServiceOverview';
import ServiceSolutions from '@/components/ServiceSolutions/ServiceSolutions';
import ServiceTech from '@/components/ServiceTech/ServiceTech';
import { SERVICES, SLUGS } from '@/data/site';
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from '@/lib/seo';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES[slug];
  if (!service) return {};
  const path = `/services/${slug}`;
  return {
    title: service.title,
    description: service.lead,
    alternates: { canonical: path },
    openGraph: { type: 'website', title: service.title, description: service.lead, url: path },
    twitter: { card: 'summary_large_image', title: service.title, description: service.lead },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES[slug];
  if (!service) notFound();

  return (
    <>
      <JsonLd data={serviceJsonLd(slug, service)} />
      <JsonLd data={faqJsonLd(service.faq)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/#services' },
          { name: service.nav, path: `/services/${slug}` },
        ])}
      />
      <ServiceHero service={service} />
      <ServiceOverview service={service} />
      <CardSection eyebrow="Challenges" title="Problems this service addresses" items={service.ch} columns={4} />
      <CardSection eyebrow="Our approach" title="How we deliver it" items={service.ap} columns={3} tone="alt" numbered />
      <ServiceSolutions items={service.sol} />
      <ServiceFeatures service={service} />
      <ServiceTech tech={service.tech} />
      <CardSection
        eyebrow="Example use cases"
        title="How UK and US businesses might use it"
        text="These examples are illustrative."
        items={service.uc}
        columns={3}
        tone="alt"
      />
      <ServiceCaseStudy service={service} />
      <ServiceFaq items={service.faq} />
      <CtaBanner />
      <RelatedServices slugs={service.rel} />
    </>
  );
}
