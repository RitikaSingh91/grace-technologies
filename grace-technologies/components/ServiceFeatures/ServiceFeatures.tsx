import CardGrid from '@/components/CardGrid/CardGrid';
import CheckList from '@/components/CheckList/CheckList';
import Container from '@/components/Container/Container';
import InfoCard from '@/components/InfoCard/InfoCard';
import Section from '@/components/Section/Section';
import SectionHead from '@/components/SectionHead/SectionHead';
import type { Service } from '@/lib/types';
import styles from './ServiceFeatures.module.css';

export default function ServiceFeatures({ service }: { service: Service }) {
  return (
    <Section tone="alt" labelledBy="features-title">
      <Container>
        <SectionHead id="features-title" eyebrow="Features and benefits" title="What you get" />
        <CardGrid columns={2}>
          <InfoCard title="Key features">
            <div className={styles.list}>
              <CheckList items={service.feat} />
            </div>
          </InfoCard>
          <InfoCard title="Business benefits">
            <div className={styles.list}>
              <CheckList items={service.ben} />
            </div>
          </InfoCard>
        </CardGrid>
      </Container>
    </Section>
  );
}
