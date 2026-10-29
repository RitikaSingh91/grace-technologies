import Container from '@/components/Container/Container';
import Section from '@/components/Section/Section';
import SectionHead from '@/components/SectionHead/SectionHead';
import ServiceCard from '@/components/ServiceCard/ServiceCard';
import { SERVICES, SLUGS } from '@/data/site';
import styles from './ServicesSection.module.css';

export default function ServicesSection() {
  return (
    <Section id="services" labelledBy="services-title">
      <Container>
        <SectionHead id="services-title" eyebrow="Our services" title="Four services, one accountable partner" text="Each service has its own page with the detail." />
        <div className={styles.grid}>
          {SLUGS.map((slug) => (
            <ServiceCard key={slug} slug={slug} service={SERVICES[slug]} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
