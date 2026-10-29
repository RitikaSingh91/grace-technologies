import CardGrid from '@/components/CardGrid/CardGrid';
import Container from '@/components/Container/Container';
import IndustryTile from '@/components/IndustryTile/IndustryTile';
import Notice from '@/components/Notice/Notice';
import Section from '@/components/Section/Section';
import SectionHead from '@/components/SectionHead/SectionHead';
import { INDUSTRIES } from '@/data/site';

export default function ClientsSection() {
  return (
    <Section id="clients" labelledBy="clients-title">
      <Container>
        <SectionHead
          id="clients-title"
          eyebrow="Clients"
          title="Businesses we are built to serve"
          text="We work with growing businesses across a range of industries in the UK and the US."
        />
        <CardGrid columns={4}>
          {INDUSTRIES.map((industry) => (
            <IndustryTile key={industry.label} industry={industry} />
          ))}
        </CardGrid>
        <Notice>Client names and logos will be shown here only once clients have authorised it.</Notice>
      </Container>
    </Section>
  );
}
