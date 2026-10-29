import CardGrid from '@/components/CardGrid/CardGrid';
import Container from '@/components/Container/Container';
import InfoCard from '@/components/InfoCard/InfoCard';
import Section from '@/components/Section/Section';
import SectionHead from '@/components/SectionHead/SectionHead';
import { SERVICES } from '@/data/site';

export default function RelatedServices({ slugs }: { slugs: string[] }) {
  return (
    <Section labelledBy="related-title">
      <Container>
        <SectionHead id="related-title" eyebrow="Related services" title="You may also need" />
        <CardGrid columns={3}>
          {slugs
            .filter((slug) => SERVICES[slug])
            .map((slug) => (
              <InfoCard key={slug} href={`/services/${slug}`} icon={SERVICES[slug].icon} title={SERVICES[slug].nav} text={SERVICES[slug].short} />
            ))}
        </CardGrid>
      </Container>
    </Section>
  );
}
