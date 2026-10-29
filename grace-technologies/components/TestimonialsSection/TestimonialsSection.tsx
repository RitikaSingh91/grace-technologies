import CardGrid from '@/components/CardGrid/CardGrid';
import Container from '@/components/Container/Container';
import EnquireButton from '@/components/EnquireButton/EnquireButton';
import Icon from '@/components/Icon/Icon';
import Reveal from '@/components/Reveal/Reveal';
import Section from '@/components/Section/Section';
import SectionHead from '@/components/SectionHead/SectionHead';
import styles from './TestimonialsSection.module.css';

export default function TestimonialsSection() {
  return (
    <Section id="testimonials" tone="alt" labelledBy="testimonials-title">
      <Container>
        <SectionHead
          id="testimonials-title"
          eyebrow="Testimonials"
          title="Client feedback"
          text="We publish testimonials only with the client’s permission, and we never invent them."
        />
        <CardGrid columns={3}>
          {[0, 1, 2].map((n) => (
            <Reveal key={n} className={styles.placeholder}>
              <Icon name="FormatQuote" />
              <strong>Client feedback will appear here</strong>
              <span className={`${styles.bar} ${styles.long}`} />
              <span className={`${styles.bar} ${styles.medium}`} />
              <span className={`${styles.bar} ${styles.short}`} />
            </Reveal>
          ))}
        </CardGrid>
        <div className={styles.action}>
          <EnquireButton>Enquire Now</EnquireButton>
        </div>
      </Container>
    </Section>
  );
}
